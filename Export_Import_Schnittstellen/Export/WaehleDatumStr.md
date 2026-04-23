# WaehleDatumStr
| RAP-Funktion "WaehleDatumStr" | Beschreibung | ```   function WaehleDatumStr(const Hinweis: String; const LangFormat: Boolean): String;``` |
| --- | --- | --- |
| Parameter | ```   Hinweis            - Hinweistext``` ```   LangFormat         - True: Formatierung des Ergebnisses wie``` ```                       „Langes Datumsformat“ in den Ländereinstellungen von``` ```                        Windows, sonst Kurzformat``` |  |
| Rückgabewert | ```   Zeichenkette mit formatiertem Datum``` |  |
| Beispiel | ```   lDatum:=WaehleDatumStr('Geburtsdatum:',True);``` ```   liefert (z.B.) 'Sonntag, 26. Mai 1996'``` |  |