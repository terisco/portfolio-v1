// --- FUNCIONALIDADE DE IDIOMA (PT / EN) ---
const btnPt = document.getElementById("lang-btn-pt");
const btnEn = document.getElementById("lang-btn-en");

// Seleciona todos os elementos que têm textos para traduzir
const traduziveis = document.querySelectorAll("[data-pt]");

btnPt.addEventListener("click", () => {
  traduziveis.forEach((el) => {
    el.innerText = el.getAttribute("data-pt");
  });
  btnPt.classList.add("active");
  btnEn.classList.remove("active");
});

btnEn.addEventListener("click", () => {
  traduziveis.forEach((el) => {
    el.innerText = el.getAttribute("data-en");
  });
  btnEn.classList.add("active");
  btnPt.classList.remove("active");
});

// --- FUNCIONALIDADE DO TEMA (CLARO/ESCURO) ---
const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  const icon = themeBtn.querySelector("i");
  if (document.body.classList.contains("light-theme")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
});

// --- NAVEGAÇÃO SUAVE PARA O CURRÍCULO ---
// Garante que ao clicar nos links do menu, a página role até a seção correta
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
