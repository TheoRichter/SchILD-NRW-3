# MehrfachauswahlEx
| RAP-Funktion "MehrfachauswahlEx" | Beschreibung | ```   function MehrfachauswahlEx(Prompt, Optionsliste: String; Trennzeichen: Char): String;``` ```   ermöglicht die Auswahl mehrerer Elemente einer Auswahlliste``` |
| --- | --- | --- |
| Parameter | ```   XXXPrompt       - Eingabeaufforderung``` ```   Optionsliste - Liste der verfügbaren Optionen``` ```   Trennzeichen - Trennt die Optionen in der Liste voneinander``` |  |
| Rückgabewert | ```   Ein String mit den durch Bindestriche begrenzeten Indizes der gewählten Optionen;``` ```   Wenn keine Auswahl getroffen wurde, besteht der String nur aus einem Bindestrich.``` |  |
| Beispiel | ```   procedure DetailBeforePrint;``` ```   var``` ```     lResult : String;``` ```   begin``` ```     lResult:=MehrfachAuswahlEx(Bitte wählen Sie eine oder mehrere Optionen:',``` ```       'Option 1;Option 2;Option 3',';');``` ```     if pos('-1-',lResult) > 0 then...``` ```     if pos('-2-',lResult) > 0 then...``` ```   end``` |  |