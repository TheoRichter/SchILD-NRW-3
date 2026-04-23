# FileOpenDlg
| RAP-Funktion "FileOpenDlg" | Beschreibung | ```   XXXfunction FileOpenDlg(const aFilename, aInitialDir,``` ```                              aFilter: String): String;``` |
| --- | --- | --- |
| Parameter | ```   aFilename          - Name der zu öffnenden Datei, evtl. mit Platzhaltern``` ```   aInitialDir        - Startverzeichnis, Leerer String öffnet im aktuellen``` ```                        Verzeichnis``` ```   aFilter            - Dateinamenfilter``` |  |
| Rückgabewert | ```   Pfad plus Name der zu öffnenden Datei, leerer String, wenn der Dialog ab``` |  |
| Beispiel | ```   Fn:=FileOpenDlg('*.txt','c:\Text','Textdateien\|*.txt\|Alle Dateien\|*.*');``` |  |