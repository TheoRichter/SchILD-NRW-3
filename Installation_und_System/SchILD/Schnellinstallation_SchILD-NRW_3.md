# Schnellinstallation SchILD-NRW 3

::: warning

**SchILD-NRW 3 und der SVWS-Servermüssen zusammen
installiert werden.**

Die Versionen des **SVWS-Servers** und von **SchILD-NRW 3** müssen
zusammenpassen. Kontrollieren Sie vor Beginn der Installation, dass Sie
die korrekten Installer vorliegen haben.**

Die Dokumentation des SVWS-Servers inklusive der Installation finden
Sie auf <https://doku.svws-nrw.de>**.

:::

Der folgenden Artikel beinhaltet Hinweise zur Installation von

SchILD-NRW 3 ohne weitere Erläuterungen.

## EinzelplatzinstallationIm Folgenden wird eine **Testinstallation** von SchILD-NRW 3
**insbesondere für Fachberaterinnen und Fachberater** auf einem
Einzelplatzrechner ohne weitere Erläuterung vorgestellt. In einer
Produktivumgebung dürfen die Kennwörter keinesfalls wie abgebildet
gesetzt werden.

## Restlose Deinstallation einer vorherigen InstallationBitte laden Sie diese

DEADLINK: Batch-Datei - Medium:Delete_SVWS-Server_and_SchILD-NRW_3_-_Client.zip.md

herunter und entpacken diese. Klicken Sie mit der RECHTEN-Maustaste auf
die Datei "Delete SVWS-Server and SchILD-NRW3.bat" und wählen "Als
Administrator ausführen".

Die Deinstallation durch die Batch-Datei funktioniert nur, wenn die
Standardpfade für die Installation belassen wurden.

## Installation von SchILD-NRW 3Laden Sie sich den neusten Windows-Installer "Setup_SchILD3_vXYZ.exe"
hier herunter: **<https://github.com/SVWS-NRW/Schild-NRW-3/releases>**Führen Sie die Datei Setup_SchILD3_vXYZ.exe aus. Übernehmen Sie
sämtliche Vorschläge durch Klick auf die Schaltflächen `Weiter`.

![Installation_Schild3_Konfigurationsdatei_Einstellungen.png](../../graphics/Installation_Schild3_Konfigurationsdatei_Einstellungen.png)

 Direkt nach der Installation öffnet sich das
Konfigurationstool. Belassen Sie dort alle Einstellungen und klicken auf
die Schaltfläche `Datei speichern`.  

## Start von SchILD-NRW 3SchILD-NRW 3 kann wie gewohnt über einen Doppelklick auf das
Desktopsymbol oder über einen Einfachklick auf das Symbol im Startmenü
gestartet werden.Zum Start des SVWS-Clients öffnen Sie einen Browser. Tippen Sie dann in
die Adresszeile die URL zum SVWS-Client ein: `https://localhost`.Für den Zugriff auf die Programme müssen Sie sich als
**SchILD-Benutzer** anmelden. Verwenden Sie hier die gleichen
Zugangsdaten, die sie auch in SchILD-NRW 2 verwendet haben.

## Update von SchILD-NRW 3Ein Update von SchILD-NRW 3 erfolgt am einfachsten, indem man die
ZIP-Version in das bestehende Installationsverzeichnis entpackt und die
dortigen Dateien überschreibt.