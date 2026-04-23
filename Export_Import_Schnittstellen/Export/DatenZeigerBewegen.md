# DatenZeigerBewegen
| RAP-Funktion "DatenZeigerBewegen" | Beschreibung | ```   procedure DatensatzZeigerBewegen (aPipeline: TppDatapipeline; aSchritte: integer)``` ```   Bewegt den Datensatzzeiger der als Parameter angegebenen Datenquelle``` |
| --- | --- | --- |
| Parameter | ```   aPipeline: 

Die betreffende Datenquelle``` ```   aSchritte: Bewegungsschritte (-1000: Erster Datensatz, 1000: Letzter Datensatz,``` ```              -1: vorheriger Datensatz, 1: Nächster Datensatz)``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   DatensatzZeigerBewegen( Lernabschnitte, -1 );``` |  |