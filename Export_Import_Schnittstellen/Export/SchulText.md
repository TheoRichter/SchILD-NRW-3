# SchulText
| RAP-Funktion "SchulText" | Beschreibung | ```   function SchulText(const Kuerzel: String): String;``` |
| --- | --- | --- |
| Parameter | ```   Kuerzel - Kurzzeichen des Textes``` |  |
| Rückgabewert | ```   der dem Kürzel zugeordnete Text``` |  |
| Beispiel | ```   procedure Label4711OnGetText(var Text: String);``` ```   begin``` ```     Text:='Schulleiter: ' + SchulText('Direktor');``` ```   end;``` |  |