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
  const mapElement = document.getElementById('map');
  if (!mapElement) return;
  
  // Coordonnées exactes pour 28 bis grande rue, 95760 Valmondois
  const salonLocation = [49.09650, 2.19050];
  const map = L.map('map').setView(salonLocation, 16);

  L.maplibreGL({
    style: 'https://tiles.openfreemap.org/styles/liberty',
  }).addTo(map);

  L.marker(salonLocation).addTo(map)
    .bindPopup('<strong>Aux P\'tits Soins Coiffure</strong><br>28 bis grande rue<br>95760 Valmondois')
    .openPopup();
}

// Intersection Observer for scroll animations
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Initialize map
document.addEventListener('DOMContentLoaded', () => {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        // La carte est déjà initialisée dans initMap() au chargement de la page
    }
});

// Mobile menu toggle
const mobileMenuButton = document.createElement('button');
mobileMenuButton.classList.add('md:hidden', 'p-2');
mobileMenuButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
`;

const nav = document.querySelector('nav');
nav.parentNode.insertBefore(mobileMenuButton, nav);

mobileMenuButton.addEventListener('click', () => {
    const ul = nav.querySelector('ul');
    ul.classList.toggle('hidden');
    ul.classList.toggle('flex-col');
    ul.classList.toggle('absolute');
    ul.classList.toggle('top-full');
    ul.classList.toggle('left-0');
    ul.classList.toggle('right-0');
    ul.classList.toggle('bg-white');
    ul.classList.toggle('shadow-md');
    ul.classList.toggle('p-4');
});

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
