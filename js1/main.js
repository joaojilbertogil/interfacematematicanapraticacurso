let nadaaver = ''

document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Adicione um ouvinte de evento de clique a cada botão "Assinar"
document.getElementById('botao-assinar-1').addEventListener('click', function (e) {
    e.preventDefault(); // Impede que o link seja seguido
    exibirFormCadastro(); // Chama a função para exibir o formulário
  });
  
  document.getElementById('botao-assinar-2').addEventListener('click', function (e) {
    e.preventDefault(); // Impede que o link seja seguido
    exibirFormCadastro(); // Chama a função para exibir o formulário
  });
  
  document.getElementById('botao-assinar-3').addEventListener('click', function (e) {
    e.preventDefault(); // Impede que o link seja seguido
    exibirFormCadastro(); // Chama a função para exibir o formulário
  });
  
  document.getElementById('botao-assinar-4').addEventListener('click', function (e) {
    e.preventDefault(); // Impede que o link seja seguido
    exibirFormCadastro(); // Chama a função para exibir o formulário
  });