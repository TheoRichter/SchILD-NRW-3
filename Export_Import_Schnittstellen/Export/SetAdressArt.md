# SetAdressArt
| RAP-Funktion "SetAdressArt" | Beschreibung | ```   procedure SetAdressArt(aZiel, aAdressArt: String);``` |
| --- | --- | --- |
| Parameter | ```   aZiel              - ALLEADRESSEN' setzt den Filter für die Datenquelle``` ```                       „AllgAdresseUndSchueler“, 'KLASSENADRESSEN' auf die Datenquelle``` ```                       „AllgAdresseZurLKlasse“``` ```   aAdressArt         - Gewünschte Adressart, entweder über SelectAdressArt auswählen``` ```                        oder als Stringliteral (z.B. „Betrieb“) eingeben``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   Procedure ReportBeforePrint;``` ```    begin``` ```      SetAdressArt('ALLEADRESSEN','Betrieb');``` ```    end``` |  |