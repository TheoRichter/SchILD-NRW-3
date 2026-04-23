# Unterrichts-Daten (als Excel-Daten) (Verwaltung Import)

## Import

![SchILD_Import_Unterrichtsdaten_1.png](../../graphics/SchILD_Import_Unterrichtsdaten_1.png)

 Über *"Verwaltung ➜ Import ➜ Unterrichts-Daten (als
Excel-Daten)"* können Sie Unterrichts- bzw. Leistungsdaten über eine
Excelliste importieren.

Diese Datei kann auch mit anderen Tabellenkalkulationsprogrammen wie
Open Office Calc erstellt werden.Wählen Sie zuerst ihre Datei. Sofern sie mehrere Tabellen enthält, kann
noch zwischen den unterschiedlichen Tabellen ausgewählt werden.Sie bekommen eine Vorschau der Excel-Datei angezeigt.Klicken Sie dann auf **Daten importieren**, um die Datei einzulesen.  
Der Knopf **Beispieldaten ansehen** zeigt eine Beispieldatei an.

## Erläuterungen zum FormatWenn Sie auf den Button **Informationen anzeigen** klicken, bekommen Sie
folgende Erklärung:Hier können Sie Unterrichtsdaten, in Form von Excel-Dateien,
importieren. In einer Datei können sowohl Angaben zu klassenbezogenem
Unterricht als auch zu Kursen stehen. Diese Dateien müssen den folgenden
grundsätzlichen Aufbau haben.-   Spalte 1 **Kursbezeichnung** (optional): Der Eintrag muss in
    Kombination mit Jahr, Abschnitt und Jahrgang eindeutig sein! Das
    Feld kann leer sein, falls es sich um einen Unterricht im
    Klassenverband handelt, dann muss aber Spalte 2 gefüllt sein.
-   Spalte 2 **Klasse** (optional): Die Klassenbezeichnung, muss in der
    Klassen-/Versetzungstabelle vorhanden sein. Folgende Kombinationen
    mit der Kursbezeichnung sind möglich:
    -   Kursbezeichnung nicht leer, Klasse leer: In diesem Fall wird nur
        ein Kurs in der Kursverwaltung angelegt, es erfolgt keine
        Zuteilung von Unterricht an die Schüler.
    -   Kursbezeichnung nicht leer, Klasse nicht leer: In der
        Kursverwaltung wird ein Kurs angelegt, dieser wird allen
        Schülern der Klasse (als Kursunterricht) zugeteilt
    -   Kursbezeichnung leer, Klasse nicht leer: Es wird kein Kurs in
        der Kursverwaltung angelegt, der Unterricht wird ohne
        Kurszuweisung allen Schülern der
    -   Klasse zugeordnet (Unterricht im Klassenverband)
-   Spalte 3 *Schuljahr*
-   Spalte 4 *Halbjahr* bzw. *Quartal*
-   Spalte 5 *Jahrgang* (optional): Die Jahrgangsbezeichnung muss der
    Bezeichnung in SchILD entsprechen. Falls der Eintrag leer ist, liegt
    ein jahrgangsübergreifender Kurs vor. Bei Klassenunterricht (Spalte
    2 nicht leer) wird die Angabe ignoriert (ebenso, wenn Spalte 1 leer
    ist).
-   Spalte 6 *Fach*: Die Fachbezeichnung, muss in der Fächertabelle
    vorhanden sein.
-   Spalte 7 *Kursart* (optional): Die allgemeine Kursart muss in der
    Tabelle der *allg. Kursarten* in SchILD vorhanden sein.
-   Spalte 8 *Wochenstunden*: Gesamt-Wochenstunden, so wie sie bei den
    Schüler-Leistungsdaten eingetragen werden.
-   Spalte 9 *Wochenstunden Kursleiter*: Anz. Wochenstunden, die vom
    Kursleiter gehalten werden, falls leer, wird Gesamt-Wochenstd.
    (Spalte 8) angenommen Wird ignoriert, wenn Kursbezeichnung
    (Spalte 1) leer ist. Dann liegt Unterricht im Klassenverband vor,
    bei dem die "Hauptlehrkraft" die gesamten Wochenstunden bestreitet.
-   Spalte 10 *Lehrer*: Kursleiter bzw. Fachlehrer (als schulinternes
    Kürzel)<!-- -->-   Spalte 11 *Epochalunterricht*: Als "J" oder "N" (wenn leer, wird "N"
    gesetzt)
-   Spalte 12 *Schulnummer*: Falls ein Kurs im Rahmen einer Kooperation
    an einer anderen Schule gegeben wird, kann hier die Schulnr dieser
    Schule übergeben werden. Wird nur bei Kursunterricht (Spalte 1 nicht
    leer) berücksichtigt.
-   Spalte 13 *Wochenstunden Zusatzkraft*: Die Wochenstunden einer
    Zusatzkraft, wird bei Klassenunterricht (Spalte 2 nicht leer)
    importiert.
-   Spalte 14 *Zusatzkraft (als schulinternes Kürzel)*
-   Spalte 15, 16 usw. *Wochenstunden und Kürzel von weiteren
    Zusatzkräften*: Falls die Kursbezeichnung (Spalte 1) nicht leer ist,
    können hier im Wechsel beliebig viele Wochenstunden und Kürzel von
    weiteren Zusatzkräften eingegeben werden. Ist die Kursbezeichnung
    leer, so werden diese Angaben ignoriert.  

## Beispiele

![SchILD_Import_Unterrichtsdaten_2_Beispiel.png](../../graphics/SchILD_Import_Unterrichtsdaten_2_Beispiel.png)

  
In der Exceltabelle werden folgende fünf Unterrichte als Beispiel
aufgelistet:Beispiel 1: 2 Std. Sport als Klassenunterricht in Klasse 06A im 2. Hj.
2022/23 bei Lehrer "BO", kein Epochenunterricht`| 06A | 2006 | 2 |   | SP | PUT | 2 |   | BO | N`Beispiel 2: 2 Std. Sport als Klassenunterricht in Klasse 06B im 2.Hj.
2022/23 bei Lehrer "BO", Lehrer "ALD" nimmt 1 Std. als "team-teacher"
teil.`| 06B | 2006 | 2 |   | SP | PUT | 2 |   | Bo | N |   | 1 | ALD`Beispiel 3: 2-stündiger Sportkurs "Volleyball" in Jahrgang 07 im 2. Hj.
2022/23, 1 Std. bei Lehrer "BO", 1 Std. bei Lehrer "ALD", wird nur als
Kurs eingerichtet (d.h. keine Zuweisungen bei Schülern)`Volleyball |   | 2006 | 2 | 07 | SP | AGGT | 2 | 1 | BO | N |   | 1 | ALD`Beispiel 4: 4-stündiger Sportkurs "Sport-1-07a" in Jahrgang 07 im 2. Hj.
2022/23, 3 Std. bei Lehrer "BO", 1 Std. bei Lehrer "ALD", 1 Std. bei
Lehrer "MÜ", alle Schüler der Klasse 07A nehmen teil (Hinweis: Wenn
Teile des Unterrichtes von mehreren Lehrern gleichzeitig betreut werden,
kann die Summe der Lehrerstunden größer als die des Kurses sein.)`Sport-1-07a | 07A | 2006 | 2 | 07 | SP | AGGT | 4 | 3 | BO | N |   | 1 | ALD | 1 | MÜ`Beispiel 5: 2-stündiger Sportkurs "Hockey" in Jahrgang 08 im 2. Hj.
2022/23, wird an Partnerschule mit Schulnr. 123456 gegeben`Hockey |   | 2006 | 2 | 08 | SP | AGGT | 2 |   |   | N | 123456`