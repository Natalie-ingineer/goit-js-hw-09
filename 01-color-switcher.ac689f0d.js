!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");function o(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.addEventListener("click",(function(){timerId=setInterval(o(),1e3),n.style.backgroundColor=o()})),e.addEventListener("click",(function(){clearInterval(timerId),console.log("Interval with id ".concat(timerId," has stopped!"))}))}();
//# sourceMappingURL=01-color-switcher.ac689f0d.js.map
