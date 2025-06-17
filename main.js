javascript:(function() {
  const all = document.querySelectorAll('*');
  for (let el of all) {
    el.onpaste = null;
    el.addEventListener('paste', function(e) {
      e.stopPropagation();
    }, true);
  }

  // Mensagem flutuante visual
  const msg = document.createElement('div');
  msg.innerText = '✅ Agora a função de copiar/colar está ativada! ✅';
  msg.style.position = 'fixed';
  msg.style.bottom = '20px';
  msg.style.right = '20px';
  msg.style.padding = '10px 15px';
  msg.style.backgroundColor = '#4caf50';
  msg.style.color = 'white';
  msg.style.borderRadius = '5px';
  msg.style.fontFamily = 'sans-serif';
  msg.style.fontSize = '14px';
  msg.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
  msg.style.zIndex = '9999';

  document.body.appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 3000);
})();
