# NurFaecherMitAufsZeugnisFlag
| RAP-Funktion<br>"NurFaecherMitAufsZeugnisFlag" | Beschreibung | ```   Procedure NurFaecherMitAufsZeugnisFlag(aValue : Boolean);``` ```   Durch die Verwendung dieser Prozedur kann erreicht werden, dass``` ```   bei den Schülerleistungsdaten auch Fächer mit ausgegeben werden,``` ```   bei denen das Flag "Auf Zeugnis" nicht gesetzt ist. Voreinstellung``` ```   für diesen Wert ist TRUE, d.h. es werden nur Fächer ausgegeben, bei``` ```   denen dieses Flag gesetzt ist.``` |
| --- | --- | --- |
| Parameter | ```   aValue             - Boolscher Wert: FALSE schaltet die Überprüfung ab,``` ```                        TRUE schaltet sie wieder ein.``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   procedure ReportBeforePrint;``` ```   begin``` ```     NurFaecherMitAufsZeugnisFlag(False)``` ```   end;``` ```   procedure ReportAfterPrint;``` ```   begin``` ```     NurFaecherMitAufsZeugnisFlag(True)``` ```   end;``` |  |