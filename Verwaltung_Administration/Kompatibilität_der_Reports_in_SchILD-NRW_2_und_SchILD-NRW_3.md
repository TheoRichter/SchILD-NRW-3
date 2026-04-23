# Kompatibilität der Reports in SchILD-NRW 2 und SchILD-NRW 3

## EinleitungDer Reportdesigner unterliegt als eigenständige Programmkomponente
ebenfalls einem Updatezyklus. Die nahtlose Integration in SchILD-NRW 3
erfordert zu jedem Update vielfältige Anpassungen des Reportdesigners.
Mit dem Erscheinen der Produktivversion von SchILD-NRW 3 wird die
Version 22 des Reportdesigners ausgeliefert, während in SchILD-NRW 2 die
Version 15 verwendet wird. Durch die Funktionszunahme der neueren
Versionen des Reportdesigners, werden zusätzliche Daten in einem Report
abgespeichert.

## Komponenten, die im Reportdesigner wegfallenDer Reportdesigner in SchILD-NRW 2 enthält eine Zusatzkomponente mit dem
Namen "GridPack". Diese enthält die Elemente "TableGrid", "DBTableGrid",
"CheckBox" und "CrossTable". Diese Zusatzkomponente ist im
Reportdesigner von SchILD-NRW 3 nicht mehr enthalten. Durch den
Funktionszuwachs des neuen Reportdesigners ist diese Zusatzkomponente
jedoch nicht mehr notwendig. Im neuen Reportdesigner selbst ist das
Element SimpleGrid weggefallen und wird von dem Element TableGrid
abgelöst. Das Element "RotatedLabel" ist ebenfalls weggefallen, da jedes
Label die Eigenschaft der Rotation erhalten hat.| Fällt weg            | Alternativen                        |
|----------|-|
| GridPack TableGrid   | TableGrid                           |
| GridPack DBTableGrid |                                     |
| SimpleGrid           |                                     |
| GridPack CheckBox    | CheckBox                            |
|                      | DBCheckBox                          |
| GridPack CrossTable  | Kreuztabelle                        |
| RotatedLabel         | normale Label können rotiert werden |

## Geänderte vordefinierte DatenquellenAufgrund der geänderten Datenstruktur der Datenbank des SVWS-Servers
mussten einige Änderungen an den vordefinierten Datenquellen des
Reportdesigners vorgenommen werden. Hierdurch sind manche Datenquellen
und Datenfelder weggefallen und andere hinzugekommen. So ist z.B. die
Datenquelle "Erzieherfunktion" mit allen Datenfeldern weggefallen. In
der Datenquelle hingegen sind die neuen Datenfelder "AlleVornamen" und
"Rufname" hinzugekommen.

## Eigene Datenquellen

Die Datenbankstruktur von SchILD-NRW 2 und SchILD-NRW 3 unterscheidet
sich grundlegend. Im neuen Reportdesigner müssen entsprechend eigene
Datenquellen auf andere Art und Weise definiert werden.

## Konsequenzen

![FehlermeldungInkompatibilitaetReportdesigner.png](../../graphics/FehlermeldungInkompatibilitaetReportdesigner.png)

Sollen Reports aus SchILD-NRW 2 in SchILD-NRW 3 verwendet werden, so ist
vorab zu untersuchen, ob diese Komponenten aus dem GridPack oder eigene
Datenquellen verwenden. Wenn dies der Fall ist, muss der Report
angepasst werden. Hierzu kann dieser im Reportdesigner von SchILD-NRW 3
geöffnet werden. Beim Öffnen kommt es zu einer Fehlermeldung oder
mehreren Fehlermeldungen. Im Fenster der Fehlermeldung kann dann die
Schaltfläche "Alles ignorieren" angeklickt werden. Hierdurch werden
Elemente aus dem GridPack von Reportdesigner entfernt. Alternative
Elemente müssen entsprechend als Ersatz eingefügt und eigene
Datenquellen angepasst oder neu definiert werden.

## Was passiert, wenn ein Report aus SchILD-NRW 2 in SchILD-NRW 3 aufgerufen wirdWird ein Report aus SchILD-NRW 2 aufgerufen, der weder Elemente aus dem
GridPack enthält noch eigene Datenquellen nutzt, so kann dieser in
SchiLD_NRW 3 ohne Einschränkungen aufgerufen werden. Es ist trotzdem
empfehlenswert, den Report einmalig im Reportdesigner zu öffnen und in
der neuen Version zu speichern.Enthält der Report Elemente aus dem GridPack, so kommt es beim Aufruf zu
einer Fehlermeldung. Wenn die Fehlermeldungen ignoriert werden, wird der
Ausdruck durchgeführt bzw. die Voransicht angezeigt. Die nicht mehr
vorhandenen Elemente werden jedoch nicht mehr angezeigt. Solange ein
solcher Report nicht einmalig im Reportdesigner geöffnet und in der
neuen Version abgespeichert wird, kommt es bei jedem erneuten Aufruf zu
der Fehlermeldung.Enthält der Report eigene Datenquellen, welche in SchILD-NRW 3 nicht
existieren, so kommt es zu einer Fehlermeldung und der Report kann nicht
gedruckt werden. Es ist dann notwendig, den Report im Reportdesigner zu
öffnen und die Datenquellen anzupassen.

## Was passiert, wenn ein Report aus SchILD-NRW 3 in SchILD-NRW 2 aufgerufen wirdHierzu liegen keine Erfahrungen vor. Es ist aber zu erwarten, dass es zu
ähnlichen Auswirkungen kommt, wie vorab beschrieben. Insbesondere bei
erweiterten Funktionen von Elementen, die in beiden Reportdesignern
vorhanden sind, sind Probleme zu erwarten. Ein Beispiel wäre hier die
neue Möglichkeit, Label zu rotieren. Zudem gibt es Unterschiede zwischen
den vordefinierten Pipelines in SchILD-NRW 2 und SchILD-NRW 3. Elemente,
welche auf Daten dieser Pipelines zugreifen, finden keine passende
Definition.Es ist deshalb zu empfehlen, vorhandene Reports aus SchILD-NRW 2 an
SchILD-NRW 3 anzupassen, oder noch besser auf die optimierten Reports
aus der Basisreportsammlung umzusteigen. Es ist jedoch nicht zu
empfehlen, Reports aus SchILD-NRW 3 in SchILD-NRW 2 zu verwenden.