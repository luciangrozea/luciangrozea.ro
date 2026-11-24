/*
 * ==========================================================
 *  LISTA DE PROIECTE
 *  Pentru a adăuga un proiect nou, copiază un bloc { ... }
 *  de mai jos, completează câmpurile și salvează fișierul.
 *  Proiectele apar pe site în ordinea din listă.
 *
 *  Câmpuri:
 *    title   – numele proiectului
 *    icon    – un emoji (opțional)
 *    status  – ex. "Finalizat", "În lucru", "Planificat"
 *    desc    – descriere scurtă (1–3 propoziții)
 *    tags    – tehnologii folosite (apar și ca filtre)
 *    github  – link către repository (opțional)
 *    demo    – link către demo live (opțional)
 * ==========================================================
 */
const PROJECTS = [
  {
    title: "Site-ul personal",
    icon: "🌐",
    status: "Finalizat",
    desc: "Acest portofoliu: site static găzduit gratuit pe GitHub Pages, cu domeniu propriu luciangrozea.ro.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    github: "https://github.com/luciangrozea/luciangrozea.ro",
    demo: "https://luciangrozea.ro"
  }
  // ,{
  //   title: "Primul meu proiect AI",
  //   icon: "🤖",
  //   status: "În lucru",
  //   desc: "Descriere scurtă a proiectului.",
  //   tags: ["Python", "LLM"],
  //   github: "https://github.com/luciangrozea/...",
  //   demo: ""
  // }
];
