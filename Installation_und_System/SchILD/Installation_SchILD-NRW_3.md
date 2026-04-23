# Installation SchILD-NRW 3

::: warning

**SchILD-NRW 3 und der SVWS-Servermüssen zusammen
installiert werden.**

Die Versionen des **SVWS-Servers** und von **SchILD-NRW 3** müssen
zusammenpassen. Kontrollieren Sie vor Beginn der Installation, dass Sie
die korrekten Installer vorliegen haben.**

Die Dokumentation des SVWS-Servers inklusive der Installation finden
Sie auf <https://doku.svws-nrw.de>**.

:::

Der folgenden Artikel beinhaltet Hinweise zur Installation des

SVWS-Servers und von SchILD-NRW 3.

## Übersicht über die Programmbausteine

![Hinweise-it-dienstleister.png](../../graphics/Hinweise-it-dienstleister.png)

 SchILD-NRW 3 dient als Anzeigeoberfläche der Datenbankdaten
und übernimmt ebenfalls logische Aufgaben, die noch nicht im SVWS-Server
implementiert wurden. SchILD-NRW 3 greift deshalb teilweise über den
SVWS-Server und teilweise direkt auf die MariaDB zu.Es wird eine Installationsdateien ausgeliefert: Das
Installationsprogramm installiert SchILD-NRW 3 und stellt eine
Verknüpfung zur MariaDB her.

## EinzelplatzinstallationIm Folgenden wird die Installation von SchILD-NRW3 auf einem
Einzelplatzrechner vorgestellt. In produktiven Schulumgebungen wird
diese Form der Installation eher selten vorkommen.Insbesondere in der Entwicklungsphase bietet diese Installation eine
einfache und schnelle Möglichkeit, das Programm zu testen. Die neuste
Version kann unter GitHub heruntergeladen werden:
<https://github.com/SVWS-NRW/Schild-NRW-3/releases>. Für die
Installation von SchILD-NRW3 sind Administrationsrechte am
Arbeitsplatz-PC notwendig.

### Installation von SchILD-NRW 3

![Installation_SVWS-Server_Ziel-Ordner.png](../../graphics/Installation_SVWS-Server_Ziel-Ordner.png)

Installiert werden1.  SchILD-NRW 3 im Ordner C:\Programme (x86)\SchILD3.0, auf das nur
    lesende Rechte notwendig sind
2.  ein Arbeitsverzeichnis im Ordner C:\SVWS-Arbeitsverzeichnis, auf
    welches lesende und schreibende Rechte notwendig sind. Dieser Ordner
    wird z.B. die Connection-Dateien zur MariaDB und die Reports
    aufnehmen.
3.  eine Connection-Datei schemaname.con im Ordner
    C:\SVWS-Arbeitsverzeichnis\Connection-Files. Die Connection-Datei
    (früher udl-Datei) ist eine Textdatei, welche Verbindungsdaten zur
    MariaDB enthält und in einem Texteditor geöffnet werden kann.Führen Sie die Datei Setup_SchILD3_vXYZ.exe aus. Es folgt ein
Hinweisfenster der Benutzerkontensteuerung, dass durch die Installation
Änderungen am Gerät vorgenommen werden. Klicken Sie hier auf die
Schaltfläche `Weiter`.Wählen Sie im folgenden Fenster den Installationsordner des Programms.
Wir empfehlen, für die Einzelplatzinstallation den Ordner nicht zu
ändern. Klicken Sie hier auf die Schaltfläche `Weiter`.Wählen Sie nun, wo das SVWS-Arbeitsverzeichnis erstellt werden soll. Für
die Einzelplatzinstallation empfehlen wir den vorgegebenen Ordner im
Hauptverzeichnis C:\SVWS-Arbeitsverzeichnis oder alternativ im
Benutzerverzeichnis Dokumente\SVWS-Arbeitsverzeichnis. Klicken Sie hier
auf die Schaltfläche `Weiter`.Sie können nun angeben, unter welchem Programmnamen SchILD-NRW 3 im
Startmenü und auf dem Desktop angezeigt werden soll. Wir empfehlen
dringend, den vorgegebenen Namen nicht zu ändern. Klicken Sie hier auf
die Schaltfläche `Weiter`.SchILD-NRW 3 wird nun installiert. Ein Hinweisfenster informiert Sie
über die erfolgreiche Installation und den Aufruf eines externen
Programms zur Einrichtung der Konfigurationsdatei.

#### Die Konfigurationsdatei (auch mit SchILD_DBConfig.exe)

![Installation_Schild3_Konfigurationsdatei_Einstellungen.png](../../graphics/Installation_Schild3_Konfigurationsdatei_Einstellungen.png)

 Direkt nach der Installation öffnet sich das
Konfigurationstool, mittels dem die Datei erstellt wird, die notwendig
ist, damit SchILD3 auf das Datenbankschema zugreifen kann.

::: warning

Das Konfigurationstool kann bei Bedarf auch nachträglich
aufgerufen werden, hierzu einfach die *SchILD_DBConfig.exe* im
Installationsverzeichnis von SchILD3 als Administrator ausführen. Führen
Sie es im Netzwerkbetrieb auf dem Server aus, so dass die .con-Files für
Clients zur Verfügung stehen.

:::

Im folgenden Fenster können Sie nun alle voreingetragenen Angaben

prüfen, welche zur Erstellung einer Konfigurationsdatei notwendig sind.-   Das **Datenbankformat** ist standardmäßig `MariaDB`. In
    Schulungsumgebungen können hier später auch SQLite-Datenbanken
    verwendet werden.
-   Als **Server** einer Einzelplatzinstallation ist entweder
    `localhost` oder der `Computername` eingetragen. Beide Eintragungen
    sind gleichberechtigt korrekt
-   Als **Port** ist der während der Installation des SVWS-Servers
    angegebene Port zur Datenbank eingetragen. Der Standard ist `3306`.
-   Als **Datenbankschema** ist der während der Installation des
    SVWS-Servers angegebene Name des Datenbankschemas eingetragen. Der
    Standardname lautet `svwsdb`.
-   Als **Benutzername** ist der während der Installation des
    SVWS-Servers angegebene Benutzername eingetragen. Der
    Standardbenutzer ist `svwsadmin`.
-   Als **Benutzerpasswort** ist das während der Installation des
    SVWS-Servers angegebene Benutzerpasswort für den Zugriff auf die
    Datenbank eingetragen.
-   Als **URL für SVWS-Server** ist die URL eingetragen, die im Browser
    zum Start des SVWS-Client eingetragen werden muss. Der Standard ist
    `https://localhost` oder `https://Computername`. Beide Angaben sind
    gleichberechtigt korrekt.
-   Als **Port** für den Zugriff des SVWS-Clients auf die Datenbank ist
    der Port `443` eingetragen. Dies ist der Standard-Port für den
    verschlüsselten Zugriff des SVWS-Clients auf die Datenbank.
-   Durch das Auswahlfeld `Beim Verbindungstest berücksichtigen` kann
    dieser verschlüsselte SSL-Zugriff ebenfalls getestet werden, bevor
    die Konfigurationsdatei erzeugt wird. Die Aktivierung des Häkchens
    wird empfohlen.
-   Als **Verzeichnis für die Konfigurationsdatei** (Connection-File)
    wird standardmäßig ein Unterverzeichnis im SVWS-Arbeitsverzeichnis
    angeboten. Wir empfehlen die Einstellung unverändert zu übernehmen.
    Der Standardpfad lautet
    `C:\SVWS-Arbeitsverzeichnis\Connection-Files`
-   Im letzten Feld können Sie einen **Namen für die
    Konfigurationsdatei** vergeben. Wir empfehlen hier den gleichen
    Namen zu verwenden, den auch das Schema trägt. So fällt eine
    Zuordnung der Konfigurationsdatei zum Schema leichter. Der
    Standardname ist `svwsdb`Führen Sie zunächst einen Verbindungstest durch. Sofern alle
Eintragungen korrekt vorgenommen wurden, sollte der Verbindungstest zur
MariaDB und der Verbindungstest des SVWS-Clients zur MariaDB über beide
Ports erfolgreich absolviert werden. Klicken Sie in diesem Fall auf die
Schaltfläche `Datei speichern`. Sie werden über ein Hinweisfenster
darüber informiert, dass die Konfigurationsdatei gespeichert wurde.
Klicken Sie zum Abschluss auf die Schaltfläche `Schließen`.

### Start von SchILD-NRW 3SchILD-NRW 3 kann wie gewohnt über einen Doppelklick auf das
Desktopsymbol oder über einen Einfachklick auf das Symbol im Startmenü
gestartet werden. Für den Zugriff auf das Programm müssen Sie sich als
SchILD-Benutzer anmelden. Verwenden Sie hier die gleichen Zugangsdaten,
die sie auch beim Start in SchILD-NRW 2 verwendet haben.

### Update des ProgrammsEin Update von SchILD-NRW 3 erfolgt am einfachsten, indem man die
ZIP-Version in das bestehende Installationsverzeichnis entpackt und die
dortigen Dateien überschreibt.

### Deinstallieren der ProgrammeInsbesondere in der Testphase kann es vorkommen, dass aufgrund von
Änderungen der Datenbankstruktur eine Neuinstallation des SVWS-Servers
und des Programms SchILD-NRW 3 notwendig ist.In der Testphase stellen wir eine Batch-Datei zur Verfügung, welche eine
vollständige Deinstallation des SVWS-Servers gewährleistet. Diese
befindet sich in der Fachberater-Cloud und trägt den Namen
`delete_services.bat` beziehungsweise in einer neueren Version
`Delete SVWS-Server and SchILD-NRW 3.bat`. Die Batch-Datei muss als
Administrator ausgeführt werden, indem mit der rechten Maustaste auf die
Datei geklickt und dort der Menüeintrag `Als Administrator ausführen`
ausgewählt wird. Der Batch-Prozess beendet daraufhin den im Hintergrund
laufenden Dienst SVWS-Server-Service und deinstalliert die MariaDB und
alle Programmdateien.Sofern bei der folgenden Installation des neuen SVWS-Servers die
gleichen Konfigurationsdaten verwendet werden, kann SchILD-NRW 3 ohne
Änderungen auf die neu migrierte Datenbank zugreifen.Der SVWS-Server und SchILD-NRW 3 können ebenfalls über die Windows
Systemeinstellung `Programme hinzufügen oder entfernen` deinstalliert
werden. Nach der Deinstallation verbleiben jedoch einige Ordner, die vor
einer Neuinstallation manuell gelöscht werden sollten:-   Der SchILD-NRW 3 Programmordner `C:\Programme (x86)\SchILD3.0` oder
    `C:\Program Files (x86)\SchILD3.0`
-   Der SVWS-Server Ordner `C:\Programme\SVWS-Server` oder
    `C:\Program Files\SVWS-Server`
-   Der SVWS-Server Ordner `C:\ProgramData\SVWS-Server`
-   Den Unterordner Connection-Files im SVWS-Arbeitsverzeichnis unter
    `C:\SVWS-Arbeitsverzeichnis\Connection-Files`Der Ordner `ProgramData` ist als Systemordner standardmäßig unsichtbar.
Sie können entweder den Pfad in die Adressleiste des Datei-Explorers
eintippen, oder in der Ansicht des Datei-Explorers ausgeblendete
Elemente anzeigen lassen. Um die Ordner löschen zu können sind
Admin-Rechte notwendig.

## Testen und melden von Fehlern in SchILD-NRW 3Unter dieser Adresse ist ein Ticketsystem bei GitHUB zugänglich:<https://github.com/SVWS-NRW/Schild3-BetaTest/issues>Um Issues zu kommentieren oder zu erstellen benötigen Sie einen
kostenlosen GitHUB-Account.Bitte beachten Sie, dass Sie zunächst die bestehenden Issues ansehen,
bevor Issues doppelt angelegt werden.Beschreiben Sie den Fehler bitte so genau, wie möglich.