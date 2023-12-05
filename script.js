document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('modal');
  const closeModalBtn = document.getElementsByClassName('close')[0];
  const confirmBtn = document.getElementById('confirmBtn');

  function displayModal() {
    modal.style.visibility = 'visible'; // Altera a visibilidade para tornar o modal visível
  }

  closeModalBtn.addEventListener('click', () => {
    modal.style.visibility = 'hidden'; // Esconde o modal ao clicar no botão de fechar
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.visibility = 'hidden'; // Esconde o modal ao clicar fora dele
    }
  });

  confirmBtn.addEventListener('click', () => {
    alert('Sua Landing Page será otimizada pelo valor de R$3500!');
    modal.style.visibility = 'hidden'; // Esconde o modal ao confirmar
    // Adicione aqui o código para processar o pagamento ou ação desejada
  });

  setTimeout(displayModal, 60000); // Exibe o modal após 1 minuto
});
