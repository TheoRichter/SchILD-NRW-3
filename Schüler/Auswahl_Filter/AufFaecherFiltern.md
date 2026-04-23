# AufFaecherFiltern
| RAP-Funktion "AufFaecherFiltern" | Beschreibung | ```   procedure AufFaecherFiltern( const fachliste: string);``` Ermöglicht eine Filterung in der Datenquelle<br>„SchuelerJahresuebersicht“ auf bestimmte Fächer. Der Aufruf erfolgt<br>typischerweise im Ereignis „ReportBeforPrint“ Es ist aber geplante, die Filterung auch auf andere Datenquellen zu<br>erweitern |
| --- | --- | --- |
| Parameter | ```   Fachliste: Durch Komma oder Semikolon getrennte Liste der schulinternen Fachkürzel``` Hinweis: Komma oder Semikolon dürfen nicht vermischt werden, d.h. es<br>dürfen nur Kommas oder nur Semikolons verwendet werden. |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   AufFaecherFiltern('D,E,M');``` |  |