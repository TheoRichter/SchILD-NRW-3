# NurFaecherMitNoten
| RAP-Funktion "NurFaecherMitNoten" | Beschreibung | ```   procedure NurFaecherMitNoten(const Value: Boolean);``` |
| --- | --- | --- |
| Parameter | ```   Value    - True, wenn nur Leistungsdaten mit eingetragenen Noten geholt werden sollen``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   Procedure ReportBeforePrint;``` ```    begin``` ```      NurFaecherMitNoten(True)``` ```    end;``` ```    z.B. in einem Zeugnis: Fächer ohne Noten erscheinen nicht``` ```    auf dem Zeugnis. Damit Übersichten etc. funktionieren,``` ```    sollte diese Option in ReportAfterPrint wieder zurückgesetzt werden``` |  |