# Datenexport im xlsx- oder txt-Format (Tutorial)Aus SchILD können viele Daten exportiert werden, so dass diese in Excel
oder als Textdatei von weiteren Programmen verarbeitet werden können.Es lässt sich auch eine *Feldzuordnungsdatei* festlegen, um direkt
Formate zu erzeugen, die von anderen Programmen erwartet werden.

### Videotutorial zum Datenexport im xlsx- oder txt-Format<div style="text-align:left"><youtube>NNczZmza6J4</youtube></div>  

### Export von Daten in Excel oder Textdateien (.csv)

![SchILD_Verwaltung_Export_1_Verlauf.png](../../graphics/SchILD_Verwaltung_Export_1_Verlauf.png)

 

![SchILD_Verwaltung_Export_2_Pfeile.png](../../graphics/SchILD_Verwaltung_Export_2_Pfeile.png)

 Der Weg des Exports für
Tabellenkalkulationsprogramme wie MS Excel oder Open Office Calc wird
wie im Screenshot gezeigt durchgeführt.Der Export verläuft, sofern keine besonderen Ziele verfolgt werden, nach
dieser Liste:1.  **Auswahl der Schüler**: Soll nicht der komplette Schülerbestand
    exportiert werden, wird zuerst im Reiter *Schüler* auf die
    gewünschten Personen gefiltert.
2.  **Öffnen des Export-Werkzeugs**: Über ''Verwaltung ➜ Export ➜ Als
    Excel-/Textdateien.
3.  **Datenart wählen**: Es stehen die Datenarten *Schüler*, *Lehrer*,
    *Erziehungsberechtigte*, *Telefonische Ansprechpartner* und
    *Allgemeine Adressen* zur Verfügung.
4.  **Wahl der gewünschten Felder**: Innerhalb der Datenart stehen nun
    alle Datenfelder zur Auswahl. Diese können mit einem Doppelklick
    oder dem kleinen Pfeilsymbol oben rechts des Auswahlfensters in
    Auswahl geschoben werden. Dort können sie auf gleiche Weise wieder
    entfernt werden. Die Reihenfolge der ausgewählten Felder kann mit
    den roten Pfeilen unterhalb des Feldes verändert werden. "Von oben
    nach unten" wird dann in der Datei zu "von links nach rechts". Die
    Datenart *Schüler* ist noch besonders, da hier zusätzlich der Reiter
    *Zeugnisdaten* zur Verfügung steht. Mehr dazu weiter unten.
5.  **Ausgabedatei**: Hier werden Speicherort und Name der Ausgabedatei
    gewählt. Soll die Datei direkt in Excel geöffnet werden, ist im
    Dropdown-Menü die Endung *.xlsx* zu wählen, ansonsten *.txt*. Über
    *\*.\** lassen sich beliebige Dateiendungen vergeben (z.B.
    "Export.csv", "daten_2023.dat" usw.).
6.  **Export starten**: Startet den Export.  

#### Zeugnisdaten

![SchILD_Verwaltung_Export_3_Zeugnisdaten.png](../../graphics/SchILD_Verwaltung_Export_3_Zeugnisdaten.png)

 Sollen mit der Leistung verbundene Daten exportiert werden,
ist in der Datenart *Schüler* der Reiter *Zeugnisdaten* anzuwählen.Dort wird der Haken bei **Zeugnisdaten exportieren** gesetzt.Weiterhin ist das passende **Halbjahr** auszuwählen. Somit lassen sich
auch Leistungsdaten für vergangene Lernabschnitte exportieren.Im Feld *Fächer* lässt sich konfigurieren, in welchem Format Noten
ausgegeben werden, also als Zahlen, Klartext oder auch als Klartext mit
Tendenz. Für die gymnasiale Oberstufe können Noten als Punkte exportiert
werden.

Die Fächer sind als Standardeinstellung auf die beschränkt, die als
Zeugnisfach gekennzeichnet sind. Über den Haken oben können auch alle
Fächer zur Wahl gestellt werden.In den folgenden drei Feldern sind nun neben den konkreten ausgegebenen
*Fächern* auch weitere Informationen rund um Leistungsdaten zugänglich,
etwa die zu einer Note gehörende *Kursart*.  

#### Export-Optionen

![SchILD_Verwaltung_Export_4_ExportOptionen.png](../../graphics/SchILD_Verwaltung_Export_4_ExportOptionen.png)

-   **Feld-Trennzeichen**: Dieses Zeichen trennt die unterschiedlichen
    Datenfelder. Um lediglich eine Excel-Tabelle oder eine generische
    .csv-Datei zu erstellen, kann das Standard-Semikolon belassen
    werden. Ansonsten kann das Zeichen gewählt werden, das von einem zur
    Weiterverarbeitung bestimmten Programm erwartet wird. Die
    SchILD-Schnittstellendateien zum Beispiel nutzen das Zeichen **\|**.
-   **Begrenzer f. Textfelder**: Felder, die als Daten "Text" enthalten,
    zum Beispiel in Abgrenzung zu Zahlen, sind von diesem Zeichen
    eingeschlossen. Hier kann wieder der Standard belassen werden,
    sollte ein anderes Programm ein anderes Zeichen nutzen, wäre dies
    hier direkt beim Export zu wählen.
-   **Ausgabewert für logisches "Ja"/"Nein"**: Sollen logische Werte
    verarbeitet werden, lässt sich deren Codierung hierüber festlegen.
-   **Ausgabewert für "weiblich"/"männlich"**: Wie oben, nur in Bezug
    auf das Geschlecht.
-   **Datumsformat**: Hier kann das Format für Datumsangaben gewählt
    werden, das für den beabsichtigten Zweck am sinnvollsten ist.
-   **Datum mit Textbegrenzern ausgeben**: Als Standard wird das Datum
    ohne die *Begrenzer für Textfelder* erzeugt. Beispielsweise kann MS
    Excel Datumswerte direkt verarbeiten, andere Programme könnten
    Datumswerte wie andere Felder als Text erwarten, der dann auch in
    die Begrenzer einzufassen wäre.
-   **Kopfzeile ausgeben**: Ist der Haken gesetzt, handelt es sich bei
    der ersten Zeile in der Exportdatei um die Namen der Datenfelder.
    Bei einer Abwahl des Hakens beginnt die Datei mit der ersten
    Datenzeile.  

#### Vorlagen speichern und laden

![SchILD_Verwaltung_Export_5_Export_VorlageSpeichern.png](../../graphics/SchILD_Verwaltung_Export_5_Export_VorlageSpeichern.png)

 Wurde für einen Zweck ein passender Export eingestellt,
können alle diese Einstellungen zur erneuten Verwendung gespeichert und
später neu geladen werden.Klicken Sie hierzu auf **Als Vorlage speichern**.Wie in SchILD üblich kann nun eine neue Zeile mit einem Klick auf das
**+** angelegt und benannt werden. Geben Sie einen sprechenden Namen, im
Screenshot sind einige vielleicht nützliche Beispiele zu sehen.Klicken Sie dann auf **Übernehmen**, um diesen Export wie eingestellt zu
speichern.Laden Sie einen Export bei erneutem Bedarf über **Vorlage laden**.  

#### Feldzuordnungsdatei für SerienbriefdruckEine *Feldzuordnungsdatei* verändert die von SchILD verwendeten
Bezeichnungen in der Kopfzeile der Exportdatei zu vom Benutzer
definierten abweichenden Bezeichnern.Eine solche Zuordnungsdatei muss wie folgt aufgebaut sein:-   Die Datei beginnt zwangsläufig mit dem Text *\[Felderzuordnung\]*
-   Jede für den Export ausgewählte Feldbezeichnung wird durch ein
    "**=**" zu einer anderen Bezeichnung. Also:
    ''FeldbezeichnungSchILD=NeueBezeichnung".Eine Datei, um Vorname, Nachname und Geburtsdatum könnte wie folgt
aussehen:`[Felderzuordnung]`  
`Nachname=SName`  
`Vorname=SVorname`  
`Geburtsdatum=SGebDat`Dabei wäre der von SchILD erzeugte Spaltenname *"Nachname"* nicht
ausgegeben worden, stattdessen stünde *"SName"* in der Serienbriefdatei.

#### Word Seriendruck

![SchILD_Verwaltung_Export_6_Export_WordSerienbrief.png](../../graphics/SchILD_Verwaltung_Export_6_Export_WordSerienbrief.png)

 Eine Exportdatei im txt-Format kann auch genutzt werden, um
einen Serienbriefdruck in MS Word anzustoßen. Dies kann sinnvoll sein,
da Sie Ihre schon als Word vorhandenen Vorlagen von SchILD-NRW 3 aus
nutzen können.Erstellen Sie zuerst ein Worddokument als Vorlage für den Serienbrief.Wählen Sie für einen Serienbriefdruck die Datenart *Schüler*, dann
wählen Sie alle Felder aus, die Sie im Serienbrief verwenden möchten.

Die zum Export gewählten Felder stehen in Word als Seriendruckfelder zur
Verfügung.  Als Exportdatei muss die Dateiendung *.txt* gewählt werden. Wurde dies
getan, lässt sich nun bei **Nach dem Export Word-Seriendruck starten**
der Haken setzen. Ist die Datenart nicht *Schüler* beziehungsweise ist
die Datei keine *.txt*, bleibt diese Option ausgegraut und nicht
anwählbar.Nach einem Klick auf **Export starten** öffnet sich ein Fenster, in dem
eine Worddatei, *.docx* anzuwählen ist. Wählen Sie Ihren Serienbrief an.Es öffnen sich nun *zwei* Worddateien:-   Ihr Worddokument als Vorlage für den Serienbrief
-   Der generierte Serienbrief - wenn in der Vorlage noch keine
    Serienbrieffelder gesetzt wurden, sehen beide Dokumente identisch
    aus und enthalten noch keine dynamischen Informationen. Sind schon
    Serienbrieffelder gesetzt, wird der Serienbrief natürlich schon
    ausgefüllt sein.  

![SchILD_Verwaltung_Export_7_Export_WordSerienbrief_WordSerienbrief.png](../../graphics/SchILD_Verwaltung_Export_7_Export_WordSerienbrief_WordSerienbrief.png)

 In Ihrer Word-Serienbriefvorlage steht nun ein neuer Reiter
zur Verfügung. Wählen Sie **Sendungen** an.Nun können über **Seriendruckfeld einfügen** alle von SchILD
exportierten Datenfelder angewählt und in die Serienbriefvorlage
eingebaut werden.Ist der Serienbrief zufriedenstellend erstellt worden, klicken Sie auf
**Fertig stellen und zusammenführen**, im in einem neuen Worddokument
die Serienbriefe generiert zu bekommen.Bei der Erstellung kann in Word angewählt werden, ob die Briefe direkt
gedruckt, erst in Word geöffnet oder per Email verschickt werden sollen.
Weiterhin lässt sich der Bereich anwählen, in dem die Briefe generiert
werden sollen, also *"Alle", "Den aktuellen Datensatz"* oder einen
*"Bereich von... bis..."*.