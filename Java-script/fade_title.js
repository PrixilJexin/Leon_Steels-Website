import { gsap } from "https://cdn.skypack.dev/gsap@3.11.3";
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap@3.11.3/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animate the fade out + upward motion on scroll
gsap.to(".hero-title", {
  scrollTrigger: {
    trigger: ".hero",      // Trigger over the hero section
    start: "top top",
    end: "bottom top",     // Until hero scrolls off
    scrub: true
  },
  y: -100,                 // Move text upward
  opacity: 0,              // Fade out
  ease: "power2.out"
});
