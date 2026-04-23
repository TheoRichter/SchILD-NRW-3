# FilterSchuelerAdressArt
| RAP-Funktion "FilterSchuelerAdressArt" | Beschreibung | ```   procedure FilterSchuelerAdressArt(aAdressArt: String);``` |
| --- | --- | --- |
| Parameter | ```   aAdressArt - Adressart, auf die gefiltert werden soll``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   Procedure ReportBeforePrint;``` ```    var``` ```      lAdressArt : String;``` ```    begin``` ```      lAdressArt:=SelectAdressArt;``` ```      FilterSchuelerAdressArt(lAdressArt);``` ```    end;``` ```    (*Zu jedem Schüler werden die durch „lAdressArt“ gefilterten Einträge aus den „Allgemeinen``` ```     Adressen“ angezeigt. Auf das Ergebnis kann über die Datenquelle „SchuelerAdressen“``` ```     zugegriffen werden*)``` |  |