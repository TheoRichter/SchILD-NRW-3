# Probleme mit fehlenden Schriftarten im pdf-Dokument (Tutorial)

![SchILD_Tutorials_Reporting_SchriftartEinbetten.png](../../graphics/SchILD_Tutorials_Reporting_SchriftartEinbetten.png)

 Eine fehlerhafte Darstellung von generierten PDF-Dateien
kann durch falsche Zeichencodierung im PDF oder durch fehlende
Schriftarten auf dem Anzeigesystem verursacht werden. Die Einstellung
der *PDFSettings* auf die dargestellten Werte verhindert dies.  
Die Einstellung `FontEncoding = feUnicode` sorgt dafür, dass auch
Sonderzeichen wie `ĉ`, die z.B. in Namen enthalten sein können, im PDF
gespeichert werden und nicht durch ein anderes Zeichen ersetzt werden.  
Mit der Einstellung auf *feUnicode* wird auch gleichzeitig das Einbetten
der Schriftarten aktiviert. Wenn die Schriftarten im PDF eingebettet
sind, kann es auf jedem System mit der richtigen Schriftart dargestellt
werden.  
Die Einstellung `EmbedFontOptions = efUseSubset` sorgt dafür, dass nur
die verwendeten Zeichen in das PDF eingebettet werden, wodurch das
erzeugte PDF deutlich kleiner wird.

Die folgende Tabelle stellt die Auswirkungen der Einstellungen dar:| Einstellungen |                             |
|---|-----|
| FontEncoding  | EmbedFontOptions            |
| feAnsi        | \[\]                        |
| feAnsi        | \[efAllFonts\]              |
| feAnsi        | \[efAllFonts, efUseSubset\] |
| feAnsi        | \[efUseSubset\]             |
| feUnicode     | \[\]                        |
| feUnicode     | \[efAllFonts\]              |
| feUnicode     | \[efAllFonts, efUseSubset\] |
| feUnicode     | \[efUseSubset\]             |