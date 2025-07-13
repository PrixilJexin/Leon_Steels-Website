(function () {
  const isAnimationOk = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
  const scrub = true; // Set to false if you want non-scrubbing animations

  if (isAnimationOk) {
    setupAnimations();
  }

  function setupAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Keyhole scroll animation
    gsap.from(".keyhole", {
      "clip-path": "polygon(0% 0%, 0% 100%, 50% 100%, 50% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)",
      scrollTrigger: {
        trigger: ".section--primary",
        start: "top top",
        end: "bottom bottom",
        scrub: scrub,
        markers: false
      }
    });

    // Arrow fade on scroll
    gsap.to(".arrow", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".section--primary",
        start: "top top",
        end: "+=200",
        scrub: scrub
      }
    });

    // Slide-in hero content from the left on page load
    gsap.from(".hero-content", {
      x: "-100%",
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.2
    });
  }
})(); 