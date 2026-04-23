# LoadVermerke
| RAP-Funktion "LoadVermerke" | Beschreibung | ```   function LoadVermerke(aVermerkart, aDelimiter: String): String``` |
| --- | --- | --- |
| Parameter | ```   aVermerkart        - Gewünschte Vermerkart, wie im Katalog „Vermerkarten``` ```                        definiert.``` ```   aDelimiter         - Trenner für die Vermerke. Hier ist eine beliebige``` ```                        Zeichenkette zulässig. Besondere Bedeutung haben '\t '``` ```                        bzw. '\T' (fügt einen Tabulatorschritt ein) und '\n'``` ```                        bzw. '\N' (fügt einen Zeilenvorschub ein).``` |  |
| Rückgabewert | ```   Alle Vermerke der gewählten Art, durch den Delimiter voneinander getrennt.``` |  |
| Beispiel | ```   Procedure DetailBeforePrint;``` ```   begin``` ```     Memo1.Text:=LoadVermerke('Betreuung','\n');``` ```   end;``` ```  (*Ergebnis: Alle Betreuungs-Vermerke werden untereinander in einem Memofeld``` ```   dargestellt.*)``` |  |