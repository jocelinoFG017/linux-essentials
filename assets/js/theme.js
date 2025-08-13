document.addEventListener("DOMContentLoaded", function () {
  const selector = document.getElementById("theme-selector");
  const themeButtons = document.querySelectorAll('.theme-buttons button');

  // Função para aplicar tema e salvar
  function applyTheme(theme) {
    document.body.classList.remove("light-theme", "dark-theme", "reading-theme");
    document.body.classList.add(`${theme}-theme`);
    localStorage.setItem("site-theme", theme);
    if (selector) selector.value = theme;
  }

  // Carregar tema salvo
  const savedTheme = localStorage.getItem("site-theme") || "light";
  applyTheme(savedTheme);

  // Mudar tema via select
  if (selector) {
    selector.addEventListener("change", function () {
      applyTheme(this.value);
    });
  }

  // Mudar tema via botões (opcional)
  if (themeButtons.length) {
    themeButtons.forEach(btn => {
      btn.addEventListener('click', () => applyTheme(btn.dataset.theme));
    });
  }
});
