# Dokumentenverwaltung und Zeugnisarchivierung

SchILD bietet unter bestimmten Umständen die Möglichkeit, generierte Reports als PDF zu archivieren.* Reports, welche mit der Datenquelle **"Schueler"** erzeugt werden, können in der **Dokumentenablage** abgelegt werden.

* Zeugnisse können in die **Zeugnisablage** gelegt werden.

## Dokumentenablage

Die Dokumentenablage kann zum Beispiel genutzt werden, um Warnbriefe wegen Nichtversetzung, Warnungen wegen zu vieler Fehlstunden oder auch besondere Anschreiben an die Erziehungsberechtigten digital abzulegen. Um die Dokumentenverwaltung und Zeugnisarchivierung zu aktivieren, müssen entsprechende Ordner angegeben werden. Dies ist über **Verwaltung** ➜ **Einstellungen** ➜ **Dokumentenverwaltung** möglich.Hier lassen sich für beide Archivierungsmöglichkeiten getrennt Ordner setzen. Wurde ein Ordner eingestellt, stehen die Funktionen zur Verfügung.

### Dateimaske konfigurierenBei der Dokumentenverwaltung kann die **Dateimaske** eingestellt werden. Diese bestimmt, wie die archivierten Dateien benannt werden. Der Standard sieht wie folgt aus:
```bash 
<nvgd>\<f>_<d>
```
Das bedeutet im Klartext: Es wird für jede Person ein Verzeichnis angelegt, das aus Name, Vorname und Geburtsdatum besteht (z. B. `Müller, Hans, 30_09_2013`). In diesem Verzeichnis werden die Dokumente abgelegt:* `<f>` steht für den Dateinamen (file).
* `<d>` steht für das Datum der Generierung (date).

::: tip Konfiguration per Menü

Sie müssen diese kryptische Schreibweise nicht selbst eintippen. Über **Dateimaske bearbeiten** können Sie die Merkmale bequem per Drag & Drop in den Verzeichnisnamen oder Dateinamen ziehen. Die Reihenfolge lässt sich mit den roten Pfeilen anpassen.

:::

In diesem Beispiel wurde zusätzlich die Uhrzeit hinzugefügt, was am Schalter `<z>` (Zeit) in der Maske erkennbar ist

.

## Abruf von Dokumenten aus SchILD-NRW* **Doppelklick auf Ordner:** Klappt diese auf und zu.
* **Doppelklick auf Dateien:** Startet die Datei mit dem in Windows verknüpften Standardprogramm (z. B. Adobe Reader).
* **Rechte Maustaste:** Öffnet das Windows-Kontextmenü, um Ordner z. B. direkt im Windows-Explorer anzuzeigen.

## ZeugnisverzeichnisWurde das Zeugnisverzeichnis gesetzt, werden Dateien nach folgendem Schema benannt:`Name, Vorname, Geb.-Datum, Klasse des gedruckten Lernabschnitts, Name der Reportvorlage.pdf`

## Verwendung der VerzeichnisseSobald die Verwaltung aktiviert ist, erscheinen bei der Report-Generierung neue Schaltflächen:1. **Drucker mit Archivierung**: Druckt den Report und speichert ihn zusätzlich als PDF im Schülerordner.
2. **Nur Archivierung (in Dokumentenablage)**: Erzeugt direkt das PDF im Archiv (sinnvoll, wenn der Druck bereits erledigt wurde).
3. **Archivierung in Zeugnisverzeichnis**: Legt den Report speziell in das Zeugnisarchiv.

## Voraussetzungen für die ArchivierungSollte ein Report nicht abgelegt werden können, prüfen Sie diese drei Bedingungen:1. Die **Datenquelle "Schueler"** muss im Report ausgewählt sein.
2. Es muss eine **Gruppierung** bezüglich eines Datenfeldes (z. B. `Schueler_Id`) im Report vorhanden sein.
3. Die Auswahl **Drucker mit Archivierung** oder **Nur Archivierung** muss im Druckmenü aktiv sein.

### Reporteinstellungen prüfenGehen Sie im Report-Designer auf **Bericht** ➜ **Datenquellen**, um "Schueler" einzustellen.Über das Dropdown-Menü können auch die **Gruppen...** konfiguriert werden.

Die Gruppe `Schueler.ID` erzwingt einen Gruppenwechsel pro Schüler. Dies signalisiert der Dokumentenverwaltung, dass für den nächsten Datensatz ein neuer Ordner bzw. eine neue Datei verwendet werden muss. Die Gruppe kann im eigentlichen Layout "unsichtbar" bleiben.