# Praktikumstage
| RAP-Funktion "Praktikumstage" | Beschreibung | ```   function PraktikumsTage( const nur_betriebspraktikum: boolean): integer;``` ```   Liefert die Anzahl der Praktikumstage eines Schülers (optional nur solche mit``` ```   Kennung „Betriebspraktikum“). Voraussetzung ist, dass das Praktikum bei dem``` ```   jeweiligen Betrieb als solches gekennzeichnet ist (mit Anfangs- und Enddatum)``` |
| --- | --- | --- |
| Parameter | ```   ...``` |  |
| Rückgabewert | ```   Anzahl der Tage.``` |  |
| Beispiel | ```   procedure DetailBeforePrint;``` ```    Begin``` ```    {Alle Praktikumstage ausgeben}``` ```    LblPraktikumstage.Text := IntToStr( Praktikumstage( false ) );``` ```   End;``` |  |