# FilterLaufbahnJahrgangASD
| RAP-Funktion<br>"FilterLaufbahnJahrgangASD" | Beschreibung | ```   procedure FilterLaufbahnJahrgandASD(const Jahrgangsliste: String);``` ```   filtert die Laufbahndaten der Schüler für die angegebenen Jahrgänge;``` ```   Jahrgangsliste = '' setzt die Abfrage zurück``` |
| --- | --- | --- |
| Parameter | ```   Jahrgangsliste  - kommaseparierte Liste der Jahrgänge``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   procedure ReportBeforePrint;``` ```   begin``` ```     SetUebersicht(True);``` ```     FilterLaufbahnJahrgangASD('EF,Q1,Q2');``` ```   end;``` ```   procedure ReportAfterPrint;``` ```   begin``` ```     SetUebersicht(false);``` ```     FilterLaufbahnJahrgangASD('');``` ```   end;``` |  |