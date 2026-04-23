# Globale Einstellungen (Verwaltung Einstellungen)

![SchILD_Einstellungen_GlobaleEinstellungen_1_AllgemeinEinstellungen.png](../../graphics/SchILD_Einstellungen_GlobaleEinstellungen_1_AllgemeinEinstellungen.png)

 Unter dieser Punkt finden sich Allgemeine Einstellungen zu
SchILD, die global für alle Nutzer von der Administration eingestellt
werden.

## AllgemeinesHier finden sich gesammelte Einträge, die sofern sie selbsterklärend
sind hier nicht weiter ausgeführt werden. Zu den weiteren Einträgen:-   Die **Automatische Plausibilitätsprüfung von Datumswerten** prüft
    zum Beispiel, ob Abmeldedaten vor Anmeldedaten liegen. In diesem
    Fall würde eine Warnung ausgegeben werden.
-   **Telefonliste automatisch ergänzen** bedeutet, dass eingetragene
    Festnetz- oder Fax-/Mobilnummern automatisch auf dem Karteireiter
    *Schüler ➜ Erz.-Berechtigte ergänzt* bzw. aktualisiert werden.
-   **Straße und Hausnummer bei Schülerdaten getrennt verwalten**
    steuert, ob für die Hausnummer in den *Individualdaten I* ein
    eigenes Feld für diese angeboten wird oder ob die Hausnummer direkt
    im Feld *Straße* angefügt wird.
-   **Externe Schüler in Standardfilter wie Aktive behandeln** steuert,
    ob als *Extern* markierte Schüler standardmäßig im Container wie die
    Schüler enthalten sind oder ob die Externen explizit bei jeder Suche
    mit einbezogen werden müssen.
-   **Statistik Datenbank (Statistik.MDB) benutzerbezogen speichern**:
    Speichert die Datenbank "StatistikDB.mdb" im Verzeichnis *"Eigene
    Dateien ➜ Eigene Dokumente"* des jeweiligen Users. Damit ist es
    möglich, dass verschiedene User gleichzeitig Statistikdaten
    bereitstellen können, die sich dann aber nicht gegenseitig
    beeinflussen. Dies kann z.B. dann sinnvoll sein, wenn ein für die
    UVD.txt und die Sim.txt unterschiedliche Personen zuständig sind.
-   **Gruppenprozesse für Abitur gesperrt**: Sperrt Gruppenprozesse für
    das Abitur. Diese Einstellung kann zum Ende des Abiturprozesses
    sinnvoll sein, wenn alle automatischen Prozesse abgeschlossen sind
    und die Daten nur noch manuell bzw. auf individueller Ebene
    bearbeitet und eingetragen werden.

## Ansicht

![SchILD_Einstellungen_GlobaleEinstellungen_Ansicht.png](../../graphics/SchILD_Einstellungen_GlobaleEinstellungen_Ansicht.png)

 Steuert, wie SchILD aussehen soll.-   **Schuljahr korrekt**: Diese Option führt dazu, dass Schild-NRW ab
    dem 1.2. (Halbjahr) oder dem 1.8. (Schuljahr) prüft, ob sich die
    Datenbank im richtigen Schuljahr befindet. Ist die Versetzung noch
    nicht gemacht, gibt es einen Warnhinweis am oberen Rand des
    Fensters.
-   **Individuelle Gestaltung der Schüler-Übersichtstabelle
    ermöglichen**: Wenn im Schülernamenskasten zusätzlich zu den
    standardmäßigen Spalten "Name" (mit Vorname) und "Klasse" auch noch
    andere (wie z.B. Jahrgang oder Klassenlehrer) angezeigt werden
    sollen, wird hier ein Häkchen gesetzt. Nach einem Neustart von
    SchILD kann man mit einem Rechtsklick in den Namenskasten mit der
    Option "**Sichtbare Spalten auswählen**" aus der Liste die
    gewünschten Felder auswählen kann. Gegebenenfalls muss man bei
    mehreren Spalten deren Breite anpassen. Wenn bei einer senkrechter
    Trennlinie vor den Spaltenüberschriften ein Doppelpfeil erscheint,
    kann man bei gedrückter linker Maustaste die Trennlinien nach Bedarf
    verschoben werden.
-   **Fachbezogenes Bemerkungsfeld zeigen**: Blendet das Datenfeld unter
    Akt. Halbjahr in den Leistungsdaten der Fächer im Schülerdatensatz
    ein. Hier können Texte und Bemerkungen zu jedem einzelnen Fach in
    einem Memofeld verwaltet werden. Dieses Feld wird häufig für
    Textzeugnisse genutzt.<!-- -->-   Diverse **Karteireiter**: Hier lassen sich Karteireiter ein- und
    ausblenden, etwa, wenn die Anschlusslebenswege und
    Orientierungsmaßnahmen der entlassenen Schüler nicht unter "Kein
    Abschluss ohne Anschluss" über SchILD erfasst werden sollen.
-   **Quartalsnoten zeigen** erzeugt in den Leistungsdaten im *Akt.
    Abschnitt* eine weitere Spalte, in die Quartalsnoten eingetragen
    werden können.  

## Sonstige-   **Fotos skalieren auf** legt fest, auf wie viele Pixel die
    eingelesenen Fotos umgewandelt werden sollen. Bitte beachten Sie,
    dass eine hohe Pixelzahl die Größe der Datenbank erheblich
    beeinflusst.
-   **Vorwahl für die Telefonanlage**: Schild-NRW unterstützt die
    Funktionen von MS Windows für Telefonanlagen. Dadurch kann mit der
    rechten Maustaste eine Telefonnummer direkt zur Anlage gesendet
    werden, wenn dies unterstützt wird. An dieser Stelle wird eine
    eventuell erforderliche Vorwahl eingegeben.
-   **Beginn Nummernbereich für Ausweisnummern**: Hier wird eingestellt,
    mit welcher ID die Nummerierung der Schülerausweise beginnt.<!-- -->-   **Sicherungsverzeichnis** legt das Verzeichnis fest, in das über
    *Datenbank ➜ Datenbank sichern* die Datenbankdateien gelegt werden.
    Hier im Beispiel wurde im Ordner des *SVWS-Arbeitsverzeichnises der
    Ordner "Sicherungen"* gewählt. Um Sicherungen einzulesen muss der
    Windows-Nutzer Zugriff auf dieses Verzeichnis haben.

## WiedervorlageHier lässt sich steuern, ob die Wiedervorlage beim Programmstart für
alle Nutzer prüft, ob den Nutzer betreffende Wiedervorlagen anliegen.Stellen Sie ebenfalls gewünschte Verfallszeiten für erledigte und
überfällige Einträge ein.

## KennwortregelnHier lassen sich Regeln für von Nutzern vergebene Kennwörter festlegen.
Achten Sie auf zeitgemäße Sicherheitsstandards.-   **Minimale Länge** gibt die minimale Länge des Passworts in Zeichen
    an.
-   **Komplexität** gibt an, aus was für Zeichentypen das Passwort
    bestehen muss. Komplexität "2" bedeutet, dass Groß- und
    Kleinbuchstaben enthalten sein müssen, Komplexität "4" bedeutet,
    dass Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen angegeben
    sein müssen. Wird ein Passwort vergeben, das der Komplexität nicht
    entspricht, wird bei der Passwortänderung ein Fehler ausgegeben.