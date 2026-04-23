# GetSqlText
| RAP-Funktion "GetSqlText" | Beschreibung | ```   function GetSqlText(aPipeline: TppDatapipeline): String;``` ```   liefert den Text der SQL-Abfrage, die der als Parameter übergebenen``` ```   Datenquelle zugrunde liegt.``` |
| --- | --- | --- |
| Parameter | ```   aPipeline  - Name der Datenpipeline``` |  |
| Rückgabewert | ```   SqlText, falls die Pipeline eine DB-Pipeline ist, sonst ein leerer String``` |  |
| Beispiel | ```   ShowMessage('Abfragetext: ' + GetSqlText(Schueler))``` |  |