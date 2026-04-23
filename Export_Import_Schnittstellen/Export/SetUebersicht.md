# SetUebersicht
| RAP-Funktion "SetUebersicht" | Beschreibung | ```   procedure SetUebersicht(IsUebersicht: Boolean);``` |
| --- | --- | --- |
| Parameter | ```   IsUebersicht       - Boolescher Wert, bei 'True' werden die Leistungsdaten eines``` ```                        Schülers im über SetJgIntervall definierten Zeitintervall in``` ```                        eine Tabellenstruktur eingefügt. Da dieser Vorgang recht``` ```                        zeitaufwendig ist, kann und sollte er durch diese Funktion nur``` ```                        bei Bedarf  zugeschaltet werden``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   Procedure ReportBeforePrint;``` ```    begin``` ```      SetJgIntervall(12,13);``` ```      SetUebersicht(True);``` ```    end;``` |  |