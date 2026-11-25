(function () {
  // An curent în footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Meniu mobil
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  links.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );

  // Texte în funcție de limba paginii (<html lang="ro|en">)
  const EN = document.documentElement.lang === "en";
  const T = EN
    ? { code: "→ source code", demo: "→ demo", open: "→ open", soon: "New projects coming soon…", all: "All" }
    : { code: "→ cod sursă", demo: "→ demo", open: "→ deschide", soon: "Proiecte noi în curând…", all: "Toate" };

  // Randare proiecte
  const grid = document.getElementById("projects-grid");
  const filtersEl = document.getElementById("filters");
  const projects = (typeof PROJECTS !== "undefined" ? PROJECTS : [])
    .map(p => (EN && p.en ? { ...p, ...p.en } : p));

  const esc = s => String(s ?? "").replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function card(p) {
    const tags = (p.tags || []).map(t => `<li>${esc(t)}</li>`).join("");
    const linksHtml = [
      p.github ? `<a href="${esc(p.github)}" target="_blank" rel="noopener">${T.code}</a>` : "",
      p.demo ? (/^https?:/.test(p.demo)
        ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener">${esc(p.demoLabel || T.demo)}</a>`
        : `<a href="${esc(p.demo)}">${esc(p.demoLabel || T.open)}</a>`) : ""
    ].join("");
    return `
      <article class="card reveal">
        <div class="card__top">
          <span class="card__icon">${esc(p.icon || "◆")}</span>
          ${p.status ? `<span class="card__status">${esc(p.status)}</span>` : ""}
        </div>
        <h3 class="card__title">${esc(p.title)}</h3>
        <p class="card__desc">${esc(p.desc)}</p>
        <ul class="tags">${tags}</ul>
        ${linksHtml ? `<div class="card__links">${linksHtml}</div>` : ""}
      </article>`;
  }

  const placeholder = `
    <article class="card card--placeholder">
      <span class="card__icon accent">+</span>
      <p class="muted mono" style="margin:12px 0 0">${T.soon}</p>
    </article>`;

  function render(filter) {
    const list = filter ? projects.filter(p => (p.tags || []).includes(filter)) : projects;
    grid.innerHTML = list.map(card).join("") + (filter ? "" : placeholder);
    observe();
  }

  // Filtre pe baza tag-urilor
  const allTags = [...new Set(projects.flatMap(p => p.tags || []))];
  if (allTags.length > 1) {
    const btns = [T.all, ...allTags].map((t, i) =>
      `<button class="filter${i === 0 ? " active" : ""}" data-tag="${i === 0 ? "" : esc(t)}">${esc(t)}</button>`
    ).join("");
    filtersEl.innerHTML = btns;
    filtersEl.addEventListener("click", e => {
      const b = e.target.closest(".filter");
      if (!b) return;
      filtersEl.querySelectorAll(".filter").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      render(b.dataset.tag);
    });
  }

  // Animație la scroll
  let io;
  function observe() {
    const els = document.querySelectorAll(".reveal:not(.visible)");
    if (!("IntersectionObserver" in window)) {
      els.forEach(el => el.classList.add("visible"));
      return;
    }
    io = io || new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
  }

  document.querySelectorAll(".section__title, .about, .skill-group, .contact__text")
    .forEach(el => el.classList.add("reveal"));
  render("");
})();
