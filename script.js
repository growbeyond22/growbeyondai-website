// script.js
document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // --- Scroll Animations ---
    const sections = document.querySelectorAll('.content-section');
    const options = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
        section.classList.add('fade-in-section');
    });

    // --- Newsletter Form ---
    const form = document.getElementById('newsletterForm');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('newsletterEmail').value;
        alert(`Thank you for subscribing, ${email}!`);
        form.reset();
    });
});
