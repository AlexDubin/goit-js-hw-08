function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={};o=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};var i,a={},u={};i="object"==typeof n&&n&&n.Object===Object&&n;var f="object"==typeof self&&self&&self.Object===Object&&self,c=i||f||Function("return this")();a=function(){return u.Date.now()};var l={},v={},s={},d=/\s/;s=function(t){for(var e=t.length;e--&&d.test(t.charAt(e)););return e};var g=/^\s+/;v=function(t){return t?t.slice(0,s(t)+1).replace(g,""):t};var p,b={},m={};p=(u=c).Symbol;var y={},h=Object.prototype,j=h.hasOwnProperty,O=h.toString,S=p?p.toStringTag:void 0;y=function(t){var e=j.call(t,S),n=t[S];try{t[S]=void 0;var r=!0}catch(t){}var o=O.call(t);return r&&(e?t[S]=n:delete t[S]),o};var T={},w=Object.prototype.toString;T=function(t){return w.call(t)};var x=p?p.toStringTag:void 0;m=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":x&&x in Object(t)?y(t):T(t)};var E={};E=function(t){return null!=t&&"object"==typeof t};b=function(t){return"symbol"==typeof t||E(t)&&"[object Symbol]"==m(t)};var N=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,I=/^0o[0-7]+$/i,M=parseInt;l=function(t){if("number"==typeof t)return t;if(b(t))return NaN;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=v(t);var n=k.test(t);return n||I.test(t)?M(t.slice(2),n?2:8):N.test(t)?NaN:+t};var W=Math.max,$=Math.min;r=function(t,e,n){var r,i,u,f,c,v,s=0,d=!1,g=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=r,o=i;return r=i=void 0,s=e,f=t.apply(o,n)}function m(t){return s=t,c=setTimeout(h,e),d?b(t):f}function y(t){var n=t-v;return void 0===v||n>=e||n<0||g&&t-s>=u}function h(){var t=a();if(y(t))return j(t);c=setTimeout(h,function(t){var n=e-(t-v);return g?$(n,u-(t-s)):n}(t))}function j(t){return c=void 0,p&&r?b(t):(r=i=void 0,f)}function O(){var t=a(),n=y(t);if(r=arguments,i=this,v=t,n){if(void 0===c)return m(v);if(g)return clearTimeout(c),c=setTimeout(h,e),b(v)}return void 0===c&&(c=setTimeout(h,e)),f}return e=l(e)||0,o(n)&&(d=!!n.leading,u=(g="maxWait"in n)?W(l(n.maxWait)||0,e):u,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==c&&clearTimeout(c),s=0,r=v=i=c=void 0},O.flush=function(){return void 0===c?f:j(a())},O};e=function(t,e,n){var i=!0,a=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return o(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),r(t,e,{leading:i,maxWait:e,trailing:a})};const D=document.querySelector(".feedback-form");let J={};const L=t(e)((t=>{J[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(J))}),500);D.addEventListener("input",(t=>{L(t)})),D.addEventListener("submit",(t=>{t.preventDefault(),D.reset(),localStorage.removeItem("feedback-form-state"),console.log(J),J={}})),(()=>{try{const t=localStorage.getItem("feedback-form-state");if(!t)return;J=JSON.parse(t),Object.entries(J).forEach((([t,e])=>{D.elements[t].value=e}))}catch(t){console.log(t)}})();
//# sourceMappingURL=03-feedback.72eb3f22.js.map