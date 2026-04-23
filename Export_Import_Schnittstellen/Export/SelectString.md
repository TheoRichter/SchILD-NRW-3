# SelectString
| RAP-Funktion "SelectString" | Beschreibung | ```   function SelectString(Prompt, Optionsliste: String): String;``` |
| --- | --- | --- |
| Parameter | ```   Prompt             - Hinweistext``` ```   Optionsliste       - Mit Komma separierte Liste von Zeichenketten, die in einem``` ```                        Auswahldialog angezeigt werden.``` |  |
| Rückgabewert | ```   Gewählte Option.``` |  |
| Beispiel | ```    Procedure ReportBeforePrint;``` ```    var``` ```      lSchulform : String;``` ```    begin``` ```      lSchulform:=SelectString('Bitte Schulform wählen',``` ```     'Gymnasium,Realschule,Hauptschule')``` |  |