let currentLang = "esp";

const translations = {
  esp: {
    about: "SOBRE MÍ",
    experience: "EXPERIENCIA",
    projects: "PROYECTOS",
    aboutText: `Soy <strong>Ingeniero de Telecomunicaciones</strong> en transición al desarrollo de software, con experiencia profesional en entornos tecnológicos de gran escala como <strong>Huawei, Nokia y Entel</strong>. Mi trayectoria incluye trabajo en <strong>redes en producción</strong>, automatización de procesos técnicos y coordinación de implementaciones complejas bajo condiciones operativas reales.<br /><br />

A lo largo de mi carrera, he trabajado de manera cercana con sistemas, datos e infraestructura, desarrollando una mentalidad orientada a la automatización y sólidas habilidades de <strong>resolución de problemas</strong>. He creado scripts y herramientas para mejorar la eficiencia, reducir tareas manuales y aumentar la confiabilidad de las operaciones técnicas.<br /><br />

En mi rol más reciente, ocupé una posición de responsabilidad coordinando múltiples proyectos de implementación de forma simultánea, colaborando con equipos de ingeniería y personal de campo para asegurar la entrega, el control de riesgos y la continuidad operativa. Esta experiencia fortaleció mi capacidad para <strong>entender requerimientos de negocio</strong>, traducirlos en soluciones técnicas y trabajar dentro de procesos estructurados.<br /><br />

Actualmente estoy enfocado en avanzar mi carrera como <strong>Desarrollador JavaScript Junior</strong>, construyendo aplicaciones web y fortaleciendo mis conocimientos en JavaScript, fundamentos web y buenas prácticas de desarrollo de software. Mi objetivo es combinar mi formación en ingeniería, experiencia en automatización y pensamiento sistémico para crear software <strong>confiable, mantenible y de impacto</strong>.`,
    expHuawei: "Responsable de monitorear y controlar las actividades de los proyectos de implementación de la red de Entel Perú.",
    expEntel: "Responsable de crear scripts y MOPs para la conectividad en la red del ISP de Entel Perú, supervisando la implementación de la red en producción.",
    expNokia: "Responsable de integrar nodos en la red regional, realizar pruebas ATP, solucionar problemas durante la implementación y automatizar procesos de red con Python.",
    downloadCV: "Descargar CV",
    },
  eng: {
    about: "ABOUT",
    experience: "EXPERIENCE",
    projects: "PROJECTS",
    aboutText: `I am a <strong>Telecommunications Engineer</strong> transitioning into software development, with professional experience in large-scale technological environments such as <strong>Huawei, Nokia, and Entel</strong>. My background includes working with <strong>production networks</strong>, technical process automation, and coordinating complex implementations under real-world operational conditions.<br /><br />

Throughout my career, I have worked closely with systems, data, and infrastructure, developing an automation-oriented mindset and strong <strong>problem-solving</strong> skills. I have built scripts and tools to improve efficiency, reduce manual tasks, and increase the reliability of technical operations.<br /><br />

In my most recent role, I held a position of responsibility coordinating multiple implementation projects simultaneously, collaborating with engineering teams and field personnel to ensure delivery, risk control, and operational continuity. This experience strengthened my ability to <strong>understand business requirements</strong>, translate them into technical solutions, and work within structured processes.<br /><br />

I am currently focused on advancing my career as a <strong>Junior JavaScript Developer</strong>, building web applications and strengthening my knowledge of JavaScript, web fundamentals, and software development best practices. My goal is to combine my engineering background, automation experience, and systems thinking to create software that is <strong>reliable, maintainable, and impactful</strong>.`,
    expHuawei: "Responsible for monitoring and controlling the activities of the implementation projects for the Entel Peru network",
    expEntel: "Responsible for creating scripts and MOPs for connectivity on the Entel Peru ISP network, supervising network implementation in production",
    expNokia: "Responsible for integrating nodes into the regional network, ATP testing, troubleshooting during implementation, and automating network processes with Python.",
    downloadCV: "Download CV",
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
