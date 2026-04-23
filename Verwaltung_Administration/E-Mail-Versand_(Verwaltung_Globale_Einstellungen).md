# E-Mail-Versand (Verwaltung Globale Einstellungen)Es besteht an mehreren Stellen in SchILD die Option, direkt Emails zu
versenden. Ein Beispiel wäre der Versand von erzeugten Reports per
Email, mitunter bietet aber auch die Oberfläche von SchILD an diversen
Stellen einen Emailversand an.Hierzu muss SchILD für Emails vorbereitet werden.

![SchILD_Verwaltung_EmailVersand_Standard.png](../../graphics/SchILD_Verwaltung_EmailVersand_Standard.png)

 Gehen Sie über *Verwaltung ➜ Einstellungen ➜
E-Mail-Versand*, um die notwendigen Konfigurationen vorzunehmen.-   **Simple MAPI verwenden** reduziert die verwendeten API-Aufrufe an
    das Mailprogramm. Laut Microsoft ist diese Einstellung veraltet,
    jedoch wird sie von manchen externem Emailprogrammn benötigt. Lesen
    Sie hierzu die Dokumentation des verwendeten Emailprogramms oder
    probieren Sie aus, welche Einstellung korrekt ist.
-   **Bei Sammel-Emails Adressen als BCC eintragen** sorgt dafür, dass
    unterschiedliche Empfänger die Emailadressen aller anderen
    Teilnehmer nicht sehen können. **Es wird wegen modernem Datenschutz
    dringend empfohlen, diese Option zu aktivieren.**
-   **Verwendung von schulischen/dienstlichen Email-Adressen von
    SuS/Lehrkräften** steuert, ob primär dienstliche oder private
    Emailadressen verwendet werden. Auch hier wird dringen empfohlen,
    nur über schulische und dienstliche Emailadressen zu kommunizieren.  

### Aufruf des Standard-E-Mail-ProgrammesTypische Mailprogramme sind z.B. Outlook oder Thunderbird. Bei diesem
Eintrag sendet Schild-NRW die Mails über das Mailprogramm, welches in
Windows als Standard für das Kommando "mailto:" definiert wurde.Unter den "Systemeinstellungen" kann jedoch ab WindowsXP i.d.R. das
Standardprogramm für bestimmte Aktionen ausgewählt werden. Die
Einstellungen bei Windows 7, 8, 10, 11 weicht mitunter stark voneinander
ab.Außerdem sollten Sie im verwendeten Standardbrowser kontrollieren, ob
das gewünschte Mailprogramm eingetragen ist.  

DEADLINK: ===Direkt per SMTP===\[\[Datei:SchILD_Verwaltung_EmailVersand_SMTP.png - ===Direkt_per_SMTP===_[[Datei:SchILD_Verwaltung_EmailVersand_SMTP.png.md

Wenn Sie diese Einstellung wählen, müssen Sie in den folgenden Feldern
Ihre SMTP-Server-Daten eintragen.Schild-NRW sendet dann direkt die Mails über diesen Server. Bitte
entnehmen Sie die Einstellungen zu **Server**, **Port** und der
jeweiligen **SSL-Verschlüsselung** den Informationen Ihres
Mailproviders. Durch Deaktivierung der Option "Konfiguration automatisch
anpassen" kann erreicht werden, dass die „SMTP-DLL“ keine eigenständigen
Anpassungen bei den SMTP-Parametern macht.Bei den individuellen Einstellungen wird dann die "SMTP-Schaltfläche"
sichtbar und die Konto-Zugangsdaten des jeweiligen Users können
eingetragen werden.