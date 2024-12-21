/*! License information can be found in https://cdn.jsdelivr.net/npm/@hodgef/landing-theme@3.0.5/build/docs.js.LICENSE.txt */
var PRSSComponent=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=13)}([function(e,t){e.exports=React},function(e,t,n){self,e.exports=(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t,r=1;r<arguments.length;r++)t=null==arguments[r]?{}:arguments[r],r%2?n(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}(e,t)||i(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}e.r(t),e.d(t,{appendToBody:()=>M,appendToHead:()=>C,findInStructure:()=>F,formattedDate:()=>E,getAllProps:()=>g,getComponent:()=>T,getItem:()=>x,getItemBySlug:()=>I,getItemChildren:()=>Y,getItemChildrenBySlug:()=>B,getItems:()=>k,getJsonProp:()=>d,getPathUrl:()=>b,getProp:()=>f,getRawPostItem:()=>w,getSiteUrl:()=>y,getStructurePaths:()=>S,hasItem:()=>H,init:()=>m,objGet:()=>v,processPRSSLinks:()=>U,propExists:()=>p,removeTagsFromElem:()=>j,setContent:()=>P,shuffle:()=>R,stripShortcodes:()=>A,stripTags:()=>O,timeAgo:()=>h,truncateStr:()=>D,truncateString:()=>N,walkStructure:()=>L});var u=null,s=null,m=function(e){e&&(u=e),window.onload=function(){U()}},f=function(e){return u?v(e,u):void 0},d=function(e){var t;if(p(e))try{t=JSON.parse(f(e))}catch(t){console.error("Prop '".concat(e,"' could not be parsed."),t)}return t},p=function(e){return void 0!==f(e)},v=function(e,t){return e.split(".").reduce((function(e,t){return e?e[t]:""}),t)},g=function(){return u},y=function(){return"localhost"===location.hostname||"127.0.0.1"===location.hostname?location.origin:f("site.url")},b=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=y();return t&&t.length&&"/"!==t[t.length-1]&&(t+="/"),e&&e.length&&"/"!==e[e.length-1]&&(e+="/"),t+e},h=function(e){var t=function(e){for(var t=0,n=[["year",31536e3],["month",2592e3],["day",86400],["hour",3600],["minute",60],["second",1]];t<n.length;t++){var r=l(n[t],2),a=r[0],o=r[1],i=Math.floor(e/o);if(1<=i)return{interval:i,epoch:a}}}(Math.floor((new Date-new Date(e))/1e3)),n=t.interval,r=t.epoch,a=1===n?"":"s";return"".concat(n," ").concat(r).concat(a," ago")},E=function(e){var t=new Date(e),n=new Intl.DateTimeFormat("en",{year:"numeric"}).format(t),r=new Intl.DateTimeFormat("en",{month:"short"}).format(t),a=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(t);return"".concat(a," ").concat(r,", ").concat(n)},S=function e(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:[];return t.forEach((function(t){var a=t.key,o="".concat(n,"/").concat(a);r.push(o),t.children&&e(t.children,o,r)})),r},w=function(e){return(PRSSItems||[]).find((function(t){return t.uuid===e}))},A=function(e){var t=e;return o(t.matchAll(/\[([a-zA-Z]+)=?([a-zA-Z0-9]+)?\](.+?)\[\/[a-zA-Z]+\]?/gi)).forEach((function(e){var n=l(e,1)[0];n&&(t=t.replace(n,""))})),t},N=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:50,n=e.replace(/"/g,"").replace(/\s+/g," ").trim();return n?n.length<=t?n:"".concat(n.substring(0,t),"..."):null},j=function(e,t){return t.forEach((function(t){return e.querySelectorAll(t).forEach((function(e){return e.innerHTML=""}))}))},O=function(e){var t=A(e),n=(new DOMParser).parseFromString(t,"text/html");return j(n,["pre","h1","h2"]),n.body.textContent||""},P=function(e,t){var n,r=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],a=document.querySelector(e);if(!a&&r&&e.includes(".")&&2===e.split(".").length){var o=e.split("."),i=l(o,2),c=i[0],u=i[1];(a=document.createElement(c)).className=u,n=!0}a&&(a.innerHTML=t),n&&document.body.appendChild(a)},I=function(e){return k().find((function(t){return t.slug===e}))},T=function(e){return k().find((function(t){return"component"===t.template&&t.slug===e}))},x=function(e){return k().find((function(t){return t.uuid===e}))},C=function(e){return document.head.innerHTML+=e},M=function(e){return document.body.innerHTML+=e},k=function(e,t){if(!PRSSItems)return[];var n=f("site").structure,a=S(n),o=s||a.map((function(e){var t,n=e.split("/").map((function(e){return e?(t=w(e)).slug:""})).slice(2).join("/");return t?r({},t,{path:n,url:b(n)}):null}));!s&&o.length&&(s=o);var l=o;return e&&(l=l.filter((function(t){return t.template===e}))),t&&(l=l.sort((function(e,t){return t.createdAt-e.createdAt}))),l},L=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,n=o(e),a=function(e){var n=e.key,o=e.children,l=void 0===o?[]:o,i=w(n);return i?r({key:n},t?t(i):{},{children:l.map(a)}):e};return n.map((function(e){return a(e)}))},R=function(){for(var e,t,n=Math.floor,r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],a=o(r),l=a.length;0!==l;)t=n(Math.random()*l),e=a[l-=1],a[l]=a[t],a[t]=e;return a},H=function(e,t){return JSON.stringify(t).includes(e)},F=function(e){var t,n=f("site").structure,r=function(n){return n.key===e?(t=n,!0):!!n.children&&n.children.some(r)};return n.some(r),t},Y=function(e){var t=F(e);return(t&&t.children?t.children:[]).map((function(e){return x(e.key)}))},B=function(e){var t,n=null===(t=I(e))||void 0===t?void 0:t.uuid;return Y(n)},D=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:50;return e.length>t?e.substring(0,t)+"...":e},U=function(){document.querySelectorAll("a[data-prss-path]").forEach((function(e){var t=e.getAttribute("data-prss-path");e.setAttribute("href",b(t))}))};return t})()},function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=l(e,o(n)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=l(t,r));return t}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),l=n(2),i=n.n(l);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n){var r;return r=function(e,t){if("object"!=c(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==c(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=function(e){var t=e.name,n=e.renderItem,l=e.renderItemLabel,c=e.ulClassName,s=void 0===c?"":c,m=e.mode,f=e.style,d=void 0===f?{}:f,p=e.prependedComponent,v=void 0===p?null:p,g=o.getProp("site.menus.".concat(t));if(!g)return null;var y,b=(y=[],g.forEach((function e(t){t&&(y.push(t),t.children&&t.children.forEach(e))})),y),h=function e(t){return("prev-next"===m?E:n||w)(t,e)},E=function(e,t){var n=b.findIndex((function(e){return e.key===o.getProp("item").uuid})),r=b[n-1]?b[n-1]:null,c=b[n+1]?b[n+1]:null,u=!!r&&r.key===e.key,s=!!c&&c.key===e.key;if(!u&&!s)return null;var m=o.getItem(e.key);return a.a.createElement("li",{className:i()({"menu-item-prev":u,"menu-item-next":s}),title:e.title||m.title},l?l(m):a.a.createElement("a",{href:m.url},a.a.createElement("span",{className:"menu-item-title"},u?"Previous":"Next"),a.a.createElement("span",{className:"menu-item-label"},e.title||m.title)))},S=function(e){var t=o.getProp("item").uuid;return e.key===t||o.hasItem(t,e)},w=function(e,t){var n=o.getItem(e.key);return a.a.createElement("li",{title:e.title||n.title,className:i()({active:e.key===o.getProp("item").uuid,expanded:S(e)})},l?l(n):a.a.createElement("a",{href:n.url},e.title||n.title),e.children&&!!e.children.length&&a.a.createElement("ul",null,e.children.map(t)))},A="prev-next"===m?b.map(h):g.map(h);return A.filter((function(e){return!!e})).length?a.a.createElement(r.Fragment,null,v,a.a.createElement("ul",{className:i()("page-menu",s,u({},"mode-".concat(m),m)),style:d},A)):null}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1);t.a=function(){var e=o.getProp("vars"),t=e.footerLeft,n=e.footerRight,r=o.getProp("site").title;return a.a.createElement("footer",{className:"page-footer"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col col-12 col-md-6"},t?a.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}):a.a.createElement("span",null,"© ",r)),a.a.createElement("div",{className:"col col-12 col-md-6 mt-3 mt-md-0 d-flex justify-content-md-end"},n?a.a.createElement("span",null,n):a.a.createElement("a",{href:"https://prss.io",className:"d-flex align-items-center footer-shoutout",target:"_blank",rel:"noopener",title:"Powered by PRSS Site Creator"},a.a.createElement("img",{className:"prss-footer-image mr-1",src:"data:image/png;base64,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",width:15}),a.a.createElement("span",{className:"font-weight-bold prss-tag"},"PRSS Site Creator"))))))}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(2),l=n.n(o),i=n(1),c=n(3);function u(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,l,i=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(e,t)||m(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.a=function(e){var t=e.onScrollCallback,n=e.onResizeCallback,o=i.getProp("vars").logoImageUrl,m=i.getProp("site"),f=m.title,d=(m.url,i.getProp("item").uuid),p=s(Object(r.useState)(0),2),v=p[0],g=p[1],y=s(Object(r.useState)(!1),2),b=y[0],h=y[1],E=s(Object(r.useState)(!1),2),S=E[0],w=E[1],A=Object(r.useRef)(null);Object(r.useEffect)((function(){var e=function(e){var n=e.target.documentElement.scrollTop;t&&t(n),g(n),!b&&v>80&&(h(!0),w(!1)),!S&&b&&n<=20&&(h(!1),w(!0),A.current||(A.current=setTimeout((function(){w(!1),clearTimeout(A.current),A.current=null}),2e3)))},r=function(e){n&&n(e)};return window.addEventListener("scroll",e),window.addEventListener("resize",r),function(){window.removeEventListener("scroll",e),window.removeEventListener("resize",r)}}),[v]);return a.a.createElement("header",{className:"page-header"},a.a.createElement("div",{className:l()("header-nav",{scrolled:b,"sticky-unset":S,"sticky-top":b||S})},a.a.createElement("div",{className:"container"},a.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark mx-2"},a.a.createElement("a",{className:"navbar-brand logo",href:i.getSiteUrl()},o?a.a.createElement("img",{src:o}):f),a.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},a.a.createElement("span",{className:"navbar-toggler-icon"})),a.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarSupportedContent"},a.a.createElement(c.a,{name:"header",ulClassName:"navbar-nav",renderItem:function(e){var t=i.getItem(e.key),n=t.path?i.findInStructure(e.key):null,r=(null==n?void 0:n.children)||[],o=(null==e?void 0:e.children)||[],c=[].concat(u(r),u(o)),s=i.hasItem(d,c);return a.a.createElement("li",{className:l()("nav-item",{dropdown:o&&o.length,active:e.key===d||s})},a.a.createElement("a",{className:l()("nav-link",{"dropdown-toggle":o&&o.length}),href:t.url},e.title||t.title),o&&function(e){return a.a.createElement("div",{className:"dropdown-menu"},e.map((function(e){var t=i.getItem(e.key);return a.a.createElement("a",{className:"dropdown-item",href:t.url},t.title)})))}(o))}}))))))}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(2),l=n.n(o);t.a=function(e){var t=e.children,n=e.className;return a.a.createElement("div",{className:l()("page",n)},t)}},function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.imageUrl,r=void 0===n?"":n,o=e.afterComponent,l=e.heroClass;return a.a.createElement("div",{className:"hero".concat(l?" ".concat(l):"")},a.a.createElement("div",{className:"hero-image",style:{backgroundImage:r?"url(".concat(r,")"):null}}),a.a.createElement("div",{className:"container mt-5 mt-sm-0"},a.a.createElement("div",{className:"row mx-2 justify-content-between"},a.a.createElement("div",{className:"col"},t))),o)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return!(!e||!e.trim().length)}},function(e,t,n){},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),l=n(2),i=n.n(l);t.a=function(e){var t=e.name,n=o.getProp("vars")[t],l=Object(r.useRef)(null);return n?(Object(r.useEffect)((function(){var e=document.createRange().createContextualFragment(n);l.current.innerHtml="",l.current.appendChild(e)}),[]),a.a.createElement("div",{ref:l,className:i()("page-aside",t)})):null}},,,function(e,t,n){"use strict";n.r(t);n(9);var r=n(0),a=n.n(r),o=n(1),l=n(2),i=n.n(l),c=n(5),u=n(4),s=n(6),m=n(7),f=n(3),d=n(10),p=n(8);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,l,i=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(e){o.init(e),window.PRSS=o;var t=o.getProp("vars"),n=t.heroTitle,l=t.heroMessage,g=t.heroImageUrl,y=t.featuredImageUrl,b=t.sidebarMenu,h=t.footerCta,E=t.warningHtml,S=t.contentFooterHtml,w=t.heroClass,A=o.getProp("item"),N=A.content,j=A.uuid,O=A.title,P=o.getProp("sidebarHtml"),I=(o.getItems("post").filter((function(e){return e.uuid!==j})),v(Object(r.useState)(0),1)[0]),T=v(Object(r.useState)(0),2),x=T[0],C=T[1],M=v(Object(r.useState)(!1),2),k=M[0],L=M[1],R=v(Object(r.useState)(!1),2),H=R[0],F=R[1],Y=v(Object(r.useState)(!1),2),B=Y[0],D=Y[1],U=(y?250:0)+80+155-20,z=function(){window.innerWidth<=768?L(!0):(L(!1),D(!1))},V=function(){var e=window.innerWidth<=768,t=window.innerHeight-80,n=document.querySelector(".content"),r=n?n.offsetHeight+40:0,a=!e&&Math.max(t,r);C(a)};return Object(r.useEffect)((function(){z(),V()})),a.a.createElement(s.a,{className:"page-docs"},a.a.createElement(c.a,{onScrollCallback:function(e){var t=window.innerWidth,n=e>U?e-U:0;L(t<=768),F(!!n),V()},onResizeCallback:function(e){z(),V()}}),O&&a.a.createElement(m.a,{imageUrl:g,heroClass:w}),a.a.createElement("main",null,a.a.createElement("div",{className:i()("container main-container",{"small-width":k,"menu-fixed":H,"menu-show":B})},y&&a.a.createElement("div",{className:"featured-image",style:{backgroundImage:"url(".concat(y,")")}}),a.a.createElement("div",{className:"post-title-container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-12 col-lg d-lg-flex flex-column justify-content-center"},a.a.createElement("h1",{className:"mb-0"},n||O),l&&a.a.createElement("div",{className:"docs-hero-message mt-2",dangerouslySetInnerHTML:{__html:l}})),a.a.createElement("div",{className:"col-12 col-lg-4 mt-3 mt-lg-0"},a.a.createElement(d.a,{name:"asideHtml"})))),a.a.createElement("div",{className:"row m-0"},Object(p.a)(b)&&a.a.createElement("div",{className:"col-3 docs-sidebar",style:{marginTop:I?I+"px":null,maxHeight:x?x+"px":null}},a.a.createElement("div",{className:"docs-sidebar-inner-container"},a.a.createElement(f.a,{name:b,ulClassName:"sidebar-menu",prependedComponent:a.a.createElement(r.Fragment,null,k&&a.a.createElement("div",{className:"menu-title",onClick:function(e){k&&D(!B)}},a.a.createElement("i",{className:"fa fa-caret-down mr-2"}),a.a.createElement("span",null,"Navigate")))}))),a.a.createElement("div",{className:"col col-md-9"},a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"content-top"},Object(p.a)(N||E)&&a.a.createElement("section",{className:"post-content mb-3"},E&&a.a.createElement("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",dangerouslySetInnerHTML:{__html:E}}),a.a.createElement("div",{className:"post-inner-content mb-5",dangerouslySetInnerHTML:{__html:N}}),Object(p.a)(h)&&a.a.createElement("div",{className:"footer-cta",dangerouslySetInnerHTML:{__html:h}})),Object(p.a)(b)&&a.a.createElement("section",null,a.a.createElement(f.a,{name:b,ulClassName:"docs-footer-menu",mode:"prev-next"}))),Object(p.a)(S)&&a.a.createElement("section",{className:"content-footer"},a.a.createElement(d.a,{name:"contentFooterHtml"})))),Object(p.a)(P)&&a.a.createElement("div",{className:"col-3",dangerouslySetInnerHTML:{__html:P}})))),a.a.createElement(u.a,null))}}]);