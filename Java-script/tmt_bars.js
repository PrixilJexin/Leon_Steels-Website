  window.addEventListener('load', () => {
    gsap.to('.brand-card', {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });

    anime({
      targets: '.section-title',
      translateY: [-50, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1200
    });
  });