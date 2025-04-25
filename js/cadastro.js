document.getElementById('fan-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fanData = {
        nome: document.getElementById('nome').value,
        idade: document.getElementById('idade').value,
        localizacao: document.getElementById('localizacao').value,
        timeFavorito: document.getElementById('time-favorito').value,
        redeSocial: document.getElementById('rede-social').value,
        frequencia: document.getElementById('frequencia').value,
        instagram: document.getElementById('instagram').value,
        twitter: document.getElementById('twitter').value,
        facebook: document.getElementById('facebook').value
    };

    // Salva os dados no localStorage
    localStorage.setItem('fanData', JSON.stringify(fanData));
    
    console.log("Dados salvos:", fanData); // Verifica no console se os dados estão sendo salvos

    // Redireciona para o perfil
    window.location.href = 'pages/perfil.html';
});
