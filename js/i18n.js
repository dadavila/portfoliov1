let currentLang = "esp";

const translations = {
  esp: {
    about: "SOBRE MÍ",
    experience: "EXPERIENCIA",
    projects: "PROYECTOS",
    aboutText: `Soy <strong>Ingeniero de Telecomunicaciones</strong> en transición al desarrollo de software, con experiencia profesional en entornos tecnológicos de gran escala como <strong>Huawei, Nokia y Entel</strong>. He trabajado en <strong>redes en producción</strong>, automatización de procesos y coordinación de implementaciones en contextos operativos reales.<br /><br />

A lo largo de mi carrera he desarrollado una mentalidad orientada a la <strong>automatización</strong> y a la <strong>resolución de problemas</strong>, creando scripts y herramientas para mejorar la eficiencia, reducir tareas manuales y aumentar la confiabilidad de las operaciones técnicas. Mi experiencia también incluye <strong>liderazgo</strong>, trabajo bajo <strong>deadlines</strong> y responsabilidad en la entrega de resultados.<br /><br />

Actualmente estoy enfocado en <strong>desarrollar mi carrera como Desarrollador JavaScript</strong>, construyendo aplicaciones web y profundizando mis conocimientos en JavaScript, fundamentos web y buenas prácticas de desarrollo. Mi objetivo es aplicar mi formación en ingeniería, experiencia en automatización y entendimiento de requerimientos para crear software <strong>confiable, mantenible y de impacto</strong>.`,
    expHuawei: "Responsable de monitorear y controlar las actividades de los proyectos de implementación de la red de Entel Perú.",
    expEntel: "Responsable de crear scripts y MOPs para la conectividad en la red del ISP de Entel Perú, supervisando la implementación de la red en producción.",
    expNokia: "Responsable de integrar nodos en la red regional, realizar pruebas ATP, solucionar problemas durante la implementación y automatizar procesos de red con Python.",
    downloadCV: "Ver Curriculum completo",
    },
  eng: {
    about: "ABOUT",
    experience: "EXPERIENCE",
    projects: "PROJECTS",
    aboutText: `I am a <strong>Telecommunications Engineer</strong> transitioning into software development, with professional experience in large-scale technological environments such as <strong>Huawei, Nokia, and Entel</strong>. My background includes working with <strong>production networks</strong>, process automation, and coordinating implementations in real-world operational contexts.<br /><br />

Throughout my career, I have developed an <strong>automation-oriented</strong> mindset and strong <strong>problem-solving</strong> skills, building scripts and tools to improve efficiency, reduce manual tasks, and increase the reliability of technical operations. I have also gained experience in <strong>leadership</strong>, working under <strong>deadlines</strong>, and taking responsibility for delivering results.<br /><br />

I am currently focused on <strong>developing my career as a JavaScript Developer</strong>, building web applications and deepening my knowledge of JavaScript, web fundamentals, and software development best practices. My goal is to apply my engineering background, automation experience, and understanding of requirements to create <strong>reliable, maintainable, and impactful</strong> software.`,
    expHuawei: "Responsible for monitoring and controlling the activities of the implementation projects for the Entel Peru network",
    expEntel: "Responsible for creating scripts and MOPs for connectivity on the Entel Peru ISP network, supervising network implementation in production",
    expNokia: "Responsible for integrating nodes into the regional network, ATP testing, troubleshooting during implementation, and automating network processes with Python.",
    downloadCV: "View full resume",
    },
};

function applyTranslations() {
  // Texto simple
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = translations[currentLang]?.[key];
    if (value != null) el.textContent = value;
  });

  // Texto con HTML
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    const value = translations[currentLang]?.[key];
    if (value != null) el.innerHTML = value;
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
