const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.06)';
    } else {
        nav.style.boxShadow = 'none';
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.about-text, .about-image, .pillar, .belief-card, .staff-card, .connect-card, .outreach-card, .visit-item, .visit-sidebar').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});
