# Export für BAN-Portal (Verwaltung Export)Zu KAoA gehört das *Belegungs-, Abrechnungs- und Nachweisportal*, das
[*BAN-Portal*](https://banportal-kaoa.de). Nehmen Sie hier auch die
[Information zum Portal und zumSupportkontakt](https://banportal-kaoa.de/Home/About) zur Kenntnis.Hierbei sollen die Schüler identifiziert werden, die über keine konkrete
Anschlussperspektive wie eine Ausbildung, Schulplatz, ein freiwilliges
Jahr, Praktikum für den FHR und so weiter verfügen. Aus SchILD-NRW
lassen sich die im Portal einzulesenden Daten exportieren. In der Regel
sollte dies nur wenige Schüler betreffen.

## Schüler vorbereiten

![SchILD-NRW_Export_BAN-Portal_Markieren.png](../../graphics/SchILD-NRW_Export_BAN-Portal_Markieren.png)

 Damit Schülerdaten exportiert werden, müssen die Schüler
als zu exportieren markiert werden.  
Dies nehmen Sie für individuelle Schüler unter *Schüler ➜ Akt. Halbjahr
➜ Allgemeine Angaben* mit dem gesetzten Haken bei **Für Meldung an
BAN-Portal** vor.

::: warning

Hinweis 1: Tragen Sie bei den Schülern vor dem Export
unbedingt den (vorläufigen) Abschluss ein.Hinweis 2: Beachten Sie hierbei, dass die Markierung für den jeweils
gewählten **Lernabschnitt** gilt. In der Regel betrifft der BAN-Export
nur den Abschluss-Lernabschnitt.

:::  

**Den Haken per Gruppenprozess setzen**Für größere Gruppen lassen sich die Markierungen bei Bedarf komfortabel
über einen *Gruppenprozess* setzen.Wählen Sie zuerst die Schülergruppe aus, für welche die BAN-Markierungen
gesetzt werden sollen und starten Sie den Gruppenprozess
*Individualdaten ändern ➜ Lernabschitte*.  

## BAN-Export

![SchILD-NRW_Export_ExportBAN.png](../../graphics/SchILD-NRW_Export_ExportBAN.png)

 In der Regel muss beim Export keine Schülergruppe
ausgewählt werden, da die zu exportierenden Schüler schon im aktuellen
Lernabschnitt markiert sind. Nicht-markierte Schüler werden daher beim
Export ignoriert.Sie können für den BAN-Export ausgehend von der gesamten Schülermenge
arbeiten.Sollten Sie nur ausgewählte Schülermengen exportieren wollen, wählen Sie
diese wie beim beim Gruppenprozess oben zuvor aus.Im Anschluss gehen Sie über *Verwaltung ➜ Exporte* ➜ **Export für
BAN-Portal**.  

![SchILD-NRW_Export_ExportBAN_Datei.png](../../graphics/SchILD-NRW_Export_ExportBAN_Datei.png)

 Im folgenden Fenster ist der **Speicherort** für die Datei
zu wählen.Hier im Beispiel wird im *SVWS-Arbeitsverzeichnis* der Unterordner
*Export* ausgewählt.Der Standard-Dateiname wird beibehalten.Ebenso lässt sich hier der **Lernabschnitt** anwählen, für den der
Export ausgeführt wird. Alle Schüler, die im betreffenden Lernabschnitt
als *zu exportieren* markiert sind, werden nun berücksichtigt.Klicken Sie auf `Exportieren`.  
Der Export ist abgeschlossen. Die erzeugte Datei kann nun im BAN-Portal
eingelesen werden.

::: warning

Da im Dateinamen der *BAN-Export.csv* selbst kein
Lernabschnitt enthalten ist und diese daher von außen jedes Jahr gleich
aussieht, achten Sie bitte darauf, tatsächlich die jeweils aktuelle und
gerade exportierte Datei beim folgenden Import auf dem BAN-Portal zu
verwenden.

:::

## Bedeutung der TabellenwerteSie erhalten eine Datei, in der spaltenweise die folgenden Daten
enthalten sind:` Name, Vorname, Geburtsdatum, Geschlecht, Wohnort, PLZ, Straße, Hausnummer, voraussichtlich erreichter Abschluss`Hierbei können im Feld **Geschlecht** diese Werte auftreten:-   m - *männlich*
-   w - *weiblich*
-   o - *ohne Angabe*
-   d - *divers*Ausschließlich bei Berufskollegs wird im Feld **Gliederung** der
ASD-Schlüssel für die Schulgliederung ausgewiesen, aus dem jeweils die
Bezeichnung des Bildungsganges abgeleitet werden kann
| Schulgliederung (Schlüssel) | Bezeichnung des Bildungsganges |
| --- | --- |
| A12 | Ausbildungsvorbereitung in Vollzeitform gemäß §§ 18, 22 Absatz 3<br>APOBK Anlage A (Anlage A 2.2) |
| B06 | Berufsfachschule gemäß § 2 Nummer 1 APO-BK Anlage B (Anlage B<br>1) |
| B07 | Berufsfachschule gemäß § 2 Nummer 2 APO-BK Anlage B (Anlage B<br>2) |
| C03 | Berufsfachschule gemäß § 2 Nummer 2 APO-BK Anlage B (Anlage B<br>2) |
| C05 | Fachoberschule gemäß § 8 Nummer 1 APO-BK Anlage C (Anlage C 3);<br>Klasse 11 |
| C06 | Fachoberschule gemäß § 8 Nummer 1 APO-BK Anlage C (Anlage C 3);<br>Klasse 12S |
| D02 | Berufliches Gymnasium § 1a Absatz 1 Nummer 1 APO-BK Anlage D<br>(Anlagen D 14-D 28) |
Im Feld **voraussichtlich erreichter Abschluss** finden sich die
Buchstabenkürzel, die nach der Statistik den Abschluss angeben. Diese
Spalte dient lediglich zu Informationszwecken für die Schulen und kann
in der Exportdatei leer bleiben, da der Eintrag zum voraussichtlichen
Abschluss automatisiert beim Import auf dem BAN-Portal ergänzt wird.-   A - *Ohne Abschluss*
-   B - *Erster Schulabschluss (ohne Berechtigung zum Besuch der Klasse
    10, Typ B)*
-   C - *Erster Schulabschluss (mit Berechtigung zum Besuch der Klasse
    10, Typ B)*
-   D - *Erweiterter Erster Schulabschluss*
-   F - *Mittlerer Schulabschluss - Fachoberschulreife ohne Berechtigung
    zum Besuch der gymnasialen Oberstufe*
-   G - *Mittlerer Schulabschluss – Fachoberschulreife mit Berechtigung
    zum Besuch der gymnasialen Oberstufe (Einführungsphase)*
-   H - *Fachhochschulreife (schulischer Teil)*
-   I - *Mittlerer Schulabschluss – Fachoberschulreife mit Berechtigung
    zum Besuch der Qualifikationsphase 1*
-   V - *Abschluss des zieldifferenten Bildungsgangs Lernen*
-   M - *Abschlusszeugnis im zieldifferenten Bildungsgang Geistige
    Entwicklung*
-   O - *Erster Schulabschluss nach Klasse 9 (mit Berechtigung zum
    Besuch der gymnasialen Oberstufe; § 43 Abs. 3 i.V.m. § 40 Abs. 4 S.
    2 APO-SI)*
-   U - *Erweiterter Erster Schulabschluss (mit Berechtigung zum Besuch
    der gymnasialen Oberstufe; § 41 Abs. 2 APO-SI i.V.m. § 40 Abs. 2
    APO-GOSt)*Felder ohne Eintrag werden als *A - Ohne Abschluss* gewertet.