!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};t.startBtn.addEventListener("click",(function(){t.startBtn.disabled=!0,n=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(n),t.startBtn.disabled=!1}));var n=null}();
//# sourceMappingURL=01-color-switcher.d22cd1e6.js.map
