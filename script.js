// Toggle mobile menu
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('form-response');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    formResponse.innerText = "Thank you for contacting us!";
});
