(function () {
  "use strict";

  const lazyStylesheet = document.querySelector("link[disabled]");
  setTimeout(() => {
    lazyStylesheet.removeAttribute("disabled");
  }, 5000);
})();
