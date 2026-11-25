/*
 * Comutator de limbă RO | EN
 * - reține limba aleasă (doar ca preferință locală, opțional)
 * - pe Dicționarul AI păstrează termenul la care ești când schimbi limba
 */
(function () {
  const sw = document.querySelector(".lang-switch");
  if (!sw) return;

  sw.addEventListener("click", e => {
    const a = e.target.closest("a[data-lang]");
    if (!a || a.classList.contains("active")) return;
    try { localStorage.setItem("lang", a.dataset.lang); } catch (_) {}

    // Dicționar: duce cititorul la același termen în cealaltă limbă
    const terms = [...document.querySelectorAll(".term[data-alt]")];
    if (!terms.length) return;
    let current = location.hash && document.getElementById(location.hash.slice(1));
    if (!current || !current.dataset.alt) {
      current = terms.find(t => t.getBoundingClientRect().bottom > 120);
      if (current && current.getBoundingClientRect().top > window.innerHeight) current = null;
    }
    if (current) {
      e.preventDefault();
      location.href = a.getAttribute("href") + "#" + current.dataset.alt;
    }
  });
})();
