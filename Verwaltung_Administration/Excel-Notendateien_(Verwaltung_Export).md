# Excel-Notendateien (Verwaltung Export)Zur Noteneingabe können auch Excel-Dateien verwendet werden.

### Export

![SchILD_ExcelNotendateien_Export_1.png](../../graphics/SchILD_ExcelNotendateien_Export_1.png)

 

![SchILD_ExcelNotendateien_Export_2.png](../../graphics/SchILD_ExcelNotendateien_Export_2.png)

 

![SchILD_ExcelNotendateien_Export_3_Beispiel.png](../../graphics/SchILD_ExcelNotendateien_Export_3_Beispiel.png)

Hierzu steht ein Menüpunkt *"Verwaltung Export Excel-Notendateien"* zur
Verfügung. Es öffnet sich ein Auswahlfenster, in dem der Abschnitt zu
wählen ist, für den die Noten eingetragen werden sollen.

Die Dateien können auch mit anderen Tabellenkalkulationsprogrammen wie
Open Office Calc bearbeitet werden.Nachdem ein Pfad und Dateiname gewählt wurde, wird der Export über
**Exportieren** gestartet.

Die Dateien haben folgenden Spalten-Aufbau:`| Name | Vorname | Geburtsdatum | Klasse | Fach-Kürzel | Kursart | Note | Punkte | Zeugnisbemerkung`Hierbei ist zu beachten:-   Der Export bezieht sich immer auf die aktuell ausgewählte
    Schülermenge.
-   Es werden, etwa anders als beim Export für das ext. Notenmodul,
    keine "lehrerbezogenen" Dateien erzeugt.
-   Ebenso lassen sich über von Hand erzeugte Bemerkungen hinaus keine
    weiteren Daten eingeben.
-   Es können *Noten* oder *Punkte* in die jeweilige Spalte eingetragen
    werden. Wenn beides eingetragen ist, hat die Note Vorrang.
-   Es dürfen nur *"erlaubte"* Einträge vorgenommen werden. Achten Sie
    darauf, dass in SchILD die Eingabe von erweiterten Noten aktiviert
    ist, falls dies vorgenommen werden soll (über *"Einstellungen ➜
    Globale Einstellungen ➜ Fächer, Noten ➜ Erweiterte Noten in den Sek.
    I zulassen"*).
    -   Bei *Noten* sind dies ganze Zahlen von 1 bis 6, optional mit "+"
        oder "-".
    -   *Punkte* gestattet ganze Zahlen von 0 bis 15. Zusätzlich können
        *E1* (mit besonderem Erfolg teilgenommen), *E2* (mit Erfolg
        teilgenommen) und *E3* (teilgenommen)) verwendet werden. Alle
        anderen Einträge werden beim Import ignoriert!
-   Zeilen, die keine Noten- oder Punkte-Eingabe enthalten, werden beim
    Import ignoriert.
-   In der Bemerkungsspalte können Freitexte eingegeben werden, diese
    werden als Zeugnisbemerkungen importiert. Falls zu mehreren Fächern
    eines Schülers Bemerkungen vorhanden sind, werden diese akkumuliert.
-   Beim Import wird die erste Zeile (der Header) nicht berücksichtigt.
    Falls also eine Datei nach dem Export aufgeteilt wird, etwa um sie
    klassenweise sie an mehrere Lehrkräfte zu verteilen, muss dafür
    gesorgt werden, dass jede Datei eine Headerzeile hat.  

### Import

![SchILD_ExcelNotendateien_Import_1.png](../../graphics/SchILD_ExcelNotendateien_Import_1.png)

 

![SchILD_ExcelNotendateien_Import_2.png](../../graphics/SchILD_ExcelNotendateien_Import_2.png)

Gehen Sie über *"Verwaltung ➜ Import ➜ Excel-Notendateien"* um den
Import ausgefüllter Dateien einzuleiten.Wie beim Export ist ein **Lernabschnitt** zu wählen, für den die
eingetragenen Noten gelten.Anschließend wählen Sie Ihre Notendatei.Mit **Nicht vorhandene Einträge anlegen** wird ebendies getan. In der
Praxis sollten Sie aber sicherstellen, dass die exportierten Daten so
korrekt sind, dass keine neuen Einträge angelegt werden müssen.Klicken Sie auf **Importieren**, um die Notendateien einzulesen.