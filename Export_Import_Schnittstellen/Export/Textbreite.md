# Textbreite
| RAP-Funktion "Textbreite" | Beschreibung | ``` Textbreite( Report, Label1.Text, Label1.Font );  ``` Diese Funktion kann die Breite (in "Reporteinheiten") z.B. eines<br>Labels zur Laufzeit berechnen. Die Funktion kann z.B. benutzt werden, um<br>in Zeugnissen bei den Fächern die Position von "Hochzahlen" (für<br>Fußnoten) zu ermittlen, damit diese bündig an die Fachbezeichnung<br>anschließen. |
| --- | --- | --- |
| Parameter | ```   Report, Label-Text, Label-Font``` |  |
| Rückgabewert | ```   Breite des Elements in "Reporteinheiten".``` |  |
| Beispiel | ```   wt := Textbreite( Report, lblFach.Text, lblFach.Font );``` ```   lblStern.Left := lblFach.Left + wt;``` |  |