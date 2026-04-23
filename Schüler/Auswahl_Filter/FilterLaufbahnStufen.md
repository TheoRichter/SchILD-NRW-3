# FilterLaufbahnStufen
| RAP-Funktion "FilterLaufbahnStufen" | Beschreibung | ```   procedure FilterLaufbahnStufen(const Stufenliste: String);``` ```   Filtert für Leistungsübersichten auf bestimmte Jahrgangsstufen. Damit ist es möglich,``` ```   z.B. Formulare für die gymn. Oberstufe schulformunabhängig zu entwickeln``` |
| --- | --- | --- |
| Parameter | ```   Parameter:``` ```   Stufenliste: 

Die zu betrachtenden Jahrgangsstufen, getrennt durch Komma``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   procedure ReportBeforePrint;``` ```   var``` ```    vers: string;``` ```   begin``` ```   {Filter auf Q1 und Q2 bzw. 12 und 13 bzw. 5 und 6 (bei WBK)}``` ```    FilterLaufbahnStufen('SII-2,SII-3');``` ```   end;``` |  |