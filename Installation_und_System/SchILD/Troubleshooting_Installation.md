# Troubleshooting Installation

## SchILD-NRW3

### Reports erscheinen nicht in SchILD-NRW3Reports tauchen in SchILD-NRW3 nicht auf, obwohl sie im
Report-Verzeichnis *SchILD-Reports* abgelegt wurden.

Das Verzeichnis ScHILD-Reports gehört nicht wie bei SchILD-NRW2 in das
*SchILD-Installationsverzeichnis* (z.B. C:\SchILD-NRW3\\ sondern in das
SVWS-Arbeitsverzeichnis (z.B. S:\SVWS-Arbeitsverzeichnis\\.

### .dlls/Statistikdateien registrierenWurden die Statistik-dlls nicht korrekt auf dem Windows-Klienten
registriert, kann es zu Fehlern mit ASDPC und den Statistikprüfungen in
SchILD-NRW kommen.Konsultieren Sie den Artikel zur 

WIKILINK: Hilfe_bei_Problemen_(Verwaltung_Statistik_für_IT-NRW),
um die Dateien einer SchILD-NRW-Installation nachträglich zu
registrieren.

### Statistik.dll-Konflikte bei paralleler Installation von SchILD-NRW2Werden mehrere Installationen von SchILD-NRW2 und/oder SchILD-NRW3
parallel betrieben, kann es zu Problemen mit der Statistik.dll kommen,
da ein Windows-Klient nur die jeweils zuletzt registrierte Datei
verwendet.Konsultieren Sie den Artikel zur 

WIKILINK: Hilfe_bei_Problemen_(Verwaltung_Statistik_für_IT-NRW),
um die Dateien einer SchILD-NRW-Installation nachträglich zu
registrieren.Nehmen sie für weitere Ausführungen hierzu das Tutorial zur

WIKILINK: Fehleranalyse_zur_Statistik_(Tutorial) zur
Kenntnis.