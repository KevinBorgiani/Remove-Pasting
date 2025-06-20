// Salva o conteúdo original da página
const originalContent = document.body.innerHTML;

// Configura a tela preta e limpa o conteúdo
document.body.innerHTML = '';
document.body.style.backgroundColor = 'black';
document.body.style.color = 'white';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';  // Coluna pra empilhar mensagem e subtítulo
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';
document.body.style.margin = '0';
document.body.style.fontFamily = 'sans-serif';

// Cria e adiciona a mensagem principal (bold) com tamanho maior
const msg = document.createElement('div');
msg.textContent = 'Remove Pasting';
msg.style.fontSize = '3em';        // Aumentado para 3em
msg.style.marginBottom = '0.3em';
msg.style.fontWeight = 'bold';  // Negrito
document.body.appendChild(msg);

// Cria e adiciona o subtítulo (bold) com tamanho maior
const subtitle = document.createElement('div');
subtitle.style.fontSize = '1.8em';    // Aumentado para 1.8em
subtitle.style.opacity = '0.8';
subtitle.style.fontWeight = 'bold';  // Negrito

const spanBy = document.createElement('span');
spanBy.textContent = 'by ';

const spanAuthor = document.createElement('span');
spanAuthor.textContent = '@KevinBorgiani';

subtitle.appendChild(spanBy);
subtitle.appendChild(spanAuthor);

document.body.appendChild(subtitle);

// Transição para o fade-out
document.body.style.transition = 'opacity 0.5s';

// Mantém a mensagem visível por 3 segundos e depois inicia o fade-out
setTimeout(() => {
  document.body.style.opacity = '0';

  setTimeout(() => {
    document.body.innerHTML = originalContent;
    document.body.style = null;
  }, 500);
}, 3000);


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
