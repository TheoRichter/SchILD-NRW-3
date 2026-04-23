# FilterFachUebersichtAufKlasse
| RAP-Funktion<br>"FilterFachUebersichtAufKlasse" | Beschreibung | ```   Procedure FilterFachUebersichtAufKlasse( const klasse: string );``` Mit dieser Prozedur kann bei einem Gruppenwechsel (wobei die<br>Gruppierung auf "Klasse" sein muss) eine Fachübersicht neu initialisiert<br>werden. Der Aufruf erfolgt typischerweise im Ereignis<br>"BeforeGroupBreak", als Aufruf-Parameter wird die Klasse übergeben.<br>Dadurch ist es möglich, Fachübersichten für mehrere Klassen (oder die<br>ganze Schule) in einem Durchlauf auszugeben, wobei nur die jeweils von<br>der betreffenden Klasse belegten Fächer in der Übersicht<br>erscheinen. |
| --- | --- | --- |
| Parameter | ```   String - Klasse, für die die Übersicht erzeugt werden soll``` |  |
| Rückgabewert | ```   Erzeugt einen neuen FachUebersichtsHeader, sobald die Gruppe wechselt.``` |  |
| Beispiel | ```   FilterFachUebersichtAufKlasse(Schueler['Klasse']);``` |  |