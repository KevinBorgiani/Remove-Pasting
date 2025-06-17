javascript:(function() {
  const all = document.querySelectorAll('*');
  for (let el of all) {
    el.onpaste = null;
    el.addEventListener('paste', function(e) {
      e.stopPropagation();
    }, true);
  }
  alert('Pasting should now be enabled!');
})();
