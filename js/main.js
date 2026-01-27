const sections = document.querySelectorAll('#about, #experience, #projects');
const navItems = document.querySelectorAll('.menu li');

let isClickScrolling = false;

function setActive(id) {
  navItems.forEach(item => {
    item.classList.toggle('active', item.dataset.target === id);
  });
}

/* 👉 ACTIVE inicial al cargar */
setActive('about');

/* 👉 Scroll manual */
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

/* 👉 Click en menú */
navItems.forEach(item => {
  item.addEventListener('click', () => {
    const targetId = item.dataset.target;
    const target = document.getElementById(targetId);

    isClickScrolling = true;
    setActive(targetId);

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'center'   // 🔥 centra EXACTO como al cargar
    });

    setTimeout(() => {
      isClickScrolling = false;
    }, 1000);
  });
});
