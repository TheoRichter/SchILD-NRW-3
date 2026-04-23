# PluginVersion
| RAP-Funktion "PluginVersion" | Beschreibung | ```   function PluginVersion: string;``` ```   Liefert die Version der Reporting.dll``` |
| --- | --- | --- |
| Parameter | ```   ...``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   procedure ReportBeforePrint;``` ```    var``` ```     vers: string;``` ```    begin``` ```     vers := PluginVersion;``` ```     if vers >= ‘2’ then``` ```     begin``` ```     end;``` ```    end;``` |  |