// Back to top
const btn = document.getElementById('backToTop');
window.onscroll = () => {
  btn.style.display = window.scrollY > 200 ? 'block' : 'none';
};

document.addEventListener('DOMContentLoaded', () => {
  const slidesContainer = document.querySelector('.slides');
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.querySelector('.dots');
  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0) currentIndex = slides.length - 1;
    else if (index >= slides.length) currentIndex = 0;
    else currentIndex = index;

    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
  }

  function updateDots() {
    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === currentIndex) dot.classList.add('active');
      dot.addEventListener('click', () => showSlide(i));
      dotsContainer.appendChild(dot);
    });
  }

  document.querySelector('.prev').onclick = () => showSlide(currentIndex - 1);
  document.querySelector('.next').onclick = () => showSlide(currentIndex + 1);

  let autoPlay = setInterval(() => showSlide(currentIndex + 1), 4000);
  document.querySelector('.carousel').addEventListener('mouseover', () => clearInterval(autoPlay));
  document.querySelector('.carousel').addEventListener('mouseleave', () => {
    autoPlay = setInterval(() => showSlide(currentIndex + 1), 4000);
  });

  showSlide(0);
});
