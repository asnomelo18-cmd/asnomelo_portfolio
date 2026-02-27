// Sélectionne toutes les sections
const sections = document.querySelectorAll('section');

// Animation au scroll
window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        const top = window.scrollY + window.innerHeight;
        if(top > sec.offsetTop + 100) {
            sec.classList.add('active');
        }
    });

    // Navbar shadow
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
    } else {
        nav.style.boxShadow = "none";
    }
});

// Active les sections visibles au chargement
window.addEventListener('load', () => {
    sections.forEach(sec => {
        const top = window.scrollY + window.innerHeight;
        if(top > sec.offsetTop + 100) {
            sec.classList.add('active');
        }
    });
});

// Smooth scroll pour les liens
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialisation des icônes Lucide
lucide.createIcons();