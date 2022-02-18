"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray")),btf={debounce:function(o,i,a){var r;return function(){var e=this,t=arguments,n=a&&!r;clearTimeout(r),r=setTimeout(function(){r=null,a||o.apply(e,t)},i),n&&o.apply(e,t)}},throttle:function(n,o,i){var a,r,u,l=0;i=i||{};function c(){l=!1===i.leading?0:(new Date).getTime(),a=null,n.apply(r,u),a||(r=u=null)}return function(){var e=(new Date).getTime();l||!1!==i.leading||(l=e);var t=o-(e-l);r=this,u=arguments,t<=0||o<t?(a&&(clearTimeout(a),a=null),l=e,n.apply(r,u),a||(r=u=null)):a||!1===i.trailing||(a=setTimeout(c,t))}},sidebarPaddingR:function(){var e=window.innerWidth,t=document.body.clientWidth,n=e-t;e!==t&&(document.body.style.paddingRight=n+"px")},snackbarShow:function(e,t,n){var o=1<arguments.length&&void 0!==t&&t,i=2<arguments.length&&void 0!==n?n:2e3,a=GLOBAL_CONFIG.Snackbar,t=a.position,n=a.bgLight,a=a.bgDark,a="light"===document.documentElement.getAttribute("data-theme")?n:a;Snackbar.show({text:e,backgroundColor:a,showAction:o,duration:i,pos:t,customClass:"snackbar-css"})},diffDate:function(e,t){var n=1<arguments.length&&void 0!==t&&t,o=new Date,i=new Date(e),a=o.getTime()-i.getTime(),r=864e5;return n?(t=a/r,e=a/36e5,o=a/6e4,12<(n=a/2592e6)?i.toLocaleDateString().replace(/\//g,"-"):1<=n?parseInt(n)+" "+GLOBAL_CONFIG.date_suffix.month:1<=t?parseInt(t)+" "+GLOBAL_CONFIG.date_suffix.day:1<=e?parseInt(e)+" "+GLOBAL_CONFIG.date_suffix.hour:1<=o?parseInt(o)+" "+GLOBAL_CONFIG.date_suffix.min:GLOBAL_CONFIG.date_suffix.just):parseInt(a/r)},loadComment:function(e,t){var n;"IntersectionObserver"in window?(n=new IntersectionObserver(function(e){e[0].isIntersecting&&(t(),n.disconnect())},{threshold:[0]})).observe(e):t()},scrollToDest:function(n,e){var o,i=1<arguments.length&&void 0!==e?e:500,a=window.pageYOffset;n<a&&(n-=70),"scrollBehavior"in document.documentElement.style?window.scrollTo({top:n,behavior:"smooth"}):(o=null,n=+n,window.requestAnimationFrame(function e(t){t-=o=o||t;a<n?window.scrollTo(0,(n-a)*t/i+a):window.scrollTo(0,a-(a-n)*t/i),t<i?window.requestAnimationFrame(e):window.scrollTo(0,n)}))},animateIn:function(e,t){e.style.display="block",e.style.animation=t},animateOut:function(t,e){t.addEventListener("animationend",function e(){t.style.display="",t.style.animation="",t.removeEventListener("animationend",e)}),t.style.animation=e},getParents:function(e,t){for(;e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},siblings:function(t,n){return(0,_toConsumableArray2.default)(t.parentNode.children).filter(function(e){return n?e!==t&&e.matches(n):e!==t})},wrap:function(e,t,n){for(var o=document.createElement(t),i=0,a=Object.entries(n);i<a.length;i++){var r=(0,_slicedToArray2.default)(a[i],2),u=r[0],r=r[1];o.setAttribute(u,r)}e.parentNode.insertBefore(o,e),o.appendChild(e)},unwrap:function(e){var t=e.parentNode;t!==document.body&&(t.parentNode.insertBefore(e,t),t.parentNode.removeChild(t))},isHidden:function(e){return 0===e.offsetHeight&&0===e.offsetWidth},getEleTop:function(e){for(var t=e.offsetTop,n=e.offsetParent;null!==n;)t+=n.offsetTop,n=n.offsetParent;return t},loadLightbox:function(e){var n,t=GLOBAL_CONFIG.lightbox;"mediumZoom"===t&&(n=mediumZoom(e)).on("open",function(e){var t="dark"===document.documentElement.getAttribute("data-theme")?"#121212":"#fff";n.update({background:t})}),"fancybox"===t&&(e.forEach(function(e){var t,n;"A"!==e.parentNode.tagName&&(t=e.dataset.lazySrc||e.src,n=e.title||e.alt||"",btf.wrap(e,"a",{href:t,"data-fancybox":"gallery","data-caption":n,"data-thumb":t}))}),window.fancyboxRun||(Fancybox.bind("[data-fancybox]",{Hash:!1,Thumbs:{autoStart:!1}}),window.fancyboxRun=!0))},initJustifiedGallery:function(e){e.forEach(function(e){btf.isHidden(e)||fjGallery(e,{itemSelector:".fj-gallery-item",rowHeight:220,gutter:4,onJustify:function(){this.$container.style.opacity="1"}})})},updateAnchor:function(e){var t;e!==window.location.hash&&(e=e||location.pathname,t=GLOBAL_CONFIG_SITE.title,window.history.replaceState({url:location.href,title:t},t,e))}};