
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.3
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const trustedBrandsSection = document.querySelector('.trusted-brands');
  observer.observe(trustedBrandsSection);
});

