# IncFontSize
| RAP-Funktion "IncFontSize" | Beschreibung | ```   procedure IncFontSize(aReport: TppReport; const aIncrement: Integer);``` ```   Vergößert oder verkleinert die Zeichensatz größe``` |
| --- | --- | --- |
| Parameter | ```   aReport        - der Report, dessen Komponenten bearbeitet werden sollen``` ```   aIncrement     - Wert, um den der Zeichensatz vergrößert (oder bei negativem``` ```                    Increment) verkleinert werden soll``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   ...procedure ReportOnStartFirstPass;``` ```   begin``` ```     IncFontSize(Report,1);``` ```   end;``` |  |