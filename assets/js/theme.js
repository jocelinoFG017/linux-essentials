document.addEventListener("DOMContentLoaded", function () {
  const selector = document.getElementById("theme-selector");

  // Carregar tema salvo
  const savedTheme = localStorage.getItem("site-theme") || "light";
  document.body.classList.add(`${savedTheme}-theme`);
  selector.value = savedTheme;

  // Mudar tema
  selector.addEventListener("change", function () {
    document.body.classList.remove("light-theme", "dark-theme", "reading-theme");
    document.body.classList.add(`${this.value}-theme`);
    localStorage.setItem("site-theme", this.value);
  });
});
