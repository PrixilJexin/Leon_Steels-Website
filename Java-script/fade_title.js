// Use global gsap:
gsap.registerPlugin(ScrollTrigger);

// Your GSAP animation code below:
gsap.to(".hero-title", {
  scrollTrigger: {
    trigger: ".hero-title",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
  },
  opacity: 1,
  y: 0,
  duration: 1,
});
