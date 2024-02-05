var e=new Promise(function(e,n){document.querySelector(".logo").addEventListener("click",function(){e()})}),n=new Promise(function(e,n){setTimeout(function(){// eslint-disable-next-line prefer-promise-reject-errors
n()},3e3)});function t(e){var n=document.createElement("div");n.className="message",n.textContent=e,document.body.appendChild(n)}function o(e){var n=document.createElement("div");n.className="message error-message",n.textContent=e,document.body.appendChild(n)}e.then(function(){t("Promise was resolved!")}).catch(function(){o("Promise was rejected!")}),n.then(function(){t("Promise was resolved!")}).catch(function(){o("Promise was rejected!")});//# sourceMappingURL=index.dc1a7c06.js.map

//# sourceMappingURL=index.dc1a7c06.js.map
