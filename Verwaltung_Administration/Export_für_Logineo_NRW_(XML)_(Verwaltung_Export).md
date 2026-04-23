# Export für Logineo NRW (XML) (Verwaltung Export) Über diese Auswahl lassen sich Daten der Personen der Schule
und Unterrichtsdaten so exportieren, dass sie anschließend in Logineo
NRW importiert werden können.  

## Export aus SchILD

![Schild_Verwaltung_Export_Logineo_XML_01.png](../../graphics/Schild_Verwaltung_Export_Logineo_XML_01.png)

 Bei Aufruf des Exportfensters können einige Auswahlen
vorgenommen werden:-   **Aktuelle Auswahl für Export verwenden**: Hier werden nur Daten der
    Schülerinnen und Schüler im Container, d. h. der aktuellen Auswahl,
    exportiert. Ansonsten werden alle Schülerinnen und Schüler
    exportiert.
-   **Schüler mit Status "Extern" in Export einbeziehen**: Hier werden
    auch Schülerinnen und Schüler anderer Schulen, die an der eigenen
    Schule unterrichtet werden (sog. Externe), exportiert.
-   **Nur Daten für Schüler und Lehrer ausgeben**: Hier werden nur Daten
    der Schülerinnen und Schüler und Lehrerinnen und Lehrer ausgegeben.
    Ist dieser Haken nicht gesetzt, werden z. B. auch Ausbilderinnen und
    Ausbilder an Berufsschulen exportiert.
-   **Nur Personengruppen mit E-Mail-Verteiler exportieren**: Logineo
    kann auch Personengruppen verwalten, ähnlich wie SchILD. Hier kann
    gesteuert werden, ob Personengruppen mit oder ohne eingerichteten
    E-Mail-Verteilern ebenfalls exportiert werden sollen.
-   **Schüler mit Status "Beurlaubt" in Export einbeziehen**: Hier wird
    gesteuert, ob auch Schülerinnen und Schüler mit Status "Beurlaubt"
    in den Export einbezogen werden.Zusätzlich kann das Schuljahr und der Abschnitt für den Export
festgelegt werden.

Die Daten der Exportdatei sind verschlüsselt. In diesem Exportfenster
muss daher das Kennwort eingegeben und wiederholt werden.

Das Passwort wird erneut in Logineo NRW verwendet, um die dort wieder
benötigte Exportdatei zu entschlüsseln.

![Schild_Verwaltung_Export_Logineo_XML_02.png](../../graphics/Schild_Verwaltung_Export_Logineo_XML_02.png)

 Während des Exports kann es unter Umständen zu Fehlern
kommen, beispielsweise auf Grund von nicht oder falsch angelegter
E-Mail-Adressen der Personen der Schule

Das dann erscheinende Fenster kann durch einen Klick auf `Schließen`
geschlossen werden, worauf ausgewählt werden kann, ob der Export
fortgesetzt werden kann. Dies sollte durchgeführt werden. Fehlende
E-Mail-Adressen können auch nachträglich in Logineo nach der allgemeinen
Vorgabe eingetragen werden.Nach dem Export findet sich im angegebenen Exportverzeichnis eine
Zip-Datei. Deren Inhalt, eine XML-Datei, kann nicht geöffnet oder
entpackt werden. Logineo NRW verwendet die Zip-Datei direkt, ohne dass
diese entpackt werden muss.

::: warning

Beachten Sie den Unterschied von *Logineo NRW LMS* und
*Logineo NRW*. Diese Angebote lesen jeweils unterschiedliche Exportdaten
von SchILD-NRW ein.

:::

## Import in Logineo NRW

![Schild_Verwaltung_Export_Logineo_XML_03.png](../../graphics/Schild_Verwaltung_Export_Logineo_XML_03.png)

 Nach dem Login muss in der Sidebar die Schaltfläche
**Administration** ausgewählt werden.  

![Schild_Verwaltung_Export_Logineo_XML_04.png](../../graphics/Schild_Verwaltung_Export_Logineo_XML_04.png)

 Im folgenden Fenster kann durch Klick auf den
Werkzeugkoffer der **Import** ausgewählt werden.  

![Schild_Verwaltung_Export_Logineo_XML_05.png](../../graphics/Schild_Verwaltung_Export_Logineo_XML_05.png)

 Für den Import in Logineo NRW ist ein Administratorzugang
erforderlich.Nun können die vorher *exportierte Zip-Datei* über `Datei auswählen`
ausgewählt und das gewählte **Kennwort** eingegeben werden.  
Es folgt der Importprozess, bei dem durch Logineo NRW auch Lösungen für
auftretende Importkonflikte vorgeschlagen werden.