// Responsive Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Basic Testimonial Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - index) * 100}%)`;
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000);

// Basic Contact Form Validation and Response
const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    formResponse.innerHTML = '<p>Thank you for your message!</p>';
    contactForm.reset();
  } else {
    formResponse.innerHTML = '<p>Please fill in all fields.</p>';
  }
});
