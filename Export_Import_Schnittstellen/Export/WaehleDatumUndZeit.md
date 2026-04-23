# WaehleDatumUndZeit
| RAP-Funktion "WaehleDatumUndZeit" | Beschreibung | ```   function WaehleDatumUndZeit(Hinweis: String; Var Datum, Uhrzeit: Datetime): Boolean;``` |
| --- | --- | --- |
| Parameter | ```   Hinweis            - Hinweistext``` ```   Datum              - Platzhalter für die zu wählenden Daten``` ```   Uhrzeit            - Platzhalter für die zu wählenden Daten``` |  |
| Rückgabewert | ```   TRUE, falls der Dialog mit Ok beendet wurde, sonst FALSE``` |  |
| Beispiel | ```   If WaehleDatum('Bitte Beginn der Veranstaltung``` ```                   eingeben',lDatum,lUhrzeit) then...``` |  |