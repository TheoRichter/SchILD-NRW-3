# SelectFromListEx
| RAP-Funktion "SelectFromListEx" | Beschreibung | ```   function SelectFromListEx(Caption, Optionlist, Default: String; Trennzeichen: Char): String;``` ```   ermöglicht die Auswahl eines Elemente aus einer Dropdown-Liste, deren``` ```   Elemente durch ein beliebiges Zeichen getrennt sind.``` |
| --- | --- | --- |
| Parameter | ```   Caption      - Titel des Dialoges``` ```   Optionslist  - Liste der verfügbaren Optionen``` ```   Default      - voreingestellter Rückgabewert``` ```   Trennzeichen - Trennzeichen der Optionsliste``` |  |
| Rückgabewert | ```   

Die gewählte Option``` |  |
| Beispiel | ```   Procedure ReportBeforePrint;``` ```   var``` ```     lSchulform : String;``` ```   begin``` ```     lSchulform:=SelectFromlistEx('Bitte Schulform wählen',``` ```     'Gymnasium\|Realschule\|Hauptschule','Realschule,'\|');``` ```     ...``` ```   end;``` |  |