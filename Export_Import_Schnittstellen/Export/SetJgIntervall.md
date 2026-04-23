# SetJgIntervall
| RAP-Funktion "SetJgIntervall" | Beschreibung | ```   function SetJgIntervall(aStartJg, aEndJg: Integer): Boolean; 

Diese Funktion``` ```   ist veraltet. Statt dessen sollte SetJgIntervall_ASD benutzt werden.``` |
| --- | --- | --- |
| Parameter | ```   aStartJg           - Beginn des Jahrgangsintervalles, für das Übersichten erzeugt``` ```                        werden solle``` ```   aEndJg             - Ende des Jahrgangsintervalles, für das Übersichten erzeugt``` ```                        werden sollen``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   Procedure ReportBeforePrint;``` ```    begin``` ```      If SetJgIntervall(12,13) then``` ```        ShowMessage('

Dieser Report ist für den Quartalsbetrieb nicht geeignet');``` ```    end;``` |  |