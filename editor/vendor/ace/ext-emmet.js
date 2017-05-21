





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-81a59bf26d881d29286674f6deefe779c444382fff322085b50ba455460ccae5.css" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-8789d320be825216d799841dcb27bc201b0605572d4c8c07c30feb5bc27a66b7.css" media="all" rel="stylesheet" />
  
  
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-0047c348443848937ad9891b690c4acb6ee0d96263d91e9b1725194e65869e91.css" media="all" rel="stylesheet" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>ace-builds/ext-emmet.js at master · ajaxorg/ace-builds · GitHub</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars1.githubusercontent.com/u/168515?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="ajaxorg/ace-builds" property="og:title" /><meta content="https://github.com/ajaxorg/ace-builds" property="og:url" /><meta content="Contribute to ace-builds development by creating an account on GitHub." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="B926:6EE3:27808F8:3AC127D:5920E718" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="B926:6EE3:27808F8:3AC127D:5920E718" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged Out">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="ZTQ5YTI2ZjNlYWNhYjM2YTg3NWI5N2RiOWQ3Y2ViNWU4NjMwZjFlYjQ4NGIxNGNhOGNiOTBkN2M4MzVlMTkyOXx7InJlbW90ZV9hZGRyZXNzIjoiODIuMTgxLjczLjEwNSIsInJlcXVlc3RfaWQiOiJCOTI2OjZFRTM6Mjc4MDhGODozQUMxMjdEOjU5MjBFNzE4IiwidGltZXN0YW1wIjoxNDk1MzI4NTM3LCJob3N0IjoiZ2l0aHViLmNvbSJ9">


  <meta name="html-safe-nonce" content="366edfa65b8b521a6a52d4bd42ea6da232f59e06">

  <meta http-equiv="x-pjax-version" content="9f48f82d435db8e8916f273e55a94a05">
  

    
  <meta name="description" content="Contribute to ace-builds development by creating an account on GitHub.">
  <meta name="go-import" content="github.com/ajaxorg/ace-builds git https://github.com/ajaxorg/ace-builds.git">

  <meta content="168515" name="octolytics-dimension-user_id" /><meta content="ajaxorg" name="octolytics-dimension-user_login" /><meta content="4124657" name="octolytics-dimension-repository_id" /><meta content="ajaxorg/ace-builds" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="4124657" name="octolytics-dimension-repository_network_root_id" /><meta content="ajaxorg/ace-builds" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/ajaxorg/ace-builds/commits/master.atom" rel="alternate" title="Recent Commits to ace-builds:master" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/ajaxorg/ace-builds/blob/master/src-min/ext-emmet.js" data-pjax-transient>


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
        <a href="/ajaxorg/ace-builds/blob/master/src-min/ext-emmet.js" class="header-search-scope no-underline">This repository</a>
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


          <a class="text-bold site-header-link" href="/login?return_to=%2Fajaxorg%2Face-builds%2Fblob%2Fmaster%2Fsrc-min%2Fext-emmet.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
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

    
          

<a href="/ajaxorg/ace-builds/blob/784ffa862c5351e0d300370f61471b1eb95ebcf1/src-min/ext-emmet.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:d2cc6da334aba4c739ce3a8a02538193 -->

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
               href="/ajaxorg/ace-builds/blob/gh-pages/src-min/ext-emmet.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/ajaxorg/ace-builds/blob/master/src-min/ext-emmet.js"
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
              href="/ajaxorg/ace-builds/tree/v1.2.6/src-min/ext-emmet.js"
              data-name="v1.2.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.6">
                v1.2.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.2.5/src-min/ext-emmet.js"
              data-name="v1.2.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.5">
                v1.2.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.2.4/src-min/ext-emmet.js"
              data-name="v1.2.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.4">
                v1.2.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.2.3/src-min/ext-emmet.js"
              data-name="v1.2.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.3">
                v1.2.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.2.2/src-min/ext-emmet.js"
              data-name="v1.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.2">
                v1.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.2.1/src-min/ext-emmet.js"
              data-name="v1.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.1">
                v1.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.2.0/src-min/ext-emmet.js"
              data-name="v1.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.0">
                v1.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.9/src-min/ext-emmet.js"
              data-name="v1.1.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.9">
                v1.1.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.8/src-min/ext-emmet.js"
              data-name="v1.1.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.8">
                v1.1.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.7/src-min/ext-emmet.js"
              data-name="v1.1.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.7">
                v1.1.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.6/src-min/ext-emmet.js"
              data-name="v1.1.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.6">
                v1.1.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.5/src-min/ext-emmet.js"
              data-name="v1.1.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.5">
                v1.1.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.4/src-min/ext-emmet.js"
              data-name="v1.1.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.4">
                v1.1.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.3/src-min/ext-emmet.js"
              data-name="v1.1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.3">
                v1.1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.2/src-min/ext-emmet.js"
              data-name="v1.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.2">
                v1.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.01/src-min/ext-emmet.js"
              data-name="v1.1.01"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.01">
                v1.1.01
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.1/src-min/ext-emmet.js"
              data-name="v1.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.1">
                v1.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.0.0/src-min/ext-emmet.js"
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
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/ajaxorg/ace-builds"><span>ace-builds</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/ajaxorg/ace-builds/tree/master/src-min"><span>src-min</span></a></span><span class="separator">/</span><strong class="final-path">ext-emmet.js</strong>
  </div>
</div>


<include-fragment class="commit-tease" src="/ajaxorg/ace-builds/contributors/master/src-min/ext-emmet.js">
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
      <a href="/ajaxorg/ace-builds/raw/master/src-min/ext-emmet.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/ajaxorg/ace-builds/blame/master/src-min/ext-emmet.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/ajaxorg/ace-builds/commits/master/src-min/ext-emmet.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
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
      5 lines (4 sloc)
      <span class="file-info-divider"></span>
    21 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">define(&quot;ace/snippets&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/lib/event_emitter&quot;,&quot;ace/lib/lang&quot;,&quot;ace/range&quot;,&quot;ace/anchor&quot;,&quot;ace/keyboard/hash_handler&quot;,&quot;ace/tokenizer&quot;,&quot;ace/lib/dom&quot;,&quot;ace/editor&quot;],function(e,t,n){&quot;use strict&quot;;var r=e(&quot;./lib/oop&quot;),i=e(&quot;./lib/event_emitter&quot;).EventEmitter,s=e(&quot;./lib/lang&quot;),o=e(&quot;./range&quot;).Range,u=e(&quot;./anchor&quot;).Anchor,a=e(&quot;./keyboard/hash_handler&quot;).HashHandler,f=e(&quot;./tokenizer&quot;).Tokenizer,l=o.comparePoints,c=function(){this.snippetMap={},this.snippetNameMap={}};(function(){r.implement(this,i),this.getTokenizer=function(){function e(e,t,n){return e=e.substr(1),/^\d+$/.test(e)&amp;&amp;!n.inFormatString?[{tabstopId:parseInt(e,10)}]:[{text:e}]}function t(e){return&quot;(?:[^\\\\&quot;+e+&quot;]|\\\\.)&quot;}return c.$tokenizer=new f({start:[{regex:/:/,onMatch:function(e,t,n){return n.length&amp;&amp;n[0].expectIf?(n[0].expectIf=!1,n[0].elseBranch=n[0],[n[0]]):&quot;:&quot;}},{regex:/\\./,onMatch:function(e,t,n){var r=e[1];return r==&quot;}&quot;&amp;&amp;n.length?e=r:&quot;`$\\&quot;.indexOf(r)!=-1?e=r:n.inFormatString&amp;&amp;(r==&quot;n&quot;?e=&quot;\n&quot;:r==&quot;t&quot;?e=&quot;\n&quot;:&quot;ulULE&quot;.indexOf(r)!=-1&amp;&amp;(e={changeCase:r,local:r&gt;&quot;a&quot;})),[e]}},{regex:/}/,onMatch:function(e,t,n){return[n.length?n.shift():e]}},{regex:/\$(?:\d+|\w+)/,onMatch:e},{regex:/\$\{[\dA-Z_a-z]+/,onMatch:function(t,n,r){var i=e(t.substr(1),n,r);return r.unshift(i[0]),i},next:&quot;snippetVar&quot;},{regex:/\n/,token:&quot;newline&quot;,merge:!1}],snippetVar:[{regex:&quot;\\|&quot;+t(&quot;\\|&quot;)+&quot;*\\|&quot;,onMatch:function(e,t,n){n[0].choices=e.slice(1,-1).split(&quot;,&quot;)},next:&quot;start&quot;},{regex:&quot;/(&quot;+t(&quot;/&quot;)+&quot;+)/(?:(&quot;+t(&quot;/&quot;)+&quot;*)/)(\\w*):?&quot;,onMatch:function(e,t,n){var r=n[0];return r.fmtString=e,e=this.splitRegex.exec(e),r.guard=e[1],r.fmt=e[2],r.flag=e[3],&quot;&quot;},next:&quot;start&quot;},{regex:&quot;`&quot;+t(&quot;`&quot;)+&quot;*`&quot;,onMatch:function(e,t,n){return n[0].code=e.splice(1,-1),&quot;&quot;},next:&quot;start&quot;},{regex:&quot;\\?&quot;,onMatch:function(e,t,n){n[0]&amp;&amp;(n[0].expectIf=!0)},next:&quot;start&quot;},{regex:&quot;([^:}\\\\]|\\\\.)*:?&quot;,token:&quot;&quot;,next:&quot;start&quot;}],formatString:[{regex:&quot;/(&quot;+t(&quot;/&quot;)+&quot;+)/&quot;,token:&quot;regex&quot;},{regex:&quot;&quot;,onMatch:function(e,t,n){n.inFormatString=!0},next:&quot;start&quot;}]}),c.prototype.getTokenizer=function(){return c.$tokenizer},c.$tokenizer},this.tokenizeTmSnippet=function(e,t){return this.getTokenizer().getLineTokens(e,t).tokens.map(function(e){return e.value||e})},this.$getDefaultValue=function(e,t){if(/^[A-Z]\d+$/.test(t)){var n=t.substr(1);return(this.variables[t[0]+&quot;__&quot;]||{})[n]}if(/^\d+$/.test(t))return(this.variables.__||{})[t];t=t.replace(/^TM_/,&quot;&quot;);if(!e)return;var r=e.session;switch(t){case&quot;CURRENT_WORD&quot;:var i=r.getWordRange();case&quot;SELECTION&quot;:case&quot;SELECTED_TEXT&quot;:return r.getTextRange(i);case&quot;CURRENT_LINE&quot;:return r.getLine(e.getCursorPosition().row);case&quot;PREV_LINE&quot;:return r.getLine(e.getCursorPosition().row-1);case&quot;LINE_INDEX&quot;:return e.getCursorPosition().column;case&quot;LINE_NUMBER&quot;:return e.getCursorPosition().row+1;case&quot;SOFT_TABS&quot;:return r.getUseSoftTabs()?&quot;YES&quot;:&quot;NO&quot;;case&quot;TAB_SIZE&quot;:return r.getTabSize();case&quot;FILENAME&quot;:case&quot;FILEPATH&quot;:return&quot;&quot;;case&quot;FULLNAME&quot;:return&quot;Ace&quot;}},this.variables={},this.getVariableValue=function(e,t){return this.variables.hasOwnProperty(t)?this.variables[t](e,t)||&quot;&quot;:this.$getDefaultValue(e,t)||&quot;&quot;},this.tmStrFormat=function(e,t,n){var r=t.flag||&quot;&quot;,i=t.guard;i=new RegExp(i,r.replace(/[^gi]/,&quot;&quot;));var s=this.tokenizeTmSnippet(t.fmt,&quot;formatString&quot;),o=this,u=e.replace(i,function(){o.variables.__=arguments;var e=o.resolveVariables(s,n),t=&quot;E&quot;;for(var r=0;r&lt;e.length;r++){var i=e[r];if(typeof i==&quot;object&quot;){e[r]=&quot;&quot;;if(i.changeCase&amp;&amp;i.local){var u=e[r+1];u&amp;&amp;typeof u==&quot;string&quot;&amp;&amp;(i.changeCase==&quot;u&quot;?e[r]=u[0].toUpperCase():e[r]=u[0].toLowerCase(),e[r+1]=u.substr(1))}else i.changeCase&amp;&amp;(t=i.changeCase)}else t==&quot;U&quot;?e[r]=i.toUpperCase():t==&quot;L&quot;&amp;&amp;(e[r]=i.toLowerCase())}return e.join(&quot;&quot;)});return this.variables.__=null,u},this.resolveVariables=function(e,t){function o(t){var n=e.indexOf(t,r+1);n!=-1&amp;&amp;(r=n)}var n=[];for(var r=0;r&lt;e.length;r++){var i=e[r];if(typeof i==&quot;string&quot;)n.push(i);else{if(typeof i!=&quot;object&quot;)continue;if(i.skip)o(i);else{if(i.processed&lt;r)continue;if(i.text){var s=this.getVariableValue(t,i.text);s&amp;&amp;i.fmtString&amp;&amp;(s=this.tmStrFormat(s,i)),i.processed=r,i.expectIf==null?s&amp;&amp;(n.push(s),o(i)):s?i.skip=i.elseBranch:o(i)}else i.tabstopId!=null?n.push(i):i.changeCase!=null&amp;&amp;n.push(i)}}}return n},this.insertSnippetForSelection=function(e,t){function f(e){var t=[];for(var n=0;n&lt;e.length;n++){var r=e[n];if(typeof r==&quot;object&quot;){if(a[r.tabstopId])continue;var i=e.lastIndexOf(r,n-1);r=t[i]||{tabstopId:r.tabstopId}}t[n]=r}return t}var n=e.getCursorPosition(),r=e.session.getLine(n.row),i=e.session.getTabString(),s=r.match(/^\s*/)[0];n.column&lt;s.length&amp;&amp;(s=s.slice(0,n.column)),t=t.replace(/\r/g,&quot;&quot;);var o=this.tokenizeTmSnippet(t);o=this.resolveVariables(o,e),o=o.map(function(e){return e==&quot;\n&quot;?e+s:typeof e==&quot;string&quot;?e.replace(/\t/g,i):e});var u=[];o.forEach(function(e,t){if(typeof e!=&quot;object&quot;)return;var n=e.tabstopId,r=u[n];r||(r=u[n]=[],r.index=n,r.value=&quot;&quot;);if(r.indexOf(e)!==-1)return;r.push(e);var i=o.indexOf(e,t+1);if(i===-1)return;var s=o.slice(t+1,i),a=s.some(function(e){return typeof e==&quot;object&quot;});a&amp;&amp;!r.value?r.value=s:s.length&amp;&amp;(!r.value||typeof r.value!=&quot;string&quot;)&amp;&amp;(r.value=s.join(&quot;&quot;))}),u.forEach(function(e){e.length=0});var a={};for(var l=0;l&lt;o.length;l++){var c=o[l];if(typeof c!=&quot;object&quot;)continue;var p=c.tabstopId,d=o.indexOf(c,l+1);if(a[p]){a[p]===c&amp;&amp;(a[p]=null);continue}var v=u[p],m=typeof v.value==&quot;string&quot;?[v.value]:f(v.value);m.unshift(l+1,Math.max(0,d-l)),m.push(c),a[p]=c,o.splice.apply(o,m),v.indexOf(c)===-1&amp;&amp;v.push(c)}var g=0,y=0,b=&quot;&quot;;o.forEach(function(e){if(typeof e==&quot;string&quot;){var t=e.split(&quot;\n&quot;);t.length&gt;1?(y=t[t.length-1].length,g+=t.length-1):y+=e.length,b+=e}else e.start?e.end={row:g,column:y}:e.start={row:g,column:y}});var w=e.getSelectionRange(),E=e.session.replace(w,b),S=new h(e),x=e.inVirtualSelectionMode&amp;&amp;e.selection.index;S.addTabstops(u,w.start,E,x)},this.insertSnippet=function(e,t){var n=this;if(e.inVirtualSelectionMode)return n.insertSnippetForSelection(e,t);e.forEachSelection(function(){n.insertSnippetForSelection(e,t)},null,{keepOrder:!0}),e.tabstopManager&amp;&amp;e.tabstopManager.tabNext()},this.$getScope=function(e){var t=e.session.$mode.$id||&quot;&quot;;t=t.split(&quot;/&quot;).pop();if(t===&quot;html&quot;||t===&quot;php&quot;){t===&quot;php&quot;&amp;&amp;!e.session.$mode.inlinePhp&amp;&amp;(t=&quot;html&quot;);var n=e.getCursorPosition(),r=e.session.getState(n.row);typeof r==&quot;object&quot;&amp;&amp;(r=r[0]),r.substring&amp;&amp;(r.substring(0,3)==&quot;js-&quot;?t=&quot;javascript&quot;:r.substring(0,4)==&quot;css-&quot;?t=&quot;css&quot;:r.substring(0,4)==&quot;php-&quot;&amp;&amp;(t=&quot;php&quot;))}return t},this.getActiveScopes=function(e){var t=this.$getScope(e),n=[t],r=this.snippetMap;return r[t]&amp;&amp;r[t].includeScopes&amp;&amp;n.push.apply(n,r[t].includeScopes),n.push(&quot;_&quot;),n},this.expandWithTab=function(e,t){var n=this,r=e.forEachSelection(function(){return n.expandSnippetForSelection(e,t)},null,{keepOrder:!0});return r&amp;&amp;e.tabstopManager&amp;&amp;e.tabstopManager.tabNext(),r},this.expandSnippetForSelection=function(e,t){var n=e.getCursorPosition(),r=e.session.getLine(n.row),i=r.substring(0,n.column),s=r.substr(n.column),o=this.snippetMap,u;return this.getActiveScopes(e).some(function(e){var t=o[e];return t&amp;&amp;(u=this.findMatchingSnippet(t,i,s)),!!u},this),u?t&amp;&amp;t.dryRun?!0:(e.session.doc.removeInLine(n.row,n.column-u.replaceBefore.length,n.column+u.replaceAfter.length),this.variables.M__=u.matchBefore,this.variables.T__=u.matchAfter,this.insertSnippetForSelection(e,u.content),this.variables.M__=this.variables.T__=null,!0):!1},this.findMatchingSnippet=function(e,t,n){for(var r=e.length;r--;){var i=e[r];if(i.startRe&amp;&amp;!i.startRe.test(t))continue;if(i.endRe&amp;&amp;!i.endRe.test(n))continue;if(!i.startRe&amp;&amp;!i.endRe)continue;return i.matchBefore=i.startRe?i.startRe.exec(t):[&quot;&quot;],i.matchAfter=i.endRe?i.endRe.exec(n):[&quot;&quot;],i.replaceBefore=i.triggerRe?i.triggerRe.exec(t)[0]:&quot;&quot;,i.replaceAfter=i.endTriggerRe?i.endTriggerRe.exec(n)[0]:&quot;&quot;,i}},this.snippetMap={},this.snippetNameMap={},this.register=function(e,t){function o(e){return e&amp;&amp;!/^\^?\(.*\)\$?$|^\\b$/.test(e)&amp;&amp;(e=&quot;(?:&quot;+e+&quot;)&quot;),e||&quot;&quot;}function u(e,t,n){return e=o(e),t=o(t),n?(e=t+e,e&amp;&amp;e[e.length-1]!=&quot;$&quot;&amp;&amp;(e+=&quot;$&quot;)):(e+=t,e&amp;&amp;e[0]!=&quot;^&quot;&amp;&amp;(e=&quot;^&quot;+e)),new RegExp(e)}function a(e){e.scope||(e.scope=t||&quot;_&quot;),t=e.scope,n[t]||(n[t]=[],r[t]={});var o=r[t];if(e.name){var a=o[e.name];a&amp;&amp;i.unregister(a),o[e.name]=e}n[t].push(e),e.tabTrigger&amp;&amp;!e.trigger&amp;&amp;(!e.guard&amp;&amp;/^\w/.test(e.tabTrigger)&amp;&amp;(e.guard=&quot;\\b&quot;),e.trigger=s.escapeRegExp(e.tabTrigger));if(!e.trigger&amp;&amp;!e.guard&amp;&amp;!e.endTrigger&amp;&amp;!e.endGuard)return;e.startRe=u(e.trigger,e.guard,!0),e.triggerRe=new RegExp(e.trigger,&quot;&quot;,!0),e.endRe=u(e.endTrigger,e.endGuard,!0),e.endTriggerRe=new RegExp(e.endTrigger,&quot;&quot;,!0)}var n=this.snippetMap,r=this.snippetNameMap,i=this;e||(e=[]),e&amp;&amp;e.content?a(e):Array.isArray(e)&amp;&amp;e.forEach(a),this._signal(&quot;registerSnippets&quot;,{scope:t})},this.unregister=function(e,t){function i(e){var i=r[e.scope||t];if(i&amp;&amp;i[e.name]){delete i[e.name];var s=n[e.scope||t],o=s&amp;&amp;s.indexOf(e);o&gt;=0&amp;&amp;s.splice(o,1)}}var n=this.snippetMap,r=this.snippetNameMap;e.content?i(e):Array.isArray(e)&amp;&amp;e.forEach(i)},this.parseSnippetFile=function(e){e=e.replace(/\r/g,&quot;&quot;);var t=[],n={},r=/^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm,i;while(i=r.exec(e)){if(i[1])try{n=JSON.parse(i[1]),t.push(n)}catch(s){}if(i[4])n.content=i[4].replace(/^\t/gm,&quot;&quot;),t.push(n),n={};else{var o=i[2],u=i[3];if(o==&quot;regex&quot;){var a=/\/((?:[^\/\\]|\\.)*)|$/g;n.guard=a.exec(u)[1],n.trigger=a.exec(u)[1],n.endTrigger=a.exec(u)[1],n.endGuard=a.exec(u)[1]}else o==&quot;snippet&quot;?(n.tabTrigger=u.match(/^\S*/)[0],n.name||(n.name=u)):n[o]=u}}return t},this.getSnippetByName=function(e,t){var n=this.snippetNameMap,r;return this.getActiveScopes(t).some(function(t){var i=n[t];return i&amp;&amp;(r=i[e]),!!r},this),r}}).call(c.prototype);var h=function(e){if(e.tabstopManager)return e.tabstopManager;e.tabstopManager=this,this.$onChange=this.onChange.bind(this),this.$onChangeSelection=s.delayedCall(this.onChangeSelection.bind(this)).schedule,this.$onChangeSession=this.onChangeSession.bind(this),this.$onAfterExec=this.onAfterExec.bind(this),this.attach(e)};(function(){this.attach=function(e){this.index=0,this.ranges=[],this.tabstops=[],this.$openTabstops=null,this.selectedTabstop=null,this.editor=e,this.editor.on(&quot;change&quot;,this.$onChange),this.editor.on(&quot;changeSelection&quot;,this.$onChangeSelection),this.editor.on(&quot;changeSession&quot;,this.$onChangeSession),this.editor.commands.on(&quot;afterExec&quot;,this.$onAfterExec),this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)},this.detach=function(){this.tabstops.forEach(this.removeTabstopMarkers,this),this.ranges=null,this.tabstops=null,this.selectedTabstop=null,this.editor.removeListener(&quot;change&quot;,this.$onChange),this.editor.removeListener(&quot;changeSelection&quot;,this.$onChangeSelection),this.editor.removeListener(&quot;changeSession&quot;,this.$onChangeSession),this.editor.commands.removeListener(&quot;afterExec&quot;,this.$onAfterExec),this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.tabstopManager=null,this.editor=null},this.onChange=function(e){var t=e,n=e.action[0]==&quot;r&quot;,r=e.start,i=e.end,s=r.row,o=i.row,u=o-s,a=i.column-r.column;n&amp;&amp;(u=-u,a=-a);if(!this.$inChange&amp;&amp;n){var f=this.selectedTabstop,c=f&amp;&amp;!f.some(function(e){return l(e.start,r)&lt;=0&amp;&amp;l(e.end,i)&gt;=0});if(c)return this.detach()}var h=this.ranges;for(var p=0;p&lt;h.length;p++){var d=h[p];if(d.end.row&lt;r.row)continue;if(n&amp;&amp;l(r,d.start)&lt;0&amp;&amp;l(i,d.end)&gt;0){this.removeRange(d),p--;continue}d.start.row==s&amp;&amp;d.start.column&gt;r.column&amp;&amp;(d.start.column+=a),d.end.row==s&amp;&amp;d.end.column&gt;=r.column&amp;&amp;(d.end.column+=a),d.start.row&gt;=s&amp;&amp;(d.start.row+=u),d.end.row&gt;=s&amp;&amp;(d.end.row+=u),l(d.start,d.end)&gt;0&amp;&amp;this.removeRange(d)}h.length||this.detach()},this.updateLinkedFields=function(){var e=this.selectedTabstop;if(!e||!e.hasLinkedRanges)return;this.$inChange=!0;var n=this.editor.session,r=n.getTextRange(e.firstNonLinked);for(var i=e.length;i--;){var s=e[i];if(!s.linked)continue;var o=t.snippetManager.tmStrFormat(r,s.original);n.replace(s,o)}this.$inChange=!1},this.onAfterExec=function(e){e.command&amp;&amp;!e.command.readOnly&amp;&amp;this.updateLinkedFields()},this.onChangeSelection=function(){if(!this.editor)return;var e=this.editor.selection.lead,t=this.editor.selection.anchor,n=this.editor.selection.isEmpty();for(var r=this.ranges.length;r--;){if(this.ranges[r].linked)continue;var i=this.ranges[r].contains(e.row,e.column),s=n||this.ranges[r].contains(t.row,t.column);if(i&amp;&amp;s)return}this.detach()},this.onChangeSession=function(){this.detach()},this.tabNext=function(e){var t=this.tabstops.length,n=this.index+(e||1);n=Math.min(Math.max(n,1),t),n==t&amp;&amp;(n=0),this.selectTabstop(n),n===0&amp;&amp;this.detach()},this.selectTabstop=function(e){this.$openTabstops=null;var t=this.tabstops[this.index];t&amp;&amp;this.addTabstopMarkers(t),this.index=e,t=this.tabstops[this.index];if(!t||!t.length)return;this.selectedTabstop=t;if(!this.editor.inVirtualSelectionMode){var n=this.editor.multiSelect;n.toSingleRange(t.firstNonLinked.clone());for(var r=t.length;r--;){if(t.hasLinkedRanges&amp;&amp;t[r].linked)continue;n.addRange(t[r].clone(),!0)}n.ranges[0]&amp;&amp;n.addRange(n.ranges[0].clone())}else this.editor.selection.setRange(t.firstNonLinked);this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)},this.addTabstops=function(e,t,n){this.$openTabstops||(this.$openTabstops=[]);if(!e[0]){var r=o.fromPoints(n,n);v(r.start,t),v(r.end,t),e[0]=[r],e[0].index=0}var i=this.index,s=[i+1,0],u=this.ranges;e.forEach(function(e,n){var r=this.$openTabstops[n]||e;for(var i=e.length;i--;){var a=e[i],f=o.fromPoints(a.start,a.end||a.start);d(f.start,t),d(f.end,t),f.original=a,f.tabstop=r,u.push(f),r!=e?r.unshift(f):r[i]=f,a.fmtString?(f.linked=!0,r.hasLinkedRanges=!0):r.firstNonLinked||(r.firstNonLinked=f)}r.firstNonLinked||(r.hasLinkedRanges=!1),r===e&amp;&amp;(s.push(r),this.$openTabstops[n]=r),this.addTabstopMarkers(r)},this),s.length&gt;2&amp;&amp;(this.tabstops.length&amp;&amp;s.push(s.splice(2,1)[0]),this.tabstops.splice.apply(this.tabstops,s))},this.addTabstopMarkers=function(e){var t=this.editor.session;e.forEach(function(e){e.markerId||(e.markerId=t.addMarker(e,&quot;ace_snippet-marker&quot;,&quot;text&quot;))})},this.removeTabstopMarkers=function(e){var t=this.editor.session;e.forEach(function(e){t.removeMarker(e.markerId),e.markerId=null})},this.removeRange=function(e){var t=e.tabstop.indexOf(e);e.tabstop.splice(t,1),t=this.ranges.indexOf(e),this.ranges.splice(t,1),this.editor.session.removeMarker(e.markerId),e.tabstop.length||(t=this.tabstops.indexOf(e.tabstop),t!=-1&amp;&amp;this.tabstops.splice(t,1),this.tabstops.length||this.detach())},this.keyboardHandler=new a,this.keyboardHandler.bindKeys({Tab:function(e){if(t.snippetManager&amp;&amp;t.snippetManager.expandWithTab(e))return;e.tabstopManager.tabNext(1)},&quot;Shift-Tab&quot;:function(e){e.tabstopManager.tabNext(-1)},Esc:function(e){e.tabstopManager.detach()},Return:function(e){return!1}})}).call(h.prototype);var p={};p.onChange=u.prototype.onChange,p.setPosition=function(e,t){this.pos.row=e,this.pos.column=t},p.update=function(e,t,n){this.$insertRight=n,this.pos=e,this.onChange(t)};var d=function(e,t){e.row==0&amp;&amp;(e.column+=t.column),e.row+=t.row},v=function(e,t){e.row==t.row&amp;&amp;(e.column-=t.column),e.row-=t.row};e(&quot;./lib/dom&quot;).importCssString(&quot;.ace_snippet-marker {    -moz-box-sizing: border-box;    box-sizing: border-box;    background: rgba(194, 193, 208, 0.09);    border: 1px dotted rgba(211, 208, 235, 0.62);    position: absolute;}&quot;),t.snippetManager=new c;var m=e(&quot;./editor&quot;).Editor;(function(){this.insertSnippet=function(e,n){return t.snippetManager.insertSnippet(this,e,n)},this.expandSnippet=function(e){return t.snippetManager.expandWithTab(this,e)}}).call(m.prototype)}),define(&quot;ace/ext/emmet&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/keyboard/hash_handler&quot;,&quot;ace/editor&quot;,&quot;ace/snippets&quot;,&quot;ace/range&quot;,&quot;resources&quot;,&quot;resources&quot;,&quot;tabStops&quot;,&quot;resources&quot;,&quot;utils&quot;,&quot;actions&quot;,&quot;ace/config&quot;,&quot;ace/config&quot;],function(e,t,n){&quot;use strict&quot;;function f(){}var r=e(&quot;ace/keyboard/hash_handler&quot;).HashHandler,i=e(&quot;ace/editor&quot;).Editor,s=e(&quot;ace/snippets&quot;).snippetManager,o=e(&quot;ace/range&quot;).Range,u,a;f.prototype={setupContext:function(e){this.ace=e,this.indentation=e.session.getTabString(),u||(u=window.emmet);var t=u.resources||u.require(&quot;resources&quot;);t.setVariable(&quot;indentation&quot;,this.indentation),this.$syntax=null,this.$syntax=this.getSyntax()},getSelectionRange:function(){var e=this.ace.getSelectionRange(),t=this.ace.session.doc;return{start:t.positionToIndex(e.start),end:t.positionToIndex(e.end)}},createSelection:function(e,t){var n=this.ace.session.doc;this.ace.selection.setRange({start:n.indexToPosition(e),end:n.indexToPosition(t)})},getCurrentLineRange:function(){var e=this.ace,t=e.getCursorPosition().row,n=e.session.getLine(t).length,r=e.session.doc.positionToIndex({row:t,column:0});return{start:r,end:r+n}},getCaretPos:function(){var e=this.ace.getCursorPosition();return this.ace.session.doc.positionToIndex(e)},setCaretPos:function(e){var t=this.ace.session.doc.indexToPosition(e);this.ace.selection.moveToPosition(t)},getCurrentLine:function(){var e=this.ace.getCursorPosition().row;return this.ace.session.getLine(e)},replaceContent:function(e,t,n,r){n==null&amp;&amp;(n=t==null?this.getContent().length:t),t==null&amp;&amp;(t=0);var i=this.ace,u=i.session.doc,a=o.fromPoints(u.indexToPosition(t),u.indexToPosition(n));i.session.remove(a),a.end=a.start,e=this.$updateTabstops(e),s.insertSnippet(i,e)},getContent:function(){return this.ace.getValue()},getSyntax:function(){if(this.$syntax)return this.$syntax;var e=this.ace.session.$modeId.split(&quot;/&quot;).pop();if(e==&quot;html&quot;||e==&quot;php&quot;){var t=this.ace.getCursorPosition(),n=this.ace.session.getState(t.row);typeof n!=&quot;string&quot;&amp;&amp;(n=n[0]),n&amp;&amp;(n=n.split(&quot;-&quot;),n.length&gt;1?e=n[0]:e==&quot;php&quot;&amp;&amp;(e=&quot;html&quot;))}return e},getProfileName:function(){var e=u.resources||u.require(&quot;resources&quot;);switch(this.getSyntax()){case&quot;css&quot;:return&quot;css&quot;;case&quot;xml&quot;:case&quot;xsl&quot;:return&quot;xml&quot;;case&quot;html&quot;:var t=e.getVariable(&quot;profile&quot;);return t||(t=this.ace.session.getLines(0,2).join(&quot;&quot;).search(/&lt;!DOCTYPE[^&gt;]+XHTML/i)!=-1?&quot;xhtml&quot;:&quot;html&quot;),t;default:var n=this.ace.session.$mode;return n.emmetConfig&amp;&amp;n.emmetConfig.profile||&quot;xhtml&quot;}},prompt:function(e){return prompt(e)},getSelection:function(){return this.ace.session.getTextRange()},getFilePath:function(){return&quot;&quot;},$updateTabstops:function(e){var t=1e3,n=0,r=null,i=u.tabStops||u.require(&quot;tabStops&quot;),s=u.resources||u.require(&quot;resources&quot;),o=s.getVocabulary(&quot;user&quot;),a={tabstop:function(e){var s=parseInt(e.group,10),o=s===0;o?s=++n:s+=t;var u=e.placeholder;u&amp;&amp;(u=i.processText(u,a));var f=&quot;${&quot;+s+(u?&quot;:&quot;+u:&quot;&quot;)+&quot;}&quot;;return o&amp;&amp;(r=[e.start,f]),f},escape:function(e){return e==&quot;$&quot;?&quot;\\$&quot;:e==&quot;\\&quot;?&quot;\\\\&quot;:e}};e=i.processText(e,a);if(o.variables.insert_final_tabstop&amp;&amp;!/\$\{0\}$/.test(e))e+=&quot;${0}&quot;;else if(r){var f=u.utils?u.utils.common:u.require(&quot;utils&quot;);e=f.replaceSubstring(e,&quot;${0}&quot;,r[0],r[1])}return e}};var l={expand_abbreviation:{mac:&quot;ctrl+alt+e&quot;,win:&quot;alt+e&quot;},match_pair_outward:{mac:&quot;ctrl+d&quot;,win:&quot;ctrl+,&quot;},match_pair_inward:{mac:&quot;ctrl+j&quot;,win:&quot;ctrl+shift+0&quot;},matching_pair:{mac:&quot;ctrl+alt+j&quot;,win:&quot;alt+j&quot;},next_edit_point:&quot;alt+right&quot;,prev_edit_point:&quot;alt+left&quot;,toggle_comment:{mac:&quot;command+/&quot;,win:&quot;ctrl+/&quot;},split_join_tag:{mac:&quot;shift+command+&#39;&quot;,win:&quot;shift+ctrl+`&quot;},remove_tag:{mac:&quot;command+&#39;&quot;,win:&quot;shift+ctrl+;&quot;},evaluate_math_expression:{mac:&quot;shift+command+y&quot;,win:&quot;shift+ctrl+y&quot;},increment_number_by_1:&quot;ctrl+up&quot;,decrement_number_by_1:&quot;ctrl+down&quot;,increment_number_by_01:&quot;alt+up&quot;,decrement_number_by_01:&quot;alt+down&quot;,increment_number_by_10:{mac:&quot;alt+command+up&quot;,win:&quot;shift+alt+up&quot;},decrement_number_by_10:{mac:&quot;alt+command+down&quot;,win:&quot;shift+alt+down&quot;},select_next_item:{mac:&quot;shift+command+.&quot;,win:&quot;shift+ctrl+.&quot;},select_previous_item:{mac:&quot;shift+command+,&quot;,win:&quot;shift+ctrl+,&quot;},reflect_css_value:{mac:&quot;shift+command+r&quot;,win:&quot;shift+ctrl+r&quot;},encode_decode_data_url:{mac:&quot;shift+ctrl+d&quot;,win:&quot;ctrl+&#39;&quot;},expand_abbreviation_with_tab:&quot;Tab&quot;,wrap_with_abbreviation:{mac:&quot;shift+ctrl+a&quot;,win:&quot;shift+ctrl+a&quot;}},c=new f;t.commands=new r,t.runEmmetCommand=function v(e){try{c.setupContext(e);var t=u.actions||u.require(&quot;actions&quot;);if(this.action==&quot;expand_abbreviation_with_tab&quot;){if(!e.selection.isEmpty())return!1;var n=e.selection.lead,r=e.session.getTokenAt(n.row,n.column);if(r&amp;&amp;/\btag\b/.test(r.type))return!1}if(this.action==&quot;wrap_with_abbreviation&quot;)return setTimeout(function(){t.run(&quot;wrap_with_abbreviation&quot;,c)},0);var i=t.run(this.action,c)}catch(s){if(!u)return d(v.bind(this,e)),!0;e._signal(&quot;changeStatus&quot;,typeof s==&quot;string&quot;?s:s.message),console.log(s),i=!1}return i};for(var h in l)t.commands.addCommand({name:&quot;emmet:&quot;+h,action:h,bindKey:l[h],exec:t.runEmmetCommand,multiSelectAction:&quot;forEach&quot;});t.updateCommands=function(e,n){n?e.keyBinding.addKeyboardHandler(t.commands):e.keyBinding.removeKeyboardHandler(t.commands)},t.isSupportedMode=function(e){if(!e)return!1;if(e.emmetConfig)return!0;var t=e.$id||e;return/css|less|scss|sass|stylus|html|php|twig|ejs|handlebars/.test(t)},t.isAvailable=function(e,n){if(/(evaluate_math_expression|expand_abbreviation)$/.test(n))return!0;var r=e.session.$mode,i=t.isSupportedMode(r);if(i&amp;&amp;r.$modes)try{c.setupContext(e),/js|php/.test(c.getSyntax())&amp;&amp;(i=!1)}catch(s){}return i};var p=function(e,n){var r=n;if(!r)return;var i=t.isSupportedMode(r.session.$mode);e.enableEmmet===!1&amp;&amp;(i=!1),i&amp;&amp;d(),t.updateCommands(r,i)},d=function(t){typeof a==&quot;string&quot;&amp;&amp;e(&quot;ace/config&quot;).loadModule(a,function(){a=null,t&amp;&amp;t()})};t.AceEmmetEditor=f,e(&quot;ace/config&quot;).defineOptions(i.prototype,&quot;editor&quot;,{enableEmmet:{set:function(e){this[e?&quot;on&quot;:&quot;removeListener&quot;](&quot;changeMode&quot;,p),p({enableEmmet:!!e},this)},value:!0}}),t.setCore=function(e){typeof e==&quot;string&quot;?a=e:u=e}});</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">                (<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c1">window</span>.<span class="pl-en">require</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>ace/ext/emmet<span class="pl-pds">&quot;</span></span>], <span class="pl-k">function</span>() {});</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">                })();</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">            </td>
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
      <li>&copy; 2017 <span title="0.09233s from github-fe163-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
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

