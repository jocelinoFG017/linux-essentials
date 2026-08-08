(function () {
  "use strict";

  const THEMES = ["light", "dark", "reading"];
  const THEME_COLORS = {
    light: "#f5f7fa",
    dark: "#0f172a",
    reading: "#fbf3dc"
  };

  const root = document.documentElement;
  const themeButtons = document.querySelectorAll(".theme-buttons button[data-theme]");
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-navigation");
  const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");

  function storedTheme() {
    try {
      return localStorage.getItem("site-theme");
    } catch (error) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem("site-theme", theme);
    } catch (error) {
      /* O tema ainda funciona quando o armazenamento local está indisponível. */
    }
  }

  function applyTheme(theme, persist) {
    const selectedTheme = THEMES.includes(theme) ? theme : "light";

    THEMES.forEach((name) => root.classList.remove(`${name}-theme`));
    root.classList.add(`${selectedTheme}-theme`);
    root.dataset.theme = selectedTheme;

    themeButtons.forEach((button) => {
      const isSelected = button.dataset.theme === selectedTheme;
      button.setAttribute("aria-pressed", String(isSelected));
    });

    if (themeColor) {
      themeColor.setAttribute("content", THEME_COLORS[selectedTheme]);
    }

    if (persist) {
      saveTheme(selectedTheme);
    }
  }

  function toggleMenu() {
    if (!menuToggle || !navigation) return;

    const shouldOpen = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(shouldOpen));
    navigation.classList.toggle("is-open", shouldOpen);
  }

  function closeMenu() {
    if (!menuToggle || !navigation) return;
    menuToggle.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  }

  function makeTablesScrollable() {
    document.querySelectorAll(".content table").forEach((table, index) => {
      if (table.parentElement.classList.contains("table-scroll")) return;

      const wrapper = document.createElement("div");
      wrapper.className = "table-scroll";
      wrapper.tabIndex = 0;
      wrapper.setAttribute("role", "region");
      wrapper.setAttribute("aria-label", `Tabela ${index + 1}: deslize horizontalmente para ver todo o conteúdo`);

      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });
  }

  themeButtons.forEach((button) => {
    button.addEventListener("click", () => applyTheme(button.dataset.theme, true));
  });

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", toggleMenu);

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
        closeMenu();
        menuToggle.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) closeMenu();
    });
  }

  const followSystemTheme = (event) => {
    if (!storedTheme()) {
      applyTheme(event.matches ? "dark" : "light", false);
    }
  };

  if (typeof colorScheme.addEventListener === "function") {
    colorScheme.addEventListener("change", followSystemTheme);
  } else if (typeof colorScheme.addListener === "function") {
    colorScheme.addListener(followSystemTheme);
  }

  applyTheme(storedTheme() || (colorScheme.matches ? "dark" : "light"), false);
  makeTablesScrollable();
}());
