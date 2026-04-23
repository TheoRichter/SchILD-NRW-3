# ZP10-Daten (Verwaltung Import)

![Schild_Verwaltung_Import_ZP10Noten.png](../../graphics/Schild_Verwaltung_Import_ZP10Noten.png)

 Bei der Import-Datei handelt es sich um eine einfache
Textdatei, die auf die Endung ".txt" lauten muss, zum Beispiel
*ZP10-Noten.txt*. Der Dateiname ist jedoch beliebig zu wählen.

Diese Datei hat das folgende Format, wobei die einzelnen Datenfelder
durch ein Semikolon "**;**" getrennt werden.

Die Datei beginnt mit der Kopfzeile, die auch vorhanden sein muss. In
dieser werden in *genau dieser Reihenfolge* diese Felder codiert:*Nachname, Vorname, Geburtsdatum, Fach, Abschlussnote, Vornote, Note der
schriftlichen Prüfung* und die Note der *mündlichen Prüfung*.  
Jede folgende Zeile enthält einen Datensatz zu einem Fach, bei drei
Prüfungsfächern erhält also jede Person auch drei Zeilen.Eine Datei könnte beispielhaft also folgende Zeilen enthalten, um die
Noten zu übergeben:    Name;Vorname;Geb-Datum;Fach;Abschlussnote;Vornote;Note schr. Prüfung;Note mündl. Prüfung
    Appelius;Simon;05.12.2006;D;3;2;5;3
    Appelius;Simon;05.12.2006;E;1;1;1;
    Appelius;Simon;05.12.2006;M;3;4;2;
    Beckmann;Lisa;26.09.2006;D;1;2;1;1
    Beckmann;Lisa;26.09.2006;E;2;2;3;2
    Beckmann;Lisa;26.09.2006;M;3;1;5;2Hierbei ist das korrekte Geburtsdatum wichtig, da SchILD-NRW die Schüler
über ihren passenden Namen, Vornamen und das passende Geburtsdatum
identifiziert.

Diese Dateien können auch mit Tabellenkalkulationsprogrammen erzeugt
werden, hierbei sind die Datenfelder als Textdatei mit einem Semikolon
"**;**" als Separator zu speichern.

::: warning

Damit die Noten aus der Datei eingelesen werden können,
müssen die Fächer zuvor im Reiter *Schüler ➜ ZP 10/ZK* hinzugefügt
worden sein.Mehr hierzu findet sich im Wikiartikel zu diesem Reiter beziehungsweise
in dem Artikel zum ZP-10-Gruppenprozess *Leistungsdaten
holen*.

:::