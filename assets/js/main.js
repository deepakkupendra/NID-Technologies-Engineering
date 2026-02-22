// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth Scrolling
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Validation
const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', (event) => {
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
        event.preventDefault();
        errorMessage.textContent = 'Please enter a valid email address.';
    } else {
        errorMessage.textContent = '';
    }
});

// Scroll Animations
const sections = document.querySelectorAll('section');
const options = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
