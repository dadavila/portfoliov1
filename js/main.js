const sections = document.querySelectorAll('#about, #experience, #projects');
const navItems = document.querySelectorAll('.menu li');

let isClickScrolling = false;

function setActive(id) {
  navItems.forEach(item => {
    item.classList.toggle('active', item.dataset.target === id);
  });
}


setActive('about');

window.addEventListener('scroll', () => {
  if (isClickScrolling) return;

  let current = 'about';

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.4) {
      current = section.id;
    }
  });

  setActive(current);
});



navItems.forEach(item => {
  item.addEventListener('click', () => {
    const targetId = item.dataset.target;
    const target = document.getElementById(targetId);

    isClickScrolling = true;
    setActive(targetId);

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'center'  
    });

    setTimeout(() => {
      isClickScrolling = false;
    }, 1000);
  });
});



let currentLang = "esp";

const translations = {
  esp: {
    about: "SOBRE MÍ",
    experience: "EXPERIENCIA",
    projects: "PROYECTOS",
  },
  eng: {
    about: "ABOUT",
    experience: "EXPERIENCE",
    projects: "PROJECTS",
  }
};

function applyTranslations() {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach(el => {
    const key = el.dataset.i18n;

    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
}

function renderLangButton() {
  const btn = document.getElementById("lang-btn");

  btn.innerHTML =
    currentLang === "esp"
      ? "<strong>ESP</strong> | ENG"
      : "ESP | <strong>ENG</strong>";
}

document.getElementById("lang-btn").addEventListener("click", () => {
  currentLang = currentLang === "esp" ? "eng" : "esp";
  applyTranslations();
  renderLangButton();
});

applyTranslations();
renderLangButton();