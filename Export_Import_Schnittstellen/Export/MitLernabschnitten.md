# MitLernabschnitten
| RAP-Funktion "MitLernabschnitten" | Beschreibung | ```   procedure MitLernabschnitten(const Value: Boolean);``` ```   Erzwingt die Aktualisierung der Datenquelle Lernabschnitte beim Wechsel``` ```   eines Schülerdatensatzes.``` |
| --- | --- | --- |
| Parameter | ```   Value - Boolescher Wert``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   procedure ReportBeforePrint;``` ```   begin``` ```     MitLerabschnitten(True);``` ```   end;``` ```   procedure ReportAfterPrint;``` ```   begin``` ```     MitLernabschnitten(false);``` ```   end``` |  |