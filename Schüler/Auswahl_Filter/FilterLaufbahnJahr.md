# FilterLaufbahnJahr
| RAP-Funktion "FilterLaufbahnJahr" | Beschreibung | ```   procedure FilterLaufbahnJahr(const VonJahr, BisJahr: Integer);``` ```   filtert die Laufbahndaten der Schüler für das angegebene Intervall;``` ```   vonJahr = 0 filtert vom Anfing bis BisJahr``` ```   bisJahr = 0 filtert von vonJahr bis zum Ende``` ```   VonJahr = 0 und BisJahr = 0 setzt die Abfrage zurück``` |
| --- | --- | --- |
| Parameter | ```   VonJahr            - Beginn des Zeitraumes``` ```   BisJahr            - Ende des Zeitraumes``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   procedure ReportBeforePrint;``` ```   begin``` ```     SetUebersicht(True);``` ```     FilterLaufbahnJahr(2000,2009);``` ```   end;``` ```   procedure ReportAfterPrint;``` ```   begin``` ```     SetUebersicht(false);``` ```     FilterLaufbahnJahr(0,0);``` ```   end;``` |  |