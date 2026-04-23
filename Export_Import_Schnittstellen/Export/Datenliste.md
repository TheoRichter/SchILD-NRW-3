# Datenliste
| RAP-Funktion "Datenliste" | Beschreibung | ```   DatenListe(aDatapipeline: TppDBPipeline; aFeld, aSep: string; duplikate: boolean ): string;``` Diese liefert eine Liste (getrennt durch ein wählbares Trennzeichen )<br>für ein Feld in einer Datenquelle, mit der Option, ob doppelt<br>auftretende Werte ausgegeben werden sollen oder nicht. |
| --- | --- | --- |
| Parameter | ```   Datenquelle, Datenfeld,Trennzeichen,true/false``` |  |
| Rückgabewert | ```   Datenliste z.B. 05a, 06a, 07a, 08a aus dem Beispiel``` |  |
| Beispiel | ```   lblBesuchteKlassen.Caption := DatenListe( SchuelerLaufbahn, 'Klasse', ', ', false );``` |  |