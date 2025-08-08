const toggleButton = document.getElementById('toggle-button');
const extraDetails = document.getElementById('extra-details');
const bioText = document.getElementById('profile-bio');

toggleButton.addEventListener('click', function () {
  extraDetails.classList.toggle('hidden');
  if (extraDetails.classList.contains('hidden')) {
    toggleButton.textContent = 'Mostrar Detalhes Extras';
    bioText.textContent = 'Sou desenvolvedora front‑end apaixonada por tecnologia, fé católica e propósito. Estudo no SESI e faço curso técnico em Desenvolvimento de Sistemas. Meu sonho é cursar Direito!';
  } else {
    toggleButton.textContent = 'Esconder Detalhes Extras';
    bioText.textContent = 'Sou uma jovem católica dedicada, estudante do SESI e futura advogada, sempre unindo tecnologia com vocação e propósito.';
  }
});
