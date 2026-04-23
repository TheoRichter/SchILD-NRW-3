# IstInDerGruppe
| RAP-Funktion "IstInDerGruppe" | Beschreibung | ```   function IstInDerGruppe(const aLoginName, aGruppenName: String): Boolean;``` ```   

Diese Funktion ermittelt, ob ein bestimmter Benutzer einer Gruppe angehört``` |
| --- | --- | --- |
| Parameter | ```   aLoginname    - der Schild-Loginname des Benutzers``` ```   aGruppenname  - die zu überprüfende Gruppe``` |  |
| Rückgabewert | ```   TRUE, wenn der Benutzer der Gruppe angehört, FALSE sonst``` |  |
| Beispiel | ```   procedure DetailBeforePrint;``` ```   begin``` ```     Detail.Visible:=IstInDerGruppe('LEHRER',SchildUmgebung['Login_Name'])``` ```   end;``` |  |