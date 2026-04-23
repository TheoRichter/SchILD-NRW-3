# Troubleshooting Installation SchILD-NRW 3

## Reports erscheinen nicht in SchILD-NRW 3Reports tauchen in SchILD-NRW 3 nicht auf, obwohl sie im
Report-Verzeichnis *SchILD-Reports* abgelegt wurden.

Das Verzeichnis ScHILD-Reports gehört nicht wie bei SchILD-NRW 2 in das
*SchILD-Installationsverzeichnis* (z.B. C:\SchILD-NRW3\\ sondern in das
SVWS-Arbeitsverzeichnis (z.B. S:\SVWS-Arbeitsverzeichnis\\.

## Statistikdateien registrieren (.DLLs)Wurden die Statistik-dlls nicht korrekt auf dem Windows-Klienten
registriert, kann es zu Fehlern mit ASDPC und den Statistikprüfungen in
SchILD-NRW kommen.Konsultieren Sie den Artikel zur 

WIKILINK: Hilfe_bei_Problemen_(Verwaltung_Statistik_für_IT-NRW),
um die Dateien einer SchILD-NRW-Installation nachträglich zu
registrieren.

## Statistik.dll-Konflikte bei paralleler Installation von SchILD-NRW 2Werden mehrere Installationen von SchILD-NRW 2 und/oder SchILD-NRW 3
parallel betrieben, kann es zu Problemen mit der Statistik.dll kommen,
da ein Windows-Klient nur die jeweils zuletzt registrierte Datei
verwendet.Konsultieren Sie den Artikel zur 

WIKILINK: Hilfe_bei_Problemen_(Verwaltung_Statistik_für_IT-NRW),
um die Dateien einer SchILD-NRW-Installation nachträglich zu
registrieren.Nehmen sie für weitere Ausführungen hierzu das Tutorial zur

WIKILINK: Fehleranalyse_zur_Statistik_(Tutorial) zur
Kenntnis.

## Erstellen der .con-FilesLäuft der Datenbankserver, SchILD3 kann sich aber nicht verbinden, so
kann es sein, dass die Connection-Files nicht korrekt erstellt wurden.Wollen Sie im Nachgang diese Dateien erstellen, starten Sie die
*SchILD_DBConfig.exe* aus dem SchILD-3-Installationsverzeichnis und
stellen Sie die passenden Daten ein. Hier ist zu beachten: bei der
"Datenbank" ist kein "<https://>" zu setzen, bei "SVWS-Server" ist
dieser Zusatz hingegen zu verwenden.Beachten Sie, dass die Con-Datei bei einer Netzwerkinstallation auf dem
Server zu erstellen ist.