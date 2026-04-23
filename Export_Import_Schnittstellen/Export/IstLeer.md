# IstLeer
| RAP-Funktion "IstLeer" | Beschreibung | ```   function IstLeer(aDataPipeline: TppDataPipeline; const aFieldname: String): Boolean;``` |
| --- | --- | --- |
| Parameter | ```   aDataPipeline      - Zu prüfende Datenquelle``` ```   aFieldname         - Name des zu überprüfenden Felde``` |  |
| Rückgabewert | ```   True, falls das Datenfeld leer ist``` |  |
| Beispiel | ```   Procedure DBText1OnGetText(var Text: String);``` ```   begin``` ```     If IstLeer(Schueler,'Geburtsdatum') then``` ```       Text:='Geburtsdatum fehlt';``` ```   end;``` |  |