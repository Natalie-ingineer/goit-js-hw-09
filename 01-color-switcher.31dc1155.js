!function(){var t,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),a=document.querySelector("body");a.style.marginTop="200px",a.style.textAlign="center",n.disabled=!0,e.addEventListener("click",(function(){t=setInterval((function(){a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),e.disabled=!0,n.disabled=!1})),n.addEventListener("click",(function(){clearInterval(t),e.disabled=!1,n.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.31dc1155.js.map