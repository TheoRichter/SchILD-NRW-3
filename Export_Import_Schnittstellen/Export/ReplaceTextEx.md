# ReplaceTextEx
| RAP-Funktion "ReplaceTextEx" | Beschreibung | ```   function ReplaceTextEx(aSourceText, aSearchText,``` ```                          aReplaceText: String): *   String;``` ```   Im Unterschied zu ReplaceText berücksichtigt ReplaceTextEx Groß- und Kleinschreibung.``` |
| --- | --- | --- |
| Parameter | ```   aSourceText        - Text, der den zu ersetzenden String (selbst``` ```                        definierter Platzhalter) enthält``` ```   aSearchText        - String, der ersetzt werden soll``` ```   aReplaceText       -``` |  |
| Rückgabewert | ```   Veränderter Quelltext``` |  |
| Beispiel | ```   Memo1.Text:=ReplaceTextEx(Memo1.Text,'$VORNAME$',Schueler['Vorname']);``` |  |