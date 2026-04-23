# SetzeSortierung
| RAP-Funktion "SetzeSortierung" | Beschreibung | ```   procedure SetzeSortierung(Pipeline: TppDbPipeline; const Sortierfelder: String);``` |
| --- | --- | --- |
| Parameter | ```   Pipeline           - Datenquelle, deren Abfrage neu sortiert werden soll``` ```   Sortierfelder      - Mit Komma separierte Liste Sortierfeldern. Es können  keine``` ```                        Lookup- oder berechnete Felder verwendet werden, Informationen``` ```                        über die Felder erhält man im Dialog „Info über Datenquellen“``` ```                        im Reportdesigner.``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   Procedure ReportBeforePrint;``` ```    begin``` ```      (*Originalsortierung ist eine String-Variable, die global vereinbart werden muss*)``` ```      OriginalSortierung:=SortierungVon(Report.Datapipeline);``` ```      SetzeSortierung(Report.Datapipeline,'Klasse,Geburtsdatum');``` ```    end``` |  |