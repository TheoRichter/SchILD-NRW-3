# SortierungVon
| RAP-Funktion "SortierungVon" | Beschreibung | ```   function SortierungVon(Pipeline: TppDbPipeline): String;``` |
| --- | --- | --- |
| Parameter | ```   Pipeline - Datenquelle; Sortierung, die angewendet werden soll``` |  |
| Rückgabewert | ```   Liste der Sortierfelder``` |  |
| Beispiel | ```   Procedure ReportBeforePrint;``` ```    begin``` ```      //Originalsortierung ist eine String-Variable, die global vereinbart werden muss``` ```      OriginalSortierung:=SortierungVon(Report.Datapipeline);``` ```      SetzeSortierung(Report.Datapipeline,'Klasse,Geburtsdatum');``` ```    end;``` ```    Procedure ReportAfterPrint;``` ```    begin``` ```      SetzeSortierung(Report.Datapipeline,OriginalSortierung);``` ```    end;``` |  |