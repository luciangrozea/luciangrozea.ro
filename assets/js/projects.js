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
    title: "Chicken Commander",
    icon: "🐔",
    status: "v1.3.1",
    desc: "Manager de fișiere pentru Windows, cu două panouri, controlat din tastatură. Copiere în fundal cu progres, redenumire multiplă, vizualizator pentru fișiere de mai mulți GB, căutare și comparare de fișiere, arhive (ZIP, 7z, RAR) deschise ca foldere, client FTP/SFTP și teme luminoasă/întunecată. Gratuit, cu kit de instalare sau varianta portabilă.",
    tags: ["C#", "WPF", ".NET", "Windows"],
    github: "https://github.com/luciangrozea/chicken-commander",
    demo: "https://github.com/luciangrozea/chicken-commander/releases/latest",
    demoLabel: "→ descarcă",
    en: {
      desc: "A keyboard-driven, dual-pane file manager for Windows. Background copying with progress, multi-rename, a viewer for multi-GB files, file search and compare, archives (ZIP, 7z, RAR) browsed as folders, an FTP/SFTP client and light/dark themes. Free, as an installer or a portable app.",
      demoLabel: "→ download"
    }
  },
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
