# FAQ

## Datenbank und Installation

### Was ist ein Datenbank-Schema?Unter Datenbank-Schema versteht man eine vorstrukturierte, leere
Datenbank. In der leeren Datenbank sind also schon alle Tabellen und
deren Abhängigkeiten angelegt, jedoch noch keine Daten enthalten.In einer MariaDB können mehrere Schemata liegen, die dann einer
einzelnen SVWS-Datenbank einer Schule entsprechen, auf die dann mit dem
SchILD-Client zugegriffen werden kann.In großen Systemen, etwa kommunalen Rechenzentren oder kommerziellen
Rechenzentren, könnten noch weitere Schemata in der MariaDB laufen, die
dann anderen Schulen gehören oder gar nichts mit Schulen zu tun haben,
etwa die kommunale Führerscheinstelle oder die Datenbank eines
Unternehmens.

### Was ist der Unterschied zwischen einem root-, Datenbank und SchILD-NRW 3-Benutzer?-   Ein *Root-Benutzer* ist ein Super-Administrator-Zugang auf den
    MariaDB-Server. Er hat Zugriffsrechte auf alle Datenbanken, kann
    diese anlegen und löschen. Er kann beliebige weitere
    Datenbank-Benutzer anlegen. Geht das Root-Kennwort für die MariaDB
    verloren, kann dieses Passwort nicht mehr angezeigt oder verändert
    werden und neue Schemas können nicht mehr angelegt werden.
-   Ein *Datenbank-Benutzer* oder auch *Schema-Benutzer* ist ein
    Administrator-Zugang mit vollen Zugriffsrechten auf ein Schema, d.h.
    eine einzelne "Datenbank". Ein Datenbank-Benutzer kann auch mit
    gleichem Namen und Passwort für mehrere Schemata/Datenbanken gelten.
    Er kann diese Datenbank nicht löschen, aber jede Veränderung
    innerhalb des Schemas/der Datenbank vornehmen. SchILD-NRW 3 nutzt
    die Zugangsdaten dieses Benutzers, um auf die Datenbank zuzugreifen.
    In den Beispielen dieses Wikis wird in der Regel der Name
    *svwsadmin* für diesen Benutzer verwendet.
-   Ein *SchILD-NRW-3-Benutzer* ist (meistens) eine reale Person mit
    eingeschränkten Zugriffsrechten auf die Datenbank über SchILD-NRW
    oder das Webinterface. SchILD-NRW regelt diese Rechte in der
    Benutzerkontensteuerung des Clients. Dies sind die Benutzer, über
    die mit SchILD-NRW gearbeitet wird. Einem solchen Benutzer können
    SchILD-NRW-Administrationsrechte zugewiesen werden, so dass über die
    Benutzeroberfläche von SchILD-NRW bereitgestellte
    Datenbankoperationen ausgeführt werden können.

### Wieso wird in so viele unterschiedliche Ordner installiert?Um die Sicherheit des Betriebssystems zu gewährleisten, stattet Windows
die unterschiedlichen Ordner mit unterschiedlichen Rechten aus. Der
SVWS-Server und SchILD-NRW 3 fügen sich hier in diesem Sinne korrekt
ein.Für die Benutzung des SVWS-Servers und SchILD-NRW werden vier
unterschiedliche Verzeichnisse verwendet.-   Das Verzeichnis, in dem der SVWS-Server *installiert* wird. In
    diesem Verzeichnis sollen Nutzer nichts ablegen können und keinen
    Zugriff darauf haben.
-   Das Verzeichnis, in dem der SVWS-Server die Datenbanken ablegt. In
    diesem Verzeichnis hat nur der Server Zugriff, Nutzer sollen hier
    nichts lesen oder verändern können.
-   Das Verzeichnis, in dem das reine Programm SchILD-NRW3 installiert
    wird. Nutzer haben hier keine Schreibrechte und es werden hier keine
    Arbeitsdaten erstellt.
-   Das Verzeichnis, in dem die SchILD-Daten liegen, zum Beispiel die
    Reports oder die Export- und Importdateien. Hier haben Nutzer für
    die tägliche Arbeit Zugriff.