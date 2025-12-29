// ===== ANIMASI SCROLL =====
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 120;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===== ANIMASI TOMBOL WA =====
window.addEventListener("load", () => {
  const btn = document.getElementById("btnWa");
  if (!btn) return;

  btn.style.opacity = "0";
  btn.style.transform = "scale(0.9)";

  setTimeout(() => {
    btn.style.transition = "all 0.6s ease";
    btn.style.opacity = "1";
    btn.style.transform = "scale(1)";
  }, 600);
});
