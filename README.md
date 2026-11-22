# Zeta – eine mathematische Lernreise

Deutschsprachige, responsive Lern-Web-App: sieben Lektionen, sieben interaktive SVG-Labore und 21 Rechenaufgaben mit Hinweisen und direktem Feedback. Der Fortschritt bleibt im lokalen Browser gespeichert. Ohne Konto, Tracking, externe Bibliotheken oder Build-Schritt.

## Starten

`dist/index.html` direkt im Browser öffnen. Für einen stabilen Speicherursprung empfehlen wir einen lokalen HTTP-Server: `node serve.cjs`, dann http://localhost:4173 öffnen.

## Kurs

1. Komplexe Zahlen und Zahlenebene
2. Rechnen, Konjugation und Drehung
3. Betrag und Polarform
4. Euler-Formel
5. Komplexe Potenzen
6. Zetareihe und Euler-Produkt
7. Analytische Fortsetzung, Nullstellen und Ausblick

Der Einstieg basiert auf dem bereitgestellten Chat-Kurs; die weiteren Lektionen ergänzen den Lernweg. Jede Lektion ist frei zugänglich. Nur korrekt gelöste Aufgaben erhöhen den Fortschritt. Ein Zurücksetzen erfordert eine Bestätigung.

## Mathematik und Grenzen

Das Summenlabor berechnet reelle Partialsummen für s > 1 und eine integrale Restabschätzung. Die Nullstellenansicht zeigt feste gerundete Werte und berechnet keine analytische Fortsetzung. Eine numerische Visualisierung ist kein Beweis der Riemannschen Vermutung. Referenzen: https://dlmf.nist.gov/25.2 und https://dlmf.nist.gov/25.10.

## Dateien und Deployment

- `dist/index.html`: semantischer Seitenaufbau
- `dist/course.js`: Lektionen, Aufgaben, Lösungen
- `dist/app.js`: Interaktionen und Fortschritt
- `dist/style.css`: responsive Gestaltung
- `tests.cjs`: numerische und Inhaltsprüfungen (`node tests.cjs`)

Jeder statische Webhost kann den Ordner `dist` ausliefern. Das mitgelieferte GitHub-Pages-Workflow veröffentlicht nach einem Push auf `main`, sobald Pages in den Repository-Einstellungen auf „GitHub Actions“ gestellt ist. `.openai/hosting.json` gehört zur zusätzlich angelegten privaten Site und ist für GitHub Pages nicht erforderlich.

Lokale Speicherung ist browser- und ursprungsgebunden; im privaten Modus oder bei gesperrtem Speicher bleibt der Fortschritt gegebenenfalls nur bis zum Schließen erhalten.
