/*! License information can be found in https://cdn.jsdelivr.net/npm/@hodgef/landing-theme@1.4.1/build/home.js.LICENSE.txt */
var PRSSComponent=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=32)}([function(e,t){e.exports=React},function(e,t,n){self,e.exports=(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t,n=1;n<arguments.length;n++)t=null==arguments[n]?{}:arguments[n],n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}e.r(t),e.d(t,{findInStructure:()=>N,formattedDate:()=>x,getAllProps:()=>h,getItem:()=>E,getItemChildren:()=>I,getItems:()=>k,getJsonProp:()=>p,getPathUrl:()=>b,getProp:()=>m,getRawPostItem:()=>S,getSiteUrl:()=>v,getStructurePaths:()=>w,hasItem:()=>P,init:()=>d,objGet:()=>g,processPRSSLinks:()=>C,propExists:()=>f,shuffle:()=>j,timeAgo:()=>y,truncateStr:()=>O,walkStructure:()=>A});var u=null,s=null,d=function(e){u=e,window.onload=function(){C()}},m=function(e){if(!u)throw new Error("PRSS Site Configuration is not defined!");return g(e,u)},p=function(e){var t;if(f(e))try{t=JSON.parse(m(e))}catch(t){console.error("Prop '".concat(e,"' could not be parsed."),t)}return t},f=function(e){return void 0!==m(e)},g=function(e,t){return e.split(".").reduce((function(e,t){return e?e[t]:""}),t)},h=function(){return u},v=function(){return"localhost"===location.hostname||"127.0.0.1"===location.hostname?location.origin:m("site.url")},b=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=v();return t&&t.length&&"/"!==t[t.length-1]&&(t+="/"),e&&e.length&&"/"!==e[e.length-1]&&(e+="/"),t+e},y=function(e){var t=function(e){for(var t=0,n=[["year",31536e3],["month",2592e3],["day",86400],["hour",3600],["minute",60],["second",1]];t<n.length;t++){var r=i(n[t],2),a=r[0],o=r[1],l=Math.floor(e/o);if(1<=l)return{interval:l,epoch:a}}}(Math.floor((new Date-new Date(e))/1e3)),n=t.interval,r=t.epoch,a=1===n?"":"s";return"".concat(n," ").concat(r).concat(a," ago")},x=function(e){var t=new Date(e),n=new Intl.DateTimeFormat("en",{year:"numeric"}).format(t),r=new Intl.DateTimeFormat("en",{month:"short"}).format(t),a=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(t);return"".concat(a," ").concat(r,", ").concat(n)},w=function e(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:[];return t.forEach((function(t){var a=t.key,o="".concat(n,"/").concat(a);r.push(o),t.children&&e(t.children,o,r)})),r},S=function(e){return(PRSSItems||[]).find((function(t){return t.uuid===e}))},E=function(e){return k().find((function(t){return t.uuid===e}))},k=function(e,t){if(!PRSSItems)return[];var n=m("site").structure,r=w(n),o=s||r.map((function(e){var t,n=e.split("/").map((function(e){return e?(t=S(e)).slug:""})).slice(2).join("/");return t?a({},t,{path:n,url:b(n)}):null}));!s&&o.length&&(s=o);var i=o;return e&&(i=i.filter((function(t){return t.template===e}))),t&&(i=i.sort((function(e,t){return t.createdAt-e.createdAt}))),i},A=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,r=n(e),o=function(e){var n=e.key,r=e.children,i=void 0===r?[]:r,l=S(n);return l?a({key:n},t?t(l):{},{children:i.map(o)}):e};return r.map((function(e){return o(e)}))},j=function(){for(var e,t,r=Math.floor,a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],o=n(a),i=o.length;0!==i;)t=r(Math.random()*i),e=o[i-=1],o[i]=o[t],o[t]=e;return o},P=function(e,t){return JSON.stringify(t).includes(e)},N=function(e){var t,n=m("site").structure,r=function(n){return n.key===e?(t=n,!0):!!n.children&&n.children.some(r)};return n.some(r),t},I=function(e){var t=N(e);return(t&&t.children?t.children:[]).map((function(e){return E(e.key)}))},O=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:50;return e.length>t?e.substring(0,t)+"...":e},C=function(){document.querySelectorAll("a[data-prss-path]").forEach((function(e){var t=e.getAttribute("data-prss-path");e.setAttribute("href",b(t))}))};return t})()},function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,o(n)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=i(t,r));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function l(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],a=0;a<e.length;a++){var o=e[a],c=t.base?o[0]+t.base:o[0],u=n[c]||0,s="".concat(c," ").concat(u);n[c]=u+1;var d=l(s),m={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(i[d].references++,i[d].updater(m)):i.push({identifier:s,updater:h(m,t),references:1}),r.push(s)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,d=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function m(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,g=0;function h(e,t){var n,r,a;if(t.singleton){var o=g++;n=f||(f=u(t)),r=m.bind(null,n,o,!1),a=m.bind(null,n,o,!0)}else n=u(t),r=p.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=l(n[r]);i[a].references--}for(var o=c(e,t),u=0;u<n.length;u++){var s=l(n[u]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=o}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(i=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(c," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([a]).join("\n")}var i,l,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),i=n(2),l=n.n(i);n(16);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n){var r;return r=function(e,t){if("object"!=c(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==c(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=function(e){var t=e.name,n=e.renderItem,i=e.renderItemLabel,c=e.ulClassName,s=void 0===c?"":c,d=e.mode,m=e.style,p=void 0===m?{}:m,f=e.prependedComponent,g=void 0===f?null:f,h=o.getProp("site.menus.".concat(t));if(!h)return null;var v,b=(v=[],h.forEach((function e(t){t&&(v.push(t),t.children&&t.children.forEach(e))})),v),y=function e(t){return("prev-next"===d?x:n||S)(t,e)},x=function(e,t){var n=b.findIndex((function(e){return e.key===o.getProp("item").uuid})),r=b[n-1]?b[n-1]:null,c=b[n+1]?b[n+1]:null,u=!!r&&r.key===e.key,s=!!c&&c.key===e.key;if(!u&&!s)return null;var d=o.getItem(e.key);return a.a.createElement("li",{className:l()({"menu-item-prev":u,"menu-item-next":s}),title:e.title||d.title},i?i(d):a.a.createElement("a",{href:d.url},a.a.createElement("span",{className:"menu-item-title"},u?"Previous":"Next"),a.a.createElement("span",{className:"menu-item-label"},e.title||d.title)))},w=function(e){var t=o.getProp("item").uuid;return e.key===t||o.hasItem(t,e)},S=function(e,t){var n=o.getItem(e.key);return a.a.createElement("li",{title:e.title||n.title,className:l()({active:e.key===o.getProp("item").uuid,expanded:w(e)})},i?i(n):a.a.createElement("a",{href:n.url},e.title||n.title),e.children&&!!e.children.length&&a.a.createElement("ul",null,e.children.map(t)))},E="prev-next"===d?b.map(y):h.map(y);return E.filter((function(e){return!!e})).length?a.a.createElement(r.Fragment,null,g,a.a.createElement("ul",{className:l()("page-menu",s,u({},"mode-".concat(d),d)),style:p},E)):null}},function(e,t,n){"use strict";n(14);var r=n(0),a=n.n(r),o=n(2),i=n.n(o),l=n(1),c=n(5);function u(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.a=function(e){var t=e.onScrollCallback,n=e.onResizeCallback,o=l.getProp("vars").logoImageUrl,d=l.getProp("site"),m=d.title,p=(d.url,l.getProp("item").uuid),f=s(Object(r.useState)(0),2),g=f[0],h=f[1],v=s(Object(r.useState)(!1),2),b=v[0],y=v[1],x=s(Object(r.useState)(!1),2),w=x[0],S=x[1],E=Object(r.useRef)(null);Object(r.useEffect)((function(){var e=function(e){var n=e.target.documentElement.scrollTop;t&&t(n),h(n),!b&&g>80&&(y(!0),S(!1)),!w&&b&&n<=20&&(y(!1),S(!0),E.current||(E.current=setTimeout((function(){S(!1),clearTimeout(E.current),E.current=null}),2e3)))},r=function(e){n&&n(e)};return window.addEventListener("scroll",e),window.addEventListener("resize",r),function(){window.removeEventListener("scroll",e),window.removeEventListener("resize",r)}}),[g]);return a.a.createElement("header",{className:"page-header"},a.a.createElement("div",{className:i()("header-nav",{scrolled:b,"sticky-unset":w,"sticky-top":b||w})},a.a.createElement("div",{className:"container"},a.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark mx-2"},a.a.createElement("a",{className:"navbar-brand logo",href:l.getSiteUrl()},o?a.a.createElement("img",{src:o}):m),a.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},a.a.createElement("span",{className:"navbar-toggler-icon"})),a.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarSupportedContent"},a.a.createElement(c.a,{name:"header",ulClassName:"navbar-nav",renderItem:function(e){var t=l.getItem(e.key),n=t.path?l.findInStructure(e.key):null,r=(null==n?void 0:n.children)||[],o=(null==e?void 0:e.children)||[],c=[].concat(u(r),u(o)),s=l.hasItem(p,c);return a.a.createElement("li",{className:i()("nav-item",{dropdown:o&&o.length,active:e.key===p||s})},a.a.createElement("a",{className:i()("nav-link",{"dropdown-toggle":o&&o.length}),href:t.url},e.title||t.title),o&&function(e){return a.a.createElement("div",{className:"dropdown-menu"},e.map((function(e){var t=l.getItem(e.key);return a.a.createElement("a",{className:"dropdown-item",href:t.url},t.title)})))}(o))}}))))))}},function(e,t,n){"use strict";n(20);var r=n(0),a=n.n(r),o=n(2),i=n.n(o);t.a=function(e){var t=e.children,n=e.className;return a.a.createElement("div",{className:i()("page",n)},t)}},function(e,t,n){"use strict";n(22);var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.imageUrl,r=void 0===n?"":n,o=e.afterComponent;return a.a.createElement("div",{className:"hero"},a.a.createElement("div",{className:"hero-image",style:{backgroundImage:r?"url(".concat(r,")"):null}}),a.a.createElement("div",{className:"container mt-5 mt-sm-0"},a.a.createElement("div",{className:"row mx-2 justify-content-between"},a.a.createElement("div",{className:"col"},t))),o)}},function(e,t,n){"use strict";n(18);var r=n(0),a=n.n(r),o=n(1);t.a=function(){var e=o.getProp("vars"),t=e.footerLeft,n=e.footerRight,r=o.getProp("site").title;return a.a.createElement("footer",{class:"page-footer"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col"},t?a.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}):a.a.createElement("span",null,"© ",r)),a.a.createElement("div",{className:"col d-flex justify-content-end"},n?a.a.createElement("span",null,n):a.a.createElement("a",{href:"https://prss.io",className:"d-flex align-items-center footer-shoutout",target:"_blank",rel:"noopener"},a.a.createElement("span",null,"Powered by"),a.a.createElement("img",{className:"prss-footer-image mx-1",src:"data:image/png;base64,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",width:15}),a.a.createElement("span",{className:"font-weight-bold"},"PRSS"))))))}},,,function(e,t,n){var r=n(3),a=n(13);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:function(e){var t=document.querySelector("head"),n=window._lastElementInsertedByStyleLoader;n?n.nextSibling?t.insertBefore(e,n.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),window._lastElementInsertedByStyleLoader=e},singleton:!1};r(a,o);e.exports=a.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,"html,body{font-family:'Inter', sans-serif;margin:0;padding:0}::selection{background:#616161;color:white}.clickable{transition:opacity 0.1s ease-in-out;cursor:pointer}.clickable:hover{opacity:0.5}.clickable:active{opacity:0.3}.disabled{opacity:0.5}.disabled:hover{opacity:0.5}.disabled:active{opacity:0.5}@media (min-width: 34em){.card-columns{-webkit-column-count:2;-moz-column-count:2;column-count:2}}@media (min-width: 48em){.card-columns{-webkit-column-count:3;-moz-column-count:3;column-count:3}}@media (min-width: 62em){.card-columns{-webkit-column-count:4;-moz-column-count:4;column-count:4}}@media (min-width: 75em){.card-columns{-webkit-column-count:5;-moz-column-count:5;column-count:5}}\n",""]),e.exports=t},function(e,t,n){var r=n(3),a=n(15);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:function(e){var t=document.querySelector("head"),n=window._lastElementInsertedByStyleLoader;n?n.nextSibling?t.insertBefore(e,n.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),window._lastElementInsertedByStyleLoader=e},singleton:!1};r(a,o);e.exports=a.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".page header.page-header{display:unset;user-select:none}.page header.page-header .header-nav{height:80px;display:flex;justify-content:space-between;align-items:center;color:white;width:100%;top:20px;transition:0.3s background ease-in-out}.page header.page-header .header-nav .logo{color:white;font-size:25px;font-weight:600;max-width:160px}.page header.page-header .header-nav .logo img{max-width:100%;height:auto}.page header.page-header .header-nav:not(.scrolled){z-index:10;position:relative}.page header.page-header .header-nav.sticky-unset{background:#252525c4;backdrop-filter:blur(10px);animation:sticky-top-unset 0.5s forwards}.page header.page-header .header-nav.scrolled{background:#252525c4;backdrop-filter:blur(10px);animation:sticky-top-set 0.5s forwards}.page header.page-header .header-nav .navbar-dark .navbar-toggler{border:none}.page header.page-header .header-nav .dropdown-menu{left:unset;right:0}.page header.page-header .header-nav .dropdown:hover .dropdown-menu{display:block;margin:0}@media (max-width: 991.98px){.page header.page-header .header-nav .navbar-collapse{background:#060606fc;position:absolute;top:100%;width:100%;right:0;padding:0 20px;z-index:999999999999999;border-radius:10px}.page header.page-header .header-nav .dropdown-menu{margin-bottom:10px}}@keyframes sticky-top-set{0%{top:-100px}100%{top:0}}@keyframes sticky-top-unset{0%{background:#252525c4;backdrop-filter:blur(10px)}100%{background:transparent;backdrop-filter:blur(0px)}}\n",""]),e.exports=t},function(e,t,n){var r=n(3),a=n(17);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:function(e){var t=document.querySelector("head"),n=window._lastElementInsertedByStyleLoader;n?n.nextSibling?t.insertBefore(e,n.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),window._lastElementInsertedByStyleLoader=e},singleton:!1};r(a,o);e.exports=a.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".page .page-menu.mode-prev-next{border-top:1px dashed #e6e6e6;list-style:none;padding:0;margin:0;padding-top:20px;overflow:hidden}.page .page-menu.mode-prev-next .menu-item-next,.page .page-menu.mode-prev-next .menu-item-prev{position:relative;width:49%}.page .page-menu.mode-prev-next .menu-item-next a,.page .page-menu.mode-prev-next .menu-item-prev a{display:block;border:1px solid #d8d8d8;padding:10px 15px;border-radius:3px;text-decoration:none}.page .page-menu.mode-prev-next .menu-item-next a span,.page .page-menu.mode-prev-next .menu-item-prev a span{display:block}.page .page-menu.mode-prev-next .menu-item-next a .menu-item-title,.page .page-menu.mode-prev-next .menu-item-prev a .menu-item-title{color:black}.page .page-menu.mode-prev-next .menu-item-next a .menu-item-label,.page .page-menu.mode-prev-next .menu-item-prev a .menu-item-label{color:#007bff;font-size:18px;font-weight:500}.page .page-menu.mode-prev-next .menu-item-next a:hover,.page .page-menu.mode-prev-next .menu-item-prev a:hover{border:1px solid #007bff}.page .page-menu.mode-prev-next .menu-item-next a:active,.page .page-menu.mode-prev-next .menu-item-prev a:active{border:1px solid #d8d8d8}.page .page-menu.mode-prev-next .menu-item-prev{float:left;text-align:left}.page .page-menu.mode-prev-next .menu-item-prev .menu-item-title{padding-left:25px}.page .page-menu.mode-prev-next .menu-item-prev .menu-item-title::before{position:absolute;content:'←';left:15px;transition:0.3s right ease-in-out}.page .page-menu.mode-prev-next .menu-item-next{float:right;text-align:right}.page .page-menu.mode-prev-next .menu-item-next .menu-item-title{padding-right:25px}.page .page-menu.mode-prev-next .menu-item-next .menu-item-title::after{position:absolute;content:'→';right:15px;transition:0.3s right ease-in-out}\n",""]),e.exports=t},function(e,t,n){var r=n(3),a=n(19);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:function(e){var t=document.querySelector("head"),n=window._lastElementInsertedByStyleLoader;n?n.nextSibling?t.insertBefore(e,n.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),window._lastElementInsertedByStyleLoader=e},singleton:!1};r(a,o);e.exports=a.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".page footer.page-footer{background:#f7f7f7;height:65px;display:flex;align-items:center;position:fixed;bottom:0;width:100%;z-index:-1}.page footer.page-footer .footer-shoutout{opacity:0.6;transition:0.3s opacity ease-in-out;text-decoration:none;color:inherit}.page footer.page-footer .footer-shoutout:hover{opacity:1}.page footer.page-footer .footer-shoutout span{line-height:15px}\n",""]),e.exports=t},function(e,t,n){var r=n(3),a=n(21);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:function(e){var t=document.querySelector("head"),n=window._lastElementInsertedByStyleLoader;n?n.nextSibling?t.insertBefore(e,n.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),window._lastElementInsertedByStyleLoader=e},singleton:!1};r(a,o);e.exports=a.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,"html,body{font-family:'Inter', sans-serif;margin:0;padding:0}::selection{background:#616161;color:white}.clickable{transition:opacity 0.1s ease-in-out;cursor:pointer}.clickable:hover{opacity:0.5}.clickable:active{opacity:0.3}.disabled{opacity:0.5}.disabled:hover{opacity:0.5}.disabled:active{opacity:0.5}@media (min-width: 34em){.card-columns{-webkit-column-count:2;-moz-column-count:2;column-count:2}}@media (min-width: 48em){.card-columns{-webkit-column-count:3;-moz-column-count:3;column-count:3}}@media (min-width: 62em){.card-columns{-webkit-column-count:4;-moz-column-count:4;column-count:4}}@media (min-width: 75em){.card-columns{-webkit-column-count:5;-moz-column-count:5;column-count:5}}.page{font-family:'Inter', sans-serif;box-sizing:border-box;height:100%}.page p{font-size:18px;line-height:1.58;color:#4c4c4c}.page .btn:focus{outline:none !important;box-shadow:none !important}.page h4{font-weight:600}.page h4 a{color:inherit;text-decoration:none;background-color:transparent}.page pre{display:block;padding:15px;margin:0 0 9.5px;font-size:15px;line-height:1.33333333;word-break:break-all;word-wrap:break-word;color:#333;background-color:#f5f5f5;border:none;border-radius:3px}.page .page-aside{min-height:125px;border-radius:5px}.page .alert{font-size:initial}.page .alert.alert-warning a:not(.btn){color:#463a00 !important}.page main{overflow:hidden;background:white;margin-bottom:100px}.page main .content{font-size:18px}.page main .content h2{display:flex;justify-content:space-between;align-items:center}.page main .content h2 a{font-size:21px}.page main .content .card.text-white blockquote footer{color:white}.page main .content .section-title a{position:relative;padding-right:25px;font-weight:400}.page main .content .section-title a::after{position:absolute;content:'→';right:0px;transition:0.3s right ease-in-out}.page main .content .section-title a:hover::after{right:-10px}.page main .main-container{background:white;position:relative;z-index:1;margin-bottom:40px;padding:0}.page main .main-container::before{content:'';width:0;height:0;border-style:solid;border-width:200px 0 0 200px;border-color:transparent transparent transparent #d1d1d1;position:absolute;top:0;right:-100%}.page main .main-container section{padding:20px;margin:20px;border-bottom:1px dashed #e6e6e6}.page main .main-container section:last-child{border-bottom:none}.page main .main-container .badge{font-weight:500}.page .jumbotron{background-color:#f5f5f5}.page .feat-jumbotron{padding:0 !important;border-bottom:5px solid #e0e0e0}.page .feat-jumbotron .row{margin:0}.page .feat-jumbotron .col{padding:0}.page .feat-jumbotron .feat-desc{background:#2f2f2f;color:#ffffff;box-shadow:0 0 25px inset #0000000a;position:relative;border-radius:5px;margin:0 25px;margin-bottom:20px}.page .feat-jumbotron .feat-desc .col::before{content:'';height:10px;width:10px;background:#ffd129;position:absolute;left:0;top:50%;transform:translateY(-50%);border-radius:3px}@media (min-width: 576px){.page .jumbotron{padding:2rem}}.page .card{overflow:hidden}.page .card a.card-title{color:inherit;padding:0;margin:0;font-size:22px;font-family:'Roboto';font-weight:400;margin-bottom:10px;display:block;line-height:30px}.page .card a.card-image{position:relative;text-decoration:none;overflow:hidden;display:block;background-color:#404040;height:200px;backface-visibility:hidden;overflow:hidden}.page .card a.card-image .card-img-top{width:100%;height:100%;object-fit:none}.page .card a.card-image img{transition:transform 0.3s ease-in-out,\r opacity 0.3s ease-in-out}.page .card a.card-image:after{position:absolute;font-family:'FontAwesome';font-weight:400;content:'\\f06e';left:50%;top:50%;transform:translateX(-50%) translateY(-50%);font-size:80px;color:white;opacity:0;transition:opacity 0.3s ease-in-out}.page .card a.card-image:hover img{transform:scale(1.5);opacity:0.5}.page .card a.card-image:hover:after{opacity:1}.page .card .card-img-left{width:100%;height:100%;background-size:cover;display:block;background-color:#e6e6e6}@keyframes ind-blink{0%{opacity:0}50%{opacity:1}100%{opacity:0}}.page blockquote{font-size:18px;font-style:italic;line-height:30px;text-align:left;border-left:3px solid #333;padding:5px 15px;margin:30px 0}\n",""]),e.exports=t},function(e,t,n){var r=n(3),a=n(23);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:function(e){var t=document.querySelector("head"),n=window._lastElementInsertedByStyleLoader;n?n.nextSibling?t.insertBefore(e,n.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),window._lastElementInsertedByStyleLoader=e},singleton:!1};r(a,o);e.exports=a.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".hero{height:500px;color:white;display:flex;align-items:center;margin-top:-80px;position:relative;overflow:hidden;background-color:white}.hero .hero-image,.hero::before{height:100vh;width:100%;position:absolute;top:0;left:0}.hero::before{content:'';background:#26252d;z-index:1}.hero .hero-image{background-size:cover;z-index:0}.hero .hero-title{font-size:60px;font-weight:600}.hero .hero-message{font-size:20px;opacity:0.9}.hero .container{z-index:2}.hero .container .hero-text{text-align:center;max-width:700px;margin:0 auto}.hero .hero-showcase-image img{width:100%;height:auto;max-width:1160px}.hero .links{display:flex;font-size:18px}.hero .links a{color:white;display:flex;align-items:center;text-decoration:none}.hero .links a:hover span{text-decoration:underline}\n",""]),e.exports=t},,,,,,,,,function(e,t,n){"use strict";n.r(t);n(12),n(33);var r=n(0),a=n.n(r),o=n(1),i=n(6),l=n(9),c=n(7),u=n(8);t.default=function(e){o.init(e),window.PRSS=o;var t=o.getProp("vars"),n=t.heroTitle,s=t.heroMessage,d=t.heroImageUrl,m=t.heroShowcaseImageUrl,p=t.ctaUrl,f=t.ctaLabel,g=o.getJsonProp("vars.links"),h=o.getProp("item").content,v=o.getProp("site"),b=(v.title,v.url,o.getProp("sidebarHtml"));o.getItems("post",!0);return a.a.createElement(c.a,{className:"page-home"},a.a.createElement(i.a,null),a.a.createElement(u.a,{imageUrl:d,afterComponent:a.a.createElement(r.Fragment,null,m&&a.a.createElement("div",{className:"hero-showcase-image"},a.a.createElement("img",{src:m,className:"animate__animated animate__fadeInUp"})))},a.a.createElement("div",{className:"hero-text animate__animated animate__fadeIn"},n&&a.a.createElement("h1",{className:"hero-title"},n),s&&a.a.createElement("div",{className:"hero-message mt-4"},s),a.a.createElement("div",{className:"cta-btn-container mt-5 mb-5"},p&&a.a.createElement("a",{href:p,class:"btn btn-lg btn-outline-primary download-btn"},f||"Download"))),g&&a.a.createElement("div",{className:"links mt-4"},g.map((function(e,t){return a.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener",key:"link"+t,className:"mr-3"},e.icon&&a.a.createElement("i",{class:"fa ".concat(e.icon," mr-1")}),a.a.createElement("span",null,e.text))})))),h&&h.trim().length&&a.a.createElement("main",{class:"mt-2"},a.a.createElement("div",{className:"container main-container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col"},a.a.createElement("div",{className:"content"},a.a.createElement("section",{dangerouslySetInnerHTML:{__html:h}}),!1)),b&&a.a.createElement("div",{className:"col-3",dangerouslySetInnerHTML:{__html:b}})))),a.a.createElement(l.a,null))}},function(e,t,n){var r=n(3),a=n(34);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:function(e){var t=document.querySelector("head"),n=window._lastElementInsertedByStyleLoader;n?n.nextSibling?t.insertBefore(e,n.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),window._lastElementInsertedByStyleLoader=e},singleton:!1};r(a,o);e.exports=a.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".page.page-home .hero{height:100vh;color:white;box-sizing:border-box;padding-top:50px;display:flex;margin-top:-80px;position:relative;backface-visibility:hidden;flex-flow:column;align-items:center;background-color:#ececec;box-shadow:0 0px 15px #f1f1f1}.page.page-home .hero .hero-text{text-align:center;max-width:700px;margin:0 auto;margin-top:120px}.page.page-home .hero .hero-showcase-image{z-index:1}.page.page-home .card a.card-title{padding:0;margin:0;font-size:22px;font-family:'Roboto';font-weight:400;margin-bottom:16px;display:block;line-height:30px}\n",""]),e.exports=t}]);