!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e},o=function(t){var n=void 0===t?"undefined":e(i)(t);return null!=t&&("object"==n||"function"==n)};var a,u={},f={};a="object"==typeof n&&n&&n.Object===Object&&n;var l="object"==typeof self&&self&&self.Object===Object&&self,c=a||l||Function("return this")();u=function(){return f.Date.now()};var v={},d={},s={},m=/\s/;s=function(e){for(var t=e.length;t--&&m.test(e.charAt(t)););return t};var g=/^\s+/;d=function(e){return e?e.slice(0,s(e)+1).replace(g,""):e};var b,p={},y={};b=(f=c).Symbol;var S={},j=Object.prototype,O=j.hasOwnProperty,h=j.toString,T=b?b.toStringTag:void 0;S=function(e){var t=O.call(e,T),n=e[T];try{e[T]=void 0;var r=!0}catch(e){}var o=h.call(e);return r&&(t?e[T]=n:delete e[T]),o};var w={},x=Object.prototype.toString;w=function(e){return x.call(e)};var N=b?b.toStringTag:void 0;y=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":N&&N in Object(e)?S(e):w(e)};var E={};E=function(e){return null!=e&&"object"==typeof e};p=function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||E(t)&&"[object Symbol]"==y(t)};var k=/^[-+]0x[0-9a-f]+$/i,I=/^0b[01]+$/i,M=/^0o[0-7]+$/i,_=parseInt;v=function(e){if("number"==typeof e)return e;if(p(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=d(e);var n=I.test(e);return n||M.test(e)?_(e.slice(2),n?2:8):k.test(e)?NaN:+e};var q=Math.max,J=Math.min;r=function(e,t,n){var r,i,a,f,l,c,d=0,s=!1,m=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,d=t,f=e.apply(o,n)}function p(e){return d=e,l=setTimeout(S,t),s?b(e):f}function y(e){var n=e-c;return void 0===c||n>=t||n<0||m&&e-d>=a}function S(){var e=u();if(y(e))return j(e);l=setTimeout(S,function(e){var n=t-(e-c);return m?J(n,a-(e-d)):n}(e))}function j(e){return l=void 0,g&&r?b(e):(r=i=void 0,f)}function O(){var e=u(),n=y(e);if(r=arguments,i=this,c=e,n){if(void 0===l)return p(c);if(m)return clearTimeout(l),l=setTimeout(S,t),b(c)}return void 0===l&&(l=setTimeout(S,t)),f}return t=v(t)||0,o(n)&&(s=!!n.leading,a=(m="maxWait"in n)?q(v(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==l&&clearTimeout(l),d=0,r=c=i=l=void 0},O.flush=function(){return void 0===l?f:j(u())},O};t=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return o(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),r(e,t,{leading:i,maxWait:t,trailing:a})};var W,$=document.querySelector(".feedback-form"),D=$.querySelector('input[name="email"]'),L=$.querySelector('textarea[name="message"]'),P=e(t)((function(){var e={email:D.value,message:L.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);$.addEventListener("input",(function(){P()})),$.addEventListener("submit",(function(e){e.preventDefault();var t={email:D.value,message:L.value};localStorage.setItem("feedback-form-state",JSON.stringify(t)),D.value="",L.value="",localStorage.removeItem("feedback-form-state"),console.log(t)})),W=JSON.parse(localStorage.getItem("feedback-form-state"))||{},D.value=W.email||"",L.value=W.message||""}();
//# sourceMappingURL=03-feedback.bb01de5f.js.map