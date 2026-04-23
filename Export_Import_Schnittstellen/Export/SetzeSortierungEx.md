# SetzeSortierungEx
| RAP-Funktion "SetzeSortierungEx" | Beschreibung | ```   procedure SetzeSortierungEx(Pipeline: TppDbPipeline; const Sortierfelder: String);``` |
| --- | --- | --- |
| Parameter | ```   Pipeline           - Datenquelle, deren Abfrage neu sortiert werden soll``` ```   Sortierfelder      - Mit Komma separierte Liste Sortierfeldern. Im Unterschied zu``` ```                       „SetzeSortierung“ können hier auch spezielle Felder, wie z.B.``` ```                        MONTH(Geburtsatum) etc verwendet werden.``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   Procedure ReportBeforePrint;``` ```    begin``` ```     (*Originalsortierung ist eine String-Variable, die global vereinbart werden muss*)``` ```     OriginalSortierung:=SortierungVon(Report.Datapipeline);``` ```     SetzeSortierungEx(Report.Datapipeline,'Klasse,MONTH(Geburtsdatum)');``` ```    end;``` |  |