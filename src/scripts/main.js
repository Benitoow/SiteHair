// Animation au chargement de la page
window.addEventListener('load', () => {
  const presentationSection = document.getElementById('presentation');
  if (presentationSection) {
    presentationSection.classList.add('animated-text');
  }

  // Charger la carte lorsque la fenêtre est chargée
  initMap();
});

// Afficher/masquer des détails des prestations au clic
document.querySelectorAll('.prestation-details').forEach(details => {
  const toggleButton = details.previousElementSibling?.querySelector('button');
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      details.classList.toggle('hidden');
    });
  }
});

// Fonction d'initialisation de la carte
function initMap() {
  const salonLocation = [49.09635, 2.190219]; // Coordonnées de l'adresse
  const map = L.map('map').setView(salonLocation, 15);

  L.maplibreGL({
    style: 'https://tiles.openfreemap.org/styles/liberty',
  }).addTo(map);

  L.marker(salonLocation).addTo(map)
    .bindPopup('Aux P\'tits Soins Coiffure')
    .openPopup();
}

// Validation du formulaire
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêche l'envoi du formulaire pour la démonstration

    // Validation personnalisée
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();

    if (!name || !email || !message) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    // Afficher un message de confirmation
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');

    // Réinitialiser le formulaire
    form.reset();
  });
});
