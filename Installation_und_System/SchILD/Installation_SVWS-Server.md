# Installation SVWS-Server

::: warning

Die Versionen des SVWS-Servers und von SchILD-NRW 3
müssen zusammenpassen. Kontrollieren Sie vor Beginn der Installation,
dass Sie die korrekten Installer vorliegen haben.

:::

Der folgenden Artikel beinhaltet Hinweise zur Installation des

SVWS-Servers.

## Übersicht über die Programmbausteine

![Hinweise-it-dienstleister.png](../../graphics/Hinweise-it-dienstleister.png)

 Der SVWS-Server fungiert als Logikserver, welcher den
Zugriff auf eine MariaDB-Datenbank regelt.Der SVWS-Client stellt die Technologie zur Anzeige der Datenbankdaten in
einem Browserfenster zur Verfügung. Der SVWS-Client ist Bestandteil des
SVWS-Servers und kann nur auf die logischen Aufgaben des SVWS-Servers
zurückgreifen. Der SVWS-Server arbeitet ausschließlich mit einer MariaDB
zusammen. Für den Zugriff auf die MariaDB ist kein ODBC-Treiber
notwendig.

Das eine Installationsprogramm installiert den SVWS-Server mit der
MariaDB, dem SVWS-Client und benötigten Komponenten. Während der
Installation des SVWS-Clients können bestehende SchILD-NRW 2 Datenbanken
(Access MDB, MariaDB, MySQL, Microsoft SQL-Server) in die neue MariaDB
migriert werden. Zudem wird eine Zertifikatsdatei erzeugt, welche im
Zertifikatsspeicher des Betriebssystems hinterlegt werden muss.

## EinzelplatzinstallationIm Folgenden wird die Installation des SVWS-Servers auf einem
Einzelplatzrechner vorgestellt. In produktiven Schulumgebungen wird
diese Form der Installation eher selten vorkommen.Insbesondere in der Entwicklungsphase bietet diese Installation eine
einfache und schnelle Möglichkeit, das Programm zu testen. Die neuste
Version kann unter GitHub heruntergeladen werden:
<https://github.com/SVWS-NRW/SVWS-Server/releases>. Für die Installation
des SVWS-Servers sind Administrationsrechte am Arbeitsplatz-PC
notwendig.

### Installationsanleitungen als Video-TutorialsDerzeit werden im Video Standardordner genannt, die nicht mehr dem
aktuellen Stand des Installers entsprechen. Ebenso hat sich der
Dateiname der Zugangs-Datei verändert. Die Informationen zum
grundsätzlichen Vorgehen sind davon abgesehen korrekt! Das Video wird
zum Abschluss der Beta-Entwicklungsphase des Servers und von SchILD-NRW3
auf den aktuellen Stand gebracht.

### Was wird installiert?Installiert werden1.  Ein Maria-Datenbankmanagementsystem
    -   Das Datenbankmanagementsystem steuert den Multiuserzugriff auf
        die Datenbanken
    -   Das Programm wird im Ordner `C:\Programme\SVWS-Server\db`
        gespeichert
    -   Die Datenbankdateien werden im Verzeichnis
        `C:\ProgramData\SVWS-Server\data` gespeichert
    -   Die Kennwörter für den Zugriff auf die Datenbanken werden in der
        Datei `C:\ProgramData\SVWS-Server\res\svwsconfig.json`
        gespeichert
2.  Eine Java-Laufzeitumgebung
    -   Dieses Programm ist notwendig, um den SVWS-Server auszuführen.
    -   Die Laufzeitumgebung wird im Ordner
        `C:\Programme\SVWS-Server\java` gespeichert
3.  Der SVWS-Server
    -   Der SVWS-Server fungiert als Dienstprogramm, welches logische
        Aufgaben übernimmt und den Zugriff auf die MariaDB-Datenbank
        regelt.
    -   Das Programm wird im Ordner
        `C:\Programme\SVWS-Server\svws-server` gespeichert.
    -   Log-Dateien werden im Ordner `C:\ProgramData\SVWS-Server\logs`
        gespeichert. Die Log-Dateien enthalten Informationen zu Fehlern
        bei der Ein- und Ausgabe des SVWS-Servers.
4.  Der SVWS-Client
    -   Der SVWS-Cient ermöglicht den browserbasierten Zugriff auf die
        Datenbanken und greift auf logische Aufgaben des SVWS-Servers
        zurück. Der SVWS-Client übernimmt die Aufgaben der Programme
        LuPO und Kurs42.
    -   Der Client wird im Ordner `C:\ProgramData\SVWS-Server\client`
        installiert.
5.  Eine SSL-Zertifikatsdatei
    -   Das Zertifikat muss später im System angemeldet werden, damit
        der SVWS-Client im Browser ohne Sicherheitswarnung gestartet
        werden kann.
    -   Die SSL-Zertifikatsdatei wird im Ordner
        `C:\Users\`USERNAME`\Dokumente\SVWS.cer` gespeichert.

### Installation des SVWS-Servers

![Installation_SVWS-Server_Ziel-Ordner.png](../../graphics/Installation_SVWS-Server_Ziel-Ordner.png)

Führen Sie die Datei win64-installer-version.exe aus.Es folgt ein Hinweisfenster der Benutzerkontensteuerung, dass durch die
Installation Änderungen am Gerät vorgenommen werden. Klicken Sie hier
auf die Schaltfläche `Weiter`.Im folgenden Fenster akzeptieren Sie die Lizenzvereinbarung für die
Installation des SVWS-Servers.Anschließend können Sie die Installationspfade für das Datenbanksystem
und das Programmverzeichnis auswählen. Für die lokale
Einzelplatzinstallation empfehlen wir dringend, die vorgeschlagenen
Pfade nicht zu ändern.

![Installation_SVWS-Server_Konfiguration.png](../../graphics/Installation_SVWS-Server_Konfiguration.png)

Es folgen die Konfigurationsangaben der SVWS-Server-Installation.
Aktivieren Sie hier das Auswahlfeld zu "Migriere aus einem Schild v2.x -
Schema", damit während des Installationsprozesses die Daten einer
SchILD-NRW 2 - Datenbank in die MariaDB migriert werden. Alle anderen
Auswahlfelder sollten Sie so belassen.Wenn die MariaDB installiert wird, wird automatisch ein Benutzer mit dem
Namen "root" erzeugt. Dieser Benutzer hat als Super-Admin volle
Zugriffsrechte auf alle Datenbanken, kann diese erzeugen und löschen.
Legen Sie das root-Kennwort für diesen Benutzer fest und notieren Sie
sich das Kennwort.Der Installer schlägt Ihnen bereits ein sehr sicheres Kennwort vor,
welches von einem Zufallsgenerator erzeugt wurde. Verwahren Sie dieses
Kennwort an einem sichern Ort.

::: warning

**Sollte das Kennwort verloren gehen, ist kein
Master-Zugriff mehr auf die Datenbank möglich! Der Zugriff kann in
diesem Fall nicht wiederhergestellt werden!**Jede Person mit Kenntnis des root-Kennworts kann sich als Super-Admin an
allen Datenbanken anmelden.

:::

Sie können zudem den Port für den Zugriff auf die MariaDB eingeben. Der

Port ergänzt eine IP-Adresse für den gezielten Zugriff der Anwendungen
auf die MariaDB (z.B. `https://localhost:3306` oder
`https://192.168.1.1:3306`). Als Standard ist hier der Port 3306 eingetragen. Sie müssen die
Portnummer nur dann ändern, wenn der Port 3306 bereits durch eine andere
Anwendung belegt wird. Dies kann z.B. dann der Fall sein, wenn Sie ein
anderes datenbankbasiertes Programm oder einen anderen
datenbankbasierten Dienst installiert haben. Erhöhen Sie in einem
solchen Fall die Portnummer z.B. auf 3307.Vergeben Sie einen Namen für das Datenbank-Schema. Bei dem
Datenbank-Schema handelt es sich um eine leere Datenbank, in der bereits
alle Notwendigen Tabellen angelegt wurden. Im Gegensatz zu SchILD-NRW 2
gibt es keine Standarddatenbank. Jede Datenbank in SchILD-NRW 3 muss
einen hier zu definierenden Namen erhalten.Vergeben Sie zudem einen Namen und ein Passwort für einen
Datenbank-Benutzer. Der Installer schlägt Ihnen bereits ein sehr
sicheres Kennwort vor, welches von einem Zufallsgenerator erzeugt wurde.
Der hier definierte Datenbank-Benutzer hat Admin-Rechte auf die hier
definierte Datenbank. Diesen Benutzeraccount nutzt SchILD-NRW 3 für den
Zugriff auf die Datenbank. Bei dem Benutzernamen muss es sich somit
nicht um den Namen einer realen Person handeln. Vielmehr wird über
diesen Benutzernamen der isolierte Zugriff auf die Datenbank (das
Schema) geregelt. Im Unterschied zum root-Benutzer hat dieser Benutzer
lediglich Zugriffsrechte auf die hier eingerichtete Datenbank (Schema),
was die Sicherheit erhöht. Notieren Sie sich auch diesen Benutzernamen
mit Passwort. Der root-Benutzer hat später auch die Möglichkeit, das
Kennwort dieses Benutzers zurückzusetzen, oder einen anderen Benutzer
mit Zugriffsrechten auf das Schema anzulegen. Insofern sind Benutzername
und Kennwort nicht existentiell wichtig.Klicken Sie auf die Schaltfläche `Weiter`.

![Installation_SVWS-Server_Zertifikat.png](../../graphics/Installation_SVWS-Server_Zertifikat.png)

Im folgenden Fenster geben Sie den Zertifikatsnamen, den Schulnamen und
den Schulort für die Zertifikatsdatei ein. Die Zertifikatsdatei wird
während des Installationsprozesses erzeugt und muss in einem späteren
Schritt im Betriebssystem installiert werden.

![Installation_SVWS-Server_Migration.png](../../graphics/Installation_SVWS-Server_Migration.png)

Wenn Sie das Auswahlfeld "Migriere aus einem Schild v2.x - Schema"
aktiviert hatten, folgt nun ein Fenster, in welchem Sie Angaben zur
Migration einer SchILD-NRW 2 - Datenbank vornehmen müssen. Wählen Sie
hier das Datenbankformat der SchILD-NRW 2-Datenbank aus (Access MDB,
MariaDB, MySQL, Microsoft SQL-Server).Bei der Migration einer Access MDB müssen Sie den Dateipfad zur Access
MDB angeben (z.B. schild200n.mdb). Bei der Migration einer MariaDB,
MySQL- oder Microsoft SQL-Server-Datenbank müssen Sie einen
Benutzernamen mit vollen Zugriffsrechten auf die Datenbank angeben.
Zudem das zugehörige Passwort, den Ort der Datenbank (z.B. localhost
oder IP 192.168.1.x) und den Namen des Schemas der Datenbank.

![Installation_SVWS-Server_Installationsprozess.png](../../graphics/Installation_SVWS-Server_Installationsprozess.png)

Im Anschluss können Sie die Installation starten. Während des
Installationsprozesses wird die MariaDB installiert, der SVWS-Server
installiert, die benötigte Java-Bibliothek installiert, die
Konfigurationsdatei mit den Zugangsdaten auf die MariaDB gespeichert,
die Zertifikatsdatei gespeichert und der SVWS-Server als Dienst
gestartet. Im Anschluss wird noch die SchILD-NRW 2-Datenbank in das
SchILD-NRW 3-Schema migrirert.Ein Anzeigefenster informiert Sie über den Fortschritt der Installation.
Insbesondere die Migration der Datenbank kann einige Zeit in Anspruch
nehmen.

### Installation des SSL-Zertifikats

![Installation_SVWS-Server_Zertifikat_installieren.png](../../graphics/Installation_SVWS-Server_Zertifikat_installieren.png)

Damit der SVWS-Client ohne störenden Sicherheitshinweis im Browser
gestartet werden kann, muss das SSL-Zertifikat, welches während des
Installationsprozesses des SVWS-Servers erzeugt und gespeichert wurde,
im Zertifikatsspeicher des Betriebssystems abgespeichert werden.Windows hält hierzu einen einfachen Zertifikatimport-Assistenten bereit,
welcher das SSL-Zertifikat in den Zertifikatsspeicher kopiert und am
System anmeldet.Navigieren Sie zum Windows-Systemordner "Dokumente". Dort finden Sie
eine Zertifikatsdatei mit dem Namen SVWS.cer. Führen Sie mit Hilfe eines
Doppelklicks den Zertifikatimport-Assistenten aus.Alternativ können Sie mit einem Rechtsklick den Kontextmenüeintrag
"Zertifikat installieren" wählen. Es öffnet sich ein Informationsfenster
mit Hinweisen zum Zertifikat. Klicken Sie auf die Schaltfläche
`Zertifikat installieren`.Aktivieren Sie im Feld Speicherort das Auswahlfeld "Lokaler Computer".
Für die Ablage auf dem lokalen Computer sind Administrationsrechte
notwendig. Klicken Sie dann auf die Schaltfläche `Weiter`. Aktivieren
Sie im folgenden Fenster "Alle Zertifikate in folgendem Speicher
speichern". Klicken Sie auf die Schaltfläche `Durchsuchen...`. Wählen
Sie dann den Ordner "Vertrauenswürdige Stammzertifizierungsstellen".
Bestätigen Sie die Auswahl mit der Schaltfläche `OK` und im
Ursprungsfenster mit der Schaltfläche `Weiter`.Schließen Sie den Prozess mit Klick auf die Schaltfläche
`Fertig stellen` ab. Ein Hinweisfenster informiert Sie über den
erfolgreichen Import des Zertifikats.

### Start des SVWS-ClientsZum Start des SVWS-Clients öffnen Sie einen Browser. Tippen Sie dann in
die Adresszeile die URL zum SVWS-Client ein (`https://localhost` oder
`https://Computername`).Für den Zugriff auf den SVWS-Client müssen Sie sich als
SchILD-NRW3-Benutzer anmelden. Verwenden Sie hier die gleichen
Zugangsdaten, die sie auch beim Start von SchILD-NRW2 verwendet haben.Der SVWS-Client greifet über den SVWS-Server auf die MariaDB zu. Der
SVWS-Client enthält die Funktionen von LuPO und Kurs42. Manche
Funktionen von SchILD-NRW3 wurden noch nicht implementiert.In den kommenden Monaten werden die Fähigkeiten des SVWS-Clients stetig
ausgebaut, so dass dieser später die gleichen Funktionalitäten enthalten
wird, wie SchILD-NRW3.

### Update der Programme

![SVWS-Server_Installation_Update.png](../../graphics/SVWS-Server_Installation_Update.png)

Ein Update des SVWS-Servers erfolgt, indem man den Installer aufruft. Im
Konfigurationsfenster wählen Sie nur diejenigen Komponenten aus, welche
aktualisiert werden müssen. Die Häkchen `Erstelle ein neues Schema` und
`Migriere aus einem Schild v2.x - Schema` werden nicht gesetzt. In der
Folge werden nur die Programmdateien aktualisiert.  

### Deinstallieren der ProgrammeInsbesondere in der Testphase kann es vorkommen, dass aufgrund von
Änderungen der Datenbankstruktur eine Neuinstallation des SVWS-Servers
notwendig wird, damit bei einer Neuinstallation die Migration einer
Testdatenbank in die neue Tabellenstruktur erfolgen kann. In einem
solchen Fall muss nur der SVWS-Server neu installiert werden.In der Testphase stellen wir eine Batch-Datei zur Verfügung, welche eine
vollständige Deinstallation des SVWS-Servers und des Programms
SchILD-NRW3 bei einer Client-Version gewährleistet. Bitte laden Sie
diese

DEADLINK: Batch-Datei - Medium:Delete_SVWS-Server_and_SchILD-NRW_3.zip.md

herunter und entpacken diese. Klicken Sie mit der RECHTEN-Maustaste auf
die Datei "Delete SVWS-Server and SchILD-NRW 3.bat" und wählen "Als
Administrator ausführen".

Die Deinstallation durch die Batch-Datei funktioniert nur, wenn die
Standardpfade für die Installation belassen wurden. Der Batch-Prozess
beendet daraufhin den im Hintergrund laufenden Dienst
SVWS-Server-Service und deinstalliert die MariaDB und alle
Programmdateien.Sofern bei der folgenden Installation des neuen SVWS-Servers die
gleichen Konfigurationsdaten verwendet werden, kann SchILD-NRW 3 ohne
Änderungen auf die neu migrierte Datenbank zugreifen.Der SVWS-Server kann ebenfalls über die Windows Systemeinstellung
`Programme hinzufügen oder entfernen` deinstalliert werden. Nach der
Deinstallation verbleiben jedoch einige Ordner, die vor einer
Neuinstallation manuell gelöscht werden sollten:-   Der SVWS-Server Ordner `C:\Programme\SVWS-Server` oder
    `C:\Program Files\SVWS-Server`
-   Der SVWS-Server Ordner `C:\ProgramData\SVWS-Server`Der Ordner `ProgramData` ist als Systemordner standardmäßig unsichtbar.
Sie können entweder den Pfad in die Adressleiste des Datei-Explorers
eintippen, oder in der Ansicht des Datei-Explorers ausgeblendete
Elemente anzeigen lassen. Um die Ordner löschen zu können sind
Admin-Rechte notwendig.

## Testen und melden von Fehlern im SVWS-Server und SVWS-Client

Unter dieser Adresse ist ein Ticketsystem bei GitHUB zugänglich:

<https://github.com/SVWS-NRW/SVWS-Server/issues>

Um Issues zu kommentieren oder zu erstellen benötigen Sie einen
kostenlosen GitHUB-Account.Bitte beachten Sie, dass Sie zunächst die bestehenden Issues ansehen,
bevor Issues doppelt angelegt werden.Beschreiben Sie den Fehler bitte so genau, wie möglich.