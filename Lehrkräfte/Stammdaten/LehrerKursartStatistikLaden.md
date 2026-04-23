# LehrerKursartStatistikLaden
| RAP-Funktion<br>"LehrerKursartStatistikLaden" | Beschreibung | ```   Procedure LehrerKursartStatistikLaden;``` ```   Durch den Aufruf dieser Prozedur wird die Datenquelle``` ```   'LehrerUnterrichtsStatistik' mit Daten gefüllt.``` ```   

Diese Datenquelle sollte nur als Datenquelle für eine Kreuztabelle``` ```   eingesetzt werden, die dann statistische Aussagen über den Unterricht``` ```   des Lehrers (Anzahl der Schüler mit Kursart xyz...) liefert. Auch diese``` ```   Datenquelle ist Detaildatenquelle der Datenquelle 'Lehrer'.``` |
| --- | --- | --- |
| Parameter | ```   ...``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   Procedure DetailBeforeGenerate;``` ```    begin``` ```      LehrerUnterrichtLaden;``` ```      LehrerKursartStatistikLaden;``` ```    end;``` |  |