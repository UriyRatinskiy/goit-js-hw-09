const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let a=null;t.addEventListener("click",(()=>{a=setInterval((()=>{t.disabled=!0,document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(()=>{t.disabled=!1,clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.b1172bdc.js.map