// Remove imports:
import { gsap } from 'https://cdn.skypack.dev/gsap';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap@3.11.3/ScrollTrigger';

// Instead, use global gsap:
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
