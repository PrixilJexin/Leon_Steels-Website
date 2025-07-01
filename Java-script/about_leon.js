import gsap from "https://cdn.skypack.dev/gsap@3.12.2";
import ScrollTrigger from "https://cdn.skypack.dev/gsap@3.12.2/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to("#about-leon .about-container", {
  opacity: 1,
  y: 0,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#about-leon",
    start: "top 80%",
    end: "top 30%",
    scrub: true, // enables gliding animation as you scroll
    once: false
  }
});

  const whyChoose = document.querySelector('.why-choose-container');

  window.addEventListener('scroll', () => {
    const sectionTop = whyChoose.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      whyChoose.classList.add('show');
    }
  });

  // Load GSAP + Anime.js animations after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // WHAT SETS US APART
  gsap.from('.usp-title', { opacity: 0, y: -30, duration: 1 });
  gsap.from('.usp-item', {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    delay: 0.5
  });

  // TRUSTED BY
  gsap.from('.trustedby-title', {
    opacity: 0,
    x: -50,
    duration: 1,
    delay: 0.3
  });
  gsap.from('.trustedby-text', {
    opacity: 0,
    x: 50,
    duration: 1,
    delay: 0.6
  });

  // CTA with Anime.js for a different feel
  anime({
    targets: '.cta-section',
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 1200,
    easing: 'easeOutExpo',
    delay: 500
  });

  anime({
    targets: '.cta-button',
    scale: [0.8, 1],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeOutBack',
    delay: 1000
  });
});
