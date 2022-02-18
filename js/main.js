"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof2=_interopRequireDefault(require("@babel/runtime/helpers/typeof")),_toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));document.addEventListener("DOMContentLoaded",function(){function r(e){e&&(t=document.getElementById("site-name").offsetWidth,e=document.querySelectorAll("#menus .menus_item"),n=0,e.length&&e.forEach(function(e){n+=e.offsetWidth}),e=document.querySelector("#search-button"),o=e?e.offsetWidth:0,u=document.getElementById("nav")),window.innerWidth<768||t+n+o>u.offsetWidth-120?u.classList.add("hide-menu"):u.classList.remove("hide-menu")}function d(){var e,t,n,a,c,o,l,s,r,d,i,u,m,f=GLOBAL_CONFIG.highlight;function h(e,t,n){var o,i=document.createDocumentFragment();c&&((o=document.createElement("div")).className="highlight-tools ".concat(d),o.innerHTML=s+e+r,o.addEventListener("click",u),i.appendChild(o)),a&&t.offsetHeight>a+30&&((o=document.createElement("div")).className="code-expand-btn",o.innerHTML='<i class="fas fa-angle-double-down"></i>',o.addEventListener("click",m),i.appendChild(o)),"hl"===n?t.insertBefore(i,t.firstChild):t.parentNode.insertBefore(i,t)}f&&(e=f.highlightCopy,t=f.highlightLang,n=GLOBAL_CONFIG_SITE.isHighlightShrink,a=f.highlightHeightLimit,c=e||t||void 0!==n,o="highlighjs"===f.plugin?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]'),(c||a)&&o.length&&(l="prismjs"===f.plugin,d=!(r=s="")===n?"closed":"",void 0!==n&&(s='<i class="fas fa-angle-down expand '.concat(d,'"></i>')),e&&(r='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),i=function(e){var t=e.parentNode;t.classList.add("copy-true");var n=window.getSelection(),o=document.createRange();l?o.selectNodeContents(t.querySelectorAll("pre code")[0]):o.selectNodeContents(t.querySelectorAll("table .code pre")[0]),n.removeAllRanges(),n.addRange(o);var i;n.toString();e=e.lastChild,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.success):((i=e.previousElementSibling).innerText=GLOBAL_CONFIG.copy.success,i.style.opacity=1,setTimeout(function(){i.style.opacity=0},700))):void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):e.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport,n.removeAllRanges(),t.classList.remove("copy-true")},u=function(e){var t,n=e.target.classList;n.contains("expand")?(t=this,e=(0,_toConsumableArray2.default)(t.parentNode.children).slice(1),t.firstChild.classList.toggle("closed"),btf.isHidden(e[e.length-1])?e.forEach(function(e){e.style.display="block"}):e.forEach(function(e){e.style.display="none"})):n.contains("copy-button")&&i(this)},m=function(){this.classList.toggle("expand-done")},t?l?o.forEach(function(e){var t=e.getAttribute("data-language")?e.getAttribute("data-language"):"Code",t='<div class="code-lang">'.concat(t,"</div>");btf.wrap(e,"figure",{class:"highlight"}),h(t,e)}):o.forEach(function(e){var t=e.getAttribute("class").split(" ")[1];"plain"!==t&&void 0!==t||(t="Code"),h('<div class="code-lang">'.concat(t,"</div>"),e,"hl")}):l?o.forEach(function(e){btf.wrap(e,"figure",{class:"highlight"}),h("",e)}):o.forEach(function(e){h("",e,"hl")})))}var t,n,o,u,i=!1,m=function(){btf.sidebarPaddingR(),document.body.style.overflow="hidden",btf.animateIn(document.getElementById("menu-mask"),"to_show 0.5s"),document.getElementById("sidebar-menus").classList.add("open"),i=!0},a=function(){var e=document.body;e.style.overflow="",e.style.paddingRight="",btf.animateOut(document.getElementById("menu-mask"),"to_hide 0.5s"),document.getElementById("sidebar-menus").classList.remove("open"),i=!1};function f(){var i,a,c,l,s,r=document.getElementById("rightside"),d=window.innerHeight+56;document.body.scrollHeight<=d?r.style.cssText="opacity: 1; transform: translateX(-58px)":(a=!(i=0),c=document.getElementById("page-header"),l="function"==typeof chatBtnHide,s="function"==typeof chatBtnShow,window.scrollCollect=function(){return btf.throttle(function(e){var t,n,o=window.scrollY||document.documentElement.scrollTop,n=(n=i<(t=o),i=t,n);56<o?(n?(c.classList.contains("nav-visible")&&c.classList.remove("nav-visible"),s&&!0===a&&(chatBtnHide(),a=!1)):(c.classList.contains("nav-visible")||c.classList.add("nav-visible"),l&&!1===a&&(chatBtnShow(),a=!0)),c.classList.add("nav-fixed"),"0"===window.getComputedStyle(r).getPropertyValue("opacity")&&(r.style.cssText="opacity: 0.8; transform: translateX(-58px)")):(0===o&&c.classList.remove("nav-fixed","nav-visible"),r.style.cssText="opacity: ''; transform: ''"),document.body.scrollHeight<=d&&(r.style.cssText="opacity: 0.8; transform: translateX(-58px)")},200)()},window.addEventListener("scroll",scrollCollect))}function h(){var a,e,c,l,i,s,t,r,d,u=GLOBAL_CONFIG_SITE.isToc,m=GLOBAL_CONFIG.isAnchor,f=document.getElementById("article-container");f&&(u||m)&&(u&&(e=document.getElementById("card-toc"),l=(c=e.getElementsByClassName("toc-content")[0]).querySelectorAll(".toc-link"),i=e.querySelector(".toc-percentage"),s=c.classList.contains("is-expand"),t=function(e){var t=f.clientHeight,n=document.documentElement.clientHeight,o=(e-f.offsetTop)/(n<t?t-n:document.documentElement.scrollHeight-n),n=Math.round(100*o),n=100<n?100:n<=0?0:n;i.textContent=n},window.mobileToc={open:function(){e.style.cssText="animation: toc-open .3s; opacity: 1; right: 55px"},close:function(){e.style.animation="toc-close .2s",setTimeout(function(){e.style.cssText="opacity:''; animation: ''; right: ''"},100)}},c.addEventListener("click",function(e){e.preventDefault();var t=e.target.classList;t.contains("toc-content")||(e=t.contains("toc-link")?e.target:e.target.parentElement,btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(e.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&window.mobileToc.close())}),a=function(e){var t=e.getBoundingClientRect().top,e=c.scrollTop;t>document.documentElement.clientHeight-100&&(c.scrollTop=e+150),t<100&&(c.scrollTop=e-150)}),r=f.querySelectorAll("h1,h2,h3,h4,h5,h6"),d="",window.tocScrollFn=function(){return btf.throttle(function(){var e=window.scrollY||document.documentElement.scrollTop;u&&t(e),function(n){if(0===n)return;var o="",i="";if(r.forEach(function(e,t){n>btf.getEleTop(e)-80&&(e=e.id,o=e?"#"+encodeURI(e):"",i=t)}),d!==i&&(m&&btf.updateAnchor(o),d=i,u&&(c.querySelectorAll(".active").forEach(function(e){e.classList.remove("active")}),""!==o))){var e=l[i];if(e.classList.add("active"),setTimeout(function(){a(e)},0),!s)for(var t=e.parentNode;!t.matches(".toc");t=t.parentNode)t.matches("li")&&t.classList.add("active")}}(e)},100)()},window.addEventListener("scroll",tocScrollFn))}var c=function(){var t=document.body;t.classList.add("read-mode");var n=document.createElement("button");n.type="button",n.className="fas fa-sign-out-alt exit-readmode",t.appendChild(n),n.addEventListener("click",function e(){t.classList.remove("read-mode"),n.remove(),n.removeEventListener("click",e)})},l=function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"function"==typeof changeGiscusTheme&&changeGiscusTheme(),"object"===("undefined"==typeof FB?"undefined":(0,_typeof2.default)(FB))&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout(function(){return window.disqusReset()},200),"function"==typeof runMermaid&&window.runMermaid()},s=function(e){var t=document.getElementById("rightside-config-hide").classList;t.toggle("show"),e.classList.contains("show")&&(t.add("status"),setTimeout(function(){t.remove("status")},300)),e.classList.toggle("show")},g=function(){btf.scrollToDest(0,500)},p=function(){var e=document.documentElement.classList;e.contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),e.toggle("hide-aside")},y=function(){"0"===window.getComputedStyle(document.getElementById("card-toc")).getPropertyValue("opacity")?window.mobileToc.open():window.mobileToc.close()};document.getElementById("rightside").addEventListener("click",function(e){e=e.target.id?e.target:e.target.parentNode;switch(e.id){case"go-up":g();break;case"rightside_config":s(e);break;case"mobile-toc-button":y();break;case"readmode":c();break;case"darkmode":l();break;case"hide-aside-btn":p()}});function v(e){e.forEach(function(e){var t=e,e=t.getAttribute("datetime");t.innerText=btf.diffDate(e,!0),t.style.display="inline"})}var b,L=function(){document.querySelectorAll("#article-container .tab > button").forEach(function(e){e.addEventListener("click",function(e){var t,n,o,i=this.parentNode;i.classList.contains("active")||(o=i.parentNode.nextElementSibling,(t=btf.siblings(i,".active")[0])&&t.classList.remove("active"),i.classList.add("active"),n=this.getAttribute("data-href").replace("#",""),(0,_toConsumableArray2.default)(o.children).forEach(function(e){e.id===n?e.classList.add("active"):e.classList.remove("active")}),0<(o=o.querySelectorAll("#".concat(n," .fj-gallery"))).length&&btf.initJustifiedGallery(o))})})},E=function(){document.querySelectorAll("#article-container .tabs .tab-to-top").forEach(function(e){e.addEventListener("click",function(){btf.scrollToDest(btf.getEleTop(btf.getParents(this,".tabs")),300)})})};window.refreshFn=function(){var e,t,n,o,i;r(!0),u.classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(void 0!==GLOBAL_CONFIG.noticeOutdate&&(o=GLOBAL_CONFIG.noticeOutdate,(i=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate))>=o.limitDay&&((n=document.createElement("div")).className="post-outdate-notice",n.textContent=o.messagePrev+" "+i+" "+o.messageNext,i=document.getElementById("article-container"),"top"===o.position?i.insertBefore(n,i.firstChild):i.appendChild(n))),GLOBAL_CONFIG.relativeDate.post&&v(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&v(document.querySelectorAll("#recent-posts time")),!GLOBAL_CONFIG.runtime||(n=document.getElementById("runtimeshow"))&&(t=n.getAttribute("data-publishDate"),n.innerText=btf.diffDate(t)+" "+GLOBAL_CONFIG.runtime),(t=document.getElementById("last-push-date"))&&(e=t.getAttribute("data-lastPushDate"),t.innerText=btf.diffDate(e,!0)),(e=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i")).length&&e.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();this.classList.toggle("expand");e=this.parentNode.nextElementSibling;btf.isHidden(e)?e.style.display="block":e.style.display="none"})})),h(),!GLOBAL_CONFIG_SITE.isHome||(s=document.getElementById("scroll-down"))&&s.addEventListener("click",function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}),d(),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach(function(e){var t,n=e.parentNode,o=e.title||e.alt;o&&!n.parentNode.classList.contains("justified-gallery")&&((t=document.createElement("div")).className="img-alt is-center",t.textContent=o,n.insertBefore(t,e.nextSibling))}),f();var a,c,l,s=document.querySelectorAll("#article-container .fj-gallery");s.length&&((a=s).forEach(function(e){e.querySelectorAll("img").forEach(function(e){var t=e.getAttribute("data-lazy-src");t&&(e.src=t),btf.wrap(e,"div",{class:"fj-gallery-item"})})}),window.fjGallery?setTimeout(function(){btf.initJustifiedGallery(a)},100):((l=document.createElement("link")).rel="stylesheet",l.href=GLOBAL_CONFIG.source.justifiedGallery.css,document.body.appendChild(l),getScript("".concat(GLOBAL_CONFIG.source.justifiedGallery.js)).then(function(){btf.initJustifiedGallery(a)}))),btf.loadLightbox(document.querySelectorAll("#article-container img:not(.no-lightbox)")),(l=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table")).length&&l.forEach(function(e){btf.wrap(e,"div",{class:"table-wrap"})}),(l=document.querySelectorAll("#article-container .hide-button")).length&&l.forEach(function(e){e.addEventListener("click",function(e){this.classList.add("open");var t=this.nextElementSibling.querySelectorAll(".fj-gallery");t.length&&btf.initJustifiedGallery(t)})}),L(),E(),c=!1,(l=document.querySelector("#comment-switch > .switch-btn"))&&l.addEventListener("click",function(){this.classList.toggle("move"),document.querySelectorAll("#post-comment > .comment-wrap > div").forEach(function(e){btf.isHidden(e)?e.style.cssText="display: block;animation: tabshow .5s":e.style.cssText="display: none;animation: ''"}),c||"function"!=typeof loadOtherComment||(c=!0,loadOtherComment())}),document.getElementById("toggle-menu").addEventListener("click",function(){m()})},refreshFn(),window.addEventListener("resize",function(){r(!1),btf.isHidden(document.getElementById("toggle-menu"))&&i&&a()}),document.getElementById("menu-mask").addEventListener("click",function(e){a()}),document.querySelectorAll("#sidebar-menus .site-page.group").forEach(function(e){e.addEventListener("click",function(){this.classList.toggle("hide")})}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(b=GLOBAL_CONFIG.copyright,document.body.oncopy=function(e){e.preventDefault();var t=window.getSelection(0).toString(),t=t.length>b.limitCount?t+"\n\n\n"+b.languages.author+"\n"+b.languages.link+window.location.href+"\n"+b.languages.source+"\n"+b.languages.info:t;return(e.clipboardData?e:window).clipboardData.setData("text",t)})});