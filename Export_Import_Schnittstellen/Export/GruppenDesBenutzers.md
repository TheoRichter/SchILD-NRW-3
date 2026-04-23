# GruppenDesBenutzers
| RAP-Funktion "GruppenDesBenutzers" | Beschreibung | ```   function GruppenDesBenutzers(const aLoginName: String): String;``` ```   Ermittelt die Benutzergruppen, denen ein Benutzer angehört``` |
| --- | --- | --- |
| Parameter | ```   aLoginName : Loginname des Benutzers``` |  |
| Rückgabewert | ```   Gruppen, denen der Benutzer angehört``` |  |
| Beispiel | ```   procedure DetailBeforePrint;``` ```   var``` ```     lGruppen : String;``` ```   begin``` ```     lGruppen:=GruppenDesBenutzers(SchildUmgebung['Login_Name']);``` ```     Detail.Visible:=pos('LEHRER',lGruppen) > 0``` ```   end;``` |  |