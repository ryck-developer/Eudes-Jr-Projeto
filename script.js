document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('modal');
  const closeModalBtn = document.getElementsByClassName('close')[0];
  const confirmBtn = document.getElementById('confirmBtn');

  // Função para exibir o modal após 1 minuto
  function displayModal() {
    modal.style.display = 'block';
  }

  // Fechar o modal ao clicar no "X" ou fora do modal
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Ação ao confirmar otimização
  confirmBtn.addEventListener('click', () => {
    alert('Você deu o primeiro passo para o seu sucesso!');
    modal.style.display = 'none';
    // Adicione aqui o código para processar o pagamento ou ação desejada
  });

  // Exibir o modal após 1 minuto (60 segundos * 1000 milissegundos)
  setTimeout(displayModal, 60000);
});
