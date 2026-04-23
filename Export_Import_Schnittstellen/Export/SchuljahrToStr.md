# SchuljahrToStr
| RAP-Funktion "SchuljahrToStr" | Beschreibung | ```   function SchuljahrToStr(aJahr, aAbschnitt: integer): String;``` |
| --- | --- | --- |
| Parameter | ```   aJahr              - Jahr, in dem das Schuljahr anfing``` ```   aAbschnitt         - Schuljahresabschnitt. Falls aAbschnitt = 0 ist, wird der``` ```                        String ohne Abschnitt erzeugt``` |  |
| Rückgabewert | ```   Schuljahr in der Form 'JJJJ/JJ.A'``` |  |
| Beispiel | ```   SchuljahrStr:=SchuljahrToStr(Schueler['AktSchuljahr'],Schueler['AktAbschnitt'])``` ```   Ergebnis (z.B.): lSchuljahrStr = '2005/06.2'``` |  |