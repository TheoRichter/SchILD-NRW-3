# JahrgangsListe
| RAP-Funktion "JahrgangsListe" | Beschreibung | ```   function JahrgangsListe(Const aEndJg: String; const aDiff: Integer): String;``` |
| --- | --- | --- |
| Parameter | ```   aEndJg  - Letzter Jahrgang des Intervalls``` ```   aDiff   - Abstand zum Startjahrgang``` |  |
| Rückgabewert | ```   Kommaseparierte Liste der Jahrgänge``` |  |
| Beispiel | ```   Procedure ReportBeforePrint;``` ```    var``` ```      lJahrgaenge : String;``` ```    begin``` ```      lJahrgaenge:=JahrgangsListe('Q2',3); //Ergebnis: '08,09,EF,Q1'``` ```      SetJgIntervall_ASD(lJahrgaenge);``` ```    end;``` |  |