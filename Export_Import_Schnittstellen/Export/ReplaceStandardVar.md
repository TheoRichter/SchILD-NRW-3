# ReplaceStandardVar
| RAP-Funktion "ReplaceStandardVar" | Beschreibung | ```   function ReplaceStandardVar(aText, aStandardVar: String): String;``` |
| --- | --- | --- |
| Parameter | ```   aText              - Text, in dem die oder der Standard-Platzhalter ersetzt``` ```                        werden sollen.``` ```   aStandardVar       - Standardvariable, die ersetzt werden soll``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   Procedure DetailBeforePrint;``` ```    begin``` ```      ...``` ```      RichText1.Richtext:=ReplaceStandardVar(RichText1.Richtext,'$_NAME$');``` ```      ...``` ```    end;``` |  |