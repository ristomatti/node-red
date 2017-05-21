





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-81a59bf26d881d29286674f6deefe779c444382fff322085b50ba455460ccae5.css" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-8789d320be825216d799841dcb27bc201b0605572d4c8c07c30feb5bc27a66b7.css" media="all" rel="stylesheet" />
  
  
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-0047c348443848937ad9891b690c4acb6ee0d96263d91e9b1725194e65869e91.css" media="all" rel="stylesheet" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>ace-builds/mode-typescript.js at master · ajaxorg/ace-builds · GitHub</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars1.githubusercontent.com/u/168515?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="ajaxorg/ace-builds" property="og:title" /><meta content="https://github.com/ajaxorg/ace-builds" property="og:url" /><meta content="Contribute to ace-builds development by creating an account on GitHub." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="B948:6EE3:278414B:3AC64F7:5920E785" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="B948:6EE3:278414B:3AC64F7:5920E785" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged Out">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="NGQyMTgwZjM3NjVlZjU4OWQzYjZlYTc1MjE0MjViMDA4ZTgyZGIxNzk5YTE4MGFkOTMwN2Y4YTk1MmFlNWRkM3x7InJlbW90ZV9hZGRyZXNzIjoiODIuMTgxLjczLjEwNSIsInJlcXVlc3RfaWQiOiJCOTQ4OjZFRTM6Mjc4NDE0QjozQUM2NEY3OjU5MjBFNzg1IiwidGltZXN0YW1wIjoxNDk1MzI4NjQ1LCJob3N0IjoiZ2l0aHViLmNvbSJ9">


  <meta name="html-safe-nonce" content="6fe3ae09a01ad25875c55ad345833958f8c001ce">

  <meta http-equiv="x-pjax-version" content="9f48f82d435db8e8916f273e55a94a05">
  

    
  <meta name="description" content="Contribute to ace-builds development by creating an account on GitHub.">
  <meta name="go-import" content="github.com/ajaxorg/ace-builds git https://github.com/ajaxorg/ace-builds.git">

  <meta content="168515" name="octolytics-dimension-user_id" /><meta content="ajaxorg" name="octolytics-dimension-user_login" /><meta content="4124657" name="octolytics-dimension-repository_id" /><meta content="ajaxorg/ace-builds" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="4124657" name="octolytics-dimension-repository_network_root_id" /><meta content="ajaxorg/ace-builds" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/ajaxorg/ace-builds/commits/master.atom" rel="alternate" title="Recent Commits to ace-builds:master" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/ajaxorg/ace-builds/blob/master/src-min/mode-typescript.js" data-pjax-transient>


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
        <a href="/ajaxorg/ace-builds/blob/master/src-min/mode-typescript.js" class="header-search-scope no-underline">This repository</a>
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


          <a class="text-bold site-header-link" href="/login?return_to=%2Fajaxorg%2Face-builds%2Fblob%2Fmaster%2Fsrc-min%2Fmode-typescript.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
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

    
          

<a href="/ajaxorg/ace-builds/blob/784ffa862c5351e0d300370f61471b1eb95ebcf1/src-min/mode-typescript.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:859a7b14e0d720b446c2376168c786c9 -->

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
               href="/ajaxorg/ace-builds/blob/gh-pages/src-min/mode-typescript.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/ajaxorg/ace-builds/blob/master/src-min/mode-typescript.js"
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
              href="/ajaxorg/ace-builds/tree/v1.2.6/src-min/mode-typescript.js"
              data-name="v1.2.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.6">
                v1.2.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.2.5/src-min/mode-typescript.js"
              data-name="v1.2.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.5">
                v1.2.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.2.4/src-min/mode-typescript.js"
              data-name="v1.2.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.4">
                v1.2.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.2.3/src-min/mode-typescript.js"
              data-name="v1.2.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.3">
                v1.2.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.2.2/src-min/mode-typescript.js"
              data-name="v1.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.2">
                v1.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.2.1/src-min/mode-typescript.js"
              data-name="v1.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.1">
                v1.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.2.0/src-min/mode-typescript.js"
              data-name="v1.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.0">
                v1.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.9/src-min/mode-typescript.js"
              data-name="v1.1.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.9">
                v1.1.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.8/src-min/mode-typescript.js"
              data-name="v1.1.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.8">
                v1.1.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.7/src-min/mode-typescript.js"
              data-name="v1.1.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.7">
                v1.1.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.6/src-min/mode-typescript.js"
              data-name="v1.1.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.6">
                v1.1.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.5/src-min/mode-typescript.js"
              data-name="v1.1.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.5">
                v1.1.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.4/src-min/mode-typescript.js"
              data-name="v1.1.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.4">
                v1.1.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.3/src-min/mode-typescript.js"
              data-name="v1.1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.3">
                v1.1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.2/src-min/mode-typescript.js"
              data-name="v1.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.2">
                v1.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.01/src-min/mode-typescript.js"
              data-name="v1.1.01"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.01">
                v1.1.01
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.1/src-min/mode-typescript.js"
              data-name="v1.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.1">
                v1.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.0.0/src-min/mode-typescript.js"
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
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/ajaxorg/ace-builds"><span>ace-builds</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/ajaxorg/ace-builds/tree/master/src-min"><span>src-min</span></a></span><span class="separator">/</span><strong class="final-path">mode-typescript.js</strong>
  </div>
</div>


<include-fragment class="commit-tease" src="/ajaxorg/ace-builds/contributors/master/src-min/mode-typescript.js">
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
      <a href="/ajaxorg/ace-builds/raw/master/src-min/mode-typescript.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/ajaxorg/ace-builds/blame/master/src-min/mode-typescript.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/ajaxorg/ace-builds/commits/master/src-min/mode-typescript.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
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
    19.7 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">define(&quot;ace/mode/doc_comment_highlight_rules&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/text_highlight_rules&quot;],function(e,t,n){&quot;use strict&quot;;var r=e(&quot;../lib/oop&quot;),i=e(&quot;./text_highlight_rules&quot;).TextHighlightRules,s=function(){this.$rules={start:[{token:&quot;comment.doc.tag&quot;,regex:&quot;@[\\w\\d_]+&quot;},s.getTagRule(),{defaultToken:&quot;comment.doc&quot;,caseInsensitive:!0}]}};r.inherits(s,i),s.getTagRule=function(e){return{token:&quot;comment.doc.tag.storage.type&quot;,regex:&quot;\\b(?:TODO|FIXME|XXX|HACK)\\b&quot;}},s.getStartRule=function(e){return{token:&quot;comment.doc&quot;,regex:&quot;\\/\\*(?=\\*)&quot;,next:e}},s.getEndRule=function(e){return{token:&quot;comment.doc&quot;,regex:&quot;\\*\\/&quot;,next:e}},t.DocCommentHighlightRules=s}),define(&quot;ace/mode/javascript_highlight_rules&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/doc_comment_highlight_rules&quot;,&quot;ace/mode/text_highlight_rules&quot;],function(e,t,n){&quot;use strict&quot;;function a(){var e=o.replace(&quot;\\d&quot;,&quot;\\d\\-&quot;),t={onMatch:function(e,t,n){var r=e.charAt(1)==&quot;/&quot;?2:1;if(r==1)t!=this.nextState?n.unshift(this.next,this.nextState,0):n.unshift(this.next),n[2]++;else if(r==2&amp;&amp;t==this.nextState){n[1]--;if(!n[1]||n[1]&lt;0)n.shift(),n.shift()}return[{type:&quot;meta.tag.punctuation.&quot;+(r==1?&quot;&quot;:&quot;end-&quot;)+&quot;tag-open.xml&quot;,value:e.slice(0,r)},{type:&quot;meta.tag.tag-name.xml&quot;,value:e.substr(r)}]},regex:&quot;&lt;/?&quot;+e+&quot;&quot;,next:&quot;jsxAttributes&quot;,nextState:&quot;jsx&quot;};this.$rules.start.unshift(t);var n={regex:&quot;{&quot;,token:&quot;paren.quasi.start&quot;,push:&quot;start&quot;};this.$rules.jsx=[n,t,{include:&quot;reference&quot;},{defaultToken:&quot;string&quot;}],this.$rules.jsxAttributes=[{token:&quot;meta.tag.punctuation.tag-close.xml&quot;,regex:&quot;/?&gt;&quot;,onMatch:function(e,t,n){return t==n[0]&amp;&amp;n.shift(),e.length==2&amp;&amp;(n[0]==this.nextState&amp;&amp;n[1]--,(!n[1]||n[1]&lt;0)&amp;&amp;n.splice(0,2)),this.next=n[0]||&quot;start&quot;,[{type:this.token,value:e}]},nextState:&quot;jsx&quot;},n,f(&quot;jsxAttributes&quot;),{token:&quot;entity.other.attribute-name.xml&quot;,regex:e},{token:&quot;keyword.operator.attribute-equals.xml&quot;,regex:&quot;=&quot;},{token:&quot;text.tag-whitespace.xml&quot;,regex:&quot;\\s+&quot;},{token:&quot;string.attribute-value.xml&quot;,regex:&quot;&#39;&quot;,stateName:&quot;jsx_attr_q&quot;,push:[{token:&quot;string.attribute-value.xml&quot;,regex:&quot;&#39;&quot;,next:&quot;pop&quot;},{include:&quot;reference&quot;},{defaultToken:&quot;string.attribute-value.xml&quot;}]},{token:&quot;string.attribute-value.xml&quot;,regex:&#39;&quot;&#39;,stateName:&quot;jsx_attr_qq&quot;,push:[{token:&quot;string.attribute-value.xml&quot;,regex:&#39;&quot;&#39;,next:&quot;pop&quot;},{include:&quot;reference&quot;},{defaultToken:&quot;string.attribute-value.xml&quot;}]},t],this.$rules.reference=[{token:&quot;constant.language.escape.reference.xml&quot;,regex:&quot;(?:&amp;#[0-9]+;)|(?:&amp;#x[0-9a-fA-F]+;)|(?:&amp;[a-zA-Z0-9_:\\.-]+;)&quot;}]}function f(e){return[{token:&quot;comment&quot;,regex:/\/\*/,next:[i.getTagRule(),{token:&quot;comment&quot;,regex:&quot;\\*\\/&quot;,next:e||&quot;pop&quot;},{defaultToken:&quot;comment&quot;,caseInsensitive:!0}]},{token:&quot;comment&quot;,regex:&quot;\\/\\/&quot;,next:[i.getTagRule(),{token:&quot;comment&quot;,regex:&quot;$|^&quot;,next:e||&quot;pop&quot;},{defaultToken:&quot;comment&quot;,caseInsensitive:!0}]}]}var r=e(&quot;../lib/oop&quot;),i=e(&quot;./doc_comment_highlight_rules&quot;).DocCommentHighlightRules,s=e(&quot;./text_highlight_rules&quot;).TextHighlightRules,o=&quot;[a-zA-Z\\$_\u00a1-\uffff][a-zA-Z\\d\\$_\u00a1-\uffff]*&quot;,u=function(e){var t=this.createKeywordMapper({&quot;variable.language&quot;:&quot;Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document&quot;,keyword:&quot;const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static&quot;,&quot;storage.type&quot;:&quot;const|let|var|function&quot;,&quot;constant.language&quot;:&quot;null|Infinity|NaN|undefined&quot;,&quot;support.function&quot;:&quot;alert&quot;,&quot;constant.language.boolean&quot;:&quot;true|false&quot;},&quot;identifier&quot;),n=&quot;case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void&quot;,r=&quot;\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)&quot;;this.$rules={no_regex:[i.getStartRule(&quot;doc-start&quot;),f(&quot;no_regex&quot;),{token:&quot;string&quot;,regex:&quot;&#39;(?=.)&quot;,next:&quot;qstring&quot;},{token:&quot;string&quot;,regex:&#39;&quot;(?=.)&#39;,next:&quot;qqstring&quot;},{token:&quot;constant.numeric&quot;,regex:/0(?:[xX][0-9a-fA-F]+|[bB][01]+)\b/},{token:&quot;constant.numeric&quot;,regex:/[+-]?\d[\d_]*(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?\b/},{token:[&quot;storage.type&quot;,&quot;punctuation.operator&quot;,&quot;support.function&quot;,&quot;punctuation.operator&quot;,&quot;entity.name.function&quot;,&quot;text&quot;,&quot;keyword.operator&quot;],regex:&quot;(&quot;+o+&quot;)(\\.)(prototype)(\\.)(&quot;+o+&quot;)(\\s*)(=)&quot;,next:&quot;function_arguments&quot;},{token:[&quot;storage.type&quot;,&quot;punctuation.operator&quot;,&quot;entity.name.function&quot;,&quot;text&quot;,&quot;keyword.operator&quot;,&quot;text&quot;,&quot;storage.type&quot;,&quot;text&quot;,&quot;paren.lparen&quot;],regex:&quot;(&quot;+o+&quot;)(\\.)(&quot;+o+&quot;)(\\s*)(=)(\\s*)(function)(\\s*)(\\()&quot;,next:&quot;function_arguments&quot;},{token:[&quot;entity.name.function&quot;,&quot;text&quot;,&quot;keyword.operator&quot;,&quot;text&quot;,&quot;storage.type&quot;,&quot;text&quot;,&quot;paren.lparen&quot;],regex:&quot;(&quot;+o+&quot;)(\\s*)(=)(\\s*)(function)(\\s*)(\\()&quot;,next:&quot;function_arguments&quot;},{token:[&quot;storage.type&quot;,&quot;punctuation.operator&quot;,&quot;entity.name.function&quot;,&quot;text&quot;,&quot;keyword.operator&quot;,&quot;text&quot;,&quot;storage.type&quot;,&quot;text&quot;,&quot;entity.name.function&quot;,&quot;text&quot;,&quot;paren.lparen&quot;],regex:&quot;(&quot;+o+&quot;)(\\.)(&quot;+o+&quot;)(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()&quot;,next:&quot;function_arguments&quot;},{token:[&quot;storage.type&quot;,&quot;text&quot;,&quot;entity.name.function&quot;,&quot;text&quot;,&quot;paren.lparen&quot;],regex:&quot;(function)(\\s+)(&quot;+o+&quot;)(\\s*)(\\()&quot;,next:&quot;function_arguments&quot;},{token:[&quot;entity.name.function&quot;,&quot;text&quot;,&quot;punctuation.operator&quot;,&quot;text&quot;,&quot;storage.type&quot;,&quot;text&quot;,&quot;paren.lparen&quot;],regex:&quot;(&quot;+o+&quot;)(\\s*)(:)(\\s*)(function)(\\s*)(\\()&quot;,next:&quot;function_arguments&quot;},{token:[&quot;text&quot;,&quot;text&quot;,&quot;storage.type&quot;,&quot;text&quot;,&quot;paren.lparen&quot;],regex:&quot;(:)(\\s*)(function)(\\s*)(\\()&quot;,next:&quot;function_arguments&quot;},{token:&quot;keyword&quot;,regex:&quot;(?:&quot;+n+&quot;)\\b&quot;,next:&quot;start&quot;},{token:[&quot;support.constant&quot;],regex:/that\b/},{token:[&quot;storage.type&quot;,&quot;punctuation.operator&quot;,&quot;support.function.firebug&quot;],regex:/(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/},{token:t,regex:o},{token:&quot;punctuation.operator&quot;,regex:/[.](?![.])/,next:&quot;property&quot;},{token:&quot;keyword.operator&quot;,regex:/--|\+\+|\.{3}|===|==|=|!=|!==|&lt;+=?|&gt;+=?|!|&amp;&amp;|\|\||\?:|[!$%&amp;*+\-~\/^]=?/,next:&quot;start&quot;},{token:&quot;punctuation.operator&quot;,regex:/[?:,;.]/,next:&quot;start&quot;},{token:&quot;paren.lparen&quot;,regex:/[\[({]/,next:&quot;start&quot;},{token:&quot;paren.rparen&quot;,regex:/[\])}]/},{token:&quot;comment&quot;,regex:/^#!.*$/}],property:[{token:&quot;text&quot;,regex:&quot;\\s+&quot;},{token:[&quot;storage.type&quot;,&quot;punctuation.operator&quot;,&quot;entity.name.function&quot;,&quot;text&quot;,&quot;keyword.operator&quot;,&quot;text&quot;,&quot;storage.type&quot;,&quot;text&quot;,&quot;entity.name.function&quot;,&quot;text&quot;,&quot;paren.lparen&quot;],regex:&quot;(&quot;+o+&quot;)(\\.)(&quot;+o+&quot;)(\\s*)(=)(\\s*)(function)(?:(\\s+)(\\w+))?(\\s*)(\\()&quot;,next:&quot;function_arguments&quot;},{token:&quot;punctuation.operator&quot;,regex:/[.](?![.])/},{token:&quot;support.function&quot;,regex:/(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/},{token:&quot;support.function.dom&quot;,regex:/(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/},{token:&quot;support.constant&quot;,regex:/(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/},{token:&quot;identifier&quot;,regex:o},{regex:&quot;&quot;,token:&quot;empty&quot;,next:&quot;no_regex&quot;}],start:[i.getStartRule(&quot;doc-start&quot;),f(&quot;start&quot;),{token:&quot;string.regexp&quot;,regex:&quot;\\/&quot;,next:&quot;regex&quot;},{token:&quot;text&quot;,regex:&quot;\\s+|^$&quot;,next:&quot;start&quot;},{token:&quot;empty&quot;,regex:&quot;&quot;,next:&quot;no_regex&quot;}],regex:[{token:&quot;regexp.keyword.operator&quot;,regex:&quot;\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)&quot;},{token:&quot;string.regexp&quot;,regex:&quot;/[sxngimy]*&quot;,next:&quot;no_regex&quot;},{token:&quot;invalid&quot;,regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:&quot;constant.language.escape&quot;,regex:/\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/},{token:&quot;constant.language.delimiter&quot;,regex:/\|/},{token:&quot;constant.language.escape&quot;,regex:/\[\^?/,next:&quot;regex_character_class&quot;},{token:&quot;empty&quot;,regex:&quot;$&quot;,next:&quot;no_regex&quot;},{defaultToken:&quot;string.regexp&quot;}],regex_character_class:[{token:&quot;regexp.charclass.keyword.operator&quot;,regex:&quot;\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)&quot;},{token:&quot;constant.language.escape&quot;,regex:&quot;]&quot;,next:&quot;regex&quot;},{token:&quot;constant.language.escape&quot;,regex:&quot;-&quot;},{token:&quot;empty&quot;,regex:&quot;$&quot;,next:&quot;no_regex&quot;},{defaultToken:&quot;string.regexp.charachterclass&quot;}],function_arguments:[{token:&quot;variable.parameter&quot;,regex:o},{token:&quot;punctuation.operator&quot;,regex:&quot;[, ]+&quot;},{token:&quot;punctuation.operator&quot;,regex:&quot;$&quot;},{token:&quot;empty&quot;,regex:&quot;&quot;,next:&quot;no_regex&quot;}],qqstring:[{token:&quot;constant.language.escape&quot;,regex:r},{token:&quot;string&quot;,regex:&quot;\\\\$&quot;,next:&quot;qqstring&quot;},{token:&quot;string&quot;,regex:&#39;&quot;|$&#39;,next:&quot;no_regex&quot;},{defaultToken:&quot;string&quot;}],qstring:[{token:&quot;constant.language.escape&quot;,regex:r},{token:&quot;string&quot;,regex:&quot;\\\\$&quot;,next:&quot;qstring&quot;},{token:&quot;string&quot;,regex:&quot;&#39;|$&quot;,next:&quot;no_regex&quot;},{defaultToken:&quot;string&quot;}]};if(!e||!e.noES6)this.$rules.no_regex.unshift({regex:&quot;[{}]&quot;,onMatch:function(e,t,n){this.next=e==&quot;{&quot;?this.nextState:&quot;&quot;;if(e==&quot;{&quot;&amp;&amp;n.length)n.unshift(&quot;start&quot;,t);else if(e==&quot;}&quot;&amp;&amp;n.length){n.shift(),this.next=n.shift();if(this.next.indexOf(&quot;string&quot;)!=-1||this.next.indexOf(&quot;jsx&quot;)!=-1)return&quot;paren.quasi.end&quot;}return e==&quot;{&quot;?&quot;paren.lparen&quot;:&quot;paren.rparen&quot;},nextState:&quot;start&quot;},{token:&quot;string.quasi.start&quot;,regex:/`/,push:[{token:&quot;constant.language.escape&quot;,regex:r},{token:&quot;paren.quasi.start&quot;,regex:/\${/,push:&quot;start&quot;},{token:&quot;string.quasi.end&quot;,regex:/`/,next:&quot;pop&quot;},{defaultToken:&quot;string.quasi&quot;}]}),(!e||e.jsx!=0)&amp;&amp;a.call(this);this.embedRules(i,&quot;doc-&quot;,[i.getEndRule(&quot;no_regex&quot;)]),this.normalizeRules()};r.inherits(u,s),t.JavaScriptHighlightRules=u}),define(&quot;ace/mode/matching_brace_outdent&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/range&quot;],function(e,t,n){&quot;use strict&quot;;var r=e(&quot;../range&quot;).Range,i=function(){};(function(){this.checkOutdent=function(e,t){return/^\s+$/.test(e)?/^\s*\}/.test(t):!1},this.autoOutdent=function(e,t){var n=e.getLine(t),i=n.match(/^(\s*\})/);if(!i)return 0;var s=i[1].length,o=e.findMatchingBracket({row:t,column:s});if(!o||o.row==t)return 0;var u=this.$getIndent(e.getLine(o.row));e.replace(new r(t,0,t,s-1),u)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(i.prototype),t.MatchingBraceOutdent=i}),define(&quot;ace/mode/folding/cstyle&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/range&quot;,&quot;ace/mode/folding/fold_mode&quot;],function(e,t,n){&quot;use strict&quot;;var r=e(&quot;../../lib/oop&quot;),i=e(&quot;../../range&quot;).Range,s=e(&quot;./fold_mode&quot;).FoldMode,o=t.FoldMode=function(e){e&amp;&amp;(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,&quot;|&quot;+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,&quot;|&quot;+e.end)))};r.inherits(o,s),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var r=e.getLine(n);if(this.singleLineBlockCommentRe.test(r)&amp;&amp;!this.startRegionRe.test(r)&amp;&amp;!this.tripleStarBlockCommentRe.test(r))return&quot;&quot;;var i=this._getFoldWidgetBase(e,t,n);return!i&amp;&amp;this.startRegionRe.test(r)?&quot;start&quot;:i},this.getFoldWidgetRange=function(e,t,n,r){var i=e.getLine(n);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,n);var s=i.match(this.foldingStartMarker);if(s){var o=s.index;if(s[1])return this.openingBracketBlock(e,s[1],n,o);var u=e.getCommentFoldRange(n,o+s[0].length,1);return u&amp;&amp;!u.isMultiLine()&amp;&amp;(r?u=this.getSectionRange(e,n):t!=&quot;all&quot;&amp;&amp;(u=null)),u}if(t===&quot;markbegin&quot;)return;var s=i.match(this.foldingStopMarker);if(s){var o=s.index+s[0].length;return s[1]?this.closingBracketBlock(e,s[1],n,o):e.getCommentFoldRange(n,o,-1)}},this.getSectionRange=function(e,t){var n=e.getLine(t),r=n.search(/\S/),s=t,o=n.length;t+=1;var u=t,a=e.getLength();while(++t&lt;a){n=e.getLine(t);var f=n.search(/\S/);if(f===-1)continue;if(r&gt;f)break;var l=this.getFoldWidgetRange(e,&quot;all&quot;,t);if(l){if(l.start.row&lt;=s)break;if(l.isMultiLine())t=l.end.row;else if(r==f)break}u=t}return new i(s,o,u,e.getLine(u).length)},this.getCommentRegionBlock=function(e,t,n){var r=t.search(/\s*$/),s=e.getLength(),o=n,u=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;while(++n&lt;s){t=e.getLine(n);var f=u.exec(t);if(!f)continue;f[1]?a--:a++;if(!a)break}var l=n;if(l&gt;o)return new i(o,r,l,t.length)}}.call(o.prototype)}),define(&quot;ace/mode/javascript&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/text&quot;,&quot;ace/mode/javascript_highlight_rules&quot;,&quot;ace/mode/matching_brace_outdent&quot;,&quot;ace/worker/worker_client&quot;,&quot;ace/mode/behaviour/cstyle&quot;,&quot;ace/mode/folding/cstyle&quot;],function(e,t,n){&quot;use strict&quot;;var r=e(&quot;../lib/oop&quot;),i=e(&quot;./text&quot;).Mode,s=e(&quot;./javascript_highlight_rules&quot;).JavaScriptHighlightRules,o=e(&quot;./matching_brace_outdent&quot;).MatchingBraceOutdent,u=e(&quot;../worker/worker_client&quot;).WorkerClient,a=e(&quot;./behaviour/cstyle&quot;).CstyleBehaviour,f=e(&quot;./folding/cstyle&quot;).FoldMode,l=function(){this.HighlightRules=s,this.$outdent=new o,this.$behaviour=new a,this.foldingRules=new f};r.inherits(l,i),function(){this.lineCommentStart=&quot;//&quot;,this.blockComment={start:&quot;/*&quot;,end:&quot;*/&quot;},this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t),i=this.getTokenizer().getLineTokens(t,e),s=i.tokens,o=i.state;if(s.length&amp;&amp;s[s.length-1].type==&quot;comment&quot;)return r;if(e==&quot;start&quot;||e==&quot;no_regex&quot;){var u=t.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);u&amp;&amp;(r+=n)}else if(e==&quot;doc-start&quot;){if(o==&quot;start&quot;||o==&quot;no_regex&quot;)return&quot;&quot;;var u=t.match(/^\s*(\/?)\*/);u&amp;&amp;(u[1]&amp;&amp;(r+=&quot; &quot;),r+=&quot;* &quot;)}return r},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.createWorker=function(e){var t=new u([&quot;ace&quot;],&quot;ace/mode/javascript_worker&quot;,&quot;JavaScriptWorker&quot;);return t.attachToDocument(e.getDocument()),t.on(&quot;annotate&quot;,function(t){e.setAnnotations(t.data)}),t.on(&quot;terminate&quot;,function(){e.clearAnnotations()}),t},this.$id=&quot;ace/mode/javascript&quot;}.call(l.prototype),t.Mode=l}),define(&quot;ace/mode/typescript_highlight_rules&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/javascript_highlight_rules&quot;],function(e,t,n){&quot;use strict&quot;;var r=e(&quot;../lib/oop&quot;),i=e(&quot;./javascript_highlight_rules&quot;).JavaScriptHighlightRules,s=function(e){var t=[{token:[&quot;keyword.operator.ts&quot;,&quot;text&quot;,&quot;variable.parameter.function.ts&quot;,&quot;text&quot;],regex:&quot;\\b(module)(\\s*)([a-zA-Z0-9_?.$][\\w?.$]*)(\\s*\\{)&quot;},{token:[&quot;storage.type.variable.ts&quot;,&quot;text&quot;,&quot;keyword.other.ts&quot;,&quot;text&quot;],regex:&quot;(super)(\\s*\\()([a-zA-Z0-9,_?.$\\s]+\\s*)(\\))&quot;},{token:[&quot;entity.name.function.ts&quot;,&quot;paren.lparen&quot;,&quot;paren.rparen&quot;],regex:&quot;([a-zA-Z_?.$][\\w?.$]*)(\\()(\\))&quot;},{token:[&quot;variable.parameter.function.ts&quot;,&quot;text&quot;,&quot;variable.parameter.function.ts&quot;],regex:&quot;([a-zA-Z0-9_?.$][\\w?.$]*)(\\s*:\\s*)([a-zA-Z0-9_?.$][\\w?.$]*)&quot;},{token:[&quot;keyword.operator.ts&quot;],regex:&quot;(?:\\b(constructor|declare|interface|as|AS|public|private|class|extends|export|super)\\b)&quot;},{token:[&quot;storage.type.variable.ts&quot;],regex:&quot;(?:\\b(this\\.|string\\b|bool\\b|number)\\b)&quot;},{token:[&quot;keyword.operator.ts&quot;,&quot;storage.type.variable.ts&quot;,&quot;keyword.operator.ts&quot;,&quot;storage.type.variable.ts&quot;],regex:&quot;(class)(\\s+[a-zA-Z0-9_?.$][\\w?.$]*\\s+)(extends)(\\s+[a-zA-Z0-9_?.$][\\w?.$]*\\s+)?&quot;},{token:&quot;keyword&quot;,regex:&quot;(?:super|export|class|extends|import)\\b&quot;}],n=(new i({jsx:(e&amp;&amp;e.jsx)==1})).getRules();n.start=t.concat(n.start),this.$rules=n};r.inherits(s,i),t.TypeScriptHighlightRules=s}),define(&quot;ace/mode/typescript&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/javascript&quot;,&quot;ace/mode/typescript_highlight_rules&quot;,&quot;ace/mode/behaviour/cstyle&quot;,&quot;ace/mode/folding/cstyle&quot;,&quot;ace/mode/matching_brace_outdent&quot;],function(e,t,n){&quot;use strict&quot;;var r=e(&quot;../lib/oop&quot;),i=e(&quot;./javascript&quot;).Mode,s=e(&quot;./typescript_highlight_rules&quot;).TypeScriptHighlightRules,o=e(&quot;./behaviour/cstyle&quot;).CstyleBehaviour,u=e(&quot;./folding/cstyle&quot;).FoldMode,a=e(&quot;./matching_brace_outdent&quot;).MatchingBraceOutdent,f=function(){this.HighlightRules=s,this.$outdent=new a,this.$behaviour=new o,this.foldingRules=new u};r.inherits(f,i),function(){this.createWorker=function(e){return null},this.$id=&quot;ace/mode/typescript&quot;}.call(f.prototype),t.Mode=f})</td>
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
      <li>&copy; 2017 <span title="0.09697s from github-fe132-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
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

