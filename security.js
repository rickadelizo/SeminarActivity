(function () {
  function sanitize(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.textContent;
  }

  window.Security = { sanitize };
})();

