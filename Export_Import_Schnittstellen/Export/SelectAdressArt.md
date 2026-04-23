# SelectAdressArt
| RAP-Funktion "SelectAdressArt" | Beschreibung | ```   function SelectAdressArt: String;``` ```   

Diese Funktion bietet alle im Feld „AdressArt“ des Kataloges „Adressarten“ gefundenen``` ```   Einträge zur Auswahl an.``` |
| --- | --- | --- |
| Parameter | ```   ...``` |  |
| Rückgabewert | ```   Adressart.``` |  |
| Beispiel | ```   Procedure ReportBeforePrint;``` ```    var``` ```      lAdressArt : String;``` ```    begin``` ```      lAdressArt:=SelectAdressArt;``` ```      FilterAdressArt(lAdressArt);``` ```    end;``` |  |