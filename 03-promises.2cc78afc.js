!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var a=r("iU1Pc");function i(t,n){var o=Math.random()>.3;return new Promise((function(e,r){setTimeout((function(){o?e({position:t,delay:n}):r({position:t,delay:n})}),n)})).then((function(){var o;o="✅ Fulfilled promise ".concat(t," in ").concat(n," ms"),e(a).Notify.success(o)})).catch((function(){var o;o="❌ Rejected promise ".concat(t," in ").concat(n," ms"),e(a).Notify.failure(o)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var t=function(e){var t=Number(e.target.elements.delay.value),n=Number(e.target.elements.step.value),o=Number(e.target.elements.amount.value);return{delay:t,stepDelay:n,amount:o}}(e),n=t.delay,o=t.stepDelay,r=t.amount,a=1;a<=r;a+=1)i(a,n),n+=o}))}();
//# sourceMappingURL=03-promises.2cc78afc.js.map
