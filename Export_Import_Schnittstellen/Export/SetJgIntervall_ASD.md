# SetJgIntervall ASD
| RAP-Funktion "SetJgIntervall ASD" | Beschreibung | ```   function SetJgIntervall_ASD(Const aJahrgangsliste: String): Boolean;``` |
| --- | --- | --- |
| Parameter | ```   aJahrgangsliste    - Liste der Jahrgänge, für die eine Übersicht erzeugt``` ```                        werden soll``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   Procedure ReportBeforePrint;``` ```    begin``` ```      If SetJgIntervall_ASD('EF,Q1,Q2') then``` ```        ShowMessage('

Dieser Report ist für den Quartalsbetrieb nicht geeignet');``` ```    end;``` |  |