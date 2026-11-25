# luciangrozea.ro

Portofoliul meu personal de proiecte în inteligență artificială — live la **https://luciangrozea.ro**.

Site static (HTML + CSS + JavaScript, fără build), găzduit gratuit pe **GitHub Pages** cu domeniu propriu.

## Structură

Site-ul este bilingv: română la rădăcină, engleză sub `/en/`. Butonul **RO | EN** din meniu
duce la pagina corespondentă (în dicționar, chiar la același termen).

```
index.html                    pagina principală (RO)
en/index.html                 pagina principală (EN)
dictionar-ai/index.html       Dicționar AI (RO)
en/ai-dictionary/index.html   AI Dictionary (EN)
404.html                      pagina de eroare (bilingvă)
CNAME                         domeniul propriu pentru GitHub Pages
assets/css/style.css          stiluri generale (temă negru + portocaliu)
assets/css/dictionar.css      stiluri pentru dicționar
assets/js/projects.js         ← lista de proiecte, în ambele limbi (aici adaugi proiecte noi)
assets/js/main.js             randarea cardurilor, filtre, meniu mobil
assets/js/lang.js             comutatorul de limbă RO | EN
assets/js/dictionar.js        căutare, cuprins, progres pentru dicționar
assets/img/dictionar/         ilustrațiile dicționarului (RO), iar în en/ versiunile EN
```

Când modifici o pagină, modific-o în ambele limbi (ex. `index.html` și `en/index.html`).

## Cum adaug un proiect nou

1. Deschide `assets/js/projects.js`.
2. Copiază un bloc `{ ... }`, completează câmpurile (și traducerea din `en: { ... }`) și pune o virgulă între blocuri.
3. `git add . && git commit -m "Proiect nou: ..." && git push`
4. În 1–2 minute modificarea apare pe site.

## Previzualizare locală

Deschide `index.html` direct în browser, sau rulează un server local:

```
python -m http.server 8000
```

apoi intră pe http://localhost:8000.

## Configurare domeniu (DNS la ROMARG)

Domeniul `luciangrozea.ro` folosește nameserverele ROMARG (`ns1–ns4.romarg.com`).
În panoul ROMARG → domeniul → **Administrare DNS / Zonă DNS**, se adaugă:

| Tip   | Nume (host) | Valoare                  |
|-------|-------------|--------------------------|
| A     | @           | 185.199.108.153          |
| A     | @           | 185.199.109.153          |
| A     | @           | 185.199.110.153          |
| A     | @           | 185.199.111.153          |
| AAAA  | @           | 2606:50c0:8000::153      |
| AAAA  | @           | 2606:50c0:8001::153      |
| AAAA  | @           | 2606:50c0:8002::153      |
| AAAA  | @           | 2606:50c0:8003::153      |
| CNAME | www         | luciangrozea.github.io.  |

După propagare (de la câteva minute la câteva ore): repo → **Settings → Pages** →
bifează **Enforce HTTPS** (după ce GitHub emite certificatul).
