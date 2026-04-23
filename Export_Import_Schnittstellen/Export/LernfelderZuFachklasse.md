# LernfelderZuFachklasse
| RAP-Funktion "LernfelderZuFachklasse" | Beschreibung | ```   function LernfelderZuFachklasse( fachklasse_id: integer): string;``` ```   Gibt die Lernfelder einer Fachklasse aus``` |
| --- | --- | --- |
| Parameter | ```   fachklasse_id: 

Die Fachklasse_ID des Schülers (aus Stammdaten oder``` ```                  Lernabschnittsdaten)``` |  |
| Rückgabewert | ```   Lernfelder im Richtext.``` |  |
| Beispiel | ```   procedure DetailBeforePrint;``` ```    begin``` ```     RichText_LF.RichText := LernfelderZuFachklasse( Schueler[ 'Fachklasse_ID'] );``` ```   End;``` |  |