





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-81a59bf26d881d29286674f6deefe779c444382fff322085b50ba455460ccae5.css" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-8789d320be825216d799841dcb27bc201b0605572d4c8c07c30feb5bc27a66b7.css" media="all" rel="stylesheet" />
  
  
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-0047c348443848937ad9891b690c4acb6ee0d96263d91e9b1725194e65869e91.css" media="all" rel="stylesheet" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>ace-builds/mode-xml.js at master · ajaxorg/ace-builds · GitHub</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars1.githubusercontent.com/u/168515?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="ajaxorg/ace-builds" property="og:title" /><meta content="https://github.com/ajaxorg/ace-builds" property="og:url" /><meta content="Contribute to ace-builds development by creating an account on GitHub." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="95B0:6EE5:333666A:4C2D8CC:5920E791" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="95B0:6EE5:333666A:4C2D8CC:5920E791" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged Out">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="Y2EyOGY1NjUxNGE3YmUwNWQ3OTJhYWI3Mjk1YzI1YzQxOGE1ZTg0NTI3ZWExNDI4MDBmMmRmN2Q3NWMwY2Q5Nnx7InJlbW90ZV9hZGRyZXNzIjoiODIuMTgxLjczLjEwNSIsInJlcXVlc3RfaWQiOiI5NUIwOjZFRTU6MzMzNjY2QTo0QzJEOENDOjU5MjBFNzkxIiwidGltZXN0YW1wIjoxNDk1MzI4NjU3LCJob3N0IjoiZ2l0aHViLmNvbSJ9">


  <meta name="html-safe-nonce" content="c39e34d5519ab09a67778d92cc5959ed699d7acf">

  <meta http-equiv="x-pjax-version" content="9f48f82d435db8e8916f273e55a94a05">
  

    
  <meta name="description" content="Contribute to ace-builds development by creating an account on GitHub.">
  <meta name="go-import" content="github.com/ajaxorg/ace-builds git https://github.com/ajaxorg/ace-builds.git">

  <meta content="168515" name="octolytics-dimension-user_id" /><meta content="ajaxorg" name="octolytics-dimension-user_login" /><meta content="4124657" name="octolytics-dimension-repository_id" /><meta content="ajaxorg/ace-builds" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="4124657" name="octolytics-dimension-repository_network_root_id" /><meta content="ajaxorg/ace-builds" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/ajaxorg/ace-builds/commits/master.atom" rel="alternate" title="Recent Commits to ace-builds:master" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/ajaxorg/ace-builds/blob/master/src-min/mode-xml.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



  </head>

  <body class="logged-out env-production page-blob">
    



  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



          <header class="site-header js-details-container Details" role="banner">
  <div class="container-responsive">
    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
    </a>

    <button class="btn-link float-right site-header-toggle js-details-target" type="button" aria-label="Toggle navigation">
      <svg aria-hidden="true" class="octicon octicon-three-bars" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
    </button>

    <div class="site-header-menu">
      <nav class="site-header-nav">
        <a href="/features" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features">
          Features
</a>        <a href="/business" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/security /business/customers /business">
          Business
</a>        <a href="/explore" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship /showcases /explore">
          Explore
</a>        <a href="/pricing" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing/developer /pricing/team /pricing/business-hosted /pricing/business-enterprise /pricing">
          Pricing
</a>      </nav>

      <div class="site-header-actions">
          <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/ajaxorg/ace-builds/search" class="js-site-search-form" data-scoped-search-url="/ajaxorg/ace-builds/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/ajaxorg/ace-builds/blob/master/src-min/mode-xml.js" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>


          <a class="text-bold site-header-link" href="/login?return_to=%2Fajaxorg%2Face-builds%2Fblob%2Fmaster%2Fsrc-min%2Fmode-xml.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
            <span class="text-gray">or</span>
            <a class="text-bold site-header-link" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      </div>
    </div>
  </div>
</header>


  </div>

  <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
        




    <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
      <div class="container repohead-details-container">

        <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2Fajaxorg%2Face-builds"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/ajaxorg/ace-builds/watchers"
     aria-label="135 users are watching this repository">
    135
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fajaxorg%2Face-builds"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/ajaxorg/ace-builds/stargazers"
      aria-label="1299 users starred this repository">
      1,299
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fajaxorg%2Face-builds"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/ajaxorg/ace-builds/network" class="social-count"
       aria-label="1183 users forked this repository">
      1,183
    </a>
  </li>
</ul>

        <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/ajaxorg" class="url fn" rel="author">ajaxorg</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/ajaxorg/ace-builds" data-pjax="#js-repo-pjax-container">ace-builds</a></strong>

</h1>

      </div>
      <div class="container">
        
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/ajaxorg/ace-builds" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /ajaxorg/ace-builds" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/ajaxorg/ace-builds/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /ajaxorg/ace-builds/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">27</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/ajaxorg/ace-builds/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /ajaxorg/ace-builds/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">4</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/ajaxorg/ace-builds/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /ajaxorg/ace-builds/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>



  <a href="/ajaxorg/ace-builds/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /ajaxorg/ace-builds/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/ajaxorg/ace-builds/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /ajaxorg/ace-builds/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

      </div>
    </div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
          

<a href="/ajaxorg/ace-builds/blob/784ffa862c5351e0d300370f61471b1eb95ebcf1/src-min/mode-xml.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:43146d920407438a09f912be9961835d -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/ajaxorg/ace-builds/blob/gh-pages/src-min/mode-xml.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/ajaxorg/ace-builds/blob/master/src-min/mode-xml.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.2.6/src-min/mode-xml.js"
              data-name="v1.2.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.6">
                v1.2.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.2.5/src-min/mode-xml.js"
              data-name="v1.2.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.5">
                v1.2.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.2.4/src-min/mode-xml.js"
              data-name="v1.2.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.4">
                v1.2.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.2.3/src-min/mode-xml.js"
              data-name="v1.2.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.3">
                v1.2.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.2.2/src-min/mode-xml.js"
              data-name="v1.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.2">
                v1.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.2.1/src-min/mode-xml.js"
              data-name="v1.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.1">
                v1.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.2.0/src-min/mode-xml.js"
              data-name="v1.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.0">
                v1.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.9/src-min/mode-xml.js"
              data-name="v1.1.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.9">
                v1.1.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.8/src-min/mode-xml.js"
              data-name="v1.1.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.8">
                v1.1.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.7/src-min/mode-xml.js"
              data-name="v1.1.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.7">
                v1.1.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.6/src-min/mode-xml.js"
              data-name="v1.1.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.6">
                v1.1.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.5/src-min/mode-xml.js"
              data-name="v1.1.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.5">
                v1.1.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.4/src-min/mode-xml.js"
              data-name="v1.1.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.4">
                v1.1.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.3/src-min/mode-xml.js"
              data-name="v1.1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.3">
                v1.1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.2/src-min/mode-xml.js"
              data-name="v1.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.2">
                v1.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.01/src-min/mode-xml.js"
              data-name="v1.1.01"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.01">
                v1.1.01
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.1/src-min/mode-xml.js"
              data-name="v1.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.1">
                v1.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.0.0/src-min/mode-xml.js"
              data-name="v1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0">
                v1.0.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/ajaxorg/ace-builds/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/ajaxorg/ace-builds"><span>ace-builds</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/ajaxorg/ace-builds/tree/master/src-min"><span>src-min</span></a></span><span class="separator">/</span><strong class="final-path">mode-xml.js</strong>
  </div>
</div>


<include-fragment class="commit-tease" src="/ajaxorg/ace-builds/contributors/master/src-min/mode-xml.js">
  <div>
    Fetching contributors&hellip;
  </div>

  <div class="commit-tease-contributors">
    <img alt="" class="loader-loading float-left" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" />
    <span class="loader-error">Cannot retrieve contributors at this time</span>
  </div>
</include-fragment>
<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/ajaxorg/ace-builds/raw/master/src-min/mode-xml.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/ajaxorg/ace-builds/blame/master/src-min/mode-xml.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/ajaxorg/ace-builds/commits/master/src-min/mode-xml.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>


        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      1 lines (1 sloc)
      <span class="file-info-divider"></span>
    11.6 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">define(&quot;ace/mode/xml_highlight_rules&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/text_highlight_rules&quot;],function(e,t,n){&quot;use strict&quot;;var r=e(&quot;../lib/oop&quot;),i=e(&quot;./text_highlight_rules&quot;).TextHighlightRules,s=function(e){var t=&quot;[_:a-zA-Z\u00c0-\uffff][-_:.a-zA-Z0-9\u00c0-\uffff]*&quot;;this.$rules={start:[{token:&quot;string.cdata.xml&quot;,regex:&quot;&lt;\\!\\[CDATA\\[&quot;,next:&quot;cdata&quot;},{token:[&quot;punctuation.xml-decl.xml&quot;,&quot;keyword.xml-decl.xml&quot;],regex:&quot;(&lt;\\?)(xml)(?=[\\s])&quot;,next:&quot;xml_decl&quot;,caseInsensitive:!0},{token:[&quot;punctuation.instruction.xml&quot;,&quot;keyword.instruction.xml&quot;],regex:&quot;(&lt;\\?)(&quot;+t+&quot;)&quot;,next:&quot;processing_instruction&quot;},{token:&quot;comment.xml&quot;,regex:&quot;&lt;\\!--&quot;,next:&quot;comment&quot;},{token:[&quot;xml-pe.doctype.xml&quot;,&quot;xml-pe.doctype.xml&quot;],regex:&quot;(&lt;\\!)(DOCTYPE)(?=[\\s])&quot;,next:&quot;doctype&quot;,caseInsensitive:!0},{include:&quot;tag&quot;},{token:&quot;text.end-tag-open.xml&quot;,regex:&quot;&lt;/&quot;},{token:&quot;text.tag-open.xml&quot;,regex:&quot;&lt;&quot;},{include:&quot;reference&quot;},{defaultToken:&quot;text.xml&quot;}],xml_decl:[{token:&quot;entity.other.attribute-name.decl-attribute-name.xml&quot;,regex:&quot;(?:&quot;+t+&quot;:)?&quot;+t+&quot;&quot;},{token:&quot;keyword.operator.decl-attribute-equals.xml&quot;,regex:&quot;=&quot;},{include:&quot;whitespace&quot;},{include:&quot;string&quot;},{token:&quot;punctuation.xml-decl.xml&quot;,regex:&quot;\\?&gt;&quot;,next:&quot;start&quot;}],processing_instruction:[{token:&quot;punctuation.instruction.xml&quot;,regex:&quot;\\?&gt;&quot;,next:&quot;start&quot;},{defaultToken:&quot;instruction.xml&quot;}],doctype:[{include:&quot;whitespace&quot;},{include:&quot;string&quot;},{token:&quot;xml-pe.doctype.xml&quot;,regex:&quot;&gt;&quot;,next:&quot;start&quot;},{token:&quot;xml-pe.xml&quot;,regex:&quot;[-_a-zA-Z0-9:]+&quot;},{token:&quot;punctuation.int-subset&quot;,regex:&quot;\\[&quot;,push:&quot;int_subset&quot;}],int_subset:[{token:&quot;text.xml&quot;,regex:&quot;\\s+&quot;},{token:&quot;punctuation.int-subset.xml&quot;,regex:&quot;]&quot;,next:&quot;pop&quot;},{token:[&quot;punctuation.markup-decl.xml&quot;,&quot;keyword.markup-decl.xml&quot;],regex:&quot;(&lt;\\!)(&quot;+t+&quot;)&quot;,push:[{token:&quot;text&quot;,regex:&quot;\\s+&quot;},{token:&quot;punctuation.markup-decl.xml&quot;,regex:&quot;&gt;&quot;,next:&quot;pop&quot;},{include:&quot;string&quot;}]}],cdata:[{token:&quot;string.cdata.xml&quot;,regex:&quot;\\]\\]&gt;&quot;,next:&quot;start&quot;},{token:&quot;text.xml&quot;,regex:&quot;\\s+&quot;},{token:&quot;text.xml&quot;,regex:&quot;(?:[^\\]]|\\](?!\\]&gt;))+&quot;}],comment:[{token:&quot;comment.xml&quot;,regex:&quot;--&gt;&quot;,next:&quot;start&quot;},{defaultToken:&quot;comment.xml&quot;}],reference:[{token:&quot;constant.language.escape.reference.xml&quot;,regex:&quot;(?:&amp;#[0-9]+;)|(?:&amp;#x[0-9a-fA-F]+;)|(?:&amp;[a-zA-Z0-9_:\\.-]+;)&quot;}],attr_reference:[{token:&quot;constant.language.escape.reference.attribute-value.xml&quot;,regex:&quot;(?:&amp;#[0-9]+;)|(?:&amp;#x[0-9a-fA-F]+;)|(?:&amp;[a-zA-Z0-9_:\\.-]+;)&quot;}],tag:[{token:[&quot;meta.tag.punctuation.tag-open.xml&quot;,&quot;meta.tag.punctuation.end-tag-open.xml&quot;,&quot;meta.tag.tag-name.xml&quot;],regex:&quot;(?:(&lt;)|(&lt;/))((?:&quot;+t+&quot;:)?&quot;+t+&quot;)&quot;,next:[{include:&quot;attributes&quot;},{token:&quot;meta.tag.punctuation.tag-close.xml&quot;,regex:&quot;/?&gt;&quot;,next:&quot;start&quot;}]}],tag_whitespace:[{token:&quot;text.tag-whitespace.xml&quot;,regex:&quot;\\s+&quot;}],whitespace:[{token:&quot;text.whitespace.xml&quot;,regex:&quot;\\s+&quot;}],string:[{token:&quot;string.xml&quot;,regex:&quot;&#39;&quot;,push:[{token:&quot;string.xml&quot;,regex:&quot;&#39;&quot;,next:&quot;pop&quot;},{defaultToken:&quot;string.xml&quot;}]},{token:&quot;string.xml&quot;,regex:&#39;&quot;&#39;,push:[{token:&quot;string.xml&quot;,regex:&#39;&quot;&#39;,next:&quot;pop&quot;},{defaultToken:&quot;string.xml&quot;}]}],attributes:[{token:&quot;entity.other.attribute-name.xml&quot;,regex:&quot;(?:&quot;+t+&quot;:)?&quot;+t+&quot;&quot;},{token:&quot;keyword.operator.attribute-equals.xml&quot;,regex:&quot;=&quot;},{include:&quot;tag_whitespace&quot;},{include:&quot;attribute_value&quot;}],attribute_value:[{token:&quot;string.attribute-value.xml&quot;,regex:&quot;&#39;&quot;,push:[{token:&quot;string.attribute-value.xml&quot;,regex:&quot;&#39;&quot;,next:&quot;pop&quot;},{include:&quot;attr_reference&quot;},{defaultToken:&quot;string.attribute-value.xml&quot;}]},{token:&quot;string.attribute-value.xml&quot;,regex:&#39;&quot;&#39;,push:[{token:&quot;string.attribute-value.xml&quot;,regex:&#39;&quot;&#39;,next:&quot;pop&quot;},{include:&quot;attr_reference&quot;},{defaultToken:&quot;string.attribute-value.xml&quot;}]}]},this.constructor===s&amp;&amp;this.normalizeRules()};(function(){this.embedTagRules=function(e,t,n){this.$rules.tag.unshift({token:[&quot;meta.tag.punctuation.tag-open.xml&quot;,&quot;meta.tag.&quot;+n+&quot;.tag-name.xml&quot;],regex:&quot;(&lt;)(&quot;+n+&quot;(?=\\s|&gt;|$))&quot;,next:[{include:&quot;attributes&quot;},{token:&quot;meta.tag.punctuation.tag-close.xml&quot;,regex:&quot;/?&gt;&quot;,next:t+&quot;start&quot;}]}),this.$rules[n+&quot;-end&quot;]=[{include:&quot;attributes&quot;},{token:&quot;meta.tag.punctuation.tag-close.xml&quot;,regex:&quot;/?&gt;&quot;,next:&quot;start&quot;,onMatch:function(e,t,n){return n.splice(0),this.token}}],this.embedRules(e,t,[{token:[&quot;meta.tag.punctuation.end-tag-open.xml&quot;,&quot;meta.tag.&quot;+n+&quot;.tag-name.xml&quot;],regex:&quot;(&lt;/)(&quot;+n+&quot;(?=\\s|&gt;|$))&quot;,next:n+&quot;-end&quot;},{token:&quot;string.cdata.xml&quot;,regex:&quot;&lt;\\!\\[CDATA\\[&quot;},{token:&quot;string.cdata.xml&quot;,regex:&quot;\\]\\]&gt;&quot;}])}}).call(i.prototype),r.inherits(s,i),t.XmlHighlightRules=s}),define(&quot;ace/mode/behaviour/xml&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/behaviour&quot;,&quot;ace/token_iterator&quot;,&quot;ace/lib/lang&quot;],function(e,t,n){&quot;use strict&quot;;function u(e,t){return e.type.lastIndexOf(t+&quot;.xml&quot;)&gt;-1}var r=e(&quot;../../lib/oop&quot;),i=e(&quot;../behaviour&quot;).Behaviour,s=e(&quot;../../token_iterator&quot;).TokenIterator,o=e(&quot;../../lib/lang&quot;),a=function(){this.add(&quot;string_dquotes&quot;,&quot;insertion&quot;,function(e,t,n,r,i){if(i==&#39;&quot;&#39;||i==&quot;&#39;&quot;){var o=i,a=r.doc.getTextRange(n.getSelectionRange());if(a!==&quot;&quot;&amp;&amp;a!==&quot;&#39;&quot;&amp;&amp;a!=&#39;&quot;&#39;&amp;&amp;n.getWrapBehavioursEnabled())return{text:o+a+o,selection:!1};var f=n.getCursorPosition(),l=r.doc.getLine(f.row),c=l.substring(f.column,f.column+1),h=new s(r,f.row,f.column),p=h.getCurrentToken();if(c==o&amp;&amp;(u(p,&quot;attribute-value&quot;)||u(p,&quot;string&quot;)))return{text:&quot;&quot;,selection:[1,1]};p||(p=h.stepBackward());if(!p)return;while(u(p,&quot;tag-whitespace&quot;)||u(p,&quot;whitespace&quot;))p=h.stepBackward();var d=!c||c.match(/\s/);if(u(p,&quot;attribute-equals&quot;)&amp;&amp;(d||c==&quot;&gt;&quot;)||u(p,&quot;decl-attribute-equals&quot;)&amp;&amp;(d||c==&quot;?&quot;))return{text:o+o,selection:[1,1]}}}),this.add(&quot;string_dquotes&quot;,&quot;deletion&quot;,function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&amp;&amp;(s==&#39;&quot;&#39;||s==&quot;&#39;&quot;)){var o=r.doc.getLine(i.start.row),u=o.substring(i.start.column+1,i.start.column+2);if(u==s)return i.end.column++,i}}),this.add(&quot;autoclosing&quot;,&quot;insertion&quot;,function(e,t,n,r,i){if(i==&quot;&gt;&quot;){var o=n.getSelectionRange().start,a=new s(r,o.row,o.column),f=a.getCurrentToken()||a.stepBackward();if(!f||!(u(f,&quot;tag-name&quot;)||u(f,&quot;tag-whitespace&quot;)||u(f,&quot;attribute-name&quot;)||u(f,&quot;attribute-equals&quot;)||u(f,&quot;attribute-value&quot;)))return;if(u(f,&quot;reference.attribute-value&quot;))return;if(u(f,&quot;attribute-value&quot;)){var l=f.value.charAt(0);if(l==&#39;&quot;&#39;||l==&quot;&#39;&quot;){var c=f.value.charAt(f.value.length-1),h=a.getCurrentTokenColumn()+f.value.length;if(h&gt;o.column||h==o.column&amp;&amp;l!=c)return}}while(!u(f,&quot;tag-name&quot;)){f=a.stepBackward();if(f.value==&quot;&lt;&quot;){f=a.stepForward();break}}var p=a.getCurrentTokenRow(),d=a.getCurrentTokenColumn();if(u(a.stepBackward(),&quot;end-tag-open&quot;))return;var v=f.value;p==o.row&amp;&amp;(v=v.substring(0,o.column-d));if(this.voidElements.hasOwnProperty(v.toLowerCase()))return;return{text:&quot;&gt;&lt;/&quot;+v+&quot;&gt;&quot;,selection:[1,1]}}}),this.add(&quot;autoindent&quot;,&quot;insertion&quot;,function(e,t,n,r,i){if(i==&quot;\n&quot;){var o=n.getCursorPosition(),u=r.getLine(o.row),a=new s(r,o.row,o.column),f=a.getCurrentToken();if(f&amp;&amp;f.type.indexOf(&quot;tag-close&quot;)!==-1){if(f.value==&quot;/&gt;&quot;)return;while(f&amp;&amp;f.type.indexOf(&quot;tag-name&quot;)===-1)f=a.stepBackward();if(!f)return;var l=f.value,c=a.getCurrentTokenRow();f=a.stepBackward();if(!f||f.type.indexOf(&quot;end-tag&quot;)!==-1)return;if(this.voidElements&amp;&amp;!this.voidElements[l]){var h=r.getTokenAt(o.row,o.column+1),u=r.getLine(c),p=this.$getIndent(u),d=p+r.getTabString();return h&amp;&amp;h.value===&quot;&lt;/&quot;?{text:&quot;\n&quot;+d+&quot;\n&quot;+p,selection:[1,d.length,1,d.length]}:{text:&quot;\n&quot;+d}}}}})};r.inherits(a,i),t.XmlBehaviour=a}),define(&quot;ace/mode/folding/xml&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/lib/lang&quot;,&quot;ace/range&quot;,&quot;ace/mode/folding/fold_mode&quot;,&quot;ace/token_iterator&quot;],function(e,t,n){&quot;use strict&quot;;function l(e,t){return e.type.lastIndexOf(t+&quot;.xml&quot;)&gt;-1}var r=e(&quot;../../lib/oop&quot;),i=e(&quot;../../lib/lang&quot;),s=e(&quot;../../range&quot;).Range,o=e(&quot;./fold_mode&quot;).FoldMode,u=e(&quot;../../token_iterator&quot;).TokenIterator,a=t.FoldMode=function(e,t){o.call(this),this.voidElements=e||{},this.optionalEndTags=r.mixin({},this.voidElements),t&amp;&amp;r.mixin(this.optionalEndTags,t)};r.inherits(a,o);var f=function(){this.tagName=&quot;&quot;,this.closing=!1,this.selfClosing=!1,this.start={row:0,column:0},this.end={row:0,column:0}};(function(){this.getFoldWidget=function(e,t,n){var r=this._getFirstTagInLine(e,n);return r?r.closing||!r.tagName&amp;&amp;r.selfClosing?t==&quot;markbeginend&quot;?&quot;end&quot;:&quot;&quot;:!r.tagName||r.selfClosing||this.voidElements.hasOwnProperty(r.tagName.toLowerCase())?&quot;&quot;:this._findEndTagInLine(e,n,r.tagName,r.end.column)?&quot;&quot;:&quot;start&quot;:&quot;&quot;},this._getFirstTagInLine=function(e,t){var n=e.getTokens(t),r=new f;for(var i=0;i&lt;n.length;i++){var s=n[i];if(l(s,&quot;tag-open&quot;)){r.end.column=r.start.column+s.value.length,r.closing=l(s,&quot;end-tag-open&quot;),s=n[++i];if(!s)return null;r.tagName=s.value,r.end.column+=s.value.length;for(i++;i&lt;n.length;i++){s=n[i],r.end.column+=s.value.length;if(l(s,&quot;tag-close&quot;)){r.selfClosing=s.value==&quot;/&gt;&quot;;break}}return r}if(l(s,&quot;tag-close&quot;))return r.selfClosing=s.value==&quot;/&gt;&quot;,r;r.start.column+=s.value.length}return null},this._findEndTagInLine=function(e,t,n,r){var i=e.getTokens(t),s=0;for(var o=0;o&lt;i.length;o++){var u=i[o];s+=u.value.length;if(s&lt;r)continue;if(l(u,&quot;end-tag-open&quot;)){u=i[o+1];if(u&amp;&amp;u.value==n)return!0}}return!1},this._readTagForward=function(e){var t=e.getCurrentToken();if(!t)return null;var n=new f;do if(l(t,&quot;tag-open&quot;))n.closing=l(t,&quot;end-tag-open&quot;),n.start.row=e.getCurrentTokenRow(),n.start.column=e.getCurrentTokenColumn();else if(l(t,&quot;tag-name&quot;))n.tagName=t.value;else if(l(t,&quot;tag-close&quot;))return n.selfClosing=t.value==&quot;/&gt;&quot;,n.end.row=e.getCurrentTokenRow(),n.end.column=e.getCurrentTokenColumn()+t.value.length,e.stepForward(),n;while(t=e.stepForward());return null},this._readTagBackward=function(e){var t=e.getCurrentToken();if(!t)return null;var n=new f;do{if(l(t,&quot;tag-open&quot;))return n.closing=l(t,&quot;end-tag-open&quot;),n.start.row=e.getCurrentTokenRow(),n.start.column=e.getCurrentTokenColumn(),e.stepBackward(),n;l(t,&quot;tag-name&quot;)?n.tagName=t.value:l(t,&quot;tag-close&quot;)&amp;&amp;(n.selfClosing=t.value==&quot;/&gt;&quot;,n.end.row=e.getCurrentTokenRow(),n.end.column=e.getCurrentTokenColumn()+t.value.length)}while(t=e.stepBackward());return null},this._pop=function(e,t){while(e.length){var n=e[e.length-1];if(!t||n.tagName==t.tagName)return e.pop();if(this.optionalEndTags.hasOwnProperty(n.tagName)){e.pop();continue}return null}},this.getFoldWidgetRange=function(e,t,n){var r=this._getFirstTagInLine(e,n);if(!r)return null;var i=r.closing||r.selfClosing,o=[],a;if(!i){var f=new u(e,n,r.start.column),l={row:n,column:r.start.column+r.tagName.length+2};r.start.row==r.end.row&amp;&amp;(l.column=r.end.column);while(a=this._readTagForward(f)){if(a.selfClosing){if(!o.length)return a.start.column+=a.tagName.length+2,a.end.column-=2,s.fromPoints(a.start,a.end);continue}if(a.closing){this._pop(o,a);if(o.length==0)return s.fromPoints(l,a.start)}else o.push(a)}}else{var f=new u(e,n,r.end.column),c={row:n,column:r.start.column};while(a=this._readTagBackward(f)){if(a.selfClosing){if(!o.length)return a.start.column+=a.tagName.length+2,a.end.column-=2,s.fromPoints(a.start,a.end);continue}if(!a.closing){this._pop(o,a);if(o.length==0)return a.start.column+=a.tagName.length+2,a.start.row==a.end.row&amp;&amp;a.start.column&lt;a.end.column&amp;&amp;(a.start.column=a.end.column),s.fromPoints(a.start,c)}else o.push(a)}}}}).call(a.prototype)}),define(&quot;ace/mode/xml&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/lib/lang&quot;,&quot;ace/mode/text&quot;,&quot;ace/mode/xml_highlight_rules&quot;,&quot;ace/mode/behaviour/xml&quot;,&quot;ace/mode/folding/xml&quot;,&quot;ace/worker/worker_client&quot;],function(e,t,n){&quot;use strict&quot;;var r=e(&quot;../lib/oop&quot;),i=e(&quot;../lib/lang&quot;),s=e(&quot;./text&quot;).Mode,o=e(&quot;./xml_highlight_rules&quot;).XmlHighlightRules,u=e(&quot;./behaviour/xml&quot;).XmlBehaviour,a=e(&quot;./folding/xml&quot;).FoldMode,f=e(&quot;../worker/worker_client&quot;).WorkerClient,l=function(){this.HighlightRules=o,this.$behaviour=new u,this.foldingRules=new a};r.inherits(l,s),function(){this.voidElements=i.arrayToMap([]),this.blockComment={start:&quot;&lt;!--&quot;,end:&quot;--&gt;&quot;},this.createWorker=function(e){var t=new f([&quot;ace&quot;],&quot;ace/mode/xml_worker&quot;,&quot;Worker&quot;);return t.attachToDocument(e.getDocument()),t.on(&quot;error&quot;,function(t){e.setAnnotations(t.data)}),t.on(&quot;terminate&quot;,function(){e.clearAnnotations()}),t},this.$id=&quot;ace/mode/xml&quot;}.call(l.prototype),t.Mode=l})</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="container site-footer-container">
  <div class="site-footer " role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.14456s from github-fe-f06f8d5.cp1-iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  

  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/compat-8a4318ffea09a0cdb8214b76cf2926b9f6a0ced318a317bed419db19214c690d.js"></script>
    <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-5fe43fc6a9e5120c427334a38e9a7601418682a33981c073851434a7e1005049.js"></script>
    <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-f5fdc557107f718a5192c173d8f6248b1a6afa7578e2d2522f323f81c99c0b9b.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

