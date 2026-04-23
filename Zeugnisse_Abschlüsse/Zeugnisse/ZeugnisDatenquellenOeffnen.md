# ZeugnisDatenquellenOeffnen
| RAP-Funktion<br>"ZeugnisDatenquellenOeffnen" | Beschreibung | ```procedure ZeugnisDatenquellenOeffnen;``` ```Öffnet alle in Zeugnissen benötigten Datenquellen. In Zeugnissen, in denen die``` ```einzelnen Fächerbereiche (z.B. Deutsch, Mathematik, Fremdsprachen usw.) über``` ```dynamisch nachladbare Subreports realisiert sind, scheitert die automatische``` ```Erkennung, welche Datenquellen zu öffnen sind, da die betreffenden Subreports erst``` ```geladen werden, nachdem die Analyse erfolgt ist. Der einmalige Aufruf dieser``` ```Prozedur erspart dann den mehrfachen Aufruf von „PipelineOeffnen“ für jede``` ```einzelne Datenquelle.``` |
| --- | --- | --- |
| Parameter | ```   ...``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```procedure ReportBeforePrint;``` ``` begin``` ```  ZeugnisDatenquellenOeffnen;``` ``` end;``` |  |