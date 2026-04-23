# LookupSprachenfolge
| RAP-Funktion "LookupSprachenfolge" | Beschreibung | ```   Function LookupSprachenfolge(aStatistikKrz: String):Boolean;``` |
| --- | --- | --- |
| Parameter | ```   aStatistikKrz - Statistikkürzel des gesuchten Faches``` |  |
| Rückgabewert | ```   Wahr, wenn das Fach existiert, sonst Falsch``` |  |
| Beispiel | ```   Hinweis: Damit diese Funktion genutzt werden kann, muss vor dem Druck (sinnvollerweise``` ```   im Ereignis ReportBeforePrint) die Funktion SetAbitur mit dem Parameter „True“ und nach``` ```   dem Druck (in ReportAfterPrint) mit dem Parameter „False“ aufgerufen werden.``` ```   Procedure DetailBeforePrint;``` ```   begin``` ```     Checkbox1.Checked:=LookupSprachenfolge('L7')``` ```   end;``` |  |