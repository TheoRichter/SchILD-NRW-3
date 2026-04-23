# LoadFromFile
| RAP-Funktion "LoadFromFile" | Beschreibung | ```   function LoadFromFile(aFilename: String): String;``` |
| --- | --- | --- |
| Parameter | ```   aFilename   Pfad + Dateiname der zu ladenden Textdatei``` |  |
| Rückgabewert | ```   Inhalt der Textdatei``` |  |
| Beispiel | ```   lFilename:=FileOpenDlg('*.rtf','c:\Texte','Richtexte\|*.rtf\|Alle Dateien\|*.*');``` ```   RichText1.RichText:=LoadFromFile(lFilename')``` |  |