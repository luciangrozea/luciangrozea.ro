(function () {
  document.getElementById("year").textContent = new Date().getFullYear();

  // Deschis direct la un termen (#...): sare instant, fără scroll animat lung
  if (location.hash) {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) {
      const root = document.documentElement;
      root.style.scrollBehavior = "auto";
      target.scrollIntoView();
      requestAnimationFrame(() => { root.style.scrollBehavior = ""; });
    }
  }

  // Meniu mobil
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });

  // Cuprins: deschis pe desktop, pliat pe mobil
  const toc = document.getElementById("toc");
  const desktop = window.matchMedia("(min-width: 1081px)");
  const syncToc = () => { toc.open = desktop.matches; };
  syncToc();
  desktop.addEventListener("change", syncToc);
  toc.addEventListener("click", e => {
    if (e.target.closest("a") && !desktop.matches) toc.open = false;
  });

  // Bară de progres + buton „sus”
  const bar = document.getElementById("progress");
  const toTop = document.getElementById("to-top");
  const onScroll = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    toTop.classList.toggle("show", h.scrollTop > 800);
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Evidențiază termenul curent în cuprins
  const tocLinks = new Map();
  toc.querySelectorAll("a[href^='#']").forEach(a => tocLinks.set(a.getAttribute("href").slice(1), a));
  const terms = [...document.querySelectorAll(".term")];
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        tocLinks.forEach(a => a.classList.remove("current"));
        const a = tocLinks.get(en.target.id);
        if (a) {
          a.classList.add("current");
          if (desktop.matches) a.scrollIntoView({ block: "nearest" });
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    terms.forEach(t => io.observe(t));
  }

  // Căutare (ignoră diacriticele)
  const norm = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  terms.forEach(t => { t.dataset.norm = norm(t.dataset.search || ""); });
  const input = document.getElementById("search");
  const noRes = document.getElementById("no-results");
  input.addEventListener("input", () => {
    const q = norm(input.value.trim());
    let shown = 0;
    terms.forEach(t => {
      const ok = !q || t.dataset.norm.includes(q);
      t.classList.toggle("hidden", !ok);
      const li = tocLinks.get(t.id)?.parentElement;
      if (li) li.classList.toggle("hidden", !ok);
      if (ok) shown++;
    });
    document.querySelectorAll(".part").forEach(p => {
      p.classList.toggle("hidden", !p.querySelector(".term:not(.hidden)"));
    });
    noRes.hidden = shown > 0;
    document.body.classList.toggle("searching", !!q);
  });
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      const first = terms.find(t => !t.classList.contains("hidden"));
      if (first) first.scrollIntoView({ behavior: "smooth" });
    }
  });
})();
