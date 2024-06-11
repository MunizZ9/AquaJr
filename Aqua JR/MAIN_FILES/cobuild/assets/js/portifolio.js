const carouselContainer = document.getElementById('carouselContainer');
let slideIndex = 0;
let intervalId;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-slide');
  const offset = -index * 440; /* Largura do carrossel */

  slides.forEach(slide => {
    slide.style.transform = `translateX(${offset}px)`;
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % 13; /* Número total de slides */
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + 13) % 13; /* Número total de slides */
  showSlide(slideIndex);
}

function restartInterval() {
  clearInterval(intervalId);
  startInterval();
}

startInterval(); /* Inicia o carrossel quando a página carrega */

document.getElementById('nextButton').addEventListener('click', () => {
  nextSlide();
  restartInterval();
});

document.getElementById('prevButton').addEventListener('click', () => {
  prevSlide();
  restartInterval();
});
