# SetzeKlassenAdressArt
| RAP-Funktion "SetzeKlassenAdressArt" | Beschreibung | ```   Procedure SetzeKlassenAdressArt(const AdressArt: String);``` ```   

Diese Prozedur kann benutzt werden, wenn die Datenquelle``` ```   AllgAdresseZurKlasse verwendet werden soll. Voreingestellt``` ```   ist die Adressart 'Betrieb'. 

Diese Datenquelle ist eine Detaildatenquelle``` ```   zur Hauptdatenquelle 'Klassen'.``` |
| --- | --- | --- |
| Parameter | ```   AdressArt    - zu berücksichtigende Adressenkategorie``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   Procedure ReportBeforeOpenDatapipelines;``` ```    begin``` ```      SetzeKlassenAdressArt('Kammern');``` ```    end;``` |  |