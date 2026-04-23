# DateinameFuerDVAuswaehlen
| RAP-Funktion<br>"DateinameFuerDVAuswaehlen" | Beschreibung | ```procedure DateinameFuerDVAuswaehlen;``` ```Der Aufruf dieser Prozedur (typischerweise im Ereignis ReportBeforePrint) bewirkt,``` ```dass vor der Ausgabe eines Reportes als PDF-Datei in der Dokumentenverwaltung``` ```ein individueller Dateiname eingegeben werden kann. 

Dieser Name wird dann bei``` ```der Ermittlung des „schülerspezifischen“ Dateinamens anstelle des Namens der``` ```Reportvorlage verwendet. 

Dies ist besonders bei Serienbriefvorlagen hilfreich, bei``` ```denen der Briefinhalt zur Laufzeit aus einer RTF-Datei geladen wird.``` |
| --- | --- | --- |
| Parameter | ```   ...``` |  |
| Rückgabewert | ```

Die Reportvorlage heißt „RTFBrief.rtm“. Normalerweise würde dann die in der``` ```Dokumentenverwaltung des Schülers abgelegte Datei z.B. den Namen``` ```„RTFBrief_2013_05_24.pdf“ erhalten, d.h. aus dem Dateinamen geht die Bedeutung``` ```des Schreibens nicht hervor. Durch Aufruf von „DateinameFuerDVAuswaehlen“ kann``` ```aber ein Dialog aufgerufen werden, in dem ein individueller Name definiert werden``` ```kann (z.B. „Hausaufgabenmahnbrief“), woraus sich dann der Dateinamen``` ```„Hausaufgabenmahnbrief_2013_05_24.pdf“ ergibt.``` |  |
| Beispiel | ```procedure ReportBeforePrint;``` ``` begin``` ```  DateinameFuerDVAuswaehlen;``` ``` end;``` ```Hinweis: Wenn der RTF-Text aus einer externen Datei geladen wird, so wird deren``` ```Dateiname verwendet, eine manuelle Eingabe erfolgt dann nicht.``` |  |