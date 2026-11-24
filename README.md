# luciangrozea.ro

Portofoliul meu personal de proiecte în inteligență artificială — live la **https://luciangrozea.ro**.

Site static (HTML + CSS + JavaScript, fără build), găzduit gratuit pe **GitHub Pages** cu domeniu propriu.

## Structură

```
index.html              pagina principală
404.html                pagina de eroare
CNAME                   domeniul propriu pentru GitHub Pages
assets/css/style.css    stiluri (temă negru + portocaliu)
assets/js/projects.js   ← lista de proiecte (aici adaugi proiecte noi)
assets/js/main.js       randarea cardurilor, filtre, meniu mobil
assets/img/             imagini și favicon
```

## Cum adaug un proiect nou

1. Deschide `assets/js/projects.js`.
2. Copiază un bloc `{ ... }`, completează câmpurile și pune o virgulă între blocuri.
3. `git add . && git commit -m "Proiect nou: ..." && git push`
4. În 1–2 minute modificarea apare pe site.

## Previzualizare locală

Deschide `index.html` direct în browser, sau rulează un server local:

```
python -m http.server 8000
```

apoi intră pe http://localhost:8000.
