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

// Gestion du formulaire de contact
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');
  const btnText = document.getElementById('btnText');
  
  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      // Désactiver le bouton pendant l'envoi
      submitBtn.disabled = true;
      btnText.textContent = 'Envoi en cours...';

      // Récupérer les données du formulaire
      const formData = new FormData(form);

      try {
        // Envoyer via Formspree
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          // Succès
          formStatus.className = 'mb-4 p-4 rounded-lg bg-green-100 border border-green-400 text-green-700';
          formStatus.textContent = '✅ Merci ! Votre message a été envoyé avec succès. Nous vous répondrons rapidement.';
          formStatus.classList.remove('hidden');
          form.reset();
        } else {
          // Erreur serveur
          formStatus.className = 'mb-4 p-4 rounded-lg bg-red-100 border border-red-400 text-red-700';
          formStatus.textContent = '❌ Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.';
          formStatus.classList.remove('hidden');
        }
      } catch (error) {
        // Erreur réseau
        formStatus.className = 'mb-4 p-4 rounded-lg bg-red-100 border border-red-400 text-red-700';
        formStatus.textContent = '❌ Erreur de connexion. Vérifiez votre connexion internet et réessayez.';
        formStatus.classList.remove('hidden');
      } finally {
        // Réactiver le bouton
        submitBtn.disabled = false;
        btnText.textContent = 'Envoyer le message';
        
        // Masquer le message après 5 secondes
        setTimeout(() => {
          formStatus.classList.add('hidden');
        }, 5000);
      }
    });
  }
});

