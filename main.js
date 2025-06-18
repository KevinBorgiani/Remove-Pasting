javascript:(function() {
  const features = {
    darkMode: true,
  };
  const all = document.querySelectorAll('*');
  for (let el of all) {
    el.onpaste = null;
    el.addEventListener('paste', function(e) {
      e.stopPropagation();
    }, true);
  }
  alert("✅ Agora a função de copiar/colar está ativada! ✅");
  const darkReaderScript = document.createElement('script');
  darkReaderScript.src = 'https://cdn.jsdelivr.net/npm/darkreader@4.9.92/darkreader.min.js';
  darkReaderScript.onload = () => {
      DarkReader.setFetchMethod(window.fetch);
      if (features.darkMode) {
          DarkReader.enable();
      }
  };
  document.head.appendChild(darkReaderScript);
})();
