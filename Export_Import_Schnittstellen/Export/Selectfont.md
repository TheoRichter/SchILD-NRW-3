# Selectfont
| RAP-Funktion "Selectfont" | Beschreibung | ```   function Selectfont(const Default: String): String;``` ```   Dialog, um aus der Liste der im System registrierten Zeichensätze einen``` ```   bestimmten Zeichensatz auszuwählen``` |
| --- | --- | --- |
| Parameter | ```   Default    - Standardwert für den Zeichensatz``` |  |
| Rückgabewert | ```   Gewählter Zeichensatz``` |  |
| Beispiel | ```   procedure ReportOnStartFirstPass;``` ```   var``` ```     NewFont : String;``` ```   begin``` ```     NewFont:=Selectfont('Tahoma');``` ```     Setfont(Report,NewFont);``` ```   end;``` |  |