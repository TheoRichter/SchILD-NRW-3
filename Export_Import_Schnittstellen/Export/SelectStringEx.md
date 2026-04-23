# SelectStringEx
| RAP-Funktion "SelectStringEx" | Beschreibung | ```   function SelectStringEx(Prompt, Optionsliste: String; Trennzeichen: Char): String;``` |
| --- | --- | --- |
| Parameter | ```   Prompt             - Hinweistext``` ```   Optionsliste       - Mit Trennzeichen separierte Liste von Daten, die in einem``` ```                        Auswahldialog angezeigt werden.``` ```   Trennzeichen       - Beliebig wählbar, darf nur nicht in den zu trennenden``` ```                        Datensätzen vorkommen``` |  |
| Rückgabewert | ```   Gewählte Option.``` |  |
| Beispiel | ```   Procedure ReportBeforePrint;``` ```    var``` ```      lSchulform : String;``` ```    begin``` ```      lSchulform:=SelectStringEx('Bitte Schulform wählen',``` ```     'Gymnasium\|Realschule\|Hauptschule','\|');``` |  |