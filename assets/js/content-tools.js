(function () {
  "use strict";

  const PROGRESS_STORAGE_KEY = "linux-essentials-reading-progress-v1";
  const indexRequests = new Map();

  function normalizeText(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("pt-BR")
      .replace(/\s+/g, " ")
      .trim();
  }

  function loadIndex(url) {
    if (!indexRequests.has(url)) {
      const request = fetch(url, { headers: { Accept: "application/json" } })
        .then((response) => {
          if (!response.ok) throw new Error(`Falha ao carregar o índice: ${response.status}`);
          return response.json();
        })
        .then((documents) => Array.isArray(documents) ? documents : []);

      indexRequests.set(url, request);
    }

    return indexRequests.get(url);
  }

  function makeSnippet(content, normalizedQuery) {
    const text = String(content || "").replace(/\s+/g, " ").trim();
    if (!text) return "";

    const normalizedContent = normalizeText(text);
    const firstTerm = normalizedQuery.split(" ")[0];
    const matchIndex = normalizedContent.indexOf(firstTerm);
    const start = Math.max(0, (matchIndex >= 0 ? matchIndex : 0) - 55);
    const end = Math.min(text.length, start + 190);
    const prefix = start > 0 ? "…" : "";
    const suffix = end < text.length ? "…" : "";

    return `${prefix}${text.slice(start, end).trim()}${suffix}`;
  }

  function searchDocuments(documents, query) {
    const normalizedQuery = normalizeText(query);
    const terms = normalizedQuery.split(" ").filter(Boolean);

    return documents
      .map((document) => {
        const normalizedTitle = normalizeText(document.title);
        const normalizedContent = normalizeText(document.content);
        const searchableText = `${normalizedTitle} ${normalizedContent}`;

        if (!terms.every((term) => searchableText.includes(term))) return null;

        let score = normalizedTitle.includes(normalizedQuery) ? 30 : 0;
        if (normalizedTitle.startsWith(normalizedQuery)) score += 20;

        terms.forEach((term) => {
          if (normalizedTitle.includes(term)) score += 8;
          if (normalizedContent.includes(term)) score += 2;
        });

        return {
          ...document,
          score,
          snippet: makeSnippet(document.content, normalizedQuery)
        };
      })
      .filter(Boolean)
      .sort((first, second) => second.score - first.score || first.title.localeCompare(second.title, "pt-BR"))
      .slice(0, 10);
  }

  function initializeSearch() {
    const search = document.querySelector("[data-site-search]");
    if (!search) return;

    const input = search.querySelector("input[type='search']");
    const clearButton = search.querySelector("[data-search-clear]");
    const panel = search.querySelector("[data-search-panel]");
    const status = search.querySelector("[data-search-status]");
    const resultsList = search.querySelector("[data-search-results]");
    const indexUrl = search.dataset.indexUrl;
    let currentRequest = 0;

    function openPanel() {
      panel.hidden = false;
      input.setAttribute("aria-expanded", "true");
    }

    function closePanel() {
      panel.hidden = true;
      input.setAttribute("aria-expanded", "false");
    }

    function clearResults() {
      resultsList.replaceChildren();
      status.textContent = "";
    }

    function renderResults(results, query) {
      clearResults();

      if (!results.length) {
        status.textContent = `Nenhum resultado para “${query}”.`;
        openPanel();
        return;
      }

      status.textContent = `${results.length} ${results.length === 1 ? "resultado encontrado" : "resultados encontrados"}.`;

      results.forEach((result) => {
        const item = document.createElement("li");
        const link = document.createElement("a");
        const title = document.createElement("span");
        const snippet = document.createElement("span");

        link.href = result.url;
        title.className = "search-result__title";
        title.textContent = result.title;
        snippet.className = "search-result__snippet";
        snippet.textContent = result.snippet;

        link.append(title, snippet);
        item.appendChild(link);
        resultsList.appendChild(item);
      });

      openPanel();
    }

    async function runSearch() {
      const query = input.value.trim();
      const requestId = ++currentRequest;
      clearButton.hidden = query.length === 0;

      if (!query) {
        clearResults();
        closePanel();
        return;
      }

      if (query.length < 2) {
        clearResults();
        status.textContent = "Digite pelo menos dois caracteres para buscar.";
        openPanel();
        return;
      }

      status.textContent = "Buscando…";
      resultsList.replaceChildren();
      openPanel();

      try {
        const documents = await loadIndex(indexUrl);
        if (requestId !== currentRequest) return;
        renderResults(searchDocuments(documents, query), query);
      } catch (error) {
        if (requestId !== currentRequest) return;
        clearResults();
        status.textContent = "Não foi possível carregar a busca. Tente novamente.";
        openPanel();
      }
    }

    input.addEventListener("input", runSearch);
    input.addEventListener("focus", () => {
      if (input.value.trim()) runSearch();
    });

    clearButton.addEventListener("click", () => {
      input.value = "";
      clearButton.hidden = true;
      clearResults();
      closePanel();
      input.focus();
    });

    search.addEventListener("submit", (event) => {
      event.preventDefault();
      const firstResult = resultsList.querySelector("a");
      if (firstResult) window.location.assign(firstResult.href);
    });

    search.addEventListener("keydown", (event) => {
      const links = Array.from(resultsList.querySelectorAll("a"));
      const activeIndex = links.indexOf(document.activeElement);

      if (event.key === "Escape") {
        closePanel();
        input.focus();
      } else if (event.key === "ArrowDown" && links.length) {
        event.preventDefault();
        links[Math.min(activeIndex + 1, links.length - 1)].focus();
      } else if (event.key === "ArrowUp" && activeIndex >= 0) {
        event.preventDefault();
        if (activeIndex === 0) input.focus();
        else links[activeIndex - 1].focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (!search.contains(event.target)) closePanel();
    });
  }

  function slugify(value) {
    return normalizeText(value)
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "") || "secao";
  }

  function revealContentTools(tool) {
    const tools = tool.closest("[data-content-tools]");
    const frame = tool.closest("[data-content-frame]");
    tool.hidden = false;
    tools.hidden = false;
    frame.classList.add("has-content-tools");
  }

  function initializeTableOfContents() {
    const content = document.querySelector("[data-page-content]");
    const toc = document.querySelector("[data-auto-toc]");
    if (!content || !toc) return;

    const headings = Array.from(content.querySelectorAll("h2, h3, h4"))
      .filter((heading) => heading.textContent.trim());

    if (headings.length < 2) return;

    const list = toc.querySelector("[data-toc-list]");
    const usedIds = new Set();
    const linksById = new Map();

    headings.forEach((heading) => {
      const baseId = heading.id || slugify(heading.textContent);
      let headingId = baseId;
      let suffix = 2;

      while (usedIds.has(headingId)) {
        headingId = `${baseId}-${suffix}`;
        suffix += 1;
      }

      heading.id = headingId;
      usedIds.add(headingId);

      const item = document.createElement("li");
      const link = document.createElement("a");
      item.className = `toc-level-${heading.tagName.slice(1)}`;
      link.href = `#${encodeURIComponent(headingId)}`;
      link.textContent = heading.textContent.trim();
      item.appendChild(link);
      list.appendChild(item);
      linksById.set(headingId, link);
    });

    if (window.matchMedia("(max-width: 1200px)").matches) {
      toc.querySelector("details").open = false;
    }

    revealContentTools(toc);

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        const visibleHeading = entries.find((entry) => entry.isIntersecting);
        if (!visibleHeading) return;

        linksById.forEach((link, id) => {
          if (id === visibleHeading.target.id) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      }, { rootMargin: "-15% 0px -70% 0px" });

      headings.forEach((heading) => observer.observe(heading));
    }
  }

  function readProgressStore() {
    try {
      const storedValue = JSON.parse(localStorage.getItem(PROGRESS_STORAGE_KEY) || "{}");
      return storedValue && typeof storedValue === "object" ? storedValue : {};
    } catch (error) {
      return {};
    }
  }

  function saveProgressStore(store) {
    try {
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(store));
    } catch (error) {
      /* O progresso permanece funcional durante a sessão sem armazenamento local. */
    }
  }

  function sectionFromPath(path) {
    const segments = String(path || "").split("/").filter(Boolean);
    if (segments[0] === "01-book-lpi") return segments.slice(0, 2).join("/");
    return segments[0] || "";
  }

  function calculateReadingPercentage() {
    const root = document.documentElement;
    const availableScroll = Math.max(root.scrollHeight - window.innerHeight, 1);
    return Math.min(100, Math.max(0, Math.round((window.scrollY / availableScroll) * 100)));
  }

  function initializeReadingProgress() {
    const widget = document.querySelector("[data-reading-progress]");
    if (!widget) return;

    const pageKey = widget.dataset.pageKey;
    const pagePath = widget.dataset.pagePath;
    const label = widget.querySelector("[data-progress-label]");
    const value = widget.querySelector("[data-progress-value]");
    const bar = widget.querySelector("[data-progress-bar]");
    const track = widget.querySelector("[role='progressbar']");
    const toggle = widget.querySelector("[data-progress-toggle]");
    const sectionProgress = widget.querySelector("[data-section-progress]");
    const store = readProgressStore();
    const savedEntry = store[pageKey] || {};
    const entry = {
      percentage: Number.isFinite(savedEntry.percentage) ? savedEntry.percentage : 0,
      completed: savedEntry.completed === true
    };
    let sectionDocuments = [];
    let frameRequested = false;
    let saveTimer;

    function persist() {
      store[pageKey] = {
        percentage: Math.round(entry.percentage),
        completed: entry.completed,
        updatedAt: new Date().toISOString()
      };
      saveProgressStore(store);
    }

    function updateSectionProgress() {
      if (!sectionDocuments.length) return;

      const completedPages = sectionDocuments.filter((document) => {
        if (document.key === pageKey) return entry.completed;
        return store[document.key] && store[document.key].completed === true;
      }).length;

      sectionProgress.textContent = `${completedPages} de ${sectionDocuments.length} páginas concluídas nesta seção.`;
      sectionProgress.hidden = false;
    }

    function render() {
      const percentage = entry.completed ? 100 : Math.round(entry.percentage);
      let stateLabel = "Não iniciada";

      if (entry.completed) stateLabel = "Concluída";
      else if (percentage >= 100) stateLabel = "Leitura percorrida";
      else if (percentage > 0) stateLabel = "Em andamento";

      label.textContent = stateLabel;
      value.textContent = `${percentage}%`;
      bar.style.width = `${percentage}%`;
      track.setAttribute("aria-valuenow", String(percentage));
      toggle.textContent = entry.completed ? "Marcar como não concluída" : "Marcar como concluída";
      toggle.setAttribute("aria-pressed", String(entry.completed));
      updateSectionProgress();
    }

    function updateFromScroll() {
      frameRequested = false;
      if (entry.completed) return;

      const percentage = calculateReadingPercentage();
      if (percentage <= entry.percentage) return;

      entry.percentage = percentage;
      render();
      window.clearTimeout(saveTimer);
      saveTimer = window.setTimeout(persist, 350);
    }

    function requestScrollUpdate() {
      if (frameRequested) return;
      frameRequested = true;
      window.requestAnimationFrame(updateFromScroll);
    }

    toggle.addEventListener("click", () => {
      entry.completed = !entry.completed;
      if (entry.completed) entry.percentage = 100;
      else entry.percentage = calculateReadingPercentage();
      persist();
      render();
    });

    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    window.addEventListener("resize", requestScrollUpdate);
    window.addEventListener("pagehide", persist);

    revealContentTools(widget);
    render();
    requestScrollUpdate();

    loadIndex(widget.dataset.indexUrl)
      .then((documents) => {
        const currentSection = sectionFromPath(pagePath);
        sectionDocuments = documents.filter((document) => (
          document.trackable === true && sectionFromPath(document.path) === currentSection
        ));
        updateSectionProgress();
      })
      .catch(() => {
        sectionProgress.hidden = true;
      });
  }

  initializeSearch();
  initializeTableOfContents();
  initializeReadingProgress();
}());
