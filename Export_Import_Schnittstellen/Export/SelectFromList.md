# SelectFromList
| RAP-Funktion "SelectFromList" | Beschreibung | ```   function SelectFromList(Caption, Optionlist, Default: String): String;``` ```   ermöglicht die Auswahl eines Elemente aus einer Dropdown-Liste``` |
| --- | --- | --- |
| Parameter | ```   Caption      - Titel des Dialoges``` ```   Optionslist  - Liste der verfügbaren Optionen``` ```   Default      - voreingestellter Rückgabewert``` |  |
| Rückgabewert | ```   

Die gewählte Option``` |  |
| Beispiel | ```   Procedure ReportBeforePrint;``` ```   var``` ```     lSchulform : String;``` ```   begin``` ```     lSchulform:=SelectFromlist('Bitte Schulform wählen',``` ```     'Gymnasium,Realschule,Hauptschule','Realschule);``` ```     ...``` ```   end;``` |  |