const slideshow = document.querySelector('.slideshow');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
}

function updateSlide() {
    const offset = -currentIndex * 100;
    slideshow.style.transform = `translateX(${offset}%)`;
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds
