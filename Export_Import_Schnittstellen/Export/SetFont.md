# SetFont
| RAP-Funktion "SetFont" | Beschreibung | ```   procedure SetFont(aReport: TppReport; const aFontname: String)``` ```   Setzt den Zeichensatz für alle Komponenten des Reports``` |
| --- | --- | --- |
| Parameter | ```   aReport      - der zu bearbeitende Report``` ```   aFontname    - Der Name des neuen Zeichensatzes``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   procedure ReportOnStartFirstPass;``` ```   begin``` ```     Setfont(Report,'Tahoma');``` ```   end;``` |  |