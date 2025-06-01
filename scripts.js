// ==== BACK TO TOP BUTTON ====
document.addEventListener('DOMContentLoaded', () => {
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    backToTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ==== MODAL IMAGE POPUP ====
function openModal(src, alt) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = src;
  caption.innerText = alt;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

// ==== CAROUSEL / SLIDER ====
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const slidesContainer = document.querySelector('.slides');
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.querySelector('.dots');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  if (!carousel || !slidesContainer || slides.length === 0) return;

  let currentIndex = 0;
  let autoPlay;

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

  prevBtn?.addEventListener('click', () => showSlide(currentIndex - 1));
  nextBtn?.addEventListener('click', () => showSlide(currentIndex + 1));

  autoPlay = setInterval(() => showSlide(currentIndex + 1), 4000);

  carousel.addEventListener('mouseenter', () => clearInterval(autoPlay));
  carousel.addEventListener('mouseleave', () => {
    autoPlay = setInterval(() => showSlide(currentIndex + 1), 4000);
  });

  showSlide(0);
});

function toggleProject(header) {
  const body = header.nextElementSibling;
  const allBodies = document.querySelectorAll('.project-body');

  allBodies.forEach(el => {
    if (el !== body) {
      el.style.maxHeight = null;
      el.classList.remove('open');
    }
  });

  if (body.classList.contains('open')) {
    body.style.maxHeight = null;
    body.classList.remove('open');
  } else {
    body.style.maxHeight = body.scrollHeight + "px";
    body.classList.add('open');
  }
}
