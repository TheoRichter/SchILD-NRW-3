# SetAbitur
| RAP-Funktion "SetAbitur" | Beschreibung | ```   procedure SetAbitur(IsAbitur: Boolean);``` |
| --- | --- | --- |
| Parameter | ```   IsAbitur           - Boolescher Wert, bei 'True' werden die für das Abitur``` ```                        relevanten Datenquellen (Abifaecher, FHRFaecher, Sprachenfolge``` ```                        etc. aktiviert und beim Schülerwechsel aktualisiert.``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   Procedure ReportBeforePrint;``` ```    begin``` ```      SetAbitur(True);``` ```    end;``` ```   Procedure ReportAfterPrint;``` ```   begin``` ```     SetAbitur(False);``` ```   end;``` |  |