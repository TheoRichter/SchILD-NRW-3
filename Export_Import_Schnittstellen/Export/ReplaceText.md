# ReplaceText
| RAP-Funktion "ReplaceText" | Beschreibung | ```   function ReplaceText(aSourceText, aSearchText,``` ```                        aReplaceText: String): String;``` |
| --- | --- | --- |
| Parameter | ```   aSourceText        - Text, der den zu ersetzenden String (selbst``` ```                        definierter Platzhalter) enthält``` ```   aSearchText        - String, der ersetzt werden soll``` ```   aReplaceText       - String, der eingefügt werden soll``` |  |
| Rückgabewert | ```   Veränderter Quelltext``` |  |
| Beispiel | ```   Memo1.Text:=ReplaceText(Memo1.Text,'$VORNAME$',Schueler['Vorname');``` |  |**Zurück zu [RAP-Funktionen](RAP-Funktionen.md)**