!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return s.Date.now()};function y(e,t,n){var i,o,u,a,f,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function j(e){return c=e,f=setTimeout(S,t),d?y(e):a}function x(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function S(){var e=g();if(x(e))return h(e);f=setTimeout(S,function(e){var n=t-(e-l);return s?p(n,u-(e-c)):n}(e))}function h(e){return f=void 0,m&&i?y(e):(i=o=void 0,a)}function O(){var e=g(),n=x(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(s)return f=setTimeout(S,t),y(l)}return void 0===f&&(f=setTimeout(S,t)),a}return t=T(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(T(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},O.flush=function(){return void 0===f?a:h(g())},O}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function T(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=a.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})};var j="feedback-form-state",x={},S={form:document.querySelector(".feedback-form"),inputEmail:document.querySelector('input[name="email"]'),inputTextarea:document.querySelector('textarea[name="message"]')};S.form.addEventListener("submit",(function(e){if(e.preventDefault(),""!==S.inputEmail.value&&""!==S.inputTextarea.value)return e.currentTarget.reset(),localStorage.removeItem(j),void console.log(x);alert("All fields must be filled!!!")})),S.form.addEventListener("input",e(t)((function(){x.email=S.inputEmail.value,x.message=S.inputTextarea.value,localStorage.setItem(j,JSON.stringify(x))}),500)),function(){try{var e=JSON.parse(localStorage.getItem(j));e&&(S.inputEmail.value=e.email,S.inputTextarea.value=e.message)}catch(e){console.log(e.name)}}()}();
//# sourceMappingURL=03-feedback.057cc0b1.js.map
