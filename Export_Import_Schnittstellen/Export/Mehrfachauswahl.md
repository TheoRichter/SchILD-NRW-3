# Mehrfachauswahl
| RAP-Funktion "Mehrfachauswahl" | Beschreibung | ```   function Mehrfachauswahl(Prompt, Optionsliste: String; Trennzeichen: Char): TStringList;``` ```   ermöglicht die Auswahl mehrerer Elemente einer Auswahlliste``` |
| --- | --- | --- |
| Parameter | ```   Prompt       - Eingabeaufforderung``` ```   Optionsliste - Liste der verfügbaren Optionen``` ```   Trennzeichen - Trennt die Optionen in der Liste voneinander``` |  |
| Rückgabewert | ```   Eine Stringliste mit den gewählten Optionen``` |  |
| Beispiel | ```   procedure DetailBeforePrint;``` ```   begin``` ```     Memo1.Lines:=MehrfachAuswahl('Bitte wählen Sie eine oder mehrere Optionen:',``` ```       'Option 1;Option 2;Option 3',';');``` ```   end``` |  |