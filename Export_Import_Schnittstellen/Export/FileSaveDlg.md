# FileSaveDlg
| RAP-Funktion "FileSaveDlg" | Beschreibung | ```   function FileSaveDlg(const aFilename, aInitialDir,``` ```                        aFilter: String): String;``` |
| --- | --- | --- |
| Parameter | ```   aFilename          - Name der zu speichernden Datei, evtl. mit Platzhaltern``` ```   aInitialDir        - Startverzeichnis, Leerer String öffnet im aktuellen``` ```                        Verzeichnis``` ```   aFilter            - Dateinamenfilter``` |  |
| Rückgabewert | ```   Pfad plus Name der zu speichernden Datei, leerer String, wenn der Dialog``` ```   abgebrochen wird``` |  |
| Beispiel | ```   Fn:=FileSaveDlg('*.txt','c:\Text','Textdateien\|*.txt\|Alle Dateien\|*.*');``` |  |