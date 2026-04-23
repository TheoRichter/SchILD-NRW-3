# FilterErzieherfunktion
| RAP-Funktion "FilterErzieherfunktion" | Beschreibung | ```   procedure FilterErzieherfunktion(const aFunktion: String);``` |
| --- | --- | --- |
| Parameter | ```   aFunktion          - Schulinterne Funktion, auf die gefiltert werden soll. Aus``` ```                        den Erziehern werden die Einträge mit der gewählten``` ```                        Funktion ausgewählt.``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   Procedure ReportBeforePrint;``` ```   var``` ```     lFunktion : String;``` ```   begin``` ```     lFunktion:=SelectErzFunktion;``` ```     FilterErzieherfunktion(lFunktion);``` ```   end;``` |  |