# SelectAdressName
| RAP-Funktion "SelectAdressName" | Beschreibung | ```   function SelectAdressName: String;``` ```   

Diese Funktion bietet alle im Feld „Name“ der „Allgemeinen Adressen“ gefundenen``` ```   Einträge zur Auswahl an.``` |
| --- | --- | --- |
| Parameter | ```   ...``` |  |
| Rückgabewert | ```   Adressbestandteil „Name“``` |  |
| Beispiel | ```   Procedure ReportBeforePrint;``` ```    var``` ```     lAdresse : String;``` ```    begin``` ```     lAdresse:=SelectAdressName;``` ```     FilterAdresse(lAdresse);``` ```    end;``` |  |