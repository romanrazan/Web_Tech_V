const year = document.getElementById("year");
const topBtn = document.getElementById("topBtn");
const revealElements = document.querySelectorAll(".reveal");
const menuCards = document.querySelectorAll(".menu-card");
const sections = document.querySelectorAll("section[id]");

year.textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

revealElements.forEach((el) => observer.observe(el));

function setActiveCard() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 200;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  menuCards.forEach((card) => {
    card.classList.remove("active");
    if (card.dataset.section === currentSection) {
      card.classList.add("active");
    }
  });
}

window.addEventListener("scroll", setActiveCard);
window.addEventListener("load", setActiveCard);