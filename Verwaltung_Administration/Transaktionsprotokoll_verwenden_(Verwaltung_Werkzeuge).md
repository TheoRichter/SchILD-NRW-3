# Transaktionsprotokoll verwenden (Verwaltung Werkzeuge)

![SchILD_Verwaltung_Werkzeuge_Transaktionsprotokoll_Aktivieren.png](../../graphics/SchILD_Verwaltung_Werkzeuge_Transaktionsprotokoll_Aktivieren.png)

 Bei Gruppenprozessen werden i.d.R. SQL-Befehle an die
Datenbank geschickt.Wenn die aus irgendeinem Grunde nicht erfolgreich ausgeführt werden
können, z.B. wegen eines defekten Index, so wird die Fehlermeldung
intern abgefangen, damit der Benutzer nicht mit hunderten von Fehlern
"bombardiert" wird.Wenn festgestellt wird, dass ein Gruppenprozess scheinbar "nichts tut",
kann es daran liegen, dass derartige abgefangene Fehler erzeugt werden.Wurde das "*Transaktionsprotokoll* über *Verwaltung ➜ Werkzeuge ➜
Transaktionsprotokoll verwenden ➜* **Transaktionsprotoll aktivieren**"
eingeschaltet, werden diese Fehlermeldungen intern gespeichert und
können über "Transaktionsprotokoll zeigen" sichtbar gemacht werden.  

![SchILD_Verwaltung_Werkzeuge_Transaktionsprotokoll_IstAktiviert.png](../../graphics/SchILD_Verwaltung_Werkzeuge_Transaktionsprotokoll_IstAktiviert.png)

 Dass das Transaktionsprotokoll aktiviert wurde, ist daran
ersichtlich, dass vor *Transaktionsprotokoll* nun ein "**+**" steht.Weiterhin wird nun *Transaktionsprotokoll zeigen* zur Verfügung
gestellt, in dem nun eventuell erzeugte Fehler abgelegt werden.

::: warning

Bei einem Aufruf von "Transaktionsprotokoll zeigen",
wird anschließend das Transaktionsprotokoll automatisch gelöscht, damit
der Speicher nicht irgendwann überläuft.Man kann sich ein Protokoll nur einmal anschauen, wenn man es dauerhaft
benötigt, muss es separat aus dem Protokollfenster abgespeichert werden.Es kann bei einem reprodzierbar auftretenden Fehler über diesen ein
neues Protokoll erzeugt werden.

:::

Soll ein weiteres Transaktionsprotokoll erzeugt werden, muss die

Protokollierung erneut aktiviert werden.