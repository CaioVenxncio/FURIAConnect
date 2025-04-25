function loadFanProfile() {
    const fanData = JSON.parse(localStorage.getItem('fanData'));
  
    if (fanData) {
      const profileDiv = document.getElementById('fan-profile');
      profileDiv.innerHTML = `
        <p><strong>Nome:</strong> ${fanData.nome}</p>
        <p><strong>Idade:</strong> ${fanData.idade}</p>
        <p><strong>Localização:</strong> ${fanData.localizacao}</p>
        <p><strong>Line favorita:</strong> ${fanData.timeFavorito}</p>
        <p><strong>Rede social favorita:</strong> ${fanData.redeSocial}</p>
        <p><strong>Frequência com que acompanha a FURIA:</strong> ${fanData.frequencia}</p>
        ${fanData.instagram ? `<p><strong>Instagram:</strong> ${fanData.instagram}</p>` : ''}
        ${fanData.twitter ? `<p><strong>Twitter:</strong> ${fanData.twitter}</p>` : ''}
        ${fanData.facebook ? `<p><strong>Facebook:</strong> ${fanData.facebook}</p>` : ''}
      `;
    } else {
      document.getElementById('fan-profile').innerHTML = `
        <p>Nenhum dado encontrado. Por favor, preencha o formulário primeiro.</p>
      `;
    }
  }
  
  // Executa o load após o DOM estar carregado
  window.addEventListener('DOMContentLoaded', loadFanProfile);
  
  // Função opcional: usada na tela de edição, se necessário
  function saveUpdatedProfile() {
    const updatedFanData = {
      nome: document.getElementById('edit-nome').value,
      idade: document.getElementById('edit-idade').value,
      localizacao: document.getElementById('edit-localizacao').value,
      timeFavorito: document.getElementById('edit-time-favorito').value,
      redeSocial: document.getElementById('edit-rede-social').value,
      frequencia: document.getElementById('edit-frequencia').value,
      instagram: document.getElementById('edit-instagram').value,
      twitter: document.getElementById('edit-twitter').value,
      facebook: document.getElementById('edit-facebook').value,
    };
  
    localStorage.setItem('fanData', JSON.stringify(updatedFanData));
    
    const feedback = document.getElementById('save-feedback');
    if (feedback) {
      feedback.innerHTML = 'Perfil atualizado com sucesso!';
      setTimeout(() => {
        feedback.innerHTML = '';
      }, 3000);
    }
  
    loadFanProfile(); // opcional: atualiza visualização após salvar
  }
  

  