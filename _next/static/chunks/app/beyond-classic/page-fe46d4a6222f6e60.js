(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[167],{9457:function(n,t,e){"use strict";var i=e(2265);function r(n){return Array.prototype.slice.call(n)}function o(n,t){var e=Math.floor(n);return e===t||e+1===t?n:t}function a(){return Date.now()}function u(n,t,e){if(t="data-keen-slider-"+t,null===e)return n.removeAttribute(t);n.setAttribute(t,e||"")}function s(n,t){return t=t||document,"function"==typeof n&&(n=n(t)),Array.isArray(n)?n:"string"==typeof n?r(t.querySelectorAll(n)):n instanceof HTMLElement?[n]:n instanceof NodeList?r(n):[]}function c(n){n.raw&&(n=n.raw),n.cancelable&&!n.defaultPrevented&&n.preventDefault()}function d(n){n.raw&&(n=n.raw),n.stopPropagation&&n.stopPropagation()}function l(){var n=[];return{add:function(t,e,i,r){t.addListener?t.addListener(i):t.addEventListener(e,i,r),n.push([t,e,i,r])},input:function(n,t,e,i){this.add(n,t,function(n){n.nativeEvent&&(n=n.nativeEvent);var t=n.changedTouches||[],i=n.targetTouches||[],r=n.detail&&n.detail.x?n.detail:null;return e({id:r?r.identifier?r.identifier:"i":i[0]?i[0]?i[0].identifier:"e":"d",idChanged:r?r.identifier?r.identifier:"i":t[0]?t[0]?t[0].identifier:"e":"d",raw:n,x:r&&r.x?r.x:i[0]?i[0].screenX:r?r.x:n.pageX,y:r&&r.y?r.y:i[0]?i[0].screenY:r?r.y:n.pageY})},i)},purge:function(){n.forEach(function(n){n[0].removeListener?n[0].removeListener(n[2]):n[0].removeEventListener(n[1],n[2],n[3])}),n=[]}}}function f(n,t,e){return Math.min(Math.max(n,t),e)}function p(n){return(n>0?1:0)-(n<0?1:0)||+n}function v(n){var t=n.getBoundingClientRect();return{height:o(t.height,n.offsetHeight),width:o(t.width,n.offsetWidth)}}function h(n,t,e,i){var r=n&&n[t];return null==r?e:i&&"function"==typeof r?r():r}function m(n){return Math.round(1e6*n)/1e6}var g=function(){return(g=Object.assign||function(n){for(var t,e=1,i=arguments.length;e<i;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)};function b(n,t,e){if(e||2==arguments.length)for(var i,r=0,o=t.length;r<o;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return n.concat(i||Array.prototype.slice.call(t))}function x(n){var t,e,i,r,o,a,u,s;function c(n){return 1-Math.pow(1-n,3)}function d(){return i?n.track.velocity():0}function l(n,t){void 0===t&&(t=1e3);var e=147e-9+(n=Math.abs(n))/t;return{dist:Math.pow(n,2)/e,dur:n/e}}function v(){var t=n.track.details;t&&(o=t.min,a=t.max,u=t.minIdx,s=t.maxIdx)}function h(){n.animator.stop()}n.on("updated",v),n.on("optionsChanged",v),n.on("created",v),n.on("dragStarted",function(){i=!1,h(),t=e=n.track.details.abs}),n.on("dragChecked",function(){i=!0}),n.on("dragEnded",function(){var i,v,m,g,b,x,k=n.options.mode;"snap"===k&&(i=n.track,m=(v=n.track.details).position,g=p(d()),(m>a||m<o)&&(g=0),b=t+g,0===v.slides[i.absToRel(b)].portion&&(b-=g),t!==e&&(b=e),p(i.idxToDist(b,!0))!==g&&(b+=g),b=f(b,u,s),x=i.idxToDist(b,!0),n.animator.start([{distance:x,duration:500,easing:function(n){return 1+--n*n*n*n*n}}])),"free"!==k&&"free-snap"!==k||function(){h();var t="free-snap"===n.options.mode,e=n.track,i=d();r=p(i);var v=n.track.details,m=[];if(i||!t){var g=l(i),b=g.dist,x=g.dur;if(x*=2,b*=r,t){var k=e.idxToDist(e.distToIdx(b),!0);k&&(b=k)}m.push({distance:b,duration:x,easing:c});var w=v.position,y=w+b;if(y<o||y>a){var _=y<o?o-w:a-w,M=0,T=i;if(p(_)===r){var E=Math.min(Math.abs(_)/Math.abs(b),1),C=(1-Math.pow(1-E,1/3))*x;m[0].earlyExit=C,T=i*(1-E)}else m[0].earlyExit=0,M+=_;var O=l(T,100),j=O.dist*r;n.options.rubberband&&(m.push({distance:j,duration:2*O.dur,easing:c}),m.push({distance:-j+M,duration:500,easing:c}))}n.animator.start(m)}else n.moveToIdx(f(v.abs,u,s),!0,{duration:500,easing:function(n){return 1+--n*n*n*n*n}})}()}),n.on("dragged",function(){e=n.track.details.abs})}function k(n){var t,e,i,r,o,a,u,v,h,m,g,b,x,k,w,y,_,M,T=l();function E(t){if(a&&v===t.id){var s=I(t);if(h){if(!j(t))return O(t);m=s,h=!1,n.emit("dragChecked")}if(y)return m=s;c(t);var l=function(t){if(_===-1/0&&M===1/0)return t;var i=n.track.details,a=i.length,u=i.position,s=f(t,_-u,M-u);if(0===a)return 0;if(!n.options.rubberband)return s;if(u<=M&&u>=_||u<_&&e>0||u>M&&e<0)return t;var c=Math.max(0,1-Math.abs((u<_?u-_:u-M)/a*(r*a))/o*2);return c*c*t}(u(m-s)/r*i);e=p(l);var x=n.track.details.position;(x>_&&x<M||x===_&&e>0||x===M&&e<0)&&d(t),g+=l,!b&&Math.abs(g*r)>5&&(b=!0),n.track.add(l),m=s,n.emit("dragged")}}function C(t){!a&&n.track.details&&n.track.details.length&&(g=0,a=!0,b=!1,h=!0,v=t.id,j(t),m=I(t),n.emit("dragStarted"))}function O(t){a&&v===t.idChanged&&(a=!1,n.emit("dragEnded"))}function j(n){var t=N(),e=t?n.y:n.x,i=t?n.x:n.y,r=void 0!==x&&void 0!==k&&Math.abs(k-i)<=Math.abs(x-e);return x=e,k=i,r}function I(n){return N()?n.y:n.x}function N(){return n.options.vertical}function S(){r=n.size,o=N()?window.innerHeight:window.innerWidth;var t=n.track.details;t&&(_=t.min,M=t.max)}function z(n){b&&(d(n),c(n))}function A(){if(T.purge(),n.options.drag&&!n.options.disabled){u="function"==typeof(r=n.options.dragSpeed||1)?r:function(n){return n*r},i=n.options.rtl?-1:1,S(),t=n.container,e="data-keen-slider-clickable",s("[".concat(e,"]:not([").concat(e,"=false])"),t).map(function(n){T.add(n,"dragstart",d),T.add(n,"mousedown",d),T.add(n,"touchstart",d)}),T.add(t,"dragstart",function(n){c(n)}),T.add(t,"click",z,{capture:!0}),T.input(t,"ksDragStart",C),T.input(t,"ksDrag",E),T.input(t,"ksDragEnd",O),T.input(t,"mousedown",C),T.input(t,"mousemove",E),T.input(t,"mouseleave",O),T.input(t,"mouseup",O),T.input(t,"touchstart",C,{passive:!0}),T.input(t,"touchmove",E,{passive:!1}),T.input(t,"touchend",O),T.input(t,"touchcancel",O),T.add(window,"wheel",function(n){a&&c(n)});var e,r,o="data-keen-slider-scrollable";s("[".concat(o,"]:not([").concat(o,"=false])"),n.container).map(function(n){var t;T.input(n,"touchstart",function(n){t=I(n),y=!0,w=!0},{passive:!0}),T.input(n,"touchmove",function(e){var i=N(),r=i?n.scrollHeight-n.clientHeight:n.scrollWidth-n.clientWidth,o=t-I(e),a=i?n.scrollTop:n.scrollLeft,u=i&&"scroll"===n.style.overflowY||!i&&"scroll"===n.style.overflowX;if(t=I(e),(o<0&&a>0||o>0&&a<r)&&w&&u)return y=!0;w=!1,c(e),y=!1}),T.input(n,"touchend",function(){y=!1})})}}n.on("updated",S),n.on("optionsChanged",A),n.on("created",A),n.on("destroyed",T.purge)}function w(n){var t,e,i=null;function r(t,e,i){n.animator.active?a(t,e,i):requestAnimationFrame(function(){return a(t,e,i)})}function o(){r(!1,!1,e)}function a(e,r,o){var a=0,u=n.size,d=n.track.details;if(d&&t){var l=d.slides;t.forEach(function(n,t){if(e)!i&&r&&s(n,null,o),c(n,null,o);else{if(!l[t])return;var d=l[t].size*u;!i&&r&&s(n,d,o),c(n,l[t].distance*u-a,o),a+=d}})}}function u(t){return"performance"===n.options.renderMode?Math.round(t):t}function s(n,t,e){var i=e?"height":"width";null!==t&&(t=u(t)+"px"),n.style["min-"+i]=t,n.style["max-"+i]=t}function c(n,t,e){if(null!==t){t=u(t);var i=e?t:0;t="translate3d(".concat(e?0:t,"px, ").concat(i,"px, 0)")}n.style.transform=t,n.style["-webkit-transform"]=t}function d(){t&&(a(!0,!0,e),t=null),n.on("detailsChanged",o,!0)}function l(){r(!1,!0,e)}function f(){d(),e=n.options.vertical,n.options.disabled||"custom"===n.options.renderMode||(i="auto"===h(n.options.slides,"perView",null),n.on("detailsChanged",o),(t=n.slides).length&&l())}n.on("created",f),n.on("optionsChanged",f),n.on("beforeOptionsChanged",function(){d()}),n.on("updated",l),n.on("destroyed",d)}var y=function(n,t,e){try{var i,r,o,c;return r=b([(i={drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"},function(t){var e,r,o,a,c,d,f=l();function p(n){var e;u(t.container,"reverse","rtl"!==(e=t.container,window.getComputedStyle(e,null).getPropertyValue("direction"))||n?null:""),u(t.container,"v",t.options.vertical&&!n?"":null),u(t.container,"disabled",t.options.disabled&&!n?"":null)}function m(){b()&&y()}function b(){var n=null;if(a.forEach(function(t){t.matches&&(n=t.__media)}),n===e)return!1;e||t.emit("beforeOptionsChanged"),e=n;var i=n?o.breakpoints[n]:o;return t.options=g(g({},o),i),p(),C(),O(),M(),!0}function x(){return t.options.trackConfig.length}function k(n){for(var u in e=!1,o=g(g({},i),n),f.purge(),r=t.size,a=[],o.breakpoints||[]){var s=window.matchMedia(u);s.__media=u,a.push(s),f.add(s,"change",m)}f.add(window,"orientationchange",E),f.add(window,"resize",T),b()}function w(n){t.animator.stop();var e=t.track.details;t.track.init(null!=n?n:e?e.abs:0)}function y(n){w(n),t.emit("optionsChanged")}function _(n,e){if(n)return k(n),void y(e);C(),O();var i=x();M(),x()!==i?y(e):w(e),t.emit("updated")}function M(){var n=t.options.slides;if("function"==typeof n)return t.options.trackConfig=n(t.size,t.slides);for(var e=t.slides,i=e.length,r="number"==typeof n?n:h(n,"number",i,!0),o=[],a=h(n,"perView",1,!0),u=h(n,"spacing",0,!0)/t.size||0,s="auto"===a?u:u/a,c=h(n,"origin","auto"),d=0,l=0;l<r;l++){var f="auto"===a?function(n){var e=v(n);return(t.options.vertical?e.height:e.width)/t.size||1}(e[l]):1/a-u+s,p="center"===c?.5-f/2:"auto"===c?0:c;o.push({origin:p,size:f,spacing:u}),d+=f}if(d+=u*(r-1),"auto"===c&&!t.options.loop&&1!==a){var m=0;o.map(function(n){var t=d-m;return m+=n.size+u,t>=1||(n.origin=1-t-(d>1?0:1-d)),n})}t.options.trackConfig=o}function T(){C();var n=t.size;t.options.disabled||n===r||(r=n,_())}function E(){T(),setTimeout(T,500),setTimeout(T,2e3)}function C(){var n=v(t.container);t.size=(t.options.vertical?n.height:n.width)||1}function O(){t.slides=s(t.options.selector,t.container)}t.container=(d=s(n,c||document)).length?d[0]:null,t.destroy=function(){f.purge(),t.emit("destroyed"),p(!0)},t.prev=function(){t.moveToIdx(t.track.details.abs-1,!0)},t.next=function(){t.moveToIdx(t.track.details.abs+1,!0)},t.update=_,k(t.options)}),w,k,x],e||[],!0),c={},o={emit:function(n){c[n]&&c[n].forEach(function(n){n(o)});var t=o.options&&o.options[n];t&&t(o)},moveToIdx:function(n,t,e){var i=o.track.idxToDist(n,t);if(i){var r=o.options.defaultAnimation;o.animator.start([{distance:i,duration:h(e||r,"duration",500),easing:h(e||r,"easing",function(n){return 1+--n*n*n*n*n})}])}},on:function(n,t,e){void 0===e&&(e=!1),c[n]||(c[n]=[]);var i=c[n].indexOf(t);i>-1?e&&delete c[n][i]:e||c[n].push(t)},options:t},function(){if(o.track=function(n){var t,e,i,r,o,u,s,c,d,l,v,g,x,k,w=1/0,y=[],_=null,M=0;function T(n){S(M+n)}function E(n){var t=C(M+n).abs;return I(t)===t?t:null}function C(n){var t=Math.floor(Math.abs(m(n/e))),i=m((n%e+e)%e);i===e&&(i=0);var r=p(n),o=s.indexOf(b([],s,!0).reduce(function(n,t){return Math.abs(t-i)<Math.abs(n-i)?t:n})),a=o;return r<0&&t++,o===u&&(a=0,t+=r>0?1:-1),{abs:a+t*u*r,origin:o,rel:a}}function O(n,t,e){if(t||!r.loop)return j(n,e);if(I(n)!==n)return null;var i,o=C(null!=e?e:M),a=o.abs,s=n-o.rel,c=a+s;i=j(c);var d=j(c-u*p(s));return(null!==d&&Math.abs(d)<Math.abs(i)||null===i)&&(i=d),m(i)}function j(n,t){if(null==t&&(t=m(M)),i=n,I(i)!==i||null===n)return null;n=Math.round(n);var i,r=C(t),o=r.abs,a=r.rel,c=r.origin,d=N(n),l=(t%e+e)%e,f=s[c],p=Math.floor((n-(o-a))/u)*e;return m(f-l-f+s[d]+p+(c===u?e:0))}function I(n){return f(n,d,l)}function N(n){return(n%u+u)%u}function S(t){e=t-M,y.push({distance:e,timestamp:a()}),y.length>6&&(y=y.slice(-6)),M=m(t);var e,i=z().abs;if(i!==_){var r=null!==_;_=i,r&&n.emit("slideChanged")}}function z(a){var s=a?null:function(){if(u){var n=r.loop,t=n?(M%e+e)%e:M,a=(n?M%e:M)-o[0][2],s=0-(a<0&&n?e-Math.abs(a):a),c=0,f=C(M),h=f.abs,m=f.rel,b=o[m][2],w=o.map(function(t,i){var o=s+c;(o<0-t[0]||o>1)&&(o+=(Math.abs(o)>e-1&&n?e:0)*p(-o));var a=i-m,d=p(a),l=a+h;n&&(-1===d&&o>b&&(l+=u),1===d&&o<b&&(l-=u),null!==v&&l<v&&(o+=e),null!==g&&l>g&&(o-=e));var f=o+t[0]+t[1],x=Math.max(o>=0&&f<=1?1:f<0||o>1?0:o<0?Math.min(1,(t[0]+o)/t[0]):(1-o)/t[0],0);return c+=t[0]+t[1],{abs:l,distance:r.rtl?-1*o+1-t[0]:o,portion:x,size:t[0]}});return m=N(h=I(h)),{abs:I(h),length:i,max:k,maxIdx:l,min:x,minIdx:d,position:M,progress:n?t/e:M/i,rel:m,slides:w,slidesLength:e}}}();return t.details=s,n.emit("detailsChanged"),s}return t={absToRel:N,add:T,details:null,distToIdx:E,idxToDist:O,init:function(t){var a,f,p,b;if(function(){if(u=(o=((r=n.options).trackConfig||[]).map(function(n){return[h(n,"size",1),h(n,"spacing",0),h(n,"origin",0)]})).length){e=m(o.reduce(function(n,t){return n+t[0]+t[1]},0));var t,a=u-1;i=m(e+o[0][2]-o[a][0]-o[a][2]-o[a][1]),s=o.reduce(function(n,e){if(!n)return[0];var i=o[n.length-1],r=n[n.length-1]+(i[0]+i[2])+i[1];return r-=e[2],n[n.length-1]>r&&(r=n[n.length-1]),r=m(r),n.push(r),(!t||t<r)&&(c=n.length-1),t=r,n},null),0===i&&(c=0),s.push(m(e))}}(),!u)return z(!0);a=n.options.range,v=d=(f=n.options.loop)?h(f,"min",-1/0):0,g=l=f?h(f,"max",w):c,p=h(a,"min",null),b=h(a,"max",null),p&&(d=p),b&&(l=b),x=d===-1/0?d:n.track.idxToDist(d||0,!0,0),k=l===w?l:O(l,!0,0),null===b&&(g=l),h(a,"align",!1)&&l!==w&&0===o[N(l)][2]&&(k-=1-o[N(l)][0],l=E(k-M)),x=m(x),k=m(k),Number(t)===t?T(j(I(t))):z()},to:S,velocity:function(){var n=a(),t=y.reduce(function(t,e){var i=e.distance,r=e.timestamp;return n-r>200||(p(i)!==p(t.distance)&&t.distance&&(t={distance:0,lastTimestamp:0,time:0}),t.time&&(t.distance+=i),t.lastTimestamp&&(t.time+=r-t.lastTimestamp),t.lastTimestamp=r),t},{distance:0,lastTimestamp:0,time:0});return t.distance/t.time||0}}}(o),o.animator=function(n){var t,e,i,r,o,a;function u(n){t.active=n}function s(n){t.targetIdx=n}function c(){var t;t=o,window.cancelAnimationFrame(t),u(!1),s(null),a&&n.emit("animationStopped"),a=null}return t={active:!1,start:function(t){if(c(),n.track.details){var d=0,l=n.track.details.position;e=0,i=0,r=t.map(function(n){var t,e=Number(l),r=null!==(t=n.earlyExit)&&void 0!==t?t:n.duration,o=n.easing,a=n.distance*o(r/n.duration)||0;l+=a;var u=i;return i+=r,d+=a,[e,n.distance,u,i,n.duration,o]}),s(n.track.distToIdx(d)),function t(){o=window.requestAnimationFrame(function o(c){a||(a=c),u(!0);var d=c-a;d>i&&(d=i);var l=r[e];if(l[3]<d)return e++,o(c);var f=l[2],p=l[4],v=l[0],h=l[1]*(0,l[5])(0===p?1:(d-f)/p);if(h&&n.track.to(v+h),d<i)return t();a=null,u(!1),s(null),n.emit("animationEnded")})}(),n.emit("animationStarted")}},stop:c,targetIdx:null}}(o),r)for(var n=0;n<r.length;n++)(0,r[n])(o);o.track.init(o.options.initial||0),o.emit("created")}(),o}catch(n){console.error(n)}};t.E=function(n,t){var e=i.useRef(null),r=i.useRef(!1),o=i.useRef(n),a=i.useCallback(function(i){i?(o.current=n,e.current=new y(i,n,t),r.current=!1):(e.current&&e.current.destroy&&e.current.destroy(),e.current=null)},[]);return i.useEffect(function(){(function n(t,e){if(t===e)return!0;var i=typeof t;if(i!==typeof e)return!1;if("object"!==i||null===t||null===e)return"function"===i&&t.toString()===e.toString();if(t.length!==e.length||Object.getOwnPropertyNames(t).length!==Object.getOwnPropertyNames(e).length)return!1;for(var r in t)if(!n(t[r],e[r]))return!1;return!0})(o.current,n)||(o.current=n,e.current&&e.current.update(o.current))},[n]),[a,e]}},1339:function(n,t,e){Promise.resolve().then(e.t.bind(e,6685,23)),Promise.resolve().then(e.bind(e,5636))},5636:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return a}});var i=e(7437);e(2265);var r=e(9457);e(461);let o={duration:2e4,easing:n=>n};function a(n){let[t]=(0,r.E)({loop:!0,slides:{origin:"center",perView:2,spacing:10},breakpoints:{"(min-width: 640px)":{slides:{origin:"center",perView:2.5,spacing:10}},"(min-width: 1024px)":{slides:{origin:"center",perView:3.5,spacing:10}}},mode:"free",drag:!0,rtl:n.rtl,created(n){n.moveToIdx(5,!0,o)},updated(n){n.moveToIdx(n.track.details.abs+5,!0,o)},animationEnded(n){n.moveToIdx(n.track.details.abs+5,!0,o)}});return(0,i.jsxs)("div",{ref:t,className:"keen-slider",children:[(0,i.jsx)("div",{className:"keen-slider__slide rounded-lg",children:(0,i.jsx)("img",{width:378,height:212,src:"/img/course/s-1.png"})}),(0,i.jsx)("div",{className:"keen-slider__slide rounded-lg",children:(0,i.jsx)("img",{width:378,height:212,src:"/img/course/s-2.png"})}),(0,i.jsx)("div",{className:"keen-slider__slide rounded-lg",children:(0,i.jsx)("img",{width:378,height:212,src:"/img/course/s-3.png"})}),(0,i.jsx)("div",{className:"keen-slider__slide rounded-lg",children:(0,i.jsx)("img",{width:378,height:212,src:"/img/course/s-4.png"})}),(0,i.jsx)("div",{className:"keen-slider__slide rounded-lg",children:(0,i.jsx)("img",{width:378,height:212,src:"/img/course/s-2.png"})})]})}},461:function(){},622:function(n,t,e){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=e(2265),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(n,t,e){var i,o={},c=null,d=null;for(i in void 0!==e&&(c=""+e),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,i)&&!s.hasOwnProperty(i)&&(o[i]=t[i]);if(n&&n.defaultProps)for(i in t=n.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:r,type:n,key:c,ref:d,props:o,_owner:u.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},7437:function(n,t,e){"use strict";n.exports=e(622)}},function(n){n.O(0,[685,971,596,744],function(){return n(n.s=1339)}),_N_E=n.O()}]);