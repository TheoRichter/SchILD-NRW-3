# NurErzieherMitAnschreiben
| RAP-Funktion<br>"NurErzieherMitAnschreiben" | Beschreibung | ```   procedure NurErzieherMitAnschreiben(Filtern: Boolean);``` |
| --- | --- | --- |
| Parameter | ```   Filtern  - TRUE, falls nur Erzieher berücksichtigt werden sollen, bei``` ```              denen das Flag „Erhält Anschreiben“ gesetzt ist.``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   Procedure ReportBeforePrint;``` ```    begin``` ```      NurErzieherMitAnschreiben(True);``` ```    end;``` ```   Procedure ReportAfterPrint;``` ```   begin``` ```     NurErzieherMitAnschreiben(False);``` ```   end;``` |  |