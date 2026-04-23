# Troubleshooting Installation SVWS-Server

## Anderer Server vorhandenDer Server wurde installiert, startet aber nicht.Wenn noch ein anderer MySQL- oder MariaDB-Server auf dem gleichen Port
3306 läuft, müssen die Ports zur Konfliktfreiheit verändert werden
beziehungsweise der Dienst auf dem anderen Server muss in die MariaDB
integriert werden und der andere Server kann abgeschaltet werden.In einem Schulverwaltungsnetzwerk sollte der Schulverwaltungssoftware
Priorität eingeräumt werden.

Das Gleiche gilt für den Port 443, auf dem der SVWS-Server den Webclient
ausliefert.

## Alte Installation

Die Installation des SVWS-Servers schlägt fehl.Eventuell ist noch eine alte Installation des SVWS-Servers vorhanden,
bei der Deinstallation wurden aber noch die Datenverzeichnisse nicht
gelöscht, zum Beispiel unter *C:\ProgramData*. Hier wäre die alte
Installation restlos zu entfernen.Führen Sie die komplette

DEADLINK: Deinstallation - Installation_SVWS-Server#Deinstallieren_der_Programme.md

durch. Führen Sie bei Bedarf auch die

DEADLINK: Batch-Datei - Medium:Delete_SVWS-Server_and_SchILD-NRW_3.zip.md

aus. Klären Sie den Bedarf durch einen Blick in die Batch-Datei.

::: warning

Sollte der Server schon einmal im Produktiveinsatz
gelaufen sein, stellen Sie vor dem Löschen sicher, dass die Datenbank
als Sicherung vorliegt.

:::

## Migration schlägt fehl, danach startet der SVWS-Server nichtNach einer fehlgeschlagenen Migration kann es dazu kommen, dass der
Server nicht mehr startet.In diesem Fall kann das Schema manuell aus der *svwsconfig.json*
gelöscht werde. Diese findet sich *Daten*-Verzeichnis des SVWS-Servers
im Unterordner *\res\\*.Unter <https://meinserver/admin> steht hierfür auch eine Admin-Anwendung
zur Verfügung.

## Zertifikat

Das Zertifikat wird nicht erzeugt, wenn im Hostnamen ein Sonderzeichen
enthalten ist, da diese in Zertifikaten nicht erlaubt sind. Ebenso
führen Domänen mit Sonderzeichen zu Fehlern.