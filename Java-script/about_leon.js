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

