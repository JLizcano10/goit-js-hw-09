!function(){var t,o=document.body,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");e.addEventListener("click",(function(){t=setInterval((function(){sortColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),o.style.backgroundColor=sortColor,e.disabled=!0,n.disabled=!1}),1e3)})),n.addEventListener("click",(function(){n.disabled=!0,e.disabled=!1,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.49d85edf.js.map
