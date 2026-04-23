# LehrerDatenLaden
| RAP-Funktion "LehrerDatenLaden" | Beschreibung | ```   procedure LehrerDatenLaden(const Kuerzel: String; var Name, Vorname, Anrede, Titel, Amtsbez: String);``` |
| --- | --- | --- |
| Parameter | ```   Name               - Nachname des Lehrers``` ```   Vorname            - ..des Lehrers``` ```   Anrede             - ..des Lehrers``` ```   Titel              - ..des Lehrers``` ```   Amtsbez            - ..des Lehrers``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   procedure Label4711OnGetText(var Text: String);``` ```   var``` ```     lName, lVorname, lAnrede, lTitel, lAmtsbez: String;``` ```   begin``` ```     LehrerdatenLaden(Schueler['Lehrer'],lName, lVorname, lAnrede, lTitel,lAmtsbez);``` ```     Text:=lAnrede;``` ```     if lAmtsBez <> '' then Text:=Text + lAmtsBez;``` ```     if lTitel <> '' then Text:=Text +  lTitel;``` ```     Text:=Text + lVorname +  lName;``` ```   end;``` |  |