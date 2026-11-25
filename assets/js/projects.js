/*
 * ==========================================================
 *  LISTA DE PROIECTE (pentru ambele limbi)
 *  Pentru a adăuga un proiect nou, copiază un bloc { ... }
 *  de mai jos, completează câmpurile și salvează fișierul.
 *  Proiectele apar pe site în ordinea din listă.
 *
 *  Câmpuri (în română):
 *    title     – numele proiectului
 *    icon      – un emoji (opțional)
 *    status    – ex. "Finalizat", "În lucru", "Planificat"
 *    desc      – descriere scurtă (1–3 propoziții)
 *    tags      – tehnologii folosite (apar și ca filtre)
 *    github    – link către repository (opțional)
 *    demo      – link către demo live (opțional)
 *    demoLabel – textul link-ului de demo (opțional)
 *
 *  en: { ... } – aceleași câmpuri, în engleză, pentru /en/.
 *               Orice câmp lipsă din „en” se ia din română.
 * ==========================================================
 */
const PROJECTS = [
  {
    title: "Dicționar AI",
    icon: "📖",
    status: "Publicat",
    desc: "Cei mai importanți 25 de termeni din AI, explicați pe înțelesul tuturor, cu analogii din viața de zi cu zi, exemple și ilustrații.",
    tags: ["AI", "Educație", "HTML", "CSS"],
    demo: "/dictionar-ai/",
    demoLabel: "→ citește dicționarul",
    en: {
      title: "AI Dictionary",
      status: "Published",
      desc: "The 25 most important AI terms, explained for everyone, with everyday analogies, examples and illustrations.",
      tags: ["AI", "Education", "HTML", "CSS"],
      demo: "/en/ai-dictionary/",
      demoLabel: "→ read the dictionary"
    }
  },
  {
    title: "Site-ul personal",
    icon: "🌐",
    status: "Finalizat",
    desc: "Acest portofoliu: site static bilingv, găzduit gratuit pe GitHub Pages, cu domeniu propriu luciangrozea.ro.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    github: "https://github.com/luciangrozea/luciangrozea.ro",
    en: {
      title: "This website",
      status: "Done",
      desc: "This portfolio: a bilingual static site, hosted for free on GitHub Pages with its own domain, luciangrozea.ro."
    }
  }
  // ,{
  //   title: "Primul meu proiect AI",
  //   icon: "🤖",
  //   status: "În lucru",
  //   desc: "Descriere scurtă a proiectului.",
  //   tags: ["Python", "LLM"],
  //   github: "https://github.com/luciangrozea/...",
  //   en: {
  //     title: "My first AI project",
  //     status: "In progress",
  //     desc: "Short project description."
  //   }
  // }
];
