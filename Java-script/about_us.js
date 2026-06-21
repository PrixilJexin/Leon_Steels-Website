const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.carousel-card');
let index = 0;
const total = cards.length;

// Set background images dynamically
cards.forEach(card => {
  const bg = card.getAttribute('data-bg');
  if (bg) {
    card.style.backgroundImage = `url(${bg})`;
  }
});

function autoSlide() {
  index = (index + 1) % total;
  track.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(autoSlide, 5000);

// Set background images dynamically for about section
const aboutSection = document.querySelector('.about-section');
if (aboutSection) {
  const bg = aboutSection.getAttribute('data-bg');
  if (bg) {
    aboutSection.style.backgroundImage = `url(${bg})`;
  }
}

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Add touch/swipe support for mobile carousel
if (track) {
  let startX = 0;
  let isDragging = false;

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  }, { passive: true });

  track.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;
    
    // If swipe is significant (more than 50px)
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        // swipe left -> next slide
        index = (index + 1) % total;
      } else {
        // swipe right -> prev slide
        index = (index - 1 + total) % total;
      }
      track.style.transform = `translateX(-${index * 100}%)`;
      isDragging = false;
    }
  }, { passive: true });

  track.addEventListener('touchend', () => {
    isDragging = false;
  }, { passive: true });
}
