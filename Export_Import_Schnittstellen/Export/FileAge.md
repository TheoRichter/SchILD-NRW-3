# FileAge
| RAP-Funktion "FileAge" | Beschreibung | ```   function FileAge(const aFilename: String): DateTime;``` ```   bestimmt das Dateidatum``` |
| --- | --- | --- |
| Parameter | ```   aFilename          - Dateiname incl. Pfad``` |  |
| Rückgabewert | ```   Dateidatum``` |  |
| Beispiel | ```   If FileAge('C:\Schild-NRW\Schild-Reports\Zeugnisse\Zeugnis_11.rtm') < StrToDate('01.01.2009') then...;``` |  |