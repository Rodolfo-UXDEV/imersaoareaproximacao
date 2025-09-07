/* Código para o Accordeon */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/* Código para o Scrollar */
// Espera o HTML carregar completamente antes de executar o script. É uma boa prática.
document.addEventListener('DOMContentLoaded', () => {
            
  // Passo 1: Selecionar o elemento de destino UMA ÚNICA VEZ.
  // Usamos 'const' porque este valor não vai mudar.
  const targetSection = document.getElementById('destino');

  // Passo 2: Selecionar TODOS os botões que devem ter a funcionalidade de rolagem.
  // Usamos querySelectorAll com a classe '.scroll-button' para pegar todos eles de uma vez.
  const scrollButtons = document.querySelectorAll('.scroll-button');

  // Passo 3: Adicionar o mesmo "ouvinte" de evento de clique para CADA botão encontrado.
  // O loop forEach passa por cada botão na lista 'scrollButtons'.
  scrollButtons.forEach(button => {
    button.addEventListener('click', () => {                    
      // Diz ao elemento de destino para rolar suavemente até ele ficar visível.
      targetSection.scrollIntoView({
        behavior: 'smooth' // A animação de rolagem suave.
      });
    });
  });

});