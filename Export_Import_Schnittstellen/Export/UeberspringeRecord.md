# UeberspringeRecord
| RAP-Funktion "UeberspringeRecord" | Beschreibung | ```   procedure UeberspringeRecord(aPipeline: TppDatapipeline);``` ```   überspringt einen Datensatz der Datenquelle``` |
| --- | --- | --- |
| Parameter | ```   aPipeline  - Name der Datenpipeline``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   If Copy(Schueler['Name'],1,1) = 'D' then UeberspringeRecord(Schueler);``` ```   oder``` ```   While Copy(Schueler['Name'],1,1) = 'D' Do``` ```   Begin``` ```     UeberspringeRecord(Schueler);``` ```   End;``` ```   Bitte beachten Sie, dass die Funktion beim letzten Datensatz nicht weiterspringen kann,``` ```   dies muss u.U. berücksichtigt werden!``` |  |