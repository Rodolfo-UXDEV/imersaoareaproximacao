/* Código para o Accordeon */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
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

// --- Lógica do Modal ---

// 1. Seleciona os elementos do DOM que vamos usar
const openModalBtn = document.getElementById('openModalBtn');
const modalOverlay = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('closeBtn');

// 2. Função para abrir o modal
function openModal() {
  modalOverlay.classList.add('active');
}

// 3. Função para fechar o modal
function closeModal() {
  modalOverlay.classList.remove('active');
}

// 4. Adiciona os "ouvintes" de eventos

// Evento para ABRIR o modal quando o botão for clicado
openModalBtn.addEventListener('click', openModal);

// Evento para FECHAR o modal quando o "X" for clicado
closeBtn.addEventListener('click', closeModal);

// Evento para FECHAR o modal quando a área do overlay for clicada
modalOverlay.addEventListener('click', (event) => {
  // Verifica se o clique foi no overlay em si, e não no conteúdo do modal
  if (event.target === modalOverlay) {
    closeModal();
  }
});

// Evento para FECHAR o modal quando a tecla "Escape" for pressionada
window.addEventListener('keydown', (event) => {
  // Verifica se o modal está ativo E se a tecla pressionada foi "Escape"
  if (modalOverlay.classList.contains('active') && event.key === 'Escape') {
    closeModal();
  }
});



// --- Lógica do Formulário ---
const leadForm = document.getElementById('leadForm');
const submitButton = document.getElementById('submitButton');
const messageDiv = document.getElementById('message');

// URL da página de checkout para onde o usuário será redirecionado
const checkoutUrl = 'https://www.globo.com/';

// ⚠️ COLE AQUI A URL DO SEU APP SCRIPT PUBLICADO!
const scriptURL = 'https://script.google.com/macros/s/AKfycbyu8uR3XfPX4pLVT1JXe4CMbO1SMJAEpnpguBMPNw05dgBs7F_9W4LPMiklUAIxQ8eV/exec';

leadForm.addEventListener('submit', e => {
  e.preventDefault(); // Impede o comportamento padrão de recarregar a página

  // Desabilita o botão e mostra uma mensagem de "enviando"
  submitButton.disabled = true;
  submitButton.textContent = 'Enviando...';

  // Usa a API Fetch para enviar os dados do formulário
  fetch(scriptURL, { method: 'POST', body: new FormData(leadForm) })
    .then(response => response.json()) // Converte a resposta do script para JSON
    .then(data => {
      console.log('Success!', data);
      if (data.result === 'success') {
        // Mostra mensagem de sucesso
        messageDiv.textContent = 'Inscrição realizada! Redirecionando para o pagamento...';
        messageDiv.className = 'success';

        // Espera 2 segundos e redireciona para a página de checkout
        setTimeout(() => {
          window.location.href = checkoutUrl;
        }, 2000);
      } else {
        throw new Error(data.message || 'Ocorreu um erro desconhecido.');
      }
    })
    .catch(error => {
      console.error('Error!', error.message);
      messageDiv.textContent = 'Erro ao enviar. Tente novamente.';
      messageDiv.className = 'error';

      // Habilita o botão novamente em caso de erro
      submitButton.disabled = false;
      submitButton.textContent = 'Quero me Inscrever!';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
        const imageUrl = window.innerWidth < 768 ? 'assets/1-DOBRA-MOBILE-IMERSAO-REAPROXIMACAO.webp' : 'assets/1-DOBRA-IMERSAO-REAPROXIMACAO.webp';
        heroSection.style.backgroundImage = `url('${imageUrl}')`;
    }
});