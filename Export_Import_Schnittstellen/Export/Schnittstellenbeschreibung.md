# SchnittstellenbeschreibungDer folgende Artikel beschreibt die einzelnen Dateien der Schnittstelle
Schild-NRW und wie diese zum Import vorliegen müssen beziehungsweise wie
sie nach dem Export aussehen.Lesen Sie bitte die Vorbemerkungen.

## Adressen.datDaten aus dem Tabellenblatt "Weitere Adressen".| Spalte | Beschreibung               | Header-Text  | Datentyp | Darf leer sein? | Bemerkung |
|--------|----|--|----------|-----|-----------|
| 1      | Adress-Art                 | Adress-Art   | Text     | J               |           |
| 2      | Name1                      | Name1        | Text     | J               |           |
| 3      | Name2                      | Name2        | Text     | J               |           |
| 4      | Straße                     | Straße       | Text     | J               |           |
| 5      | PLZ                        | PLZ          | Text     | J               |           |
| 6      | Ort                        | Ort          | Text(40) | J               |           |
| 7      | Telefonnr. 1               | Telefonnr. 1 | Text     | J               |           |
| 8      | Telefonnr. 2               | Telefonnr. 2 | Text     | J               |           |
| 9      | Fax Nr.                    | Fax          | Text     | J               |           |
| 10     | E-Mail-Adresse             | E-Mail       | Text     | J               |           |
| 11     | Branche                    | Branche      | Text     | J               |           |
| 12     | Bemerkungen                | Bemerkungen  | Text     | J               |           |
| 13     | SchILD-ID Ansprechpartner  | SchILD-ID    | Text     | J               |           |
| 14     | Externe-ID Ansprechpartner | Externe ID   | Text     | J               |           |Name1 Name2 Straße PLZ Ort Telefonnr. 1 Telefonnr. 2 Fax E-Mail Branche
Bemerkungen SchILD-ID Externe ID  
Ausbildungsbetrieb Herr Peter SchmidtFridolinweg 5 42111 Wuppertal 012345-678p.schmidt@firma.de Metallverarbeitung123 125 }}

## Ansprechpartner.datAnsprechpartner aus dem Tabellenblatt "Weitere Adressen".| Spalte | Beschreibung      | Header-Text       | Datentyp | Darf leer sein? | Bemerkung           |
|--------|-------|-------|----------|-----|---------|
| 1      | Nachname          | Name              | Text     | J               |                     |
| 2      | Vorname           | Vorname           | Text     | J               |                     |
| 3      | Anrede            | Anrede            | Text     | J               | "Herr", "Frau" etc. |
| 4      | akad. Titel       | akad. Titel       | Text     | J               |                     |
| 5      | Telefon           | Telefon           | Text     | J               |                     |
| 6      | E-Mail            | E-Mail            | Text(40) | J               |                     |
| 7      | Abteilung         | Abteilung         | Text     | J               |                     |
| 8      | SchILD-Adress-ID  | SchILD-Adress-ID  | Text     | J               |                     |
| 9      | externe Adress-ID | externe Adress-ID | Text     | J               |                     |Vorname Anrede akad. Titel Telefon E-Mail Abteilung SchILD-Adress-ID
externe Adress-ID  
Ann Klaudia Frau Dr. 01234-56789 k.ann@firma.de Aquise 128 12 }}

## Faecher.datBeschreibung: Diese Datei enthält die Unterrichtsfächer. Es brauchen nur
solche Fächer aufgeführt werden, die auch in den Leistungsdaten der
Schüler auftauchen, es schadet aber nicht, wenn die Datei weitere Fächer
enthält, die nicht belegt sind.| Spalte | Beschreibung                               | Header-Text         | Datentyp  | Darf leer sein? | Bemerkung                                                                                              |
|--------|--------------------------------------------|---------------------|-----------|-----------------|--------------------------------|
| 1      | Schulinternes Kürzel des Faches            | InternKrz           | Text(20)  | Nein            | Kann (muss aber nicht) mit dem Statistik-Kürzel (Spalte 2) identisch sein Eintrag muss eindeutig sein! |
| 2      | Zugehöriges Statistik-Kürzel               | StatistikKrz        | Text(2)   | Nein            | Statistik-Kürzel aus Statkue.mdb, Tabelle "ZulFaecher". Muss nicht eindeutig sein                      |
| 3      | Klartext-Bezeichnung des Faches            | Bezeichnung         | Text(80)  | Nein            |                                                                                                        |
| 4      | Bezeichnung des Faches im Zeugnis          | BezeichnungZeugnis  | Text(130) | Ja              | Wenn leer, wird Klartext (Spalte 3) übernommen                                                         |
| 5      | Bezeichnung des Faches im Übergangszeugnis | BezeichnungÜZeugnis | Text(130) | Ja              | Wenn leer, wird Klartext(Spalte 3) übernommen                                                          |
| 6      | Unterrichtssprache                         | Unterrichtssprache  | Text(1)   | Ja              | Als Statistik-Kürzel (D, E, F, I, S, R, N), wenn leer, wird D angenommen                               |
| 7      | Sortierung für Sek I                       | Sortierung S1       | Integer   | Ja              | Falls leer, wird die Zeilennr. in der Datei verwendet                                                  |
| 8      | Sortierung für Sek II                      | Sortierung S2       | Integer   | Ja              | Falls leer, wird die Zeilennr. in der Datei verwendet                                                  |
| 9      | Gewichtung                                 | Gewichtung          | Integer   | Ja              | Wird nur bei Berufskollegs benötigt, falls leer wird "1" gesetzt. Sollte nicht mehr verwendet werden.  |StatistikKrz Bezeichnung BezeichnungZeugnis BezeichnungÜZeugnis
Unterrichtssprache Sortierung S1 Sortierung S2 Gewichtung  
D D Deutsch Deutsch Deutsch D 1 2 1  
E5 E5 Englisch Englisch Englisch (ab Kl. 5) D 2 14 1  
L5 L5 Latein Latein Latein (ab Kl. 5) D 3 13 1  
L7 L7 L7 Latein Latein (ab Kl. 7) D 4 11 1  
M M Mathematik Mathematik Mathematik D 5 6 1}}

## Jahrgaenge.datBeschreibung: Diese Datei enthält die an der Schule vorkommenden
Jahrgänge. Die einzelnen Jahrgänge müssen in der "natürlichen"
(chronologischen) Reihenfolge in der Datei vorliegen.| Spalte | Beschreibung                 | Header-Text  | Datentyp | Darf leer sein? | Bemerkung                                                                                                     |
|--------|------------------------------|--------------|----------|-----------------|---------------------------------------|
| 1      | Schulinterne Bezeichnung     | InternKrz    | Text(20) | Nein            | Muss eindeutig sein! Kann (muss aber nicht) mit Statistik-Kürzel (Spalte 2) identisch sein                    |
| 2      | Zugehöriges Statistik-Kürzel | StatistikKrz | Text(2)  | Nein            | Statistik-Kürzel aus Stat kue.mdb, Tabelle "ZulJahrgänge". Muss nicht eindeutig sein                          |
| 3      | Schulgliederung              | Gliederung   | Text(3)  | Nein            | Als Statistik-Kürzel (z.B. \*\*\*,GY8,GY9, A01) aus Statkue.mdb, Tabelle "Gliederung", Felder BKAnlage +BKTyp |StatistikKrz Gliederung  
E1 E1-   -     E3 E3-   -     03 03-   -     05 05-   -     06 06 GY9  
08 08 GY8  
Q1 Q1 GY8}}

## Klassen.datBeschreibung: Diese Datei enthält die an der Schule vorkommenden
Klassen. Die einzelnen Klassen müssen in der "natürlichen"
(chronologischen) Reihenfolge in der Datei vorliegen.| Spalte | Beschreibung                    | Header-Text   | Datentyp | Darf leer sein? | Bemerkung                                                                                                                                             |
|--------|---------------------------------|---------------|----------|-----------------|-------------------------------------------------------------------------------|
| 1      | Schulinterne Klassenbezeichnung | InternBez     | Text(6)  | Nein            | Eintrag muss eindeutig sein!                                                                                                                          |
| 2      | Zugehöriges Statistik-Kürzel    | StatistikBez  | Text(6)  | Nein            | Klassenbezeichnung in ASD-Nomenklatur                                                                                                                 |
| 3      | Sonstige Bezeichnung            | SonstigeBez   | Text(30) | Ja              |                                                                                                                                                       |
| 4      | Jahrgang                        | Jahrgang      | Text(20) | Ja              | Muss identisch sein mit einer schulinternen Bezeichnung aus Jahrgaenge.dat                                                                            |
| 5      | Folgeklasse                     | Folgeklasse   | Text(6)  | Ja              | Muss auf eine andere schulinterne Bezeichnung aus Klassen.dat verweisen                                                                               |
| 6      | Klassenlehrer                   | Klassenlehrer | Text(10) | Ja              | Muss identisch sein mit einem schulinternen Kürzel aus Lehrkraefte.dat                                                                                |
| 7      | Organisationsform               | OrgForm       | Text(1)  | Ja              | Als Statistik-Kürzel aus Statkue.mdb, Tabelle "Organisationsform".                                                                                    |
| 8      | Klassenart                      | Klassenart    | Text(2)  | Ja              | Als Statistik-Kürzel aus Statkue.mdb, Tabelle "ZulKlArt". Bleibt bei Berufskollegs leer!                                                              |
| 9      | Gliederung                      | Gliederung    | Text(3)  | Ja              | Als Statistik-Kürzel (z.B. \*\*\*, GY8, GY9, A01) aus Statkue.mdb, Tabelle "Gliederung", Felder BKAnlage + BKTyp                                      |
| 10     | Fachklasse                      | Fachklasse    | Text(10) | Ja              | Nur bei BKAktuelle Fachklasse In der Form BKIndex-Fachklassenschlüssel-Ausprägung (z.B.1-113-00 Bankkaufmann), aus Statkue.mdb, Tabelle "Fachklasse". |StatistikBez SonstigeBez Jahrgang Folgeklasse Klassenlehrer OrgForm
Klassenart Gliederung Fachklasse  
04A 04A 04A 04 05A AU 1 RK-   -     
`05A`05A 05A 05 06A BO 1 RK-   -     
`07C`07C 07C 07 08C BO 1 RK GY9  
`Q1`Q1 Q1 Q1 Q2 DF 1 RK GY8}}

## Kurse.datBemerkung: Diese Datei enthält Angaben zu Kurs- oder Klassen
-Unterricht. Die Datei Kurse.dat ist die Erweiterung einer älteren
Version. In der erweiterten Datei können insbesondere auch mehrere
Lehrkräfte eingetragen werden, so dass bei Verwendung dieses Formates
die Datei KurseLehrkraefte.dat (s.u.) nicht benötigt wird. Die ältere
Version wird zwar noch im Import unterstützt, aber von Schild-NRW nicht
mehr exportiert.
| Spalte | Beschreibung | Header-Text | Datentyp | Darf leer sein? | Bemerkung |  |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Kursbezeichnung | KursBez | Text(20) | Ja | Eintrag muss in Kombination mit, Jahr, Abschnitt und Jahrgang<br>eindeutig sein! Der Eintrag selbst erfolgt ohne Angabe von Jahr,<br>Abschnitt, Jahrgang und Lehrer (s. Beispiele). Das Feld kann leer sein,<br>falls es sich um einen Unterricht im Klassenverband handelt, dann muss<br>aber das Feld 2 gefüllt sein. |  |
| 2 | Klasse | Klasse | Text(15) | Ja | Die Klassenbezeichnung, folgende Kombinationen mit der<br>Kursbezeichnung sind möglich: 1. Kursbezeichnung nicht leer, Klasse leer: In diesem Fall wird nur ein<br>Kurs in der Kursver-waltung von SchILD-NRW angelegt, es erfolgt keine<br>Zuteilung von Unterricht an die Schüler. 2. Kursbezeichnung nicht leer, Klasse nicht leer: In der Kursver-waltung<br>von SchILD-NRW wird ein Kurs angelegt, dieser wird allen Schülern der<br>Klasse (als Kursunterricht) zugeteilt. 3. Kursbezeichnung leer, Klasse nicht leer: Es wird kein Kurs in der<br>Kursverwaltung angelegt, der Unterricht wird ohne Kurszuweisung allen<br>Schülern der Klasse zugeordnet (Unterricht im Klassenverband) 4. Kursbezeichnung leer, Klasse leer: Nicht erlaubt |  |
| 3 | Jahr | Jahr | Integer | Nein | Schuljahr |  |
| 4 | Abschnitt | Abschnitt | Integer | Nein | Halbjahr bzw. Quartal |  |
| 5 | Jahrgang | Jahrgang | Text(20) | Ja | Muss identisch sein mit einer Bezeichnung aus Jahrgaenge.dat<br>Falls leer, ist der Kurs jahrgangsübergreifend (nur wenn Kursbezeichnung<br>nicht leer). Wird bei Klassenunterricht (Spalte 2 nicht leer) ignoriert.<br>Hinweis: Falls es sich um einen Kurs für mehrere Jahrgänge handelt (z.B.<br>für 11 und EF) können auch mehrere Jahrgänge (getrennt durch Komma)<br>eingegeben werden. |  |
| 6 | Fach | Fach | Text(20) | Nein | Muss identisch mit einer schulinternen Kurzbez. aus<br>Faecher.dat |  |
| 7 | Kursart | Kursart | Text(5) | (Ja) | allgemeine Kursart (nicht individuelle Kursart) als<br>Statistik-Kürzel, Bemerkungen siehe Anhang |  |
| 8 | Wochenstunden | Wochenstd. | Integer | Nein | Gesamt-Wochenstunden, so wie sie bei den Schüler-Leistungsdaten<br>eingetragen werden |  |
| 9 | Wochenstunden Kursleiter | Wochenstd. KL | Float | (Ja) | Anz. Wochenstunden, die vom Kursleiter gehalten werden, falls<br>leer, wird Gesamt-Wochenstd (Spalte 7) angenommen. Wird ignoriert, wenn<br>Kurs-bezeichnung (Spalte 1) leer ist. Dann liegt Unterricht im<br>Klassenverband vor, bei dem die "Hauptlehrkraft" die gesamten<br>Wochenstunden bestreitet. |  |
| 10 | Lehrer | Kursleiter | Text(10) | (Ja) | "Kursleiter" (Fachlehrer). Muss identisch sein mit einem<br>schulinternen Kürzel aus Lehrkraefte.dat |  |
| Wichtig: Bis hier müssen alle Spalten<br>existieren |  |  |  |  |  |  |
| 11 | Epochenunterricht | Epochenunterricht | Text(1) | Ja | Als "J" oder "N", wird nur bei Klassenunterricht (2. Spalte nicht<br>leer ) berücksichtigt und wenn der Abschnitt (4. Spalte) im ersten<br>Halbjahr ist. |  |
| 12 | Schul-Nummer | Schulnr | Integer | Ja | Falls ein Kurs im Rahmen einer Kooperation an einer anderen<br>Schule gegeben wird, kann hier die Schulnr dieser Schule übergeben<br>werden.Wird nur bei Kursunterricht (Spalte 1 nicht leer)<br>berücksichtigt |  |
| 13 | Wochenstunden Zusatzkraft | Wochenstd. ZK | Float | Ja | Falls Kursbezeichnung leer ist (d.h. reiner Unterricht im<br>Klassenverband) können hier die Stunden einer "team-teaching" Kraft<br>eingetragen werden (siehe Definition unten). Falls die Kursbezeichnung<br>nicht leer ist (d.h. Kursunterricht), können hier die Stunden einer<br>zweiten Lehrkraft eingetragen werden, die aber (im Gegensatz zu einer<br>"team-teaching"-Kraft) nicht zwingend zur gleichen Zeit wie die<br>Hauptlehrkraft unterrichten muss. |  |
| 14 | Zusatzkraft | Zusatzkraft | Text(10) | Ja | Kürzel der Zusatzkraft, muss identisch sein mit einem<br>schulinternen Kürzel aus Lehrkraefte.dat |  |
| 15 | Wochenstunden weitere Zusatzkraft | Wochenstd ZK | Float | Ja | Falls Kursbezeichnung nicht leer ist, können hier im Wechsel<br>beliebig viele Wochenstunden und Kürzel von weiteren Zusatzkräften<br>eingegeben werden. Ist die Kursbezeichnung leer, so werden diese Angaben<br>ignoriert |  |
| 16usw. | Weitere Zusatzkraft | Weitere Zusatzkraft | Text(10) | Ja | Kürzel der Zusatzkraft, muss identisch sein mit einem<br>schulinternen Kürzel aus Lehrkraefte.dat |  |
**Zum Begriff "team-teaching":**Team-Teaching liegt dann vor, wenn eine "Hauptlehrkraft" den Unterricht
in einem Fach während der gesamten Wochenstunden leitet (in der Regel im
Klassenverband), dabei während einer bestimmten Anzahl von Stunden (was
auch alle sein können) von einer zweiten Lehrkraft unterstützt wird.
Team-Teaching liegt nicht vor, wenn z.B. bei einem 4-stündigen
Sportunterricht eine Lehrkraft 3 Stunden allgemeinen Sport unterrichtet,
eine andere 1 Stunde Schwimmen (oder noch mehr Lehrkräfte beteiligt
sind). Der Fall "mehr als zwei Lehrkräfte" kann nur über einen Kurs mit
Zusatz-Einträgen in der Datei "KurseLehrkraefte.dat" (s.u.) abgebildet
werden.Klasse Jahr Abschnitt Jahrgang Fach Kursart Wochenstd. Wochenstd. KL
Kursleiter Epochenunterricht Schulnr  
KU-G12020 2 Q1 KU GK 3 3 BO N  
M-L22020 2 Q2 M LK 5 5 MY N  
GZ-G12020 2 Q2 GZ ZK 3 3 BG N  
VKM-G12020 2 Q2 VK-M VTF 2 2 SC N  
PKE-G12020 2 Q1 PK-E PJK 3 3 WE N  
AG-Tanz2020 2 05,06,07 AG-SP1 1 SC J  
AG-Homepage2020 2AG-HP1 1 TU J }}**Weitere Sonderbeispiele (Hinweis: die Kopfzeilen sind hier
weggelassen)**06A 2020 2SP PUK 2BO N }}06A 2020 2SP PUK 2 2 BO N1 ALD }}2020 1 06 SP AGGT 2 1 BO N1 ALD }}06A 2020 2SP AGGT 4 3 BO N1 ALD 1 MÜ }}2020 2 06 SP AGGT 2N 123456}}

## Kurse.dat (altes Format)Beschreibung: Das alte Format der Datei Kurse.dat enthält weniger
Informationen als die neue, standardmäßig verwendete Version. Aufgrund
von Kompatibilitätsgründen wird dieses ältere Format jedoch noch
unterstützt. Diese Datei enthält lediglich Angaben zu Kurs- oder Klassen
-Unterricht.| Spalte | Beschreibung             | Header-Text       | Datentyp | Darf leer sein? | Bemerkung                                                                                                                                                                    |
|--------|--------------------------|-------------------|----------|-----------------|------------------------------------------------------------------------------------------------------|
| 1      | Kursbezeichnung          | KursBez           | Text(20) | Nein            | Eintrag muss in Kombination mit Jahr, Abschnitt und Jahrgang eindeutig sein! Der Eintrag selbst erfolgt ohne Angabe von Jahr, Abschnitt, Jahrgang und Lehrer (s. Beispiele). |
| 2      | Jahr                     | Jahr              | Integer  | Nein            | Schuljahr                                                                                                                                                                    |
| 3      | Abschnitt                | Abschnitt         | Integer  | Nein            | Halbjahr bzw. Quartal                                                                                                                                                        |
| 4      | Jahrgang                 | Jahrgang          | Text(20) | Ja              | Muss identisch sein mit einer Bezeichnung aus Jahrgaenge.dat. Falls leer, ist der Kurs jahrgangsübergreifend                                                                 |
| 5      | Fach                     | Fach              | Text(20) | Nein            | Muss identisch sein mit einer schulinternen Kurzbez. aus Faecher.dat                                                                                                         |
| 6      | Kursart                  | Kursart           | Text(5)  | Ja              | allgemeine Kursart (nicht schülerspezifische Kursart) als Statistik-Kürzel, Bemerkungen siehe 

DEADLINK: Anhang - Schnittstellenbeschreibung#Anhang.md

                         |
| 7      | Wochenstunden            | Wochenstd.        | Integer  | Nein            | Gesamt-Wochenstunden des Kurses, wie sie bei den Schüler-Leistungsdaten eingetragen werden                                                                                   |
| 8      | Wochenstunden Kursleiter | Wochenstd. KL     | Float    | Ja              | Anz. Wochenstunden, die vom Kursleiter gehalten werden, falls leer, wird Gesamt-Wochenstd (Spalte 7) angenommen                                                              |
| 9      | Lehrer                   | Kursleiter        | Text(10) | Nein            | "Kursleiter". Muss identisch sein mit einem schulinternen Kürzel aus Lehrkraefte.dat                                                                                         |
| 10     | Klassenunterricht        | Klassenunterricht | Text(1)  | Ja              | Falls Klassenunterricht: "J", sonst "N" oder leer. Falls es sich um Klassenunterricht handelt, steht im Feld "Kursbezeichnung" das schulinterne Klassenkürzel.               |Jahr Abschnitt Jahrgang Fach Kursart Wochenstd. Wochenstd. KL Kursleiter
Klassenunterricht  
KU-G1 2020 2 Q1 KU GK 3 3 BO  
`M-L2`2020 2 Q2 M LK 5 5 MY N  
GZ-G1 2020 2 Q2 GZ ZK 3 3 TZ  
`VKM-G1`2020 2 EF VK-M PJK 2 2 SC N  
PKE-G1 2020 2 Q1 PK-E VTF 3 3 GO  
`AG-Turnen`2020 2 05 AG-SP AGGT 2 2 PA J }}

## KurseLehrkraefte.datBeschreibung: Diese Datei enthält zusätzliche Informationen zu Kursen,
falls diese von mehreren Lehrkräften gehalten werden.| Spalte | Beschreibung    | Header-Text | Datentyp | Darf leer sein? | Bemerkung                                                                                               |
|--------|-----------------|-------------|----------|-----------------|---------------------------------|
| 1      | Kursbezeichnung | KursBez     | Text(20) | Nein            | Eintrag muss in Kombination mit Jahr, Abschnitt und Jahrgang auf einen Eintrag aus Kurse.dat verweisen. |
| 2      | Jahr            | Jahr        | Integer  | Nein            | Schuljahr                                                                                               |
| 3      | Abschnitt       | Abschnitt   | Integer  | Nein            | Halbjahr bzw. Quartal                                                                                   |
| 4      | Lehrkraft       | Lehrkraft   | Text(10) | Nein            | Muss identisch sein mit einem schulinternen Kürzel aus Lehrkraefte.dat                                  |
| 5      | Wochenstunden   | Wochenstd   | Float    | Nein            | Anteil des Lehrers an den Gesamtwochenstunden des Kurses                                                |
| 6      | Jahrgang        | Jahrgang    | Text(20) | Ja              | Falls leer, muss die Kursbezeichnung (Spalte 1) in Kombination mit Jahr und Abschnitt eindeutig sein    |Jahr Abschnitt Lehrkraft Wochenstd Jahrgang  
F_12_LK 2005 2 Schmitz 2 12  
E_13_LK 2005 2 Moore 1 13}}

## Lehrkraefte.datBeschreibung: Diese Datei enthält die Lehrer-Grunddaten (Kürzel, Name,
Adresse usw.). Alternativ können die Lehrer-Daten aber auch über eine
von ASD-PC erzeugte Datei mit Abteilungsdaten importiert werden (bei der
Lehrerverwaltung von SchILD-NRW über den Button "Daten importieren aus
"Lehrer.txt"). Dann kann auf die Datei Lehrkraefte.dat verzichtet
werden, allerdings muss der Import der Abteilungsdaten dann auch zuerst
erfolgen.| Spalte | Beschreibung                             | HeaderText          | Datentyp | Darf leer sein? | Bemerkung                                                                                        |
|--------|------------------------------------------|---------------------|----------|-----------------|--------------------------|
| 1      | Schulinternes Kürzel des Lehrers         | InternKrz           | Text(10) | Nein            | Eintrag muss eindeutig sein! Kann (muss aber nicht) identisch sein mit Statistik-Kürzel          |
| 2      | Zugehöriges Statistik-Kürzel des Lehrers | StatistikKrz        | Text(4)  | Nein            | Muss eindeutig sein                                                                              |
| 3      | Anrede                                   | Anrede              | Text(10) | Ja              |                                                                                                  |
| 4      | Titel                                    | Titel               | Text(20) | Ja              |                                                                                                  |
| 5      | Nachname                                 | Nachname            | Text(30) | Nein            |                                                                                                  |
| 6      | Vorname                                  | Vorname             | Text(20) | Nein            |                                                                                                  |
| 7      | Geschlecht                               | Geschlecht          | Text(1)  | Nein            | Als "m" oder "w"                                                                                 |
| 8      | Geburtsdatum                             | Geburtsdatum        | Datum    | Ja              | Als TT.MM.JJJJ                                                                                   |
| 9      | Staatsangehörigkeit                      | Staatsang           | Text(3)  | Ja              | Als Statistik-Länderkürzel (z.B. 000 für Deutschland) aus Statkue.mdb, Tabelle "Nationalitäten". |
| 10     | PLZ Wohnort                              | PLZ                 | Text(10) | Ja              |                                                                                                  |
| 11     | Wohnort                                  | Ort                 | Text(50) | Ja              | Falls PLZ angegeben, darf Wohnort nicht leer sein                                                |
| 12     | Straße und Hausnr.                       | Straße              | Text(50) | Ja              |                                                                                                  |
| 13     | Telefon Festnetz                         | Tel. Festnetz       | Text(20) | Ja              |                                                                                                  |
| 14     | Telefon Mobil                            | Tel. mobil          | Text(20) | Ja              |                                                                                                  |
| 15     | E-Mail                                   | E-Mail              | Text(40) | Ja              |                                                                                                  |
| 16     | Rechtsverhältnis                         | Rechtsverhältnis    | Text(1)  | Ja              | Als StatistikKürzel aus Statkue.mdb, Tabelle "LehrerRechtsverhältnis"                            |
| 17     | Beschäftigungsart                        | Beschäftigungsart   | Text(2)  | Ja              | Als StatistikKürzel aus Statkue.mdb, Tabelle "LehrerBeschaeftigungsart"                          |
| 18     | Einsatzstatus                            | Einsatzstatus       | Text(1)  | Ja              | Als StatistikKürzel aus Statkue.mdb, Tabelle "LehrerEinsatzstatus"                               |
| 19     | Pflichtstunden-Soll                      | Pflichtstunden-Soll | Float    | Ja              | Anzahl der Pflichtstunden                                                                        |
| 20     | Schulleitung                             | Schulleitung        | Text(10) | Ja              | Schulleitungsfunktion, als Statistik-Kürzel aus Statkue.mdb, Tabelle "LehrerLeitung"             |
| 21     | Statistik-relevant?                      | Statistik-relevant  | Text(1)  | Nein            | Als "J" oder "N". Gibt an, ob die Lehrkraft bei der Statistik berücksichtigt wird                |
| 22     | Nr. der Stammschule                      | Stammschulnr.       | Text(6)  | Ja              | Nr. der Stammschule, falls diese nicht die eigene Schule ist                                     |
| 23     | Dienstliche E-Mail                       | dienstl. E-Mail     | Text(40) | Ja              |                                                                                                  |StatistikKrz Anrede Titel Nachname Vorname Geschlecht Geburtsdatum
Staatsang PLZ Ort Straße Tel. Festnetz Tel. mobil E-Mail
Rechtsverhältnis Beschäftigungsart Einsatzstatus Pflichtstunden-Soll`Schulleitung`Statistik-relevant Stammschulnr. dienstl. E-Mail  
MUE MÜ1 Frau Dr. Müller Johanna w 21.4.1957 000 54321 Musterstadt
Teststraße 7 01234-76543 0173-9876543 jmueller@web.de L V-   26 Vertret J muejo@schule.de  
MUE2 MÜ2 Herr StR. Müller Albrecht m 6.8.1960 000 54352 Testdorf
Mustergasse 2 01243-345123amueller@gmx.de U T-   13J 123456 mueal@schule.de }}

## LehrkraefteLehraemter.datBeschreibung: Diese Datei enthält Daten zu den Lehrämtern der
Lehrkräfte. Zu jedem Lehramt können mehrere Lehrbefähigungen (mit
Anerkennungen) und Fachrichtungen (mit Anerkennungen) übergeben werden.
Diese sind dann innerhalb eines durch "\|" getrennten Blockes durch "-"
zu trennen (siehe Beispiel). Für eine Lehrkraft können auch mehrere
Lehrämter (in separaten Zeilen) mit zugeordneten Lehrbefähigungen und
Fachrichtungen importiert werden.| Spalte | Beschreibung                                            | Header-Text          | Datentyp | Darf leer sein? | Bemerkung                                                                                                                                                                                                                                                               |
|--------|---------------------------------------------------------|----------------------|----------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Lehrkraft                                               | Lehrkraft            | Text(10) | Nein            | Muss identisch sein mit einem schulinternen Kürzel aus Lehrkraefte.dat                                                                                                                                                                                                  |
| 2      | Lehramt                                                 | Lehramt              | Text(10) | Nein            | Das Lehramt Statistik-Kürzel aus Statkue,mdb, Tabelle "LehrerLehramt"                                                                                                                                                                                                   |
| 3      | Anerkennung für das Lehramt                             | Anerkennung Lehramt  | Text(10) | Nein            | Die Anerkennung des Lehramtes Statistik-Kürzel aus Statkue.mdb, Tabelle "LehrerLehramtAnerkennung"                                                                                                                                                                      |
| 4      | Lehrbefähigung(en) für das Lehramt                      | Lehrbefähigung       | Text(10) | Ja              | Eine oder mehrere Lehrbefähigungen für das Lehramt Statistik-Kürzel aus Statkue.mdb, Tabelle "LehrerLehrbefaehigung". Falls mehrere Lehrbefähigungen übergeben werden, müssen diese durch "-" getrennt werden                                                           |
| 5      | Anerkennung(en) für die jeweilige(n) Lehrbefähigung(en) | Anerkennung Lehrbef. | Text(10) | Ja              | Die Anerkennung für die Lehrbefähigung Statistik-Kürzel aus Statkue.mdb, Tabelle "LehrerLehrbefAnerkennung". Falls mehrere Lehrbefähigungen übergeben werden, müssen die zugeordneten Anerkennungen (in der Reihenfolge der Lehrbefähigungen) durch "-" getrennt werden |
| 6      | Fachrichtung(en) für das Lehramt                        | Fachrichtung         | Text(10) | Ja              | Eine Fachrichtung für das Lehramt Statistik-Kürzel aus Statkue.mdb, Tabelle "LehrerFachrichtung". Falls mehrere Fachrichtungen übergeben werden, müssen diese durch "-" getrennt werden                                                                                 |
| 7      | Anerkennung(en) für die jeweilige(n) Fachrichtung(en)   | Anerkennung Fachr.   | Text(10) | Ja              | Die Anerkennung für die Fachrichtung Statistik-Kürzel aus Statkue.mdb, Tabelle "LehrerFachrAnerkennung". Falls mehrere Fachrichtungen übergeben werden, müssen die zugeordneten Anerkennungen (in der Reihenfolge der Fachrichtungen) durch "-" getrennt werden         |Lehramt Anerkennung Lehramt Lehrbefähigung Anerkennung Lehrbef.
Fachrichtung Anerkennung Fachr.  
BA 25 AL CH-AW 2-1 21 1  
BA 00 ST AM 3 BB 2  
BK 24 ST E 1 SQ 3  
MÜ1 24 ST D 1}}

## LehrkraefteLernplattformen.datBeschreibung: Diese Datei enthält Benutzernamen und Initialkennwörter zu
Lernplattformen.| Spalte | Beschreibung    | Header-Text     | Datentyp | Darf leer sein? | Bemerkung                                                                                        |
|--------|-----------------|-----------------|----------|-----------------|--------------------------|
| 1      | Kürzel          | Kürzel          | Text(10) | Nein            | Muss identisch sein mit einem schulinternen Kürzel aus Lehrkraefte.dat                           |
| 2      | Lernplattform   | Lernplattform   | Text     | Nein            | Enthält den Namen einer Lernplattform                                                            |
| 3      | Benutzername    | Benutzername    | Text     | Nein            | Der Benutzername, mit dem man sich an der Lernplattform anmeldet                                 |
| 4      | Initialkennwort | Initialkennwort | Text     | Nein            | Das Kennwort für die Erstanmeldung an der Lernplattform. Darf kein Pipe-Zeichen ("\|") entalten. |Lernplattform Benutzername Initialkennwort  
MÜ SDS müller@sds.de hfz6$+uu  
ZO SDS zorbert@sds.de hfj65ufZ  
}}

## LehrkraefteSonderzeiten.datBeschreibung: Diese Datei enthält Sonderzeiten (Mehrleistung,
Minderleistung, Anrechnung) mit Gründen für die einzelne Lehrkräfte.
| Spalte | Beschreibung | Header-Text | Datentyp | Darf leer sein? | Bemerkung |
| --- | --- | --- | --- | --- | --- |
| 1 | Lehrkraft | Lehrkraft | Text(10) | Nein | Muss identisch sein mit einem schulinternen Kürzel aus<br>Lehrkraefte.dat |
| 2 | Art der Sonderzeit | Zeitart | Text(6) | Nein | Muss eines der folgenden Schlüsseltext-Kürzel enthalten MEHRLEISTUNG MINDERLEISTUNG ANRECHNUNG |
| 3 | Grund für Sonderzeit | Grund | Text(10) | Nein | Statistik-Kürzel für Grund der Sonderzeit, je nach Art der<br>Sonderzeit aus Tabelle "LehrerMehrleistung", "LehrerMinderleistung" oder<br>"LehrerAnrechnung" aus Statkue.mdb |
| 4 | Anzahl Stunden | Anzahl Stunden | Float | Nein | Anzahl Stunden |
Zeitart Grund Anzahl Stunden  
MÜ1 MEHRLEISTUNG 100 3  
MÜ1 ANRECHNUNG 510 2  
MÜ2 MINDERLEISTUNG 260 2 }}

## SchuelerAbiFaecher.dat| Spalte | Beschreibung       | Header-Text        | Datentyp | Darf leer sein? | Bemerkung |
|--------|--------|--------|----------|-----|-----------|
| 1      | Nachname           | Nachname           | Text     |                 |           |
| 2      | Vorname            | Vorname            | Text     |                 |           |
| 3      | Geburtsdatum       | Geburtsdatum       | Date     |                 |           |
| 4      | Fach               | Fach               | Text     |                 |           |
| 5      | Kursart            | Kursart            | Text     |                 |           |
| 6      | Abifach            | Abifach            | Text     |                 |           |
| 7      | P11_1              | P11_1              |          |                 |           |
| 8      | S11_1              | S11_1              |          |                 |           |
| 9      | P11_2              | P11_2              |          |                 |           |
| 10     | S11_2              | S11_2              |          |                 |           |
| 11     | P12_1              | P12_1              |          |                 |           |
| 12     | R12_1              | R12_1              |          |                 |           |
| 13     | S12_1              | S12_1              |          |                 |           |
| 14     | P12_2              | P12_2              |          |                 |           |
| 15     | R12_2              | R12_2              |          |                 |           |
| 16     | S12_2              | S12_2              |          |                 |           |
| 17     | P13_1              | P13_1              |          |                 |           |
| 18     | R13_1              | R13_1              |          |                 |           |
| 19     | S13_1              | S13_1              |          |                 |           |
| 20     | P13_2              | P13_2              |          |                 |           |
| 21     | R13_2              | R13_2              |          |                 |           |
| 22     | S13_2              | S13_2              |          |                 |           |
| 23     | Zulassung          | Zulassung          |          |                 |           |
| 24     | Durchschnitt       | Durchschnitt       |          |                 |           |
| 25     | AbiPruefErgebnis   | AbiPruefErgebnis   |          |                 |           |
| 26     | Zwischenstand      | Zwischenstand      |          |                 |           |
| 27     | MdlPflichtPruefung | MdlPflichtPruefung |          |                 |           |
| 28     | MdlFreiwPruefung   | MdlFreiwPruefung   |          |                 |           |
| 29     | MdlPruefErgebnis   | MdlPruefErgebnis   |          |                 |           |
| 30     | MdlPruefFolge      | MdlPruefFolge      |          |                 |           |
| 31     | AbiErgebnis        | AbiErgebnis        |          |                 |           |
| 32     | MdlBestPruefung    | MdlBestPruefung    |          |                 |           |
| 33     | W12_1              | W12_1              |          |                 |           |
| 34     | W12_2              | W12_2              |          |                 |           |
| 35     | W13_1              | W13_1              |          |                 |           |
| 36     | W13_2              | W13_2              |          |                 |           |
| 37     | Sortierung         | Sortierung         |          |                 |           |
| 38     | P_FA               | P_FA               |          |                 |           |
| 39     | R_FA               | R_FA               |          |                 |           |

## SchuelerAbitur.datBeschreibung: Enthält Angaben zu Abiturdaten der Schüler.**Hinweis:** Die Abiturfächer werden über die entsprechenden Einträge
bei SchuelerLeistungsdaten.dat ermittelt.| Spalte | Beschreibung              | Header-Text       | Datentyp | Darf leer sein? | Bemerkung                                                                                                                                                                                                            |
|--------|---------------------------|-------------------|----------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Nachname des Schülers     | Nachname          | Text(50) | Nein            | Muss in Verbindung mit Vorname und Geburtsdatum auf einen Eintrag aus SchuelerBasisdaten.dat verweisen. Falls notwendig, mit Klasse ergänzen (mit #-Zeichen getrennt - siehe Beschreibung zu SchuelerBasisdaten.dat) |
| 2      | Vorname des Schülers      | Vorname           | Text(30) | Nein            |                                                                                                                                                                                                                      |
| 3      | Geburtsdatum des Schülers | Geburtsdatum      | Datum    | Nein            | Als TT.MM.JJJJ                                                                                                                                                                                                       |
| 4      | Zulassung zum Abitur      | Zugelassen        | Text(1)  | Nein            | Als "J", "N" oder "R" (freiw. Rücktritt)                                                                                                                                                                             |
| 5      | Abitur bestanden?         | Bestanden         | Text(1)  | Nein            | Als "J" oder "N"                                                                                                                                                                                                     |
| 6      | Gesamtnote                | Gesamtnote        | Float    | Ja              | Gesamtnote                                                                                                                                                                                                           |
| 7      | Jahr                      | Jahr              | Integer  | Ja              | Schuljahr, in dem Abitur gemacht wurde, falls leer, wird das vergangene Schuljahr angenommen!                                                                                                                        |
| 8      | Abschnitt                 | Abschnitt         | Integer  | Ja              | Abschnitt (=Halbjahr), in dem Abitur gemacht wurde, falls leer, wird 2. Halbjahr angenommen                                                                                                                          |
| 9      | Summe GK                  | Summe GK          | Integer  | Ja              |                                                                                                                                                                                                                      |
| 10     | Summe LK                  | Summe LK          | Integer  | Ja              |                                                                                                                                                                                                                      |
| 11     | Summen OK                 | Summen OK         | Integer  | Ja              |                                                                                                                                                                                                                      |
| 12     | Gesamtpunktzahl           | Gesamtpunktzahl   | Integer  | Ja              |                                                                                                                                                                                                                      |
| 13     | Notensprung               | Notensprung       | Integer  | Ja              |                                                                                                                                                                                                                      |
| 14     | FehlendePunkzzahl         | FehlendePunkzzahl | Integer  | Ja              |                                                                                                                                                                                                                      |
| 15     | AnzRelLK                  | AnzRelLK          | Integer  | Ja              |                                                                                                                                                                                                                      |
| 16     | AnzRelGK                  | AnzRelGK          | Integer  | Ja              |                                                                                                                                                                                                                      |
| 17     | AnzRelOK                  | AnzRelOK          | Integer  | Ja              |                                                                                                                                                                                                                      |
| 18     | AnzDefGK                  | AnzDefGK          | Integer  | Ja              |                                                                                                                                                                                                                      |
| 19     | Latinum                   | Latinum           | Text(1)  | Ja              | "J" oder "N"                                                                                                                                                                                                         |
| 20     | KlLatinum                 | KlLatinum         | Text(1)  | Ja              | "J" oder "N"                                                                                                                                                                                                         |
| 21     | Greacum                   | Greacum           | Text(1)  | Ja              | "J" oder "N"                                                                                                                                                                                                         |
| 22     | Hebraicum                 | Hebraicum         | Text(1)  | Ja              | "J" oder "N"                                                                                                                                                                                                         |
| 23     | BLL-Art                   | BLL-Art           |          | Ja              |                                                                                                                                                                                                                      |
| 24     | BLL-Punkte                | BLL-Punkte        | Integer  | Ja              |                                                                                                                                                                                                                      |
| 25     | FS2_SekI_manuell          | FS2_SekI_manuell  | Text(1)  | Ja              | "J" oder "N"                                                                                                                                                                                                         |
| 26     | Punktsumme_II             | Punktsumme_II     | Integer  | Ja              |                                                                                                                                                                                                                      |
| 27     | Defizite_II               | Defizite_II       | Integer  | Ja              |                                                                                                                                                                                                                      |
| 28     | LK_Defizite_II            | LK_Defizite_II    | Integer  | Ja              |                                                                                                                                                                                                                      |
| 29     | Thema_BLL                 | Thema_BLL         | Text     | Ja              |                                                                                                                                                                                                                      |
| 30     | Thema_PJK                 | Thema_PJK         | Text     | Ja              |                                                                                                                                                                                                                      |
| 31     | Punktsumme_I              | Punktsumme_I      | Integer  | Ja              |                                                                                                                                                                                                                      |
| 32     | Defizite_I                | Defizite_I        | Integer  | Ja              |                                                                                                                                                                                                                      |
| 33     | Kurse_I                   | Kurse_I           | Integer  | Ja              |                                                                                                                                                                                                                      |
| 34     | FA_Punkte                 | FA_Punkte         | Integer  | Ja              |                                                                                                                                                                                                                      |
| 35     | FA_Fach                   | FA_Fach           | Text     | Ja              |                                                                                                                                                                                                                      |
| 36     | AnzahlKurse_0             | AnzahlKurse_0     | Integer  | Ja              |                                                                                                                                                                                                                      |
| 37     | Durchschnitt_I            | Durchschnitt_I    | Float    | Ja              |                                                                                                                                                                                                                      |Vorname Geburtsdatum Zugelassen Bestanden Gesamtnote Jahr Abschnitt  
Abenden Jennifer 09.11.1988 J J 1,8 2006 2 Abendroth Marko 04.05.1987 J
J 2,4 2006 2 }}

## SchuelerAdressen.datBeschreibung: Enthält weitere Adressen (z.B. von Ausbildungsbetrieben)
der Schüler| Spalte | Beschreibung              | Header-Text        | Datentyp | Darf leer sein? | Bemerkung                                                                                                                                                                                                                                                                                                     |
|--------|---------------------------|--------------------|----------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Nachname des Schülers     | Nachname           | Text(50) | Ja (s.u.)       | Muss in Verbindung mit Vorname und Geburtsdatum auf einen Eintrag aus SchuelerBasisdaten.dat verweisen.                                                                                                                                                                                                       |
| 2      | Vorname des Schülers      | Vorname            | Text(30) | Ja (s.u.)       |                                                                                                                                                                                                                                                                                                               |
| 3      | Geburtsdatum des Schülers | Geburtsdatum       | Datum    | Ja (s.u.)       | Als TT.MM.JJJJ                                                                                                                                                                                                                                                                                                |
| 4      | Adressart                 | Adressart          | Text(30) | Ja              | Als Klartext, z.B. "Betrieb"                                                                                                                                                                                                                                                                                  |
| 5      | Name1                     | Name1              | Text(50) | Nein            | 1\. Adresszeile                                                                                                                                                                                                                                                                                               |
| 6      | Name2                     | Name2              | Text(50) | Ja              | 2\. Adresszeile                                                                                                                                                                                                                                                                                               |
| 7      | Straße                    | Straße             | Text(50) | Ja              |                                                                                                                                                                                                                                                                                                               |
| 8      | PLZ                       | PLZ                | Text(10) | (Ja)            | Wird bei Berufskollegs benötigt                                                                                                                                                                                                                                                                               |
| 9      | Ort                       | Ort                | Text(50) | (Ja)            | Falls PLZ angegeben, darf Wohnort nicht leer sein                                                                                                                                                                                                                                                             |
| 10     | 1\. Telefon-Nr            | 1\. Tel.-Nr.       | Text(20) | Ja              | Falls nicht leer, wird dies beim Import als Kriterium benutzt, ob ein Betrieb schon in SchILD-NRW existiert. Dabei werden die ersten n Stellen der Telefonnr. verglichen (n frei wählbar). Ist die Telefon-Nr. leer, so wird anhand des Feldes Name1 und ggf. Name2 geprüft, ob eine Adresse schon existiert. |
| 11     | 2\. Telefon-Nr.           | 2\. Tel.-Nr.       | Text(20) | Ja              |                                                                                                                                                                                                                                                                                                               |
| 12     | E-Mail                    | E-Mail             | Text(40) | Ja              |                                                                                                                                                                                                                                                                                                               |
| 13     | Betreuer Nachname         | Betreuer Nachname  | Text(30) | Ja              | Betreuer des Schülers                                                                                                                                                                                                                                                                                         |
| 14     | Betreuer Vorname          | Betreuer Vorname   | Text(20) | Ja              |                                                                                                                                                                                                                                                                                                               |
| 15     | Betreuer Anrede           | Betreuer Anrede    | Text(10) | Ja              |                                                                                                                                                                                                                                                                                                               |
| 16     | Betreuer Telefon          | Betreuer Tel.-Nr.  | Text(20) | Ja              |                                                                                                                                                                                                                                                                                                               |
| 17     | Betreuer E-Mail           | Betreuer E-Mail    | Text(50) | Ja              |                                                                                                                                                                                                                                                                                                               |
| 18     | Betreuer Abteilung        | Betreuer Abteilung | Text(30) | Ja              |                                                                                                                                                                                                                                                                                                               |
| 19     | Vertragsbeginn            | Vertragsbeginn     | Datum    | Ja              |                                                                                                                                                                                                                                                                                                               |
| 20     | Vertragsende              | Vertragsende       | Datum    | Ja              |                                                                                                                                                                                                                                                                                                               |Optional kann die Datei auch noch die folgenden Daten enthalten.| Spalte | Beschreibung             | Header-Text       | Datentyp  | Darf leer sein? | Bemerkung               |
|--------|--|-------|-----------|-----|-|
| 21     | Fax-Nummer des Betriebes | Fax-Nr.           | Text(20)  | Ja              |                         |
| 22     | Bemerkung zum Betrieb    | Bemerkung         | Text(255) | Ja              |                         |
| 23     | Branche des Betriebes    | Branche           | Text(50)  | Ja              | Als Klartext            |
| 24     | Zusatz 1                 | Zusatz 1          | Text(10)  | Ja              | Kurze Zusatzinformation |
| 25     | Zusatz 2                 | Zusatz 2          | Text(10)  | Ja              |                         |
| 26     | SchILD-Adress-ID         | SchILD-Adress-ID  | Text      | Ja              |                         |
| 27     | externe Adress-ID        | externe Adress-ID | Text      | Ja              |                         |Vorname Geburtsdatum Adressart Name1 Name2 Straße PLZ Ort 1. Tel.-Nr. 2.
Tel.-Nr. E-Mail Betreuer Nachname Betreuer Vorname Betreuer Anrede
Betreuer Tel.-Nr. Betreuer E-Mail Betreuer Abteilung Vertragsbeginn
Vertragsende  
Abel Sandra 19.01.1986 Betrieb Elektro BlauKirchsgasse 430 32978 Weveringen 01234-880016Müller Anton Herr 04567-98765 mueller@elektro-blau.de Instandsetzung
01.08.2005}}

## SchuelerASV.datBeschreibung: Mit dieser Datei können die Bemerkungen zum Arbeits- und
Sozialverhalten des jeweiligen Lernabschnitts exportiert/importiert
werden. Der Aufbau gleicht dabei den Vermerken, ist jedoch an das
Schuljahr und den Abschnitt gekoppelt.| Spalte | Beschreibung              | Header-Text  | Datentyp | Darf leer sein? | Bemerkung                                                                                                                                                                                                            |
|--------|---------------------------|--------------|----------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Nachname des Schülers     | Nachname     | Text(50) | Nein            | Muss in Verbindung mit Vorname und Geburtsdatum auf einen Eintrag aus SchuelerBasisdaten.dat verweisen. Falls notwendig, mit Klasse ergänzen (mit #-Zeichen getrennt - siehe Beschreibung zu SchuelerBasisdaten.dat) |
| 2      | Vorname des Schülers      | Vorname      | Text(30) | Nein            |                                                                                                                                                                                                                      |
| 3      | Geburtsdatum des Schülers | Geburtsdatum | Datum    | Nein            | Als TT.MM.JJJJ                                                                                                                                                                                                       |
| 4      | Jahr                      | Jahr         | Integer  | Nein            | Schuljahr                                                                                                                                                                                                            |
| 5      | Abschnitt                 | Abschnitt    | Integer  | Nein            | Halbjahr bzw. Quartal                                                                                                                                                                                                |Danach folgt der eigentliche Bemerkungstext. Zwischen den Markierungen
<V> und </V>.Vorname Geburtsdatum Jahr Abschnitt  
Müller Hans 10.03.1971 2013 2  
<V>  
Hans ist stets bemüht!  
</V> }}

## SchuelerBasisdaten.datBeschreibung: Enthält die Basis-Stammdaten der Schüler, insbesondere
solche, die für die Statistik relevant sind.Wenn die in den DateienSchuelerZusatzdaten.dat  
SchuelerLernabschnittsdaten.dat  
SchuelerLeistungsdaten.dat  
SchuelerSprachenfolgen.dat  
SchuelerAbitur.dat  
SchuelerTelefonnummern.dat  
SchuelerErzieher.dat  
SchuelerMerkmale.dat  
SchuelerAdressen.dat  enthaltenen Schüler schon in SchILD-NRW existieren (anhand von Nachname,
Vorname und Geburtsdatum), so wird diese Datei beim Import nicht
zwingend benötigt. Existieren die Schüler dagegen noch nicht, so muss
diese Datei vorhanden sein.
| Spalte | Beschreibung | Header-Text | Datentyp | Darf leer sein? | Bemerkung |
| --- | --- | --- | --- | --- | --- |
| 1 | Nachname | Nachname | Text(50) | Nein | Falls notwendig, mit Klasse ergänzen (mit #-Zeichen<br>getrennt) |
| 2 | Vorname | Vorname | Text(30) | Nein |  |
| 3 | Geburtsdatum | Geburtsdatum | Datum | Nein | In der Form TT.MM.JJJJ |
| 4 | Geschlecht | Geschlecht | Text(1) | Nein | Als "m" oder "w" |
| 5 | Status | Status | Integer | Nein | 0: Neuaufnahme 1: Warteliste 2: Aktiv 3: Beurlaubt 6: Extern 8: Abschluss 9: Abgänger ohne Abschluss |
| 6 | PLZ | PLZ | Text(10) | (Ja) |  |
| 7 | Ort | Ort | Text(50) | (Ja) | Falls PLZ angegeben, darf Wohnort nicht leer sein! |
| 8 | Straße | Straße | Text(50) | Ja | Mit Hausnr |
| 9 | Spätaussiedler | Aussiedler | Text(1) | Ja | "J" oder "N" |
| 10 | 1. Staatsangehörigkeit | 1. Staatsang. | Text(3) | (Ja) | Als Statistik-Kürzel (z.B. 000 für Deutschland) aus Statkue.mdb,<br>Tabelle "Nationalitäten" |
| 11 | Konfession, Klartext | Konfession | Text(30) | (Ja) | Klarttext für Konfession |
| 12 | Konfession, Statistik-Kürzel | StatistikKrz Konfession | Text(10) | (Ja) | Statistik-Kürzel der Konfession aus Statkue.mdb, Tabelle<br>"Religionen" |
| 13 | Aufnahmedatum | Aufnahmedatum | Datum | (Ja) | Datum der Aufnahme an Schule |
| 14 | Datum Abmeldung vom Religionsunterricht | Abmeldedatum Religionsunterricht | Datum | Ja |  |
| 15 | Datum (Wieder-)Anmeldung zum Religionsunterricht | Anmeldedatum Religionsunterricht | Datum | Ja |  |
| 16 | Schulpflicht erfüllt | Schulpflicht erf. | Text(1) | Nein | Als "J" oder "N" |
| 17 | Reform-Pädagogik | Reform-Pädagogik | Text(1) | Ja | Als Statistik-Kürzel aus Statkue.mdb, Tabelle<br>"Reformpädagogik" |
| 18 | Nr. der Stammschule | Nr. Stammschule | Text(6) | (Ja) | Nummer der Stammschule, nur bei Status = Extern<br>notwendig |
| 19 | Jahr | Jahr | Integer | (Ja) | Das Schuljahr, in dem sich der Schüler befindet. Muss nicht immer<br>identisch mit dem aktuellen Schuljahr sein (z.B. bei Abgängern) |
| 20 | Abschnitt | Abschnitt | Integer | (Ja) | Der Abschnitt, in dem sich der Schüler befindet. Muss nicht immer<br>identisch mit dem aktuellen Abschnitt sein (z.B. bei Abgängern) |
| 21 | Jahrgang | Jahrgang | Text(20) | (Ja) | Muss identisch sein mit einer Bezeichnung aus<br>Jahrgaenge.dat |
| 22 | Klasse | Klasse | Text(6) | (Ja) | Aktuelle Klasse, muss auf einen Eintrag aus Klassen.dat<br>verweisen |
| 23 | Gliederung | Schulgliederung | Text(3) | (Ja) | Aktuelle Gliederung (z.B: ***, GY8, GY9, A01). Als<br>Statistik-Kürzel (z.B. ***, GY8, GY9, A01) aus Statkue.mdb, Tabelle<br>"Gliederung", Felder BKAnlage + BKTyp |
| 24 | Klassen-Organisationsform | OrgForm | Text(1) | (Ja) | Aktuelle Organisationsform. Als Statistik-Kürzel aus Statkue.mdb,<br>Tabelle "Organisationsform". |
| 25 | Klassenart | Klassenart | Text(2) | (Ja) | Als Statistik-Kürzel aus Statkue.mdb, Tabelle "ZulKlArt". Bleibt<br>bei Berufskollegs leer. |
| 26 | Fachklasse | Fachklasse | Text(10) | (Ja) | Nur bei BKAktuelle FachklasseIn der Form<br>BKIndex-Fachklassenschlüssel-Ausprägung (z.B.1-113-00 Bankkaufmann), aus<br>Statkue.mdb, Tabelle "Fachklasse". |
| 27 | Wird erst später benutzt |  |  |  | Noch leer lassen |
| 28 | Verpflichtung zu Teilnahme an Sprachförderkurs | Verpflichtung Sprachförderkurs | Text(1) | Nein | Als "J" oder "N" |
| 29 | Teilnahme an Sprachförderkurs | Teilnahme Sprachförderkurs | Text(1) | Nein | Als "J" oder "N" |
| 30 | Einschulungsjahr | Einschulungsjahr | Integer | (Ja) |  |
| 31 | Übergangsempfehlung für Jahrgang 5 | Übergangsempf. JG5 | Text(10) | (Ja) | Als Statistik-Kürzel aus Statkue.mdb, Tabelle<br>"SchuelerUebergangsempfehlung5Jg". |
| 32 | Jahr des Wechsels in Sek. I | Jahr Wechsel S1 | Integer | (Ja) |  |
| 33 | Erste Schulform Sek. I | 1. Schulform S1 | Text(10) | (Ja) | Als Statistik-Kürzel aus Statkue.mdb, Tabelle<br>"SchuelerErsteSchulformSekI". |
| 34 | Jahr des Wechsels in Sek. II | Jahr Wechsel S2 | Integer | (Ja) |  |
| 35 | Haupt-Förderschwerpunkt | Förderschwerpunkt | Text(2) | Ja | Als Statistik-Kürzel aus Statkue.mdb, Tabelle<br>"Förderschwerpunkt". |
| 36 | Weiterer Förderschwerpunkt | 2. Förderschwerpunkt | Text(2) | Ja | Als Statistik-Kürzel aus Statkue.mdb, Tabelle<br>"Förderschwerpunkt". |
| 37 | Schwerstbehinderung | Schwerstbehinderung | Text(1) | Nein | Als "J" oder "N" |
| 38 | Autist | Autist | Text(1) | Nein | Als "J" oder "N" |
| 39 | Nummer der zuletzt besuchten Schule | LS Schulnr. | Text(6) | (Ja) |  |
| 40 | Schulform der zuletzt besuchten Schule | LS Schulform | Text(2) | (Ja) | Als Statistik-Kürzel aus Statkue.mdb, Tabelle<br>"Schulformen". |
| 41 | Allgemeine Herkunftsangabe | Herkunft | Text(3) | (Ja) | Statistik-Kürzel aus Statkue.mdb, Tabelle<br>"Herkunftsschulform" |
| 42 | Entlassdatum an abgebender Schule | LS Entlassdatum | Datum | (Ja) | Als TT.MM.JJJJ |
| 43 | Entlassjahrgang | LS Jahrgang | Text(2) | (Ja) | Als Statistik-Kürzel aus Statkue.mdb, Tabelle<br>"ZulJahrgänge" |
| 44 | Versetzung an abgeb. Schule | LS Versetzung | Integer | (Ja) | 0: Ja 1: Nein 2: Freiw. Rücktritt |
| 45 | Reform-Pädagogik an abgebender Schule | LS Reformpädagogik | Text(1) | (Ja) | Als Statistik-Kürzel aus Statkue.mdb, Tabelle<br>"Reformpädagogik" |
| 46 | Gliederung an abgebender Schule | LS Gliederung | Text(3) | (Ja) | Als Statistik-Kürzel aus Statkue.mdb, Tabelle "Gliederung",<br>Felder BKAnlage + BKTyp |
| 47 | Fachklasse an abgebender Schule | LS Fachklasse | Text(10) | (Ja) | Nur bei BKAktuelle FachklasseIn der Form<br>BKIndex-Fachklassenschlüssel-Ausprägung (z.B.1-113-00 Bankkaufmann)Aus<br>Statkue.mdb, Tabelle "Fachklasse" |
| 48 | Art des Abschlusses an abgebender Schule | LS Abschluss | Text(2) | (Ja) | Als Statistik-Kürzel aus Statkue.mdb, Tabelle<br>"Abgangsart" |
| 49 | Art des Abschlusses an eigener Schule bei Verlassen der eigenen<br>Schule | Abschluss | Text(2) | (Ja) | Als Statistik-Kürzel aus Statkue.mdb, Tabelle<br>"Abgangsart" |
| 50 | Schulnummer der aufnehmenden Schule | Schulnr. neue Schule | Text(6) | (Ja) |  |
Optional kann die Datei auch noch die folgenden Daten enthalten.
| 51 | Jahr des Zuzugs | Zuzugsjahr | Integer | (Ja) |  |
| --- | --- | --- | --- | --- | --- |
| 52 | Geburtsland Schüler | Geburtsland Schüler | Text(3) | (Ja) | Als Statistik-Kürzel (z.B. 000 für Deutschland) aus Statkue.mdb,<br>Tabelle "Nationalitäten |
| 53 | Geburtsland Mutter | Geburtsland Mutter | Text(3) | (Ja) | Als Statistik-Kürzel (z.B. 000 für Deutschland) aus Statkue.mdb,<br>Tabelle "Nationalitäten |
| 54 | Geburtsland Vater | Geburtsland Vater | Text(3) | (Ja) | Als Statistik-Kürzel (z.B. 000 für Deutschland) aus Statkue.mdb,<br>Tabelle "Nationalitäten |
| 55 | Verkehrssprache in der Familie | Verkehrssprache | Text(2) | (Ja) | Als Statistik-Kürzel (z.B. "de" für Deutsch) aus Statkue.mdb,<br>Tabelle "SchuelerVerkehrssprache" |
| 56 | Dauer des Kindergartenbesuches | Dauer Kindergartenbesuch | Text(1) | (Ja) | Nur bei Grundschulengültige Einträge 0: Kein Kindergarten1: unter 1 Jahr 2: 1 bis unter 2 Jahre 3: 2 bis unter 3 Jahre 4: 3 Jahre und mehr |
| 57 | Ende der Eingliederungsphase | Migrationsinformation | Datum | (Ja) |  |
| 58 | Ende Anschlussförderung | Migrationsinformation | Datum | (Ja) | Als Statistik-Kürzel (z.B. "de" für Deutsch) aus Statkue.mdb,<br>Tabelle "SchuelerVerkehrssprache" |
Vorname Geburtsdatum Geschlecht Status PLZ Ort Straße Aussiedler 1.
Staatsang. Konfession StatistikKrz Konfession Aufnahmedatum Abmeldedatum
Religionsunterricht Anmeldedatum Religionsunterricht Schulpflicht erf.
Reform-Pädagogik Nr. Stammschule Jahr Abschnitt Jahrgang Klasse
Schulgliederung OrgForm Klassenart Fachklasse Noch frei Verpflichtung
Sprachförderkurs Teilnahme Sprachförderkurs Einschulungsjahr
Übergangsempf. JG5 Jahr Wechsel S1 1. Schulform S1 Jahr Wechsel S2
Förderschwerpunkt 2. Förderschwerpunkt Schwerstbehinderung Autist LS
Schulnr. LS Schulform Herkunft LS Entlassdatum LS Jahrgang LS Versetzung
LS Reformpädagogik LS Gliederung LS Fachklasse LS Abschluss Abschluss
Schulnr. neue Schule Zuzugsjahr Geburtsland Schüler Geburtsland Mutter
Geburtsland Vater Verkehrssprache Dauer Kindergartenbesuch  
Barnes Daniela 17.11.1995 w 2 46499 Hamminkeln Eppenbrunner Weg 352 N
000 ohne B. OH 01.08.2001N2005 2 05 05A-   -   N NN N0124 151 de 3  
Blöde Marcel 22.03.1995 m 2 44869 Bochum Froschteichplatz 5 N 000 ev. ER
01.08.2001N2005 2 05 05A-   -   N NN N04  
Eckhoff Franz 17.06.1995 m 2 46499 Hamminkeln Ströteberger Str. 23 N 000
ohne B. OH 01.08.2001N2005 2 05 05A GY9N NN N0124 151 de 3 }}Daniela 17.11.1995 ... ... Barnes Daniela 17.11.1995 ... }}In diesem Fall enthält die Importdatei den Eintrag "Barnes, Daniela"
zweimal, trotzdem wird beim Import nur ein Datensatz angelegt.Daniela 17.11.1995 ... ... Barnes#C02-1 Daniela 17.11.1995 … }}In diesem Fall enthält die Importdatei den Eintrag "Barnes, Daniela"
zweimal, aber mit unterschiedlichen Klassenbezeichnungen nach dem
Nachnamen. Daher werden zwei Datensätze angelegt.

## SchuelerBisherigeSchulen.datBeschreibung: Enthält weitere Schulen, die bisher besucht wurden(zusätzlich zu der in den Basisdaten enthaltenen letzten Schule).
| Spalte | Beschreibung | Header-Text | Datentyp | Darf leer sein? | Bemerkung |
| --- | --- | --- | --- | --- | --- |
| 1 | Nachname des Schülers | Nachname | Text(50) | Nein | Muss in Verbindung mit Vorname und Geburtsdatum auf einen Eintrag<br>aus SchuelerBasisdaten.dat verweisen. Falls notwendig, mit Klasse<br>ergänzen (mit #-Zeichen getrennt - siehe Beschreibung zu<br>SchuelerBasisdaten.dat) |
| 2 | Vorname des Schülers | Vorname | Text(30) | Nein |  |
| 3 | Geburtsdatum des Schülers | Geburtsdatum | Datum | Nein | Als TT.MM.JJJJ |
| 4 | Schulform | Schulform | Text(2) | Ja | Schulform der jeweiligen Schule: G Grundschule H Hauptschule V nicht umorganisierte Volksschule S Sonderschule im Bereich G/H R Realschule GE Gesamtschule FW Freie Waldorfschule FW Hibernia GY Gymnasium WB Weiterbildungskolleg BK Berufskolleg SR Sonderschule im Bereich Realschule SG Sonderschule im Bereich Gymnasium SB Sonderschule im Bereich Berufskolleg |
| 5 | Schulname | Schulname | Text(100) | Ja | Name der Schule |
| 6 | Schulanschrift | Schulanschrift | Text(100) | Ja | Anschrift der Schule |
| 7 | Schulnr | Schulnr | Text(6) | Ja | Schulnr. der Schule |
| 8 | Abschlussart | Abschlussart | Text(200) | Ja | Art des Abschlusses an der Schule |
| 9 | Bemerkung | Bemerkung | Text(30) | Ja | Bemerkung oder Grund für Entlassung |
| 10 | Versetzt | Versetzt | Text(1) | Ja | Wurde der Schüler versetzt? 0: Ja 1: Nein 2: Rücktritt |
| 11 | Datum von | Datum von | Datum | Ja | Datum, zu dem der Schüler in die Schule kam |
| 12 | Datum bis | Datum bis | Datum | Ja | Datum, zu dem der Schüler die Schule verlassen hat |
| 13 | Jahrgang von | Jahrgang von | Text(2) | Ja | Jahrgang, den der Schüler bei Eintritt in die Schule besucht<br>hat |
| 14 | Jahrgang bis | Jahrgang bis | Text(2) | Ja | Jahrgang, in dem der Schüler die Schule verlassen hat |

## SchuelerErzieher.datBeschreibung: Enthält Angaben zu den Erziehern der Schüler. Pro
Datensatz können die Namen von 1 (bei allein erziehendem Elternteil)
oder 2 Personen (i.d.R. Mutter und Vater) eingegeben werden. Falls zu
einem Schüler mehrere Datensätze existieren, sollen diese in der
Reihenfolge der "Wichtigkeit" (wichtigste Adresse zuerst) erscheinen.| Spalte | Beschreibung              | Header-Text       | Datentyp | Darf leer sein? | Bemerkung                                                                                                                                                                                                            |
|--------|---------------------------|-------------------|----------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Nachname des Schülers     | Nachname          | Text(50) | Nein            | Muss in Verbindung mit Vorname und Geburtsdatum auf einen Eintrag aus SchuelerBasisdaten.dat verweisen. Falls notwendig, mit Klasse ergänzen (mit #-Zeichen getrennt - siehe Beschreibung zu SchuelerBasisdaten.dat) |
| 2      | Vorname des Schülers      | Vorname           | Text(30) | Nein            |                                                                                                                                                                                                                      |
| 3      | Geburtsdatum des Schülers | Geburtsdatum      | Datum    | Nein            | Als TT.MM.JJJJ                                                                                                                                                                                                       |
| 4      | Erzieherart               | Erzieherart       | Text(30) | Ja              | z.B. "Eltern", "Mutter", "Vater" usw.                                                                                                                                                                                |
| 5      | Anrede 1. Person          | Anrede 1.Person   | Text(20) | Ja              | "Herr" oder "Frau"                                                                                                                                                                                                   |
| 6      | Titel 1. Person           | Titel 1.Person    | Text(10) | Ja              |                                                                                                                                                                                                                      |
| 7      | Nachname 1. Person        | Nachname 1.Person | Text(50) | Nein            |                                                                                                                                                                                                                      |
| 8      | Vorname 1. Person         | Vorname 1.Person  | Text(30) | Ja              |                                                                                                                                                                                                                      |
| 9      | Anrede 2. Person          | Anrede 2.Person   | Text(20) | Ja              | "Herr" oder "Frau"                                                                                                                                                                                                   |
| 10     | Titel 2. Person           | Titel 2.Person    | Text(10) | Ja              |                                                                                                                                                                                                                      |
| 11     | Nachname 2. Person        | Nachname 2.Person | Text(50) | Ja              |                                                                                                                                                                                                                      |
| 12     | Vorname 2. Person         | Vorname 2.Person  | Text(30) | Ja              |                                                                                                                                                                                                                      |
| 13     | Straße u. Hausnr.         | Straße            | Text(50) | Ja              |                                                                                                                                                                                                                      |
| 14     | PLZ                       | PLZ               | Text(10) | Ja              | Falls Ort angegeben, darf PLZ nicht leer sein!                                                                                                                                                                       |
| 15     | Ort                       | Ort               | Text(50) | Ja              | Falls PLZ angegeben, darf Ort nicht leer sein!                                                                                                                                                                       |
| 16     | Ortsteil                  | Ortsteil          | Text(30) | Ja              |                                                                                                                                                                                                                      |Optional kann die Datei auch noch die folgenden Daten enthalten.| Spalte | Beschreibung            | Header-Text      | Datentyp | Darf leer sein? | Bemerkung                                    |
|--------|-------------|------|----------|-----|----------|
| 17     | E-Mail-Adresse 1.Person | E-Mail 1. Person | Text(50) | Ja              |                                              |
| 18     | Erhält Anschreiben      | Anschreiben      | Text(1)  | Nein            | Als "J" oder "N", wenn leer wird "J" gesetzt |
| 19     | E-Mail-Adresse 2.Person | E-Mail 2. Person | Text(50) | Ja              |                                              |Vorname Geburtsdatum Erzieherart Anrede 1.Person Titel 1.Person Nachname
1.Person Vorname 1.Person Anrede 2.Person Titel 2.Person Nachname
2.Person Vorname 2.Person Straße PLZ Ort Ortsteil E-Mail 1. Person
Anschreiben E-Mail 2. Person  
Abel Jennifer 09.11.1990 Mutter FrauAbel AndreaKresseweg 188 33145 Warnburg Osterfelde andrea.abel@mymail.de J` `  
`Abendroth`Marko 04.05.1987 Eltern Frau Dr. Abendroth Almuth HerrAbendroth Anton Basilikumweg 105 33145 Warburg Westerstede
m.abendroth@t-online.de J a.abendroth@t-online.de }}

## SchuelerFachBemerkungen.datBeschreibung: Mit dieser Datei können die fachbezogenen Bemerkungen zum
jeweiligen Lernabschnitt exportiert/importiert werden. Der Aufbau
gleicht dabei den Vermerken, ist jedoch an das Schuljahr und den
Abschnitt gekoppelt.| Spalte | Beschreibung                 | Header-Text  | Datentyp | Darf leer sein? | Bemerkung                                                                                                                                                                                                            |
|--------|------------------------------|--------------|----------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Nachname des Schülers        | Nachname     | Text(50) | Nein            | Muss in Verbindung mit Vorname und Geburtsdatum auf einen Eintrag aus SchuelerBasisdaten.dat verweisen. Falls notwendig, mit Klasse ergänzen (mit #-Zeichen getrennt - siehe Beschreibung zu SchuelerBasisdaten.dat) |
| 2      | Vorname des Schülers         | Vorname      | Text(30) | Nein            |                                                                                                                                                                                                                      |
| 3      | Geburtsdatum des Schülers    | Geburtsdatum | Datum    | Nein            | Als TT.MM.JJJJ                                                                                                                                                                                                       |
| 4      | Jahr                         | Jahr         | Integer  | Nein            | Schuljahr                                                                                                                                                                                                            |
| 5      | Abschnitt                    | Abschnitt    | Integer  | Nein            | Halbjahr bzw. Quartal                                                                                                                                                                                                |
| 6      | schulinterne Fachbezeichnung | Fach         | Text     | Nein            | Fach, für den der Bemerkungstext gilt.                                                                                                                                                                               |Danach folgt der eigentliche Bemerkungstext. Zwischen den Markierungen
<V> und </V>.Vorname Geburtsdatum Jahr Abschnitt Fach  
Müller Hans 10.03.1971 2013 2 D  
<V>  
Alles super auf dem Zeugnis!  
</V> }}

## SchuelerFehlstunden.dat| Spalte | Beschreibung             | Header-Text  | Datentyp | Darf leer sein? | Bemerkung                          |
|--------|--------------|--|----------|-----||
| 1      | Nachname                 | Name         | Text     | N               |                                    |
| 2      | Vorname                  | Vorname      | Text     | N               |                                    |
| 3      | Geburtsdatum             | Geburtsdatum | Datum    | N               |                                    |
| 4      | Klasse                   | Klasse       | Text     | N               |                                    |
| 5      | Schuljahr                | Jahr         | Zahl     | N               |                                    |
| 6      | Halbjahr/Quartal         | Abschnitt    | Zahl     | N               |                                    |
| 7      | Tag der Fehlzeit         | Datum        | Datum    | N               |                                    |
| 8      | Fach                     | Fach         | Text     | J               | Kürzel des Faches in der Datenbank |
| 9      | Stunde Anfang            | von_Std.     | Zahl     | J               |                                    |
| 10     | Stunde Ende              | bis_Std.     | Zahl     | J               |                                    |
| 11     | Anzahl der Fehlstunden   | Fehlstd.     | Zahl     | J               |                                    |
| 12     | Entschuldigt als Ja/Nein | Entschuldigt | Test(1)  | J               |                                    |
| 13     | Lehrer-Kürzel            | Lehrkraft    | Text     | J               |                                    |Vorname Geburtsdatum Klasse Jahr Abschnitt Datum Fach von_Std. bis_Std.
Fehlstd. Entschuldigt Lehrkraft  
Ann Klaudia 28.09.2001 10a 2016 2 16.12.2016 AL 1 2 2 N AN}}

## SchuelerGSDaten.datBeschreibung: Enthält die Daten der Herkunftsgrundschule, welche zur
Aufnahmeentscheidung herangezogen werden.| Spalte | Beschreibung                | Header-Text                 | Datentyp | Darf leer sein? | Bemerkung                                                                                                                                                                                                                                                                                                                                               |
|--------|-----------------------------|-----------------------------|----------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Nachname des Schülers       | Nachname                    | Text(50) | Nein            | Muss in Verbindung mit Vorname und Geburtsdatum auf einen Eintrag aus SchuelerBasisdaten.dat verweisen. Falls notwendig, mit Klasse ergänzen (mit #-Zeichen getrennt - siehe Beschreibung zu SchuelerBasisdaten.dat). Außerdem muss ein entsprechender Eintrag (in Verbindung mit Jahr und Abschnitt) in SchuelerLernabschnitsdaten.dat vorhanden sein. |
| 2      | Vorname des Schülers        | Vorname                     | Text(30) | Nein            |                                                                                                                                                                                                                                                                                                                                                         |
| 3      | Geburtsdatum des Schülers   | Geburtsdatum                | Datum    | Nein            |                                                                                                                                                                                                                                                                                                                                                         |
| 4      | Zeugnisnote Sprachgebrauch  | Sprachgebrauch              | Text     | Ja              | Normale Zeugnisnote als Zahl, z.B. 2                                                                                                                                                                                                                                                                                                                    |
| 5      | Zeugnisnote Lesen           | Lesen                       | Text     | Ja              |                                                                                                                                                                                                                                                                                                                                                         |
| 6      | Zeugnisnote Rechtschreiben  | Rechtschreiben              | Text     | Ja              |                                                                                                                                                                                                                                                                                                                                                         |
| 7      | Zeugnisnote Sachunterricht  | Sachunterricht              | Text     | Ja              |                                                                                                                                                                                                                                                                                                                                                         |
| 8      | Zeugnisnote Mathematik      | Mathematik                  | Text     | Ja              |                                                                                                                                                                                                                                                                                                                                                         |
| 9      | Zeugnisnote Englisch        | Englisch                    | Text     | Ja              |                                                                                                                                                                                                                                                                                                                                                         |
| 10     | Zeugnisnote KunstTextil     | KunstTextil                 | Text     | Ja              |                                                                                                                                                                                                                                                                                                                                                         |
| 11     | Zeugnisnote Musik           | Musik                       | Text     | Ja              |                                                                                                                                                                                                                                                                                                                                                         |
| 12     | Zeugnisnote Sport           | Sport                       | Text     | Ja              |                                                                                                                                                                                                                                                                                                                                                         |
| 13     | Zeugnisnote Religion        | Religion                    | Text     | Ja              |                                                                                                                                                                                                                                                                                                                                                         |
| 14     | Durchschnittsnote Sprache   | Durchschnittsnote_Sprache   | Float    | Ja              | Durchschnittsnote Sprache, Lesen, Rechtschreibung                                                                                                                                                                                                                                                                                                       |
| 15     | Durchschnittsnote Einfach   | Durchschnittsnote_Einfach   | Float    | Ja              | Durchschnittsnote aller Fächer                                                                                                                                                                                                                                                                                                                          |
| 16     | Durchschnittsnote Gewichtet | Durchschnittsnote_Gewichtet | Float    | Ja              | Durchschnittsnote aller Fächer, Hauptfächer doppelt gewichtet, Religionslehre nicht gewertet                                                                                                                                                                                                                                                            |
| 17     | Anrede Klassenlehrer        | Anrede_Klassenlehrer        | Text     | Ja              | "Herr", "Frau"                                                                                                                                                                                                                                                                                                                                          |
| 18     | Name Klassenlehrer          | Klassenlehrer               | Text     | Ja              | Nachname der Klassenlehrerin, des Klassenlehrers                                                                                                                                                                                                                                                                                                        |
| 19     | Klasse                      | Klasse                      | Text     | Ja              |                                                                                                                                                                                                                                                                                                                                                         |
| 20     | Geschwisterkind             | Geschwisterkind             | Text(1)  | Ja              | "J" oder "N". Geschwisterkind ist bereits an der Schule angemeldet.                                                                                                                                                                                                                                                                                     |Vorname Geburtsdatum Sprachgebrauch Lesen Rechtschreiben Sachunterricht
Mathematik Englisch KunstTextil Musik Sport Religion
DurchschnittsZeugnisnote_Sprache DurchschnittsZeugnisnote_Einfach
DurchschnittsZeugnisnote_Gewichtet Anrede_Klassenlehrer Klassenlehrer
Klasse Geschwisterkind  
Becker Jule Lene 06.06.2004 2 2 2 2 2 2 2 2 2 2 2 2 2 Frau Herm\-  
Bludau Leo Emilio 18.08.2004 1 2 1 2 1 2 1 2 1 2 1,33 1,5 1,43 Frau Herm\- }}

## SchuelerLeistungsdaten.datBeschreibung: Enthält die Leistungsdaten (Fächer und Noten) eines
Lernabschnittes (=Halbjahr oder Quartal) der Schüler.
| Spalte | Beschreibung | Header-Text | Datentyp | Darf leer sein? | Bemerkung |
| --- | --- | --- | --- | --- | --- |
| 1 | Nachname des Schülers | Nachname | Text(50) | Nein | Muss in Verbindung mit Vorname und Geburtsdatum auf einen Eintrag<br>aus SchuelerBasisdaten.dat verweisen. Falls notwendig, mit Klasse<br>ergänzen (mit #-Zeichen getrennt - siehe Beschreibung zu<br>SchuelerBasisdaten.dat). Außerdem muss ein entsprechender Eintrag (in<br>Verbindung mit Jahr und Abschnitt) in SchuelerLernabschnitsdaten.dat<br>vorhanden sein. |
| 2 | Vorname des Schülers | Vorname | Text(30) | Nein |  |
| 3 | Geburtsdatum des Schülers | Geburtsdatum | Datum | Nein |  |
| 4 | Jahr | Jahr | Integer | Nein | Schuljahr |
| 5 | Abschnitt | Abschnitt | Integer | Nein | Halbjahr bzw. Quartal |
| 6 | Fach | Fach | Text(20) | Nein | Muss identisch sein mit einer schulinternen Kurzbez. aus<br>Faecher.dat |
| 7 | Fachlehrer | Fachlehrer | Text(10) | (Ja) | Muss identisch sein mit einem schulinternen Kürzel aus<br>Lehrkraefte.dat |
| 8 | Kursart | Kursart | Text(5) | Ja | Die "schülerbezogene Kursart", z.B. GKS, GKM aus Statkue.mdb,<br>Tabelle "ZulKuArt". |
| 9 | Kurs | Kurs | Text(20) | Ja | Die Kursbezeichnung, muss zusammen mit Jahr, Abschnitt und<br>Jahrgang des Schülers auf einen eindeutigen Eintrag in Kurse.dat<br>verweisen |
| 10 | Note | Note | Text(2) | Ja | Die Note in üblicher Bezeichnung ("2", "2+", "2-" usw.) |
| 11 | AbiFach | Abiturfach | Integer | Ja | Angabe um welches Abiturfach es sich handelt (1,2,3,4)Falls leer,<br>wird beim Import versucht, über die Kursart (Spalte 8) das Abiturfach zu<br>setzen |
| 12 | Wochenstunden | Wochenstd. | Integer | (Ja) | Gesamt-Wochenstunden |
| 13 | Schul-Nummer | Externe Schulnr. | Text(6) | Ja | Falls das Fach extern unterrichtet wird, muss hier die Nummer der<br>Schule eingetragen werden, an der der Unterricht stattfindet |
| 14 | Zusatzkraft | Zusatzkraft | Text(10) | Ja | Wenn im Rahmen von "team teaching" eine zweite Kraft zeitweise am<br>Unterricht teilnimmt, wird diese hier verwaltet (Verweis auf Eintrag in<br>Lehrkraefte.dat). Wichtig: Nur bei Unterricht im Klassenverband, bei<br>Kurs-bezogenem Unterricht sind Einträge in KurseLehrkraefte.dat<br>notwendig |
| 15 | Wochenstunden Zusatzkraft | Wochenstd. ZK | Integer | Ja | Die Wochenstd. der Zusatzkraft |
| 16 | Oberstufen Jahrgang | Jahrgang | Text(2) | Ja | Diese Spalte muss nur bei einem Datenaustausch mit LuPO einen<br>Wert enthalten. Folgende Werte sind gültig (für Gymnasien und Gesamtschulen): EF, Q1,<br>Q2. Bei Weiterbildungskollegs sind folgende Einträge gültig: 01, 02, 03, 04,<br>05, 06 |
| 17 | Kurs Jahrgänge | Jahrgänge | Text(50) | Ja | Hier können die Jahrgänge des Kurses (Spalte 9) eingegeben<br>werden, wird nur bei einem Export aus Kurs42 benötigt, um den Kurs zu<br>identifizieren. |
| 18 | Fehlstunden | Fehlstd. | Integer | Ja | Hier können die (fachbezogenen) Fehlstunden (Summe aus<br>entschuldigten und unentschuldigten Fehlstunden) übergeben<br>werden. |
| 19 | Fehlstunden unentschuldigt | unentsch. Fehlstd. | Integer | Ja | Hier können die (fachbezogenen) unentschuldigten Fehlstunden<br>übergeben werden. |
Vorname Geburtsdatum Jahr Abschnitt Fach Fachlehrer Kursart Kurs Note
Abiturfach Wochenstd. Externe Schulnr Zusatzkraft Wochenstd. ZK Jahrgang
Jahrgänge Fehlstd. unentsch. Fehlstd.  
Fatirmay Jasemin 26.01.1995 2005 2 F6 BO PUT33BT 1` `  
`Fatirmay`Jasemin 26.01.1995 2005 2 M SC WPII23  
`Fatirmay`Jasemin 26.01.1995 2005 2 E5 MUE PUT23  
`Herse`Tobias 08.04.1995 2005 2 KU ED GKM KU-G1 3+ 4 315 2  
Herse Tobias 08.04.1995 2005 2 E WE LK1 E-L1 2+ 1 50 0  
Herse Tobias 08.04.1995 2005 2 D BO GKS D-G2 2- 3 30 0  
Herse Tobias 08.04.1995 2005 2 M RT GKS M-G1 431 0  
Herse Tobias 08.04.1995 2005 2 GZ WI ZK GZ-G1 1-30 0  
Herse Tobias 08.04.1995 2005 2 PKE WE PJK PJK-G1 1-30 0  
Herse Tobias 08.04.1995 2005 2 VKM QU VTF VKM-G1 E320 0 }}

## SchuelerLELS.datBeschreibung: Mit dieser Datei können die Bemerkungen zum
außerunterrichtlichen Engagement des jeweiligen Lernabschnitts
exportiert/importiert werden. Der Aufbau gleicht dabei den Vermerken,
ist jedoch an das Schuljahr und den Abschnitt gekoppelt.| Spalte | Beschreibung              | Header-Text  | Datentyp | Darf leer sein? | Bemerkung                                                                                                                                                                                                            |
|--------|---------------------------|--------------|----------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Nachname des Schülers     | Nachname     | Text(50) | Nein            | Muss in Verbindung mit Vorname und Geburtsdatum auf einen Eintrag aus SchuelerBasisdaten.dat verweisen. Falls notwendig, mit Klasse ergänzen (mit #-Zeichen getrennt - siehe Beschreibung zu SchuelerBasisdaten.dat) |
| 2      | Vorname des Schülers      | Vorname      | Text(30) | Nein            |                                                                                                                                                                                                                      |
| 3      | Geburtsdatum des Schülers | Geburtsdatum | Datum    | Nein            | Als TT.MM.JJJJ                                                                                                                                                                                                       |
| 4      | Jahr                      | Jahr         | Integer  | Nein            | Schuljahr                                                                                                                                                                                                            |
| 5      | Abschnitt                 | Abschnitt    | Integer  | Nein            | Halbjahr bzw. Quartal                                                                                                                                                                                                |Danach folgt der eigentliche Bemerkungstext. Zwischen den Markierungen
<V> und </V>.Vorname Geburtsdatum Jahr Abschnitt  
Müller Hans 10.03.1971 2013 2  
<V>  
Hans wurde zum Schulsanitäter ausgebildet!  
</V> }}

## SchuelerLernabschnittsdaten.datBeschreibung: Enthält die Daten für einen Lernabschnitt (=Halbjahr oder
Quartal) eines Schülers.| Spalte | Beschreibung                 | Header-Text                 | Datentyp | Darf leer sein? | Bemerkung                                                                                                                                                                                                            |
|--------|------------------------------|-----------------------------|----------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Nachname des Schülers        | Nachname                    | Text(50) | Nein            | Muss in Verbindung mit Vorname und Geburtsdatum auf einen Eintrag aus SchuelerBasisdaten.dat verweisen. Falls notwendig, mit Klasse ergänzen (mit #-Zeichen getrennt - siehe Beschreibung zu SchuelerBasisdaten.dat) |
| 2      | Vorname des Schülers         | Vorname                     | Text(30) | Nein            |                                                                                                                                                                                                                      |
| 3      | Geburtsdatum des Schülers    | Geburtsdatum                | Datum    | Nein            | Als TT.MM.JJJJ                                                                                                                                                                                                       |
| 4      | Jahr                         | Jahr                        | Integer  | Nein            | Schuljahr                                                                                                                                                                                                            |
| 5      | Abschnitt                    | Abschnitt                   | Integer  | Nein            | Halbjahr bzw. Quartal                                                                                                                                                                                                |
| 6      | Jahrgang                     | Jahrgang                    | Text(20) | (Ja)            | Der Jahrgang, in dem sich der Schüler im jeweiligen Abschnitt befand. Muss identisch sein mit einer Bezeichnung aus Jahrgaenge.dat                                                                                   |
| 7      | Klasse                       | Klasse                      | Text(6)  | (Ja)            | Klasse im jeweiligen Abschnitt, muss auf einen Eintrag aus Klassen.dat verweisen                                                                                                                                     |
| 8      | Gliederung                   | Schulgliederung             | Text(3)  | (Ja)            | Gliederung im jeweiligen Abschnitt Als Statistik-Kürzel (z.B. \*\*\*, GY8, GY9, A01) aus Statkue.mdb, Tabelle "Gliederung", Felder BKAnlage + BKTyp                                                                  |
| 9      | Klassen-Organisationsform    | OrgForm                     | Text(1)  | (Ja)            | Organisationsform im jeweiligen Abschnitt. Als Statistik-Kürzel aus Statkue.mdb, Tabelle "Organisationsform".                                                                                                        |
| 10     | Klassenart                   | Klassenart                  | Text(2)  | (Ja)            | Als Statistik-Kürzel aus Statkue.mdb, Tabelle "ZulKlArt". Bleibt bei Berufskollegs leer.                                                                                                                             |
| 11     | Fachklasse                   | Fachklasse                  | Text(10) | (Ja)            | Nur bei BKFachklasse im jeweiligen Abschnitt. In der Form BKIndex-Fachklassenschlüssel-Ausprägung (z.B.1-113-00 Bankkaufmann), aus Statkue.mdb, Tabelle "Fachklasse".                                                |
| 12     | Haupt-Förderschwerpunkt      | Förderschwerpunkt           | Text(2)  | Ja              | Förderschwerpunkt im jeweiligen AbschnittAls Statistik-Kürzel aus Statkue.mdb, Tabelle "Förderschwerpunkt".                                                                                                          |
| 13     | Weiterer Förderschwerpunkt   | 2\. Förderschwerpunkt       | Text(2)  | Ja              | Förderschwerpunkt im jeweiligen AbschnittAls Statistk-Kürzel, Tabelle "Förderschwerpunkt".                                                                                                                           |
| 14     | Schwerstbehinderung          | Schwerstbehinderung         | Text(1)  | Nein            | Schwerstbehinderung im jeweiligen AbschnittAls "J" oder "N"                                                                                                                                                          |
| 15     | Wertung                      | Wertung                     | Text(1)  | Nein            | Wird der Abschnitt gewertet? ("J": ja, "N": nein)                                                                                                                                                                    |
| 16     | Wiederholung                 | Wiederholung                | Text(1)  | Nein            | Wird der Abschnitt wiederholt? ("J": ja, "N": nein)                                                                                                                                                                  |
| 17     | Klassenlehrer                | Klassenlehrer               | Text(10) | Ja              | Muss identisch sein mit einem schulinternen Kürzel aus Lehrkraefte.dat                                                                                                                                               |
| 18     | Versetzungsentscheidung      | Versetzung                  | Text(2)  | Ja              | Wurde der Schüler versetzt?V: versetzt, VV: vorversetzt,FR: freiwillig zurück, N: Nicht versetzt, NP: Nicht versetzt mit Nachpr., A: Abschluss                                                                       |
| 19     | Abschlussart                 | Abschluss                   | Integer  | Ja              | 0: Jahrgang ohne Abschluss1: mit Abschluss2: ohne Abschluss3: ohne Abschluss mit Nachpr.                                                                                                                             |
| 20     | Schwerpunkt                  | Schwerpunkt                 | Text(50) | Ja              | Für Realschulen: Schwerpunkt im Klartext. Bei allen anderen Schulen leer lassen (die Anzahl der Trennzeichen \| muss aber stimmen!)                                                                                  |
| 21     | Konferenzdatum               | Konferenzdatum              | Datum    | Ja              | Datum der Konferenz                                                                                                                                                                                                  |
| 22     | Zeugnisdatum                 | Zeugnisdatum                | Datum    | Ja              | Datum der Zeugnisausgabe                                                                                                                                                                                             |
| 23     | Summe der Fehlstunden        | SummeFehlstd                | Integer  | Ja              |                                                                                                                                                                                                                      |
| 24     | Summe unentsch. Fehlstunden  | SummeFehlstd_unentschuldigt | Integer  | Ja              |                                                                                                                                                                                                                      |
| 25     | allgemein Bildendr Abschluss | allg.-bildender Abschluss   | Text(50) | Ja              | nur BK                                                                                                                                                                                                               |
| 26     | berufsbezogener Abschluss    | berufsbez. Abschluss        | Text(50) | Ja              | nur BK                                                                                                                                                                                                               |
| 27     | Zeugnisart                   | Zeugnisart                  | Text(5)  | Ja              | Kürzel für Zeugnisart                                                                                                                                                                                                |
| 28     | Fehlstunden-Grenzwert        | Fehlstunden-Grenzwert       | Integer  | Ja              |                                                                                                                                                                                                                      |
| 29     | Datum von                    | Datum von                   | Datum    | Ja              |                                                                                                                                                                                                                      |
| 30     | Datum bis                    | Datum bis                   | Datum    | Ja              |                                                                                                                                                                                                                      |Vorname Geburtsdatum Jahr Abschnitt Jahrgang Klasse Schulgliederung
OrgForm Klassenart Fachklasse Förderschwerpunkt 2. Förderschwerpunkt
Schwerstbehinderung Wertung Wiederholung Klassenlehrer Versetzung
Abschluss Schwerpunkt  
Alford Daniel 03.12.1994 2005 2 05 05C-   -   1 RKN J N Müller V 0 Bader Heike 25.02.1995 2005 2 05 05D-   -   1 RKN J N Müller V 0}}

## SchuelerLernplattformen.datBeschreibung: Diese Datei enthält Benutzernamen und Initialkennwörter zu
Lernplattformen der Schülerinnen und Schüler.| Spalte | Beschreibung              | Header-Text     | Datentyp | Darf leer sein? | Bemerkung                                                                                        |
|--------|---------------------------|-----------------|----------|-----------------|--------------------------|
| 1      | Nachname des Schülers     | Nachname        | Text     | Nein            | Nachname der Schülerin oder des Schülers                                                         |
| 2      | Vorname des Schülers      | Vorname         | Text     | Nein            | Vorname der Schülerin oder des Schülers                                                          |
| 3      | Geburtsdatum des Schülers | Geburtsdatum    | Datum    | Nein            | Als TT.MM.JJJJ                                                                                   |
| 4      | ID Schüler                | ID              | Ganzzahl | Nein            | Die Schild-ID des Schülers                                                                       |
| 5      | Lernplattform             | Lernplattform   | Text     | Nein            | Enthält den Namen einer Lernplattform                                                            |
| 6      | Benutzername              | Benutzername    | Text     | Nein            | Der Benutzername, mit dem man sich an der Lernplattform anmeldet                                 |
| 7      | Initialkennwort           | Initialkennwort | Text     | Nein            | Das Kennwort für die Erstanmeldung an der Lernplattform. Darf kein Pipe-Zeichen ("\|") entalten. |Vorname Geburtsdatum ID Lernplattform Benutzername Initialkennwort  
Müller Sascha 31.12.2008 5 SDS müller@sds.de hfz6$+uu  
Zornbach Andrea 01.01.2009 5 SDS zornbach@sds.de hfj65ufZ  
}}

## SchuelerMerkmale.datBeschreibung: Enthält spezielle Merkmale der Schüler (z.B. Teilnahme am
BUS-Projekt, Offene Ganztagsschule usw.)| Spalte | Beschreibung              | Header-Text  | Datentyp | Darf leer sein? | Bemerkung                                                                                                                                                                                                            |
|--------|---------------------------|--------------|----------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Nachname des Schülers     | Nachname     | Text(50) | Nein            | Muss in Verbindung mit Vorname und Geburtsdatum auf einen Eintrag aus SchuelerBasisdaten.dat verweisen. Falls notwendig, mit Klasse ergänzen (mit #-Zeichen getrennt - siehe Beschreibung zu SchuelerBasisdaten.dat) |
| 2      | Vorname des Schülers      | Vorname      | Text(30) | Nein            |                                                                                                                                                                                                                      |
| 3      | Geburtsdatum des Schülers | Geburtsdatum | Datum    | Nein            | Als TT.MM.JJJJ                                                                                                                                                                                                       |
| 4      | Merkmal                   | Merkmal      | Text(10) | Nein            | Kürzel des Merkmales, als Statistik-Kürzel aus Statkue.mdb, Tabelle "AllgMerkmale", Feld "Kurztext". Es sind nur Einräge erlaubt, bei denen das Feld "Schueler" = Wahr ist                                           |Vorname Geburtsdatum Merkmal  
Kortmann Marina 26.04.1996 13+  
Krannowski Mariana 21.07.1996 GANZTAG }}

## SchuelerSprachenfolgen.datBeschreibung: Enthält Angaben zu Sprachenfolgen der Schüler.| Spalte | Beschreibung              | Header-Text   | Datentyp | Darf leer sein? | Bemerkung                                                                                                                                                                                                            |
|--------|---------------------------|---------------|----------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Nachname des Schülers     | Nachname      | Text(50) | Nein            | Muss in Verbindung mit Vorname und Geburtsdatum auf einen Eintrag aus SchuelerBasisdaten.dat verweisen. Falls notwendig, mit Klasse ergänzen (mit #-Zeichen getrennt - siehe Beschreibung zu SchuelerBasisdaten.dat) |
| 2      | Vorname des Schülers      | Vorname       | Text(30) | Nein            |                                                                                                                                                                                                                      |
| 3      | Geburtsdatum des Schülers | Geburtsdatum  | Datum    | Nein            | Als TT.MM.JJJJ                                                                                                                                                                                                       |
| 4      | Sprachfach                | Fach          | Text(20) | Nein            | Verweis auf schulinterne Kurzbez. aus Faecher.dat                                                                                                                                                                    |
| 5      | Folge                     | Reihenfolge   | Integer  | Nein            | Sprachenfolge (1, 2 ...)                                                                                                                                                                                             |
| 6      | Jahrgang von              | Jahrgang von  | Text(2)  | Nein            | Jahrgang, in dem die Sprache begonnen wurdeAls Statistik-Kürzel aus Statkue.mdb, Tabelle "ZulJahrgänge".                                                                                                             |
| 7      | Abschnitt von             | Abschnitt von | Integer  | Ja              | Abschnitt, in dem die Sprache begonnen wurde, wenn leer, wird 1 gesetzt                                                                                                                                              |
| 8      | Jahrgang bis              | Jahrgang bis  | Text(2)  | Ja              | Jahrgang, in dem die Sprache beendet wurdeAls Statistik-Kürzel aus Statkue.mdb, Tabelle "ZulJahrgänge".                                                                                                              |
| 9      | Abschnitt bis             | Abschnitt bis | Integer  | Ja              | Abschnitt, in dem die Sprache begonnen wurde, wenn leer und Jahrgang bis nicht leer, wird 2 gesetzt                                                                                                                  |Optional kann auch eine Spalte 10 und/oder 11 vorhanden sein, die das
Statistik-Kürzel und dasa GeR-Niveau des Faches enthält:|     |                                   |                |         |     |                                                                   |
|-----|-----------------------------------|----|---------|-----|-------|
| 10  | Statistik-Kürzel des Sprachfaches | Statistik-Fach | Text(2) | Ja  | Das Statistik-Kürzel des Faches, wird nur von LuPO benötigt       |
| 11  | GeR-Niveau des Sprachfaches       | GeR-Niveau     | Text(8) | Ja  | Damit kann das Sprachniveau aus externen Listen importiert werden |Vorname Geburtsdatum Fach Reihenfolge Jahrgang von Abschnitt von
Jahrgang bis Abschnitt bis GeR-Niveau  
Abel Jennifer 09.11.1990 E 1 05 1A2+  
Abel Jennifer 09.11.1990 L7 2 07 1  
`Abendroth`Marko 04.05.1987 E 1 05 1A2/B2  
Abendroth Marko 04.05.1987 F7 2 07 1B2 }}

## SchuelerTeilleistungen.datBeschreibung: Enthält die Teilleistungsdaten (Teilleistung und Noten)
eines Lernabschnittes (=Halbjahr oder Quartal) der Schüler.| Spalte | Beschreibung              | Header-Text  | Datentyp | Darf leer sein? | Bemerkung                                                                                                                                                                                                                                                                                                                                               |
|--------|---------------------------|--------------|----------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Nachname des Schülers     | Nachname     | Text(50) | Nein            | Muss in Verbindung mit Vorname und Geburtsdatum auf einen Eintrag aus SchuelerBasisdaten.dat verweisen. Falls notwendig, mit Klasse ergänzen (mit #-Zeichen getrennt - siehe Beschreibung zu SchuelerBasisdaten.dat). Außerdem muss ein entsprechender Eintrag (in Verbindung mit Jahr und Abschnitt) in SchuelerLernabschnitsdaten.dat vorhanden sein. |
| 2      | Vorname des Schülers      | Vorname      | Text(30) | Nein            |                                                                                                                                                                                                                                                                                                                                                         |
| 3      | Geburtsdatum des Schülers | Geburtsdatum | Datum    | Nein            |                                                                                                                                                                                                                                                                                                                                                         |
| 4      | Jahr                      | Jahr         | Integer  | Nein            | Schuljahr                                                                                                                                                                                                                                                                                                                                               |
| 5      | Abschnitt                 | Abschnitt    | Integer  | Nein            | Halbjahr bzw. Quartal                                                                                                                                                                                                                                                                                                                                   |
| 6      | Fach                      | Fach         | Text(20) | Nein            | Muss identisch sein mit einer schulinternen Kurzbez. aus Faecher.dat                                                                                                                                                                                                                                                                                    |
| 7      | Datum der Teilleistung    | Datum        | Datum    | Nein            |                                                                                                                                                                                                                                                                                                                                                         |
| 8      | Art der Teilleistung      | Teilleistung | Text     | Nein            | Art der Teilleistung, z.B. Klausur 1, Sominote 1, Test 2                                                                                                                                                                                                                                                                                                |
| 9      | Note                      | Note         | Text     | Nein            | Normale Note z.B. 2+                                                                                                                                                                                                                                                                                                                                    |
| 10     | Bemerkung                 | Bemerkung    | Text     | Ja              | Bemerkung zur Teilleistung                                                                                                                                                                                                                                                                                                                              |
| 11     | Lehrkraft                 | Lehrkraft    | Text     | Ja              | eindeutiges Kürzel der Lehrkraft                                                                                                                                                                                                                                                                                                                        |Vorname Geburtsdatum Jahr Abschnitt Fach Datum Teilleistung Note
Bemerkung Lehrkraft  
Schmidt Sarah 01.04.2003 2020 1 E 20.10.2020 1. Klausur 3-WA }}

## SchuelerTelefonnummern.datBeschreibung: Enthält zusätzliche Telefonnummern der Schüler bzw. der
Erzieher.| Spalte | Beschreibung              | Header-Text  | Datentyp | Darf leer sein? | Bemerkung                                                                                                                                                                                                            |
|--------|---------------------------|--------------|----------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Nachname des Schülers     | Nachname     | Text(50) | Nein            | Muss in Verbindung mit Vorname und Geburtsdatum auf einen Eintrag aus SchuelerBasisdaten.dat verweisen. Falls notwendig, mit Klasse ergänzen (mit #-Zeichen getrennt - siehe Beschreibung zu SchuelerBasisdaten.dat) |
| 2      | Vorname des Schülers      | Vorname      | Text(30) | Nein            |                                                                                                                                                                                                                      |
| 3      | Geburtsdatum des Schülers | Geburtsdatum | Datum    | Nein            | Als TT.MM.JJJJ                                                                                                                                                                                                       |
| 4      | Telefon-Nummer            | Telefonnr.   | Text(20) | Nein            |                                                                                                                                                                                                                      |
| 5      | Beschreibung              | Art          | Text(30) | Nein            | Beschreibung der Telefonnr, z.B. "Eltern", "Handy Schüler", "Büro Vater", "Handy Mutter" usw.                                                                                                                        |Vorname Geburtsdatum Telefonnr. Art  
Abel Jennifer 09.11.1990 01234-775303 Eltern  
Achterberg David 01.04.1992 01234-182861 Eltern  
Addens Sophie 05.12.1991 01234-561482 Eltern }}

## SchuelerVermerke.datBeschreibung: Enthält Vermerke (z.B. Bemerkungen) zu den Schülern,
optional mit Datum. Zu jedem Vermerk kann ein beliebig langer
Bemerkungstext hinzugefügt werden. Aus diesem Grunde ist der Dateiaufbau
auch etwas anders als bei den übrigen Dateien: Auf eine Zeile, die zum
einen zur Identifikation des Schülers (über Name und Geburtsdatum)
dient, zum anderen die Vermerkart und das Datum des Vermerkes enthält,
folgt der Bemerkungstext, der auch mehrere Zeilen umfassen kann. Der
Bemerkungstext ist durch die "Tags" <V> und </V> abgegrenzt, diese
müssen jeweils in einer separaten Zeile stehen. Die Tags müssen auch
vorhanden sein, wenn ein leerer Bemerkungstext übergeben wird.Der Aufbau der "Identifikationszeile" ist wie folgt:| Spalte | Beschreibung              | Header-Text  | Datentyp | Darf leer sein? | Bemerkung                                                                                                                                                                                                            |
|--------|---------------------------|--------------|----------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Nachname des Schülers     | Nachname     | Text(50) | Nein            | Muss in Verbindung mit Vorname und Geburtsdatum auf einen Eintrag aus SchuelerBasisdaten.dat verweisen. Falls notwendig, mit Klasse ergänzen (mit #-Zeichen getrennt - siehe Beschreibung zu SchuelerBasisdaten.dat) |
| 2      | Vorname des Schülers      | Vorname      | Text(30) | Nein            |                                                                                                                                                                                                                      |
| 3      | Geburtsdatum des Schülers | Geburtsdatum | Datum    | Nein            | Als TT.MM.JJJJ                                                                                                                                                                                                       |
| 4      | Vermerkart                | Vermerkart   | Text(30) | Nein            | Art des Vermerkes (z.B. Tadel, allg. Bemerkung, Laufbahnbemerkung usw), kann frei vergeben werden                                                                                                                    |
| 5      | Datum                     | Vermerkdatum | Datum    | Ja              | Datum des Vermerkes                                                                                                                                                                                                  |Auf jede Identifikationszeile folgt der eigentliche Bemerkungstext, der
durch die Tags <V> und </V> begonnen bzw. beendet wird.Vorname Geburtsdatum Vermerkart Vermerkdatum  
Kortmann Marina 26.04.1996 Tadel 01.02.2007  
<V>  
Marina ist mehrfach dem Unterricht ferngeblieben  
</V> }}

## SchuelerZeugnisBemerkungen.datBeschreibung: Mit dieser Datei können die Zeugnisbemerkungen zum
jeweiligen Lernabschnitt exportiert/importiert werden. Der Aufbau
gleicht dabei den Vermerken, ist jedoch an das Schuljahr und den
Abschnitt gekoppelt.| Spalte | Beschreibung              | Header-Text  | Datentyp | Darf leer sein? | Bemerkung                                                                                                                                                                                                            |
|--------|---------------------------|--------------|----------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Nachname des Schülers     | Nachname     | Text(50) | Nein            | Muss in Verbindung mit Vorname und Geburtsdatum auf einen Eintrag aus SchuelerBasisdaten.dat verweisen. Falls notwendig, mit Klasse ergänzen (mit #-Zeichen getrennt - siehe Beschreibung zu SchuelerBasisdaten.dat) |
| 2      | Vorname des Schülers      | Vorname      | Text(30) | Nein            |                                                                                                                                                                                                                      |
| 3      | Geburtsdatum des Schülers | Geburtsdatum | Datum    | Nein            | Als TT.MM.JJJJ                                                                                                                                                                                                       |
| 4      | Jahr                      | Jahr         | Integer  | Nein            | Schuljahr                                                                                                                                                                                                            |
| 5      | Abschnitt                 | Abschnitt    | Integer  | Nein            | Halbjahr bzw. Quartal                                                                                                                                                                                                |Danach folgt der eigentliche Bemerkungstext. Zwischen den Markierungen
<V> und </V>.Vorname Geburtsdatum Jahr Abschnitt  
Müller Hans 10.03.1971 2013 2  
<V>  
Alles super auf dem Zeugnis!  
</V> }}

## SchuelerZusatzdaten.datBeschreibung: Enthält zusätzliche Stammdaten der Schüler, die nicht
statistik-relevant sind.| Spalte | Beschreibung                                               | Header-Text         | Datentyp  | Darf leer sein? | Bemerkung                                                                                                                                                                                                            |
|--------|------------------------------------------------------------|---------------------|-----------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Nachname des Schülers                                      | Nachname            | Text(50)  | Nein            | Muss in Verbindung mit Vorname und Geburtsdatum auf einen Eintrag aus SchuelerBasisdaten.dat verweisen. Falls notwendig, mit Klasse ergänzen (mit #-Zeichen getrennt - siehe Beschreibung zu SchuelerBasisdaten.dat) |
| 2      | Vorname des Schülers                                       | Vorname             | Text(30)  | Nein            |                                                                                                                                                                                                                      |
| 3      | Geburtsdatum des Schülers                                  | Geburtsdatum        | Datum     | Nein            | Als TT.MM.JJJJ                                                                                                                                                                                                       |
| 4      | Namenszusatz                                               | Namenszusatz        | Text(20)  | Ja              |                                                                                                                                                                                                                      |
| 5      | Geburtsname                                                | Geburtsname         | Text(30)  | Ja              |                                                                                                                                                                                                                      |
| 6      | Geburtsort                                                 | Geburtsort          | Text(30)  | Ja              |                                                                                                                                                                                                                      |
| 7      | Ortsteil                                                   | Ortsteil            | Text(30)  | Ja              |                                                                                                                                                                                                                      |
| 8      | Telefon-Nr.                                                | Telefon-Nr.         | Text(20)  | Ja              |                                                                                                                                                                                                                      |
| 9      | E-Mail                                                     | E-Mail              | Text(40)  | Ja              |                                                                                                                                                                                                                      |
| 10     | 2\. Staatsangehörigkeit                                    | 2\. Staatsang.      | Text(3)   | Ja              | Als Statistik-Kürzel (z.B. 163 für Türkei)                                                                                                                                                                           |
| 11     | Externe ID-Nr.                                             | Externe ID-Nr       | Text(30)  | Ja              | z.B. aus Einwohnermeldeamt                                                                                                                                                                                           |
| 12     | Sportbefreiung                                             | Sportbefreiung      | Text(50)  | Ja              |                                                                                                                                                                                                                      |
| 13     | Fahrschülerart                                             | Fahrschülerart      | Text(30)  | Ja              |                                                                                                                                                                                                                      |
| 14     | Haltestelle                                                | Haltestelle         | Text(50)  | Ja              |                                                                                                                                                                                                                      |
| 15     | Einschulungsart                                            | Einschulungsart     | Text(40)  | Ja              | Als Klartextnormalvorzeitigzurückgestellt                                                                                                                                                                            |
| 16     | Entlassdatum an eigener Schule                             | Entlassdatum        | Datum     | Ja              |                                                                                                                                                                                                                      |
| 17     | Entlassjahrgang an eigener Schule                          | Entlassjahrgang     | Text(20)  | Ja              | Muss auf eine schulinterne Kurzbez. aus Jahrgaenge.dat verweisen                                                                                                                                                     |
| 18     | Datum des Schulwechsels von eigener zu aufnehmender Schule | Datum Schulwechsel  | Datum     | Ja              |                                                                                                                                                                                                                      |
| 19     | Bemerkungen                                                | Bemerkungen         | Text(255) | Ja              |                                                                                                                                                                                                                      |
| 20     | Anrechnungsmonate BK                                       | BKAZVO              | 0,6,12,18 | Ja              |                                                                                                                                                                                                                      |
| 21     | BK spezifisch                                              | BeginnBildungsgang  | Datum     | Ja              |                                                                                                                                                                                                                      |
| 22     | Datum der Anmeldung                                        | Anmeldedatum        | Datum     | Ja              |                                                                                                                                                                                                                      |
| 23     | Bafög                                                      | Bafög               | Text(1)   | Ja              | "J" oder "N"                                                                                                                                                                                                         |
| 24     | Jahre der Schuleingangsphase                               | EP-Jahre            | Ganzzahl  | Ja              |                                                                                                                                                                                                                      |
| 25     | Fax/Mobilnummer                                            | Fax/Mobilnr         | Text(20)  | Ja              |                                                                                                                                                                                                                      |
| 26     | Ausweisnummer                                              | Ausweisnummer       | Text(30)  | Ja              |                                                                                                                                                                                                                      |
| 27     | schulische E-Mail-Adresse                                  | schulische E-Mail   | Text(40)  | Ja              |                                                                                                                                                                                                                      |
| 28     | Masern-Impfnachweis                                        | Masern-Impfnachweis | Text(1)   | Ja              | "J" oder "N"                                                                                                                                                                                                         |Vorname Geburtsdatum Namenszusatz Geburtsname Geburtsort Ortsteil
Telefon-Nr. E-Mail 2. Staatsang. Externe ID-Nr Sportbefreiung
Fahrschülerart Haltestelle Einschulungsart Entlassdatum Entlassjahrgang
Datum Schulwechsel Bemerkungen  
Fatirmay Jasemin 26.01.1995Gütersloh Roisdorf 01234-803324 JFatirmay@w123.de 163temporär - Ausdaueranforderung Schulbus Ottostraße}}

## SchuleMerkmale.datBeschreibung: Enthält spezielle Merkmale der Schule (z.B. ob Offene
Ganztagsschule angeboten wird usw.)| Spalte | Beschreibung | Header-Text | Datentyp | Darf leer sein? | Bemerkung                                                                                           |
|--------|--------------|-------------|----------|-----------------|-----------------------------|
| 1      | Merkmal      | Merkmal     | Text(10) | Nein            | Kürzel des Merkmales, als Statistik-Kürzel aus Statkue.mdb, Tabelle "AllgMerkmale", Feld "Kurztext" |

## AnhangAllgemeine Kursarten: Die in Kurse.dat vorkommenden Einträge für die
"allgemeine Kursart" entsprechen in den meisten Fällen den
"individuellen Kursarten" (aus Statkue.mdb, Tabelle "ZulKuArt"). Z.B.:
| schülerspezifische Kursart | zugehörige allgemeine Kursart |
| --- | --- |
| PJK | PJK |
| VTF | VTF |
| ZK | ZK |
Allgemeine KursartenIn folgenden Fällen müssen aber andere Einträge verwendet werden:
| schülerspezifische Kursart | zugehörige allgemeine Kursart |
| --- | --- |
| LK1 | LK |
| LK2 | LK |
| AB3 | GK |
| AB4 | GK |
| GKM | GK |
| GKS | GK |
Allgemeine Kursarten