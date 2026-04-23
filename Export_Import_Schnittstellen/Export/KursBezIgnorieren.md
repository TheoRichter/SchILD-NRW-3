# KursBezIgnorieren
| RAP-Funktion "KursBezIgnorieren" | Beschreibung | ```   Procedure KursBezIgnorieren(Const Ignore : Boolean);``` ```   Durch den Aufruf dieser Prozedur wird bei der Einsortierung``` ```   der Leistungsdaten in die Leistungsübersichten die Kursbezeichnung``` ```   ignoriert. 

Diese Prozedur ist nur im Zusammenhang mit SetUebersicht``` ```   notwendig und sinnvoll. Standardmäßig wird die Kursbezeichnung berücksichtigt.``` |
| --- | --- | --- |
| Parameter | ```   ignore : wahr-> Kursarten ignorieren``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   Procedure ReportBeforePrint;``` ```    begin``` ```      SetUebersicht(True);``` ```      KursBezIgnorieren(True);``` ```    end;``` ```    Procedure ReportAfterPrint;``` ```    begin``` ```      SetUebersicht(false);``` ```      KursBezIgnorieren(False);``` ```    end;``` |  |