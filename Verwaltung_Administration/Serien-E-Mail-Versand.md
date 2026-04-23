# Serien-E-Mail-Versand

![Serien-E-Mail.png](../../graphics/Serien-E-Mail.png)

In Abhängigkeit des Designs eines Reports können diese als Serien-E-Mail
versendet werden. Hierbei wird der Report nicht gedruckt, sondern als
PDF-Anhang an die jeweilige Zielperson per E-Mail versendet.

![Serien-E-Mail-Betreff.png](../../graphics/Serien-E-Mail-Betreff.png)

 Wenn Sie die Option "als Serien-E-Mail versenden"
aktivieren, öffnet sich nach kurzer Zeit ein E-Mail-Fenster, in welchem
Sie Betreff und E-Mail-Text anpassen können. Nach der Bestätigung dieses
Standards werden alle folgenden E-Mails mit dem soeben definierten
Betreff und dem E-Mail-Text an die jeweilige Zielpersonen versendet.

## Voraussetzung

![Serien-E-Mail-Gruppen.png](../../graphics/Serien-E-Mail-Gruppen.png)

Um das Ergebnis eines Reports als Serien-E-Mail versenden zu können,
muss dieser eine Gruppe enthalten. Nach jedem Gruppenwechsel wird ein
PDF erstellt, welches an das passende Gruppenmitglied als PDF-Anhang per
E-Mail automatisch versendet wird.In dieser Gruppe muss das Auswahlfeld "Neue Seite beginnen", "Neue Datei
erzeugen" und "Neue Datei als E-Mail versenden" aktiviert sein. Nur mit
diesen Einstellungen erzeugt der Reportdesigner nach jedem
Gruppenwechsel ein neues PDF-Dokument und hängt dieses einer E-Mail an
die Zielgruppe an.

## Die Zielgruppen

### Gruppe Schueler.IDReports mit dem Gruppenwechsel Schueler.ID werden per E-Mail an den
jeweiligen Schüler versendet. In den Einstellungen von SchILD-NRW 3 kann
festgelegt werden, ob die E-Mail an die private oder die schulische
E-Mail-Adresse versendet wird. Ein so versendeter Report darf pro Seite
bzw. Gruppe nur Informationen zum Schüler enthalten, der die E-Mail
empfängt. In der Basisreportsammlung sind solche Reports mit dem Zusatz
@SuS gekennzeichnet.

### Gruppe Erzieher.IDReports mit Gruppenwechsel Erzieher.ID werden per E-Mail an die
jeweiligen Erzieher des Schulkindes versendet. Voraussetzung ist, dass
die Erzieher eine gültige E-Mail-Adresse hinterlegt haben und das
Auswahlfeld "Erhält Anschreiben" aktiviert ist. Ein so versendeter
Report darf pro Seite bzw. Gruppe nur Informationen zum Schulkind der
Erziehungsberechtigten enthalten. In der Basisreportsammlung sind solche
Reports mit dem Zusatz @Erzieher gekennzeichnet.

### Gruppe Schueler.KlasseReports mit Gruppenwechsel Schueler.Klasse werden per E-Mail an die
jeweilige Klassenleitung versendet. In den Einstellungen von SchILD-NRW
3 kann festgelegt werden, ob die E-Mail an die private oder die
schulische E-Mail-Adresse der Klassenleitung versendet wird. Ein so
versendeter Report darf pro Seite bzw. Gruppe nur Informationen zu
Schülern der Klasse enthalten. In der Basisreportsammlung sind solche
Reports mit dem Zusatz @KL gekennzeichnet.

### Gruppe Kurse.IDReports mit Gruppenwechsel Kurse.ID werden per E-Mail an die jeweilige
Kursleitung versendet. In den Einstellungen von SchILD-NRW 3 kann
festgelegt werden, ob die E-Mail an die private oder die schulische
E-Mail-Adresse der Kursleitung versendet wird. Ein so versendeter Report
darf pro Seite bzw. Gruppe nur Informationen zu Schülern des Kurses
enthalten.

### Gruppe Lehrer.IDReports mit Gruppenwechsel Lehrer.ID werden per E-Mail an die jeweilige
Lehrkraft versendet. In den Einstellungen von SchILD-NRW 3 kann
festgelegt werden, ob die E-Mail an die private oder die schulische
E-Mail-Adresse der Lehrkraft versendet wird. Ein so versendeter Report
darf pro Seite bzw. Gruppe nur Informationen zur jeweiligen Lehrkraft
enthalten. In der Basisreportsammlung sind solche Reports mit dem Zusatz
@LuL gekennzeichnet.

### Gruppe Schueler.SchulwechselNrReports mit Gruppenwechsel LSchueler.SchulwechselNr werden per E-Mail an
die jeweilige aufnehmende Schule versendet. Ein so versendeter Report
darf pro Seite bzw. Gruppe nur Informationen zu Schülern enthalten,
welche von der aufnehmenden Schule aufgenommen werden. In der
Basisreportsammlung sind solche Reports mit dem Zusatz @aufnehmende
Schule gekennzeichnet.