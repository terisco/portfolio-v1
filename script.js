// --- FUNCIONALIDADE DE IDIOMA ---
const btnPt = document.getElementById("lang-btn-pt");
const btnEn = document.getElementById("lang-btn-en");
const traduziveis = document.querySelectorAll("[data-pt]");

function updateLanguage(lang) {
  traduziveis.forEach((el) => {
    // Altera o texto baseado no atributo data-pt ou data-en
    el.innerText = el.getAttribute(`data-${lang}`);
  });

  // Atualiza o estado visual dos botões
  if (lang === "pt") {
    btnPt.classList.add("active");
    btnEn.classList.remove("active");
  } else {
    btnEn.classList.add("active");
    btnPt.classList.remove("active");
  }
}

btnPt.addEventListener("click", () => updateLanguage("pt"));
btnEn.addEventListener("click", () => updateLanguage("en"));

// --- FUNCIONALIDADE DO TEMA ---
const themeBtn = document.getElementById("theme-btn");
const body = document.body;

themeBtn.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  const icon = themeBtn.querySelector("i");

  if (body.classList.contains("light-theme")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
});

// --- ROLAGEM SUAVE ---
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});
