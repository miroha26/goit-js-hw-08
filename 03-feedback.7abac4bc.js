var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),r.register("cJAFW",(function(e,t){var n=r("9OeKo");const i="feedback-form-state",o=document.querySelector("input"),a=document.querySelector(".feedback-form"),u=document.querySelector("textarea");function f(e){const t={email:o.value,message:u.value};localStorage.setItem(i,JSON.stringify(t))}a.addEventListener("input",n(f,500)),a.addEventListener("submit",(e=>{if(e.preventDefault(),!o.value||!u.value)return alert("fill up all fields");f(),console.log({email:o.value,message:u.value}),e.currentTarget.reset()}));const l=localStorage.getItem(i),c=JSON.parse(l);c&&(o.value=c.email,u.value=c.message,localStorage.removeItem("feedback-form-state"))})),r.register("9OeKo",(function(t,n){var r="Expected a function",i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,m=function(){return s.Date.now()};function g(e,t,n){var i,o,a,u,f,l,c=0,s=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError(r);function O(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function x(e){return c=e,f=setTimeout(T,t),s?O(e):u}function w(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function T(){var e=m();if(w(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return d?p(n,a-(e-c)):n}(e))}function h(e){return f=void 0,g&&i?O(e):(i=o=void 0,u)}function j(){var e=m(),n=w(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return x(l);if(d)return f=setTimeout(T,t),O(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(b(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),j.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},j.flush=function(){return void 0===f?u:h(m())},j}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=a.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t.exports=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})}})),r("cJAFW");
//# sourceMappingURL=03-feedback.7abac4bc.js.map