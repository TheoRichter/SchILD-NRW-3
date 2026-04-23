# ResetFaechervorbelegung
| RAP-Funktion "ResetFaechervorbelegung" | Beschreibung | ```   procedure ResetFaechervorbelegung;``` ```   Setzt interne Abfragen zurück, muss immer nach Verwendung von Faechervorbelegen oder``` ```   CreateNotenHeader aufgerufen werden.``` |
| --- | --- | --- |
| Parameter | ```   ...``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   Procedure ReportBeforePrint;``` ```    begin``` ```      Faechervorbelegen;``` ```    end;``` ```    Procedure ReportAfterPrint;``` ```    begin``` ```      ResetFaechervorbelegung;``` ```    end;``` |  |