# StatistikKuerzelAusFachKuerzel
| RAP-Funktion<br>"StatistikKuerzelAusFachKuerzel" | Beschreibung | ```Function StatistikKuerzelAusFachKuerzel ( const fach_krz: string): string;``` ```Ermittelt das Statistik-Kürzel eines Faches aus dem internen Fachkürzel. Damit kann``` ```z.B. ermittelt werden, um was für ein Fach es sich im Einzelfall handelt (unabhängig``` ```von der jeweils internen Bezeichnung). Dadurch können Reports, die bestimmte``` ```Fächer auswerten, unabhängig von der internen Bezeichnung gemacht werden.``` |
| --- | --- | --- |
| Parameter | ```   fach_krz: 

Das interne Fachkürzel``` |  |
| Rückgabewert | ```   Statistikkürzel als String``` |  |
| Beispiel | ```If StatistikKuerzelAusFachKuerzel(SchuelerLeistungen[’FachKrz’]) =’D’``` ```then ShowMessage( ’

Das Fach ist DEUTSCH’ );``` |  |