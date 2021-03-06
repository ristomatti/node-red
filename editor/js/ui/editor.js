/**
 * Copyright JS Foundation and other contributors, http://js.foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/
RED.editor = (function() {


    var editStack = [];
    var editing_node = null;
    var editing_config_node = null;
    var subflowEditor;

    var editTrayWidthCache = {};

    function getCredentialsURL(nodeType, nodeID) {
        var dashedType = nodeType.replace(/\s+/g, '-');
        return  'credentials/' + dashedType + "/" + nodeID;
    }

    /**
     * Validate a node
     * @param node - the node being validated
     * @returns {boolean} whether the node is valid. Sets node.dirty if needed
     */
    function validateNode(node) {
        var oldValue = node.valid;
        var oldChanged = node.changed;
        node.valid = true;
        var subflow;
        var isValid;
        var hasChanged;
        if (node.type.indexOf("subflow:")===0) {
            subflow = RED.nodes.subflow(node.type.substring(8));
            isValid = subflow.valid;
            hasChanged = subflow.changed;
            if (isValid === undefined) {
                isValid = validateNode(subflow);
                hasChanged = subflow.changed;
            }
            node.valid = isValid && validateNodeProperties(node, node._def.defaults, node);
            node.changed = node.changed || hasChanged;
        } else if (node._def) {
            node.valid = validateNodeProperties(node, node._def.defaults, node);
            if (node._def._creds) {
                node.valid = node.valid && validateNodeProperties(node, node._def.credentials, node._def._creds);
            }
        } else if (node.type == "subflow") {
            var subflowNodes = RED.nodes.filterNodes({z:node.id});
            for (var i=0;i<subflowNodes.length;i++) {
                isValid = subflowNodes[i].valid;
                hasChanged = subflowNodes[i].changed;
                if (isValid === undefined) {
                    isValid = validateNode(subflowNodes[i]);
                    hasChanged = subflowNodes[i].changed;
                }
                node.valid = node.valid && isValid;
                node.changed = node.changed || hasChanged;
            }
            var subflowInstances = RED.nodes.filterNodes({type:"subflow:"+node.id});
            var modifiedTabs = {};
            for (i=0;i<subflowInstances.length;i++) {
                subflowInstances[i].valid = node.valid;
                subflowInstances[i].changed = subflowInstances[i].changed || node.changed;
                subflowInstances[i].dirty = true;
                modifiedTabs[subflowInstances[i].z] = true;
            }
            Object.keys(modifiedTabs).forEach(function(id) {
                var subflow = RED.nodes.subflow(id);
                if (subflow) {
                    validateNode(subflow);
                }
            });
        }
        if (oldValue !== node.valid || oldChanged !== node.changed) {
            node.dirty = true;
            subflow = RED.nodes.subflow(node.z);
            if (subflow) {
                validateNode(subflow);
            }
        }
        return node.valid;
    }

    /**
     * Validate a node's properties for the given set of property definitions
     * @param node - the node being validated
     * @param definition - the node property definitions (either def.defaults or def.creds)
     * @param properties - the node property values to validate
     * @returns {boolean} whether the node's properties are valid
     */
    function validateNodeProperties(node, definition, properties) {
        var isValid = true;
        for (var prop in definition) {
            if (definition.hasOwnProperty(prop)) {
                if (!validateNodeProperty(node, definition, prop, properties[prop])) {
                    isValid = false;
                }
            }
        }
        return isValid;
    }

    /**
     * Validate a individual node property
     * @param node - the node being validated
     * @param definition - the node property definitions (either def.defaults or def.creds)
     * @param property - the property name being validated
     * @param value - the property value being validated
     * @returns {boolean} whether the node proprty is valid
     */
    function validateNodeProperty(node,definition,property,value) {
        var valid = true;
        if (/^\$\([a-zA-Z_][a-zA-Z0-9_]*\)$/.test(value)) {
            return true;
        }
        if ("required" in definition[property] && definition[property].required) {
            valid = value !== "";
        }
        if (valid && "validate" in definition[property]) {
            try {
                valid = definition[property].validate.call(node,value);
            } catch(err) {
                console.log("Validation error:",node.type,node.id,"property: "+property,"value:",value,err);
            }
        }
        if (valid && definition[property].type && RED.nodes.getType(definition[property].type) && !("validate" in definition[property])) {
            if (!value || value == "_ADD_") {
                valid = definition[property].hasOwnProperty("required") && !definition[property].required;
            } else {
                var configNode = RED.nodes.node(value);
                valid = (configNode !== null && (configNode.valid == null || configNode.valid));
            }
        }
        return valid;
    }


    function validateNodeEditor(node,prefix) {
        for (var prop in node._def.defaults) {
            if (node._def.defaults.hasOwnProperty(prop)) {
                validateNodeEditorProperty(node,node._def.defaults,prop,prefix);
            }
        }
        if (node._def.credentials) {
            for (prop in node._def.credentials) {
                if (node._def.credentials.hasOwnProperty(prop)) {
                    validateNodeEditorProperty(node,node._def.credentials,prop,prefix);
                }
            }
        }
    }

    function validateNodeEditorProperty(node,defaults,property,prefix) {
        var input = $("#"+prefix+"-"+property);
        if (input.length > 0) {
            var value = input.val();
            if (defaults[property].hasOwnProperty("format") && defaults[property].format !== "" && input[0].nodeName === "DIV") {
                value = input.text();
            }
            if (!validateNodeProperty(node, defaults, property,value)) {
                input.addClass("input-error");
            } else {
                input.removeClass("input-error");
            }
        }
    }

    /**
     * Called when the node's properties have changed.
     * Marks the node as dirty and needing a size check.
     * Removes any links to non-existant outputs.
     * @param node - the node that has been updated
     * @param outputMap - (optional) a map of old->new port numbers if wires should be moved
     * @returns {array} the links that were removed due to this update
     */
    function updateNodeProperties(node, outputMap) {
        node.resize = true;
        node.dirty = true;
        var removedLinks = [];
        if (node.ports) {
            if (outputMap) {
                RED.nodes.eachLink(function(l) {
                    if (l.source === node && outputMap.hasOwnProperty(l.sourcePort)) {
                        if (outputMap[l.sourcePort] === "-1") {
                            removedLinks.push(l);
                        } else {
                            l.sourcePort = outputMap[l.sourcePort];
                        }
                    }
                });
            }
            if (node.outputs < node.ports.length) {
                while (node.outputs < node.ports.length) {
                    node.ports.pop();
                }
                RED.nodes.eachLink(function(l) {
                    if (l.source === node && l.sourcePort >= node.outputs && removedLinks.indexOf(l) === -1) {
                        removedLinks.push(l);
                    }
                });
            } else if (node.outputs > node.ports.length) {
                while (node.outputs > node.ports.length) {
                    node.ports.push(node.ports.length);
                }
            }
        }
        if (node.inputs === 0) {
            removedLinks.concat(RED.nodes.filterLinks({target:node}));
        }
        for (var l=0;l<removedLinks.length;l++) {
            RED.nodes.removeLink(removedLinks[l]);
        }
        return removedLinks;
    }

    /**
     * Create a config-node select box for this property
     * @param node - the node being edited
     * @param property - the name of the field
     * @param type - the type of the config-node
     */
    function prepareConfigNodeSelect(node,property,type,prefix) {
        var input = $("#"+prefix+"-"+property);
        if (input.length === 0 ) {
            return;
        }
        var newWidth = input.width();
        var attrStyle = input.attr('style');
        var m;
        if ((m = /width\s*:\s*(\d+(%|[a-z]+))/i.exec(attrStyle)) !== null) {
            newWidth = m[1];
        } else {
            newWidth = "70%";
        }
        var outerWrap = $("<div></div>").css({display:'inline-block',position:'relative'});
        var selectWrap = $("<div></div>").css({position:'absolute',left:0,right:'40px'}).appendTo(outerWrap);
        var select = $('<select id="'+prefix+'-'+property+'"></select>').appendTo(selectWrap);

        outerWrap.width(newWidth).height(input.height());
        if (outerWrap.width() === 0) {
            outerWrap.width("70%");
        }
        input.replaceWith(outerWrap);
        // set the style attr directly - using width() on FF causes a value of 114%...
        select.attr('style',"width:100%");
        updateConfigNodeSelect(property,type,node[property],prefix);
        $('<a id="'+prefix+'-lookup-'+property+'" class="editor-button"><i class="fa fa-pencil"></i></a>')
            .css({position:'absolute',right:0,top:0})
            .appendTo(outerWrap);
        $('#'+prefix+'-lookup-'+property).click(function(e) {
            showEditConfigNodeDialog(property,type,select.find(":selected").val(),prefix);
            e.preventDefault();
        });
        var label = "";
        var configNode = RED.nodes.node(node[property]);
        var node_def = RED.nodes.getType(type);

        if (configNode) {
            label = RED.utils.getNodeLabel(configNode,configNode.id);
        }
        input.val(label);
    }

    /**
     * Create a config-node button for this property
     * @param node - the node being edited
     * @param property - the name of the field
     * @param type - the type of the config-node
     */
    function prepareConfigNodeButton(node,property,type,prefix) {
        var input = $("#"+prefix+"-"+property);
        input.val(node[property]);
        input.attr("type","hidden");

        var button = $("<a>",{id:prefix+"-edit-"+property, class:"editor-button"});
        input.after(button);

        if (node[property]) {
            button.text(RED._("editor.configEdit"));
        } else {
            button.text(RED._("editor.configAdd"));
        }

        button.click(function(e) {
            showEditConfigNodeDialog(property,type,input.val()||"_ADD_",prefix);
            e.preventDefault();
        });
    }

    /**
     * Populate the editor dialog input field for this property
     * @param node - the node being edited
     * @param property - the name of the field
     * @param prefix - the prefix to use in the input element ids (node-input|node-config-input)
     * @param definition - the definition of the field
     */
    function preparePropertyEditor(node,property,prefix,definition) {
        var input = $("#"+prefix+"-"+property);
        if (input.length === 0) {
            return;
        }
        if (input.attr('type') === "checkbox") {
            input.prop('checked',node[property]);
        }
        else {
            var val = node[property];
            if (val == null) {
                val = "";
            }
            if (definition !== undefined && definition[property].hasOwnProperty("format") && definition[property].format !== "" && input[0].nodeName === "DIV") {
                input.html(RED.text.format.getHtml(val, definition[property].format, {}, false, "en"));
                RED.text.format.attach(input[0], definition[property].format, {}, false, "en");
            } else {
                input.val(val);
                if (input[0].nodeName === 'INPUT' || input[0].nodeName === 'TEXTAREA') {
                    RED.text.bidi.prepareInput(input);
                }
            }
        }
    }

    /**
     * Add an on-change handler to revalidate a node field
     * @param node - the node being edited
     * @param definition - the definition of the node
     * @param property - the name of the field
     * @param prefix - the prefix to use in the input element ids (node-input|node-config-input)
     */
    function attachPropertyChangeHandler(node,definition,property,prefix) {
        var input = $("#"+prefix+"-"+property);
        if (definition !== undefined && "format" in definition[property] && definition[property].format !== "" && input[0].nodeName === "DIV") {
            $("#"+prefix+"-"+property).on('change keyup', function(event,skipValidation) {
                if (!skipValidation) {
                    validateNodeEditor(node,prefix);
                }
            });
        } else {
            $("#"+prefix+"-"+property).change(function(event,skipValidation) {
                if (!skipValidation) {
                    validateNodeEditor(node,prefix);
                }
            });
        }
    }

    /**
     * Assign the value to each credential field
     * @param node
     * @param credDef
     * @param credData
     * @param prefix
     */
    function populateCredentialsInputs(node, credDef, credData, prefix) {
        var cred;
        for (cred in credDef) {
            if (credDef.hasOwnProperty(cred)) {
                if (credDef[cred].type == 'password') {
                    if (credData[cred]) {
                        $('#' + prefix + '-' + cred).val(credData[cred]);
                    } else if (credData['has_' + cred]) {
                        $('#' + prefix + '-' + cred).val('__PWRD__');
                    }
                    else {
                        $('#' + prefix + '-' + cred).val('');
                    }
                } else {
                    preparePropertyEditor(credData, cred, prefix, credDef);
                }
                attachPropertyChangeHandler(node, credDef, cred, prefix);
            }
        }
    }

    /**
     * Update the node credentials from the edit form
     * @param node - the node containing the credentials
     * @param credDefinition - definition of the credentials
     * @param prefix - prefix of the input fields
     * @return {boolean} whether anything has changed
     */
    function updateNodeCredentials(node, credDefinition, prefix) {
        var changed = false;
        if(!node.credentials) {
            node.credentials = {_:{}};
        }

        for (var cred in credDefinition) {
            if (credDefinition.hasOwnProperty(cred)) {
                var input = $("#" + prefix + '-' + cred);
                var value = input.val();
                if (credDefinition[cred].type == 'password') {
                    node.credentials['has_' + cred] = (value !== "");
                    if (value == '__PWRD__') {
                        continue;
                    }
                    changed = true;

                }
                node.credentials[cred] = value;
                if (value != node.credentials._[cred]) {
                    changed = true;
                }
            }
        }
        return changed;
    }

    /**
     * Prepare all of the editor dialog fields
     * @param node - the node being edited
     * @param definition - the node definition
     * @param prefix - the prefix to use in the input element ids (node-input|node-config-input)
     */
    function prepareEditDialog(node,definition,prefix,done) {
        for (var d in definition.defaults) {
            if (definition.defaults.hasOwnProperty(d)) {
                if (definition.defaults[d].type) {
                    var configTypeDef = RED.nodes.getType(definition.defaults[d].type);
                    if (configTypeDef) {
                        if (configTypeDef.exclusive) {
                            prepareConfigNodeButton(node,d,definition.defaults[d].type,prefix);
                        } else {
                            prepareConfigNodeSelect(node,d,definition.defaults[d].type,prefix);
                        }
                    } else {
                        console.log("Unknown type:", definition.defaults[d].type);
                        preparePropertyEditor(node,d,prefix,definition.defaults);
                    }
                } else {
                    preparePropertyEditor(node,d,prefix,definition.defaults);
                }
                attachPropertyChangeHandler(node,definition.defaults,d,prefix);
            }
        }
        var completePrepare = function() {
            if (definition.oneditprepare) {
                try {
                    definition.oneditprepare.call(node);
                } catch(err) {
                    console.log("oneditprepare",node.id,node.type,err.toString());
                }
            }
            // Now invoke any change handlers added to the fields - passing true
            // to prevent full node validation from being triggered each time
            for (var d in definition.defaults) {
                if (definition.defaults.hasOwnProperty(d)) {
                    $("#"+prefix+"-"+d).trigger("change",[true]);
                }
            }
            if (definition.credentials) {
                for (d in definition.credentials) {
                    if (definition.credentials.hasOwnProperty(d)) {
                        $("#"+prefix+"-"+d).trigger("change",[true]);
                    }
                }
            }
            validateNodeEditor(node,prefix);
            if (done) {
                done();
            }
        }

        if (definition.credentials) {
            if (node.credentials) {
                populateCredentialsInputs(node, definition.credentials, node.credentials, prefix);
                completePrepare();
            } else {
                $.getJSON(getCredentialsURL(node.type, node.id), function (data) {
                    node.credentials = data;
                    node.credentials._ = $.extend(true,{},data);
                    populateCredentialsInputs(node, definition.credentials, node.credentials, prefix);
                    completePrepare();
                });
            }
        } else {
            completePrepare();
        }
    }

    function getEditStackTitle() {
        var title = '<ul class="editor-tray-breadcrumbs">';
        var label;
        for (var i=editStack.length-1;i<editStack.length;i++) {
            var node = editStack[i];
            label = node.type;
            if (node.type === '_expression') {
                label = RED._("expressionEditor.title");
            } else if (node.type === '_js') {
                label = RED._("jsEditor.title");
            } else if (node.type === '_json') {
                label = RED._("jsonEditor.title");
            } else if (node.type === '_markdown') {
                label = RED._("markdownEditor.title");
            } else if (node.type === '_buffer') {
                label = RED._("bufferEditor.title");
            } else if (node.type === 'subflow') {
                label = RED._("subflow.editSubflow",{name:node.name})
            } else if (node.type.indexOf("subflow:")===0) {
                var subflow = RED.nodes.subflow(node.type.substring(8));
                label = RED._("subflow.editSubflow",{name:subflow.name})
            } else {
                if (typeof node._def.paletteLabel !== "undefined") {
                    try {
                        label = (typeof node._def.paletteLabel === "function" ? node._def.paletteLabel.call(node._def) : node._def.paletteLabel)||"";
                    } catch(err) {
                        console.log("Definition error: "+node.type+".paletteLabel",err);
                    }
                }
                if (i === editStack.length-1) {
                    if (RED.nodes.node(node.id)) {
                        label = RED._("editor.editNode",{type:label});
                    } else {
                        label = RED._("editor.addNewConfig",{type:label});
                    }
                }
            }
            title += '<li>'+label+'</li>';
        }
        title += '</ul>';
        return label;
    }

    function buildEditForm(container,formId,type,ns) {
        var dialogForm = $('<form id="'+formId+'" class="form-horizontal" autocomplete="off"></form>').appendTo(container);
        dialogForm.html($("script[data-template-name='"+type+"']").html());
        ns = ns||"node-red";
        dialogForm.find('[data-i18n]').each(function() {
            var current = $(this).attr("data-i18n");
            var keys = current.split(";");
            for (var i=0;i<keys.length;i++) {
                var key = keys[i];
                if (key.indexOf(":") === -1) {
                    var prefix = "";
                    if (key.indexOf("[")===0) {
                        var parts = key.split("]");
                        prefix = parts[0]+"]";
                        key = parts[1];
                    }
                    keys[i] = prefix+ns+":"+key;
                }
            }
            $(this).attr("data-i18n",keys.join(";"));
        });
        // Add dummy fields to prevent 'Enter' submitting the form in some
        // cases, and also prevent browser auto-fill of password
        // Add in reverse order as they are prepended...
        $('<input type="password" style="display: none;" />').prependTo(dialogForm);
        $('<input type="text" style="display: none;" />').prependTo(dialogForm);
        dialogForm.submit(function(e) { e.preventDefault();});
        return dialogForm;
    }

    function refreshLabelForm(container,node) {

        var inputPlaceholder = node._def.inputLabels?RED._("editor.defaultLabel"):RED._("editor.noDefaultLabel");
        var outputPlaceholder = node._def.outputLabels?RED._("editor.defaultLabel"):RED._("editor.noDefaultLabel");

        var inputsDiv = $("#node-label-form-inputs");
        var outputsDiv = $("#node-label-form-outputs");

        var inputCount = node.inputs || node._def.inputs || 0;
        var children = inputsDiv.children();
        var childCount = children.length;
        if (childCount === 1 && $(children[0]).hasClass('node-label-form-none')) {
            childCount--;
        }

        if (childCount < inputCount) {
            if (childCount === 0) {
                // remove the 'none' placeholder
                $(children[0]).remove();
            }
            for (i = childCount;i<inputCount;i++) {
                buildLabelRow("input",i,"",inputPlaceholder).appendTo(inputsDiv);
            }
        } else if (childCount > inputCount) {
            for (i=inputCount;i<childCount;i++) {
                $(children[i]).remove();
            }
            if (outputCount === 0) {
                buildLabelRow().appendTo(inputsDiv);
            }
        }

        var outputCount;
        var i;
        var formOutputs = $("#node-input-outputs").val();

        if (formOutputs === undefined) {
            outputCount = node.outputs || node._def.outputs || 0;
        } else if (isNaN(formOutputs)) {
            var outputMap = JSON.parse(formOutputs);
            var keys = Object.keys(outputMap);
            children = outputsDiv.children();
            childCount = children.length;
            if (childCount === 1 && $(children[0]).hasClass('node-label-form-none')) {
                childCount--;
            }

            outputCount = 0;
            var rows = [];
            keys.forEach(function(p) {
                var row = $("#node-label-form-output-"+p).parent();
                if (row.length === 0 && outputMap[p] !== -1) {
                    if (childCount === 0) {
                        $(children[0]).remove();
                        childCount = -1;
                    }
                    row = buildLabelRow("output",p,"",outputPlaceholder);
                } else {
                    row.detach();
                }
                if (outputMap[p] !== -1) {
                    outputCount++;
                    rows.push({i:parseInt(outputMap[p]),r:row});
                }
            });
            rows.sort(function(A,B) {
                return A.i-B.i;
            })
            rows.forEach(function(r,i) {
                r.r.find("label").text((i+1)+".");
                r.r.appendTo(outputsDiv);
            })
            if (rows.length === 0) {
                buildLabelRow("output",i,"").appendTo(outputsDiv);
            } else {

            }
        } else {
            outputCount = Math.max(0,parseInt(formOutputs));
        }
        children = outputsDiv.children();
        childCount = children.length;
        if (childCount === 1 && $(children[0]).hasClass('node-label-form-none')) {
            childCount--;
        }
        if (childCount < outputCount) {
            if (childCount === 0) {
                // remove the 'none' placeholder
                $(children[0]).remove();
            }
            for (i = childCount;i<outputCount;i++) {
                buildLabelRow("output",i,"").appendTo(outputsDiv);
            }
        } else if (childCount > outputCount) {
            for (i=outputCount;i<childCount;i++) {
                $(children[i]).remove();
            }
            if (outputCount === 0) {
                buildLabelRow().appendTo(outputsDiv);
            }
        }
    }
    function buildLabelRow(type, index, value, placeHolder) {
        var result = $('<div>',{class:"node-label-form-row"});
        if (type === undefined) {
            $('<span>').text(RED._("editor.noDefaultLabel")).appendTo(result);
            result.addClass("node-label-form-none");
        } else {
            result.addClass("");
            var id = "node-label-form-"+type+"-"+index;
            $('<label>',{for:id}).text((index+1)+".").appendTo(result);
            var input = $('<input>',{type:"text",id:id, placeholder: placeHolder}).val(value).appendTo(result);
            var clear = $('<button class="editor-button editor-button-small"><i class="fa fa-times"></i></button>').appendTo(result);
            clear.click(function(evt) {
                evt.preventDefault();
                input.val("");
            })
        }
        return result;
    }
    function showIconPicker(container, node, iconPath, done) {
        var containerPos = container.offset();
        var pickerBackground = $('<div>').css({
            position: "absolute",top:0,bottom:0,left:0,right:0,zIndex:20
        }).appendTo("body");

        var top = containerPos.top - 30;

        if (top+280 > $( window ).height()) {
            top = $( window ).height() - 280;
        }
        var picker = $('<div class="red-ui-icon-picker">').css({
            top: top+"px",
            left: containerPos.left+"px",
        }).appendTo("body");

        var hide = function() {
            pickerBackground.remove();
            picker.remove();
            RED.keyboard.remove("escape");
        }
        RED.keyboard.add("*","escape",function(){hide()});
        pickerBackground.on("mousedown", hide);

        var searchDiv = $("<div>",{class:"red-ui-search-container"}).appendTo(picker);
        searchInput = $('<input type="text">').attr("placeholder",RED._("editor.searchIcons")).appendTo(searchDiv).searchBox({
            delay: 50,
            change: function() {
                var searchTerm = $(this).val().trim();
                if (searchTerm === "") {
                    iconList.find(".red-ui-icon-list-module").show();
                    iconList.find(".red-ui-icon-list-icon").show();
                } else {
                    iconList.find(".red-ui-icon-list-module").hide();
                    iconList.find(".red-ui-icon-list-icon").each(function(i,n) {
                        if ($(n).data('icon').indexOf(searchTerm) === -1) {
                            $(n).hide();
                        } else {
                            $(n).show();
                        }
                    });
                }
            }
        });

        var row = $('<div>').appendTo(picker);
        var iconList = $('<div class="red-ui-icon-list">').appendTo(picker);
        var metaRow = $('<div class="red-ui-icon-meta"></div>').appendTo(picker);
        var summary = $('<span>').appendTo(metaRow);
        var resetButton = $('<button class="editor-button editor-button-small">'+RED._("editor.useDefault")+'</button>').appendTo(metaRow).click(function(e) {
            e.preventDefault();
            hide();
            done(null);
        });
        var iconSets = RED.nodes.getIconSets();
        Object.keys(iconSets).forEach(function(moduleName) {
            var icons = iconSets[moduleName];
            if (icons.length > 0) {
                // selectIconModule.append($("<option></option>").val(moduleName).text(moduleName));
                var header = $('<div class="red-ui-icon-list-module"></div>').text(moduleName).appendTo(iconList);
                $('<i class="fa fa-cube"></i>').prependTo(header);
                icons.forEach(function(icon) {
                    var iconDiv = $('<div>',{class:"red-ui-icon-list-icon"}).appendTo(iconList);
                    var nodeDiv = $('<div>',{class:"red-ui-search-result-node"}).appendTo(iconDiv);
                    var colour = RED.utils.getNodeColor(node.type, node._def);
                    var icon_url = "icons/"+moduleName+"/"+icon;
                    iconDiv.data('icon',icon_url)
                    nodeDiv.css('backgroundColor',colour);
                    var iconContainer = $('<div/>',{class:"palette_icon_container"}).appendTo(nodeDiv);
                    $('<div/>',{class:"palette_icon",style:"background-image: url("+icon_url+")"}).appendTo(iconContainer);

                    if (iconPath.module === moduleName && iconPath.file === icon) {
                        iconDiv.addClass("selected");
                    }
                    iconDiv.on("mouseover", function() {
                        summary.text(icon);
                    })
                    iconDiv.on("mouseout", function() {
                        summary.html("&nbsp;");
                    })
                    iconDiv.click(function() {
                        hide();
                        done(moduleName+"/"+icon);
                    })
                })
            }
        });
        picker.slideDown(100);
        searchInput.focus();
    }

    function buildLabelForm(container,node) {
        var dialogForm = $('<form class="dialog-form form-horizontal" autocomplete="off"></form>').appendTo(container);

        var inputCount = node.inputs || node._def.inputs || 0;
        var outputCount = node.outputs || node._def.outputs || 0;
        if (node.type === 'subflow') {
            inputCount = node.in.length;
            outputCount = node.out.length;
        }

        var inputLabels = node.inputLabels || [];
        var outputLabels = node.outputLabels || [];

        var inputPlaceholder = node._def.inputLabels?RED._("editor.defaultLabel"):RED._("editor.noDefaultLabel");
        var outputPlaceholder = node._def.outputLabels?RED._("editor.defaultLabel"):RED._("editor.noDefaultLabel");

        var i,row;
        $('<div class="form-row"><span data-i18n="editor.labelInputs"></span><div id="node-label-form-inputs"></div></div>').appendTo(dialogForm);
        var inputsDiv = $("#node-label-form-inputs");
        if (inputCount > 0) {
            for (i=0;i<inputCount;i++) {
                buildLabelRow("input",i,inputLabels[i],inputPlaceholder).appendTo(inputsDiv);
            }
        } else {
            buildLabelRow().appendTo(inputsDiv);
        }
        $('<div class="form-row"><span data-i18n="editor.labelOutputs"></span><div id="node-label-form-outputs"></div></div>').appendTo(dialogForm);
        var outputsDiv = $("#node-label-form-outputs");
        if (outputCount > 0) {
            for (i=0;i<outputCount;i++) {
                buildLabelRow("output",i,outputLabels[i],outputPlaceholder).appendTo(outputsDiv);
            }
        } else {
            buildLabelRow().appendTo(outputsDiv);
        }

        if ((!node._def.defaults || !node._def.defaults.hasOwnProperty("icon"))) {
            $('<hr>').appendTo(dialogForm);
            var iconRow = $('<div class="form-row"></div>').appendTo(dialogForm);
            $('<label style="width: 50px" data-i18n="editor.settingIcon">').appendTo(iconRow);

            var iconButton = $('<button class="editor-button">').appendTo(iconRow);

            var nodeDiv = $('<div>',{class:"red-ui-search-result-node"}).appendTo(iconButton);
            var colour = RED.utils.getNodeColor(node.type, node._def);
            var icon_url = RED.utils.getNodeIcon(node._def,node);
            nodeDiv.css('backgroundColor',colour);
            var iconContainer = $('<div/>',{class:"palette_icon_container"}).appendTo(nodeDiv);
            var iconDiv = $('<div/>',{class:"palette_icon",style:"background-image: url("+icon_url+")"}).appendTo(iconContainer);

            iconButton.click(function(e) {
                e.preventDefault();
                var iconPath;
                var icon = $("#node-settings-icon").text()||"";
                if (icon) {
                    iconPath = RED.utils.separateIconPath(icon);
                } else {
                    iconPath = RED.utils.getDefaultNodeIcon(node._def, node);
                }
                showIconPicker(iconRow,node,iconPath,function(newIcon) {
                    $("#node-settings-icon").text(newIcon||"");
                    var icon_url = RED.utils.getNodeIcon(node._def,{type:node.type,icon:newIcon});
                    iconDiv.css("backgroundImage","url("+icon_url+")");
                });
            })
            $('<div class="uneditable-input" id="node-settings-icon">').text(node.icon).appendTo(iconRow);
        }
    }

    function updateLabels(editing_node, changes, outputMap) {
        var inputLabels = $("#node-label-form-inputs").children().find("input");
        var outputLabels = $("#node-label-form-outputs").children().find("input");

        var hasNonBlankLabel = false;
        var changed = false;
        var newValue = inputLabels.map(function() {
            var v = $(this).val();
            hasNonBlankLabel = hasNonBlankLabel || v!== "";
            return v;
        }).toArray().slice(0,editing_node.inputs);
        if ((editing_node.inputLabels === undefined && hasNonBlankLabel) ||
            (editing_node.inputLabels !== undefined && JSON.stringify(newValue) !== JSON.stringify(editing_node.inputLabels))) {
            changes.inputLabels = editing_node.inputLabels;
            editing_node.inputLabels = newValue;
            changed = true;
        }
        hasNonBlankLabel = false;
        newValue = new Array(editing_node.outputs);
        outputLabels.each(function() {
            var index = $(this).attr('id').substring(23); // node-label-form-output-<index>
            if (outputMap && outputMap.hasOwnProperty(index)) {
                index = parseInt(outputMap[index]);
                if (index === -1) {
                    return;
                }
            }
            var v = $(this).val();
            hasNonBlankLabel = hasNonBlankLabel || v!== "";
            newValue[index] = v;
        });

        if ((editing_node.outputLabels === undefined && hasNonBlankLabel) ||
            (editing_node.outputLabels !== undefined && JSON.stringify(newValue) !== JSON.stringify(editing_node.outputLabels))) {
            changes.outputLabels = editing_node.outputLabels;
            editing_node.outputLabels = newValue;
            changed = true;
        }
        return changed;
    }

    function showEditDialog(node) {
        var editing_node = node;
        var isDefaultIcon;
        var defaultIcon;
        editStack.push(node);
        RED.view.state(RED.state.EDITING);
        var type = node.type;
        if (node.type.substring(0,8) == "subflow:") {
            type = "subflow";
        }
        var trayOptions = {
            title: getEditStackTitle(),
            buttons: [
                {
                    id: "node-dialog-delete",
                    class: 'leftButton',
                    text: RED._("common.label.delete"),
                    click: function() {
                        var startDirty = RED.nodes.dirty();
                        var removedNodes = [];
                        var removedLinks = [];
                        var removedEntities = RED.nodes.remove(editing_node.id);
                        removedNodes.push(editing_node);
                        removedNodes = removedNodes.concat(removedEntities.nodes);
                        removedLinks = removedLinks.concat(removedEntities.links);

                        var historyEvent = {
                            t:'delete',
                            nodes:removedNodes,
                            links:removedLinks,
                            changes: {},
                            dirty: startDirty
                        }

                        RED.nodes.dirty(true);
                        RED.view.redraw(true);
                        RED.history.push(historyEvent);
                        RED.tray.close();
                    }
                },
                {
                    id: "node-dialog-cancel",
                    text: RED._("common.label.cancel"),
                    click: function() {
                        if (editing_node._def) {
                            if (editing_node._def.oneditcancel) {
                                try {
                                    editing_node._def.oneditcancel.call(editing_node);
                                } catch(err) {
                                    console.log("oneditcancel",editing_node.id,editing_node.type,err.toString());
                                }
                            }

                            for (var d in editing_node._def.defaults) {
                                if (editing_node._def.defaults.hasOwnProperty(d)) {
                                    var def = editing_node._def.defaults[d];
                                    if (def.type) {
                                        var configTypeDef = RED.nodes.getType(def.type);
                                        if (configTypeDef && configTypeDef.exclusive) {
                                            var input = $("#node-input-"+d).val()||"";
                                            if (input !== "" && !editing_node[d]) {
                                                // This node has an exclusive config node that
                                                // has just been added. As the user is cancelling
                                                // the edit, need to delete the just-added config
                                                // node so that it doesn't get orphaned.
                                                RED.nodes.remove(input);
                                            }
                                        }
                                    }
                                }

                            }
                        }
                        RED.tray.close();
                    }
                },
                {
                    id: "node-dialog-ok",
                    text: RED._("common.label.done"),
                    class: "primary",
                    click: function() {
                        var changes = {};
                        var changed = false;
                        var wasDirty = RED.nodes.dirty();
                        var d;
                        var outputMap;

                        if (editing_node._def.oneditsave) {
                            var oldValues = {};
                            for (d in editing_node._def.defaults) {
                                if (editing_node._def.defaults.hasOwnProperty(d)) {
                                    if (typeof editing_node[d] === "string" || typeof editing_node[d] === "number") {
                                        oldValues[d] = editing_node[d];
                                    } else {
                                        oldValues[d] = $.extend(true,{},{v:editing_node[d]}).v;
                                    }
                                }
                            }
                            try {
                                var rc = editing_node._def.oneditsave.call(editing_node);
                                if (rc === true) {
                                    changed = true;
                                }
                            } catch(err) {
                                console.log("oneditsave",editing_node.id,editing_node.type,err.toString());
                            }

                            for (d in editing_node._def.defaults) {
                                if (editing_node._def.defaults.hasOwnProperty(d)) {
                                    if (oldValues[d] === null || typeof oldValues[d] === "string" || typeof oldValues[d] === "number") {
                                        if (oldValues[d] !== editing_node[d]) {
                                            changes[d] = oldValues[d];
                                            changed = true;
                                        }
                                    } else {
                                        if (JSON.stringify(oldValues[d]) !== JSON.stringify(editing_node[d])) {
                                            changes[d] = oldValues[d];
                                            changed = true;
                                        }
                                    }
                                }
                            }
                        }

                        var newValue;
                        if (editing_node._def.defaults) {
                            for (d in editing_node._def.defaults) {
                                if (editing_node._def.defaults.hasOwnProperty(d)) {
                                    var input = $("#node-input-"+d);
                                    if (input.attr('type') === "checkbox") {
                                        newValue = input.prop('checked');
                                    } else if ("format" in editing_node._def.defaults[d] && editing_node._def.defaults[d].format !== "" && input[0].nodeName === "DIV") {
                                        newValue = input.text();
                                    } else {
                                        newValue = input.val();
                                    }
                                    if (newValue != null) {
                                        if (d === "outputs") {
                                            if  (newValue.trim() === "") {
                                                continue;
                                            }
                                            if (isNaN(newValue)) {
                                                outputMap = JSON.parse(newValue);
                                                var outputCount = 0;
                                                var outputsChanged = false;
                                                var keys = Object.keys(outputMap);
                                                keys.forEach(function(p) {
                                                    if (isNaN(p)) {
                                                        // New output;
                                                        outputCount ++;
                                                        delete outputMap[p];
                                                    } else {
                                                        outputMap[p] = outputMap[p]+"";
                                                        if (outputMap[p] !== "-1") {
                                                            outputCount++;
                                                            if (outputMap[p] !== p) {
                                                                // Output moved
                                                                outputsChanged = true;
                                                            } else {
                                                                delete outputMap[p];
                                                            }
                                                        } else {
                                                            // Output removed
                                                            outputsChanged = true;
                                                        }
                                                    }
                                                });

                                                newValue = outputCount;
                                                if (outputsChanged) {
                                                    changed = true;
                                                }
                                            } else {
                                                newValue = parseInt(newValue);
                                            }
                                        }
                                        if (editing_node[d] != newValue) {
                                            if (editing_node._def.defaults[d].type) {
                                                if (newValue == "_ADD_") {
                                                    newValue = "";
                                                }
                                                // Change to a related config node
                                                var configNode = RED.nodes.node(editing_node[d]);
                                                if (configNode) {
                                                    var users = configNode.users;
                                                    users.splice(users.indexOf(editing_node),1);
                                                }
                                                configNode = RED.nodes.node(newValue);
                                                if (configNode) {
                                                    configNode.users.push(editing_node);
                                                }
                                            }
                                            changes[d] = editing_node[d];
                                            editing_node[d] = newValue;
                                            changed = true;
                                        }
                                    }
                                }
                            }
                        }
                        if (editing_node._def.credentials) {
                            var prefix = 'node-input';
                            var credDefinition = editing_node._def.credentials;
                            var credsChanged = updateNodeCredentials(editing_node,credDefinition,prefix);
                            changed = changed || credsChanged;
                        }
                        // if (editing_node.hasOwnProperty("_outputs")) {
                        //     outputMap = editing_node._outputs;
                        //     delete editing_node._outputs;
                        //     if (Object.keys(outputMap).length > 0) {
                        //         changed = true;
                        //     }
                        // }
                        var removedLinks = updateNodeProperties(editing_node,outputMap);

                        if (updateLabels(editing_node, changes, outputMap)) {
                            changed = true;
                        }

                        if (!editing_node._def.defaults || !editing_node._def.defaults.hasOwnProperty("icon")) {
                            var icon = $("#node-settings-icon").text()||""
                            if (!isDefaultIcon) {
                                if (icon !== editing_node.icon) {
                                    changes.icon = editing_node.icon;
                                    editing_node.icon = icon;
                                    changed = true;
                                }
                            } else {
                                if (icon !== "" && icon !== defaultIcon) {
                                    changes.icon = editing_node.icon;
                                    editing_node.icon = icon;
                                    changed = true;
                                } else {
                                    var iconPath = RED.utils.getDefaultNodeIcon(editing_node._def, editing_node);
                                    var currentDefaultIcon = iconPath.module+"/"+iconPath.file;
                                    if (defaultIcon !== currentDefaultIcon) {
                                        changes.icon = editing_node.icon;
                                        editing_node.icon = currentDefaultIcon;
                                        changed = true;
                                    }
                                }
                            }
                        }

                        if (changed) {
                            var wasChanged = editing_node.changed;
                            editing_node.changed = true;
                            RED.nodes.dirty(true);

                            var activeSubflow = RED.nodes.subflow(RED.workspaces.active());
                            var subflowInstances = null;
                            if (activeSubflow) {
                                subflowInstances = [];
                                RED.nodes.eachNode(function(n) {
                                    if (n.type == "subflow:"+RED.workspaces.active()) {
                                        subflowInstances.push({
                                            id:n.id,
                                            changed:n.changed
                                        });
                                        n.changed = true;
                                        n.dirty = true;
                                        updateNodeProperties(n);
                                    }
                                });
                            }
                            var historyEvent = {
                                t:'edit',
                                node:editing_node,
                                changes:changes,
                                links:removedLinks,
                                dirty:wasDirty,
                                changed:wasChanged
                            };
                            if (outputMap) {
                                historyEvent.outputMap = outputMap;
                            }
                            if (subflowInstances) {
                                historyEvent.subflow = {
                                    instances:subflowInstances
                                }
                            }
                            RED.history.push(historyEvent);
                        }
                        editing_node.dirty = true;
                        validateNode(editing_node);
                        RED.events.emit("editor:save",editing_node);
                        RED.tray.close();
                    }
                }
            ],
            resize: function(dimensions) {
                editTrayWidthCache[type] = dimensions.width;
                $(".editor-tray-content").height(dimensions.height - 78);
                var form = $(".editor-tray-content form").height(dimensions.height - 78 - 40);
                if (editing_node && editing_node._def.oneditresize) {
                    try {
                        editing_node._def.oneditresize.call(editing_node,{width:form.width(),height:form.height()});
                    } catch(err) {
                        console.log("oneditresize",editing_node.id,editing_node.type,err.toString());
                    }
                }
            },
            open: function(tray, done) {
                var trayFooter = tray.find(".editor-tray-footer");
                var trayBody = tray.find('.editor-tray-body');
                trayBody.parent().css('overflow','hidden');

                var stack = RED.stack.create({
                    container: trayBody,
                    singleExpanded: true
                });
                var nodeProperties = stack.add({
                    title: RED._("editor.nodeProperties"),
                    expanded: true
                });
                nodeProperties.content.addClass("editor-tray-content");

                var portLabels = stack.add({
                    title: RED._("editor.portLabels"),
                    onexpand: function() {
                        refreshLabelForm(this.content,node);
                    }
                });
                portLabels.content.addClass("editor-tray-content");


                if (editing_node) {
                    RED.sidebar.info.refresh(editing_node);
                }
                var ns;
                if (node._def.set.module === "node-red") {
                    ns = "node-red";
                } else {
                    ns = node._def.set.id;
                }
                var iconPath = RED.utils.getDefaultNodeIcon(node._def,node);
                defaultIcon = iconPath.module+"/"+iconPath.file;
                if (node.icon && node.icon !== defaultIcon) {
                    isDefaultIcon = false;
                } else {
                    isDefaultIcon = true;
                }
                buildEditForm(nodeProperties.content,"dialog-form",type,ns);
                buildLabelForm(portLabels.content,node);

                prepareEditDialog(node,node._def,"node-input", function() {
                    trayBody.i18n();
                    done();
                });
            },
            close: function() {
                if (RED.view.state() != RED.state.IMPORT_DRAGGING) {
                    RED.view.state(RED.state.DEFAULT);
                }
                if (editing_node) {
                    RED.sidebar.info.refresh(editing_node);
                }
                RED.workspaces.refresh();
                RED.view.redraw(true);
                editStack.pop();
            },
            show: function() {
                if (editing_node) {
                    RED.sidebar.info.refresh(editing_node);
                }
            }
        }
        if (editTrayWidthCache.hasOwnProperty(type)) {
            trayOptions.width = editTrayWidthCache[type];
        }

        if (type === 'subflow') {
            var id = editing_node.type.substring(8);
            trayOptions.buttons.unshift({
                class: 'leftButton',
                text: RED._("subflow.edit"),
                click: function() {
                    RED.workspaces.show(id);
                    $("#node-dialog-ok").click();
                }
            });
        }

        RED.tray.show(trayOptions);
    }
    /**
     * name - name of the property that holds this config node
     * type - type of config node
     * id - id of config node to edit. _ADD_ for a new one
     * prefix - the input prefix of the parent property
     */
    function showEditConfigNodeDialog(name,type,id,prefix) {
        var adding = (id == "_ADD_");
        var node_def = RED.nodes.getType(type);
        var editing_config_node = RED.nodes.node(id);

        var ns;
        if (node_def.set.module === "node-red") {
            ns = "node-red";
        } else {
            ns = node_def.set.id;
        }
        var configNodeScope = ""; // default to global
        var activeSubflow = RED.nodes.subflow(RED.workspaces.active());
        if (activeSubflow) {
            configNodeScope = activeSubflow.id;
        }
        if (editing_config_node == null) {
            editing_config_node = {
                id: RED.nodes.id(),
                _def: node_def,
                type: type,
                z: configNodeScope,
                users: []
            }
            for (var d in node_def.defaults) {
                if (node_def.defaults[d].value) {
                    editing_config_node[d] = JSON.parse(JSON.stringify(node_def.defaults[d].value));
                }
            }
            editing_config_node["_"] = node_def._;
        }
        editStack.push(editing_config_node);

        RED.view.state(RED.state.EDITING);
        var trayOptions = {
            title: getEditStackTitle(), //(adding?RED._("editor.addNewConfig", {type:type}):RED._("editor.editConfig", {type:type})),
            resize: function() {
                if (editing_config_node && editing_config_node._def.oneditresize) {
                    var form = $("#node-config-dialog-edit-form");
                    try {
                        editing_config_node._def.oneditresize.call(editing_config_node,{width:form.width(),height:form.height()});
                    } catch(err) {
                        console.log("oneditresize",editing_config_node.id,editing_config_node.type,err.toString());
                    }
                }
            },
            open: function(tray, done) {
                var trayHeader = tray.find(".editor-tray-header");
                var trayFooter = tray.find(".editor-tray-footer");

                if (node_def.hasUsers !== false) {
                    trayFooter.prepend('<div id="node-config-dialog-user-count"><i class="fa fa-info-circle"></i> <span></span></div>');
                }
                trayFooter.append('<span id="node-config-dialog-scope-container"><span id="node-config-dialog-scope-warning" data-i18n="[title]editor.errors.scopeChange"><i class="fa fa-warning"></i></span><select id="node-config-dialog-scope"></select></span>');

                var dialogForm = buildEditForm(tray.find('.editor-tray-body'),"node-config-dialog-edit-form",type,ns);

                prepareEditDialog(editing_config_node,node_def,"node-config-input", function() {
                    if (editing_config_node._def.exclusive) {
                        $("#node-config-dialog-scope").hide();
                    } else {
                        $("#node-config-dialog-scope").show();
                    }
                    $("#node-config-dialog-scope-warning").hide();

                    var nodeUserFlows = {};
                    editing_config_node.users.forEach(function(n) {
                        nodeUserFlows[n.z] = true;
                    });
                    var flowCount = Object.keys(nodeUserFlows).length;
                    var tabSelect = $("#node-config-dialog-scope").empty();
                    tabSelect.off("change");
                    tabSelect.append('<option value=""'+(!editing_config_node.z?" selected":"")+' data-i18n="sidebar.config.global"></option>');
                    tabSelect.append('<option disabled data-i18n="sidebar.config.flows"></option>');
                    RED.nodes.eachWorkspace(function(ws) {
                        var workspaceLabel = ws.label;
                        if (nodeUserFlows[ws.id]) {
                            workspaceLabel = "* "+workspaceLabel;
                        }
                        tabSelect.append('<option value="'+ws.id+'"'+(ws.id==editing_config_node.z?" selected":"")+'>'+workspaceLabel+'</option>');
                    });
                    tabSelect.append('<option disabled data-i18n="sidebar.config.subflows"></option>');
                    RED.nodes.eachSubflow(function(ws) {
                        var workspaceLabel = ws.name;
                        if (nodeUserFlows[ws.id]) {
                            workspaceLabel = "* "+workspaceLabel;
                        }
                        tabSelect.append('<option value="'+ws.id+'"'+(ws.id==editing_config_node.z?" selected":"")+'>'+workspaceLabel+'</option>');
                    });
                    if (flowCount > 0) {
                        tabSelect.on('change',function() {
                            var newScope = $(this).val();
                            if (newScope === '') {
                                // global scope - everyone can use it
                                $("#node-config-dialog-scope-warning").hide();
                            } else if (!nodeUserFlows[newScope] || flowCount > 1) {
                                // a user will loose access to it
                                $("#node-config-dialog-scope-warning").show();
                            } else {
                                $("#node-config-dialog-scope-warning").hide();
                            }
                        });
                    }
                    tabSelect.i18n();

                    dialogForm.i18n();
                    if (node_def.hasUsers !== false) {
                        $("#node-config-dialog-user-count").find("span").text(RED._("editor.nodesUse", {count:editing_config_node.users.length})).parent().show();
                    }
                    done();
                });
            },
            close: function() {
                RED.workspaces.refresh();
                editStack.pop();
            },
            show: function() {
                if (editing_config_node) {
                    RED.sidebar.info.refresh(editing_config_node);
                }
            }
        }
        trayOptions.buttons = [
            {
                id: "node-config-dialog-cancel",
                text: RED._("common.label.cancel"),
                click: function() {
                    var configType = type;
                    var configId = editing_config_node.id;
                    var configAdding = adding;
                    var configTypeDef = RED.nodes.getType(configType);

                    if (configTypeDef.oneditcancel) {
                        // TODO: what to pass as this to call
                        if (configTypeDef.oneditcancel) {
                            var cn = RED.nodes.node(configId);
                            if (cn) {
                                try {
                                    configTypeDef.oneditcancel.call(cn,false);
                                } catch(err) {
                                    console.log("oneditcancel",cn.id,cn.type,err.toString());
                                }
                            } else {
                                try {
                                    configTypeDef.oneditcancel.call({id:configId},true);
                                } catch(err) {
                                    console.log("oneditcancel",configId,configType,err.toString());
                                }
                            }
                        }
                    }
                    RED.tray.close();
                }
            },
            {
                id: "node-config-dialog-ok",
                text: adding?RED._("editor.configAdd"):RED._("editor.configUpdate"),
                class: "primary",
                click: function() {
                    var configProperty = name;
                    var configId = editing_config_node.id;
                    var configType = type;
                    var configAdding = adding;
                    var configTypeDef = RED.nodes.getType(configType);
                    var d;
                    var input;
                    var scope = $("#node-config-dialog-scope").val();

                    if (configTypeDef.oneditsave) {
                        try {
                            configTypeDef.oneditsave.call(editing_config_node);
                        } catch(err) {
                            console.log("oneditsave",editing_config_node.id,editing_config_node.type,err.toString());
                        }
                    }

                    for (d in configTypeDef.defaults) {
                        if (configTypeDef.defaults.hasOwnProperty(d)) {
                            var newValue;
                            input = $("#node-config-input-"+d);
                            if (input.attr('type') === "checkbox") {
                                newValue = input.prop('checked');
                            } else if ("format" in configTypeDef.defaults[d] && configTypeDef.defaults[d].format !== "" && input[0].nodeName === "DIV") {
                                newValue = input.text();
                            } else {
                                newValue = input.val();
                            }
                            if (newValue != null && newValue !== editing_config_node[d]) {
                                if (editing_config_node._def.defaults[d].type) {
                                    if (newValue == "_ADD_") {
                                        newValue = "";
                                    }
                                    // Change to a related config node
                                    var configNode = RED.nodes.node(editing_config_node[d]);
                                    if (configNode) {
                                        var users = configNode.users;
                                        users.splice(users.indexOf(editing_config_node),1);
                                    }
                                    configNode = RED.nodes.node(newValue);
                                    if (configNode) {
                                        configNode.users.push(editing_config_node);
                                    }
                                }
                                editing_config_node[d] = newValue;
                            }
                        }
                    }
                    editing_config_node.label = configTypeDef.label;
                    editing_config_node.z = scope;

                    if (scope) {
                        // Search for nodes that use this one that are no longer
                        // in scope, so must be removed
                        editing_config_node.users = editing_config_node.users.filter(function(n) {
                            var keep = true;
                            for (var d in n._def.defaults) {
                                if (n._def.defaults.hasOwnProperty(d)) {
                                    if (n._def.defaults[d].type === editing_config_node.type &&
                                        n[d] === editing_config_node.id &&
                                        n.z !== scope) {
                                            keep = false;
                                            // Remove the reference to this node
                                            // and revalidate
                                            n[d] = null;
                                            n.dirty = true;
                                            n.changed = true;
                                            validateNode(n);
                                    }
                                }
                            }
                            return keep;
                        });
                    }

                    if (configAdding) {
                        RED.nodes.add(editing_config_node);
                    }

                    if (configTypeDef.credentials) {
                        updateNodeCredentials(editing_config_node,configTypeDef.credentials,"node-config-input");
                    }
                    validateNode(editing_config_node);
                    var validatedNodes = {};
                    validatedNodes[editing_config_node.id] = true;

                    var userStack = editing_config_node.users.slice();
                    while(userStack.length > 0) {
                        var user = userStack.pop();
                        if (!validatedNodes[user.id]) {
                            validatedNodes[user.id] = true;
                            if (user.users) {
                                userStack = userStack.concat(user.users);
                            }
                            validateNode(user);
                        }
                    }
                    RED.nodes.dirty(true);
                    RED.view.redraw(true);
                    if (!configAdding) {
                        RED.events.emit("editor:save",editing_config_node);
                    }
                    RED.tray.close(function() {
                        updateConfigNodeSelect(configProperty,configType,editing_config_node.id,prefix);
                    });
                }
            }
        ];

        if (!adding) {
            trayOptions.buttons.unshift({
                class: 'leftButton',
                text: RED._("editor.configDelete"), //'<i class="fa fa-trash"></i>',
                click: function() {
                    var configProperty = name;
                    var configId = editing_config_node.id;
                    var configType = type;
                    var configTypeDef = RED.nodes.getType(configType);

                    try {

                        if (configTypeDef.ondelete) {
                            // Deprecated: never documented but used by some early nodes
                            console.log("Deprecated API warning: config node type ",configType," has an ondelete function - should be oneditdelete");
                            configTypeDef.ondelete.call(editing_config_node);
                        }
                        if (configTypeDef.oneditdelete) {
                            configTypeDef.oneditdelete.call(editing_config_node);
                        }
                    } catch(err) {
                        console.log("oneditdelete",editing_config_node.id,editing_config_node.type,err.toString());
                    }

                    var historyEvent = {
                        t:'delete',
                        nodes:[editing_config_node],
                        changes: {},
                        dirty: RED.nodes.dirty()
                    }
                    for (var i=0;i<editing_config_node.users.length;i++) {
                        var user = editing_config_node.users[i];
                        historyEvent.changes[user.id] = {
                            changed: user.changed,
                            valid: user.valid
                        };
                        for (var d in user._def.defaults) {
                            if (user._def.defaults.hasOwnProperty(d) && user[d] == configId) {
                                historyEvent.changes[user.id][d] = configId
                                user[d] = "";
                                user.changed = true;
                                user.dirty = true;
                            }
                        }
                        validateNode(user);
                    }
                    RED.nodes.remove(configId);
                    RED.nodes.dirty(true);
                    RED.view.redraw(true);
                    RED.history.push(historyEvent);
                    RED.tray.close(function() {
                        updateConfigNodeSelect(configProperty,configType,"",prefix);
                    });
                }
            });
        }

        RED.tray.show(trayOptions);
    }

    function defaultConfigNodeSort(A,B) {
        if (A.__label__ < B.__label__) {
            return -1;
        } else if (A.__label__ > B.__label__) {
            return 1;
        }
        return 0;
    }

    function updateConfigNodeSelect(name,type,value,prefix) {
        // if prefix is null, there is no config select to update
        if (prefix) {
            var button = $("#"+prefix+"-edit-"+name);
            if (button.length) {
                if (value) {
                    button.text(RED._("editor.configEdit"));
                } else {
                    button.text(RED._("editor.configAdd"));
                }
                $("#"+prefix+"-"+name).val(value);
            } else {

                var select = $("#"+prefix+"-"+name);
                var node_def = RED.nodes.getType(type);
                select.children().remove();

                var activeWorkspace = RED.nodes.workspace(RED.workspaces.active());
                if (!activeWorkspace) {
                    activeWorkspace = RED.nodes.subflow(RED.workspaces.active());
                }

                var configNodes = [];

                RED.nodes.eachConfig(function(config) {
                    if (config.type == type && (!config.z || config.z === activeWorkspace.id)) {
                        var label = RED.utils.getNodeLabel(config,config.id);
                        config.__label__ = label;
                        configNodes.push(config);
                    }
                });
                var configSortFn = defaultConfigNodeSort;
                if (typeof node_def.sort == "function") {
                    configSortFn = node_def.sort;
                }
                try {
                    configNodes.sort(configSortFn);
                } catch(err) {
                    console.log("Definition error: "+node_def.type+".sort",err);
                }

                configNodes.forEach(function(cn) {
                    select.append('<option value="'+cn.id+'"'+(value==cn.id?" selected":"")+'>'+RED.text.bidi.enforceTextDirectionWithUCC(cn.__label__)+'</option>');
                    delete cn.__label__;
                });

                select.append('<option value="_ADD_"'+(value===""?" selected":"")+'>'+RED._("editor.addNewType", {type:type})+'</option>');
                window.setTimeout(function() { select.change();},50);
            }
        }
    }

    function showEditSubflowDialog(subflow) {
        var editing_node = subflow;
        editStack.push(subflow);
        RED.view.state(RED.state.EDITING);
        var subflowEditor;

        var trayOptions = {
            title: getEditStackTitle(),
            buttons: [
                {
                    id: "node-dialog-cancel",
                    text: RED._("common.label.cancel"),
                    click: function() {
                        RED.tray.close();
                    }
                },
                {
                    id: "node-dialog-ok",
                    class: "primary",
                    text: RED._("common.label.done"),
                    click: function() {
                        var i;
                        var changes = {};
                        var changed = false;
                        var wasDirty = RED.nodes.dirty();

                        var newName = $("#subflow-input-name").val();

                        if (newName != editing_node.name) {
                            changes['name'] = editing_node.name;
                            editing_node.name = newName;
                            changed = true;
                        }

                        var newDescription = subflowEditor.getValue();

                        if (newDescription != editing_node.info) {
                            changes['info'] = editing_node.info;
                            editing_node.info = newDescription;
                            changed = true;
                        }
                        if (updateLabels(editing_node, changes, null)) {
                            changed = true;
                        }
                        var icon = $("#node-settings-icon").text()||"";
                        if ((editing_node.icon === undefined && icon !== "node-red/subflow.png") ||
                            (editing_node.icon !== undefined && editing_node.icon !== icon)) {
                            changes.icon = editing_node.icon;
                            editing_node.icon = icon;
                            changed = true;
                        }
                        var newCategory = $("#subflow-input-category").val().trim();
                        if (newCategory === "_custom_") {
                            newCategory = $("#subflow-input-custom-category").val().trim();
                            if (newCategory === "") {
                                newCategory = editing_node.category;
                            }
                        }
                        if (newCategory === 'subflows') {
                            newCategory = '';
                        }
                        if (newCategory != editing_node.category) {
                            changes['category'] = editing_node.category;
                            editing_node.category = newCategory;
                            changed = true;
                        }

                        RED.palette.refresh();

                        if (changed) {
                            var wasChanged = editing_node.changed;
                            editing_node.changed = true;
                            validateNode(editing_node);
                            var subflowInstances = [];
                            RED.nodes.eachNode(function(n) {
                                if (n.type == "subflow:"+editing_node.id) {
                                    subflowInstances.push({
                                        id:n.id,
                                        changed:n.changed
                                    })
                                    n.changed = true;
                                    n.dirty = true;
                                    updateNodeProperties(n);
                                    validateNode(n);
                                }
                            });
                            RED.nodes.dirty(true);
                            var historyEvent = {
                                t:'edit',
                                node:editing_node,
                                changes:changes,
                                dirty:wasDirty,
                                changed:wasChanged,
                                subflow: {
                                    instances:subflowInstances
                                }
                            };

                            RED.history.push(historyEvent);
                        }
                        editing_node.dirty = true;
                        RED.tray.close();
                    }
                }
            ],
            resize: function(dimensions) {
                $(".editor-tray-content").height(dimensions.height - 78);
                var form = $(".editor-tray-content form").height(dimensions.height - 78 - 40);

                var rows = $("#dialog-form>div:not(.node-text-editor-row)");
                var editorRow = $("#dialog-form>div.node-text-editor-row");
                var height = $("#dialog-form").height();
                for (var i=0;i<rows.size();i++) {
                    height -= $(rows[i]).outerHeight(true);
                }
                height -= (parseInt($("#dialog-form").css("marginTop"))+parseInt($("#dialog-form").css("marginBottom")));
                $(".node-text-editor").css("height",height+"px");
                subflowEditor.resize();
            },
            open: function(tray) {
                var trayFooter = tray.find(".editor-tray-footer");
                var trayBody = tray.find('.editor-tray-body');
                trayBody.parent().css('overflow','hidden');

                var stack = RED.stack.create({
                    container: trayBody,
                    singleExpanded: true
                });
                var nodeProperties = stack.add({
                    title: RED._("editor.nodeProperties"),
                    expanded: true
                });
                nodeProperties.content.addClass("editor-tray-content");
                var portLabels = stack.add({
                    title: RED._("editor.portLabels")
                });
                portLabels.content.addClass("editor-tray-content");

                if (editing_node) {
                    RED.sidebar.info.refresh(editing_node);
                }
                var dialogForm = buildEditForm(nodeProperties.content,"dialog-form","subflow-template");
                subflowEditor = RED.editor.createEditor({
                    id: 'subflow-input-info-editor',
                    mode: 'ace/mode/markdown',
                    value: ""
                });

                $("#subflow-input-name").val(subflow.name);
                RED.text.bidi.prepareInput($("#subflow-input-name"));

                $("#subflow-input-category").empty();
                var categories = RED.palette.getCategories();
                categories.sort(function(A,B) {
                    return A.label.localeCompare(B.label);
                })
                categories.forEach(function(cat) {
                    $("#subflow-input-category").append($("<option></option>").val(cat.id).text(cat.label));
                })
                $("#subflow-input-category").append($("<option></option>").attr('disabled',true).text("---"));
                $("#subflow-input-category").append($("<option></option>").val("_custom_").text(RED._("palette.addCategory")));


                $("#subflow-input-category").change(function() {
                    var val = $(this).val();
                    if (val === "_custom_") {
                        $("#subflow-input-category").width(120);
                        $("#subflow-input-custom-category").show();
                    } else {
                        $("#subflow-input-category").width(250);
                        $("#subflow-input-custom-category").hide();
                    }
                })


                $("#subflow-input-category").val(subflow.category||"subflows");

                subflowEditor.getSession().setValue(subflow.info||"",-1);
                var userCount = 0;
                var subflowType = "subflow:"+editing_node.id;

                RED.nodes.eachNode(function(n) {
                    if (n.type === subflowType) {
                        userCount++;
                    }
                });
                $("#subflow-dialog-user-count").text(RED._("subflow.subflowInstances", {count:userCount})).show();

                buildLabelForm(portLabels.content,subflow);
                trayBody.i18n();
            },
            close: function() {
                if (RED.view.state() != RED.state.IMPORT_DRAGGING) {
                    RED.view.state(RED.state.DEFAULT);
                }
                RED.sidebar.info.refresh(editing_node);
                RED.workspaces.refresh();
                subflowEditor.destroy();
                editStack.pop();
                editing_node = null;
            },
            show: function() {
            }
        }
        RED.tray.show(trayOptions);
    }

    function showTypeEditor(type, options) {
        if (RED.editor.types.hasOwnProperty(type)) {
            if (editStack.length > 0) {
                options.parent = editStack[editStack.length-1].id;
            }
            editStack.push({type:type});
            options.title = options.title || getEditStackTitle();
            options.onclose = function() {
                editStack.pop();
            }
            RED.editor.types[type].show(options);
        } else {
            console.log("Unknown type editor:",type);
        }
    }


    return {
        init: function() {
            RED.tray.init();
            RED.actions.add("core:confirm-edit-tray", function() {
                $("#node-dialog-ok").click();
                $("#node-config-dialog-ok").click();
            });
            RED.actions.add("core:cancel-edit-tray", function() {
                $("#node-dialog-cancel").click();
                $("#node-config-dialog-cancel").click();
            });

            for (var type in RED.editor.types) {
                if (RED.editor.types.hasOwnProperty(type)) {
                    RED.editor.types[type].init();
                }
            }
        },
        types: {},
        edit: showEditDialog,
        editConfig: showEditConfigNodeDialog,
        editSubflow: showEditSubflowDialog,
        editJavaScript: function(options) { showTypeEditor("_js",options) },
        editExpression: function(options) { showTypeEditor("_expression", options) },
        editJSON: function(options) { showTypeEditor("_json", options) },
        editMarkdown: function(options) { showTypeEditor("_markdown", options) },
        editBuffer: function(options) { showTypeEditor("_buffer", options) },
        buildEditForm: buildEditForm,
        validateNode: validateNode,
        updateNodeProperties: updateNodeProperties, // TODO: only exposed for edit-undo


        createEditor: function(options) {
            var editor = ace.edit(options.id||options.element);
            editor.setTheme("ace/theme/solarized_dark_grey");
            var session = editor.getSession();
            session.on("changeAnnotation", function () {
                var annotations = session.getAnnotations() || [];
                var i = annotations.length;
                var len = annotations.length;
                while (i--) {
                    if (/doctype first\. Expected/.test(annotations[i].text)) { annotations.splice(i, 1); }
                    else if (/Unexpected End of file\. Expected/.test(annotations[i].text)) { annotations.splice(i, 1); }
                }
                if (len > annotations.length) { session.setAnnotations(annotations); }
            });
            if (options.mode) {
                session.setMode(options.mode);
            }
            if (options.foldStyle) {
                session.setFoldStyle(options.foldStyle);
            } else {
                session.setFoldStyle('markbeginend');
            }
            if (options.options) {
                editor.setOptions(options.options);
            } else {
                editor.setOptions({
                    enableBasicAutocompletion:true,
                    enableSnippets:true
                });
            }
            if (options.readOnly) {
                editor.setOption('readOnly',options.readOnly);
                editor.container.classList.add("ace_read-only");
            }
            if (options.hasOwnProperty('lineNumbers')) {
                editor.renderer.setOption('showGutter',options.lineNumbers);
            }
            editor.$blockScrolling = Infinity;
            if (options.value) {
                session.setValue(options.value,-1);
            }
            if (options.globals) {
                setTimeout(function() {
                    if (!!session.$worker) {
                        session.$worker.send("setOptions", [{globals: options.globals, esversion:6, sub:true, asi:true, maxerr:1000}]);
                    }
                },100);
            }
            return editor;
        }
    }
})();
