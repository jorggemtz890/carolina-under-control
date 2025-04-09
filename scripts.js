// Carrusel


let index = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const carouselContainer = document.querySelector('.carousel');
const indicatorsContainer = document.querySelector('.indicators');

// Crear indicadores dinámicamente
for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (i === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => moveToSlide(i));
    indicatorsContainer.appendChild(indicator);
}

const indicators = document.querySelectorAll('.indicator');

function updateSlide() {
    carouselContainer.style.transform = `translateX(-${index * 100}vw)`;
    indicators.forEach(ind => ind.classList.remove('active'));
    indicators[index].classList.add('active');
}

function moveToSlide(i) {
    index = i;
    updateSlide();
    resetTimer();
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    updateSlide();
}

function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlide();
}

let autoSlide = setInterval(nextSlide, 5000);

function resetTimer() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 5000);
}
