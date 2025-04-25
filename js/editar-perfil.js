function loadFormWithFanData() {
    const fanData = JSON.parse(localStorage.getItem('fanData'));
  
    if (fanData) {
      document.getElementById('edit-nome').value = fanData.nome || '';
      document.getElementById('edit-idade').value = fanData.idade || '';
      document.getElementById('edit-localizacao').value = fanData.localizacao || '';
      document.getElementById('edit-time-favorito').value = fanData.timeFavorito || '';
      document.getElementById('edit-rede-social').value = fanData.redeSocial || '';
      document.getElementById('edit-frequencia').value = fanData.frequencia || '';
      document.getElementById('edit-instagram').value = fanData.instagram || '';
      document.getElementById('edit-twitter').value = fanData.twitter || '';
      document.getElementById('edit-facebook').value = fanData.facebook || '';
    }
  }
  
  function saveUpdatedProfile(event) {
    event.preventDefault();
  
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
    alert('Perfil atualizado com sucesso!');
    window.location.href = 'perfil.html'; // Redireciona de volta à página de perfil
  }
  
  window.onload = function () {
    loadFormWithFanData();
    document.getElementById('edit-form').addEventListener('submit', saveUpdatedProfile);
  };
  