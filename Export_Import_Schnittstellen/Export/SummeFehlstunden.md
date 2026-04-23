# SummeFehlstunden
| RAP-Funktion "SummeFehlstunden" | Beschreibung | ```   procedure SummeFehlstunden(aSchuelerId: integer; var FehlStd, uFehlStd: Integer);``` |
| --- | --- | --- |
| Parameter | ```   aSchuelerId  - Id des gewünschten Schülers``` |  |
| Rückgabewert | ```   FehlStd            - Fehlstunden des Schülers im aktuellen Schuljahr, d.h. es wird``` ```                        über die letzten zwei Abschnitte bzw. die letzten vier``` ```                        Quartale summiert.``` ```   uFehlStd           - Unentschuldigte Fehlstunden des Schülers``` |  |
| Beispiel | ```   Var``` ```     lFehl, lUFehl``` ```    begin``` ```      SummeFehlstunden(Schueler['ID'],lFehl,lUFehl);``` ```      Label1.Caption:='FehlStunden: ' + IntoStr(lFehl);``` ```      Label2.Caption:='davon unentschuldigt: ' + IntToStr(lUFehl``` |  |