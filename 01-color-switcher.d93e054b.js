const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let d=null;function r(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(function(){this.setAttribute("disabled",""),e.removeAttribute("disabled"),r(),d=setInterval(r,1e3)})),e.addEventListener("click",(function(){this.setAttribute("disabled",""),t.removeAttribute("disabled"),clearInterval(d)})),e.setAttribute("disabled","");
//# sourceMappingURL=01-color-switcher.d93e054b.js.map
