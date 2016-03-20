'use strict';
(() => {
  var webview = document.querySelector("webview");

  webview.addEventListener("did-start-loading", () => { console.log('start') });
  webview.addEventListener("did-stop-loading", () => { console.log('stop') });
})();
