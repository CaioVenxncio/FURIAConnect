// Seleção do formulário
const form = document.getElementById('fan-form');

// Função para salvar os dados no localStorage
function saveFanData(event) {
  event.preventDefault(); // Previne o envio do formulário

  // Captura os valores dos campos do formulário
  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  const localizacao = document.getElementById('localizacao').value;
  const timeFavorito = document.getElementById('time-favorito').value;
  const redeSocial = document.getElementById('rede-social').value;
  const frequencia = document.getElementById('frequencia').value;

  // Criação do objeto de dados do fã
  const fanData = {
    nome,
    idade,
    localizacao,
    timeFavorito,
    redeSocial,
    frequencia,
  };

  // Armazenamento no localStorage
  localStorage.setItem('fanData', JSON.stringify(fanData));

  // Redirecionamento ou exibição dos resultados
  alert('Dados salvos! Você será redirecionado para seu perfil!');
  window.location.href = 'perfil.html'; // Substitua por uma página de perfil ou faça a lógica de exibição na mesma página
}

// Evento de envio do formulário
form.addEventListener('submit', saveFanData);

// Função que será chamada quando o formulário for enviado
document.getElementById('fan-form').addEventListener('submit', function(event) {
    // Impede o comportamento padrão de envio do formulário
    event.preventDefault();
  
    // Captura os dados do formulário
    const fanData = {
      nome: document.getElementById('nome').value,
      idade: document.getElementById('idade').value,
      localizacao: document.getElementById('localizacao').value,
      timeFavorito: document.getElementById('time-favorito').value,
      redeSocial: document.getElementById('rede-social').value,
      frequencia: document.getElementById('frequencia').value,
    };
  
    // Armazena os dados no localStorage
    localStorage.setItem('fanData', JSON.stringify(fanData));
  
    // Redireciona para a página perfil.html
    window.location.href = 'pages/perfil.html';
  });
  
