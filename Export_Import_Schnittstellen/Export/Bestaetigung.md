# Bestaetigung
| RAP-Funktion "Bestaetigung" | Beschreibung | ```   function Bestaetigung(const aFrage: String): Boolean;``` |
| --- | --- | --- |
| Parameter | ```   aFrage             - String mir einer Frage, die sich durch Ja oder nein``` ```                        beantworten lässt``` |  |
| Rückgabewert | ```   TRUE, falls 'OK' angeklickt wird, FALSE sonst``` |  |
| Beispiel | ```   Procedure ReportBeforePrint;``` ```    var``` ```      lFilename : String;``` ```   begin``` ```     If Bestaetigung('Soll der Text geladen werden?') then begin``` ```       lFilename:=FileOpenDlg('*.txt','c:\Texte','Textdateien\|*.txt\|Alle Dateien\|*.*');``` ```       If lFilename <> '' then Memo1.Text:=LoadFromFile(lFilename)``` ```     end;``` ```   end;``` |  |