import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Schild-NRW 3",
  description: "Handbuch und Tutorials zu SchILD-NRW 3",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [


  {
    "text": "SchILD-NRW-3",
    "collapsed": true,
    "items": [
      {
        "text": "Einführung Grundlagen",
        "collapsed": true,
        "items": [
          {
            "text": "Allgemein",
            "collapsed": true,
            "items": [
              {
                "text": "Einführung in die Gruppenprozesse (Einführung in SchILD-NRW)",
                "link": "/Einführung_Grundlagen/Allgemein/Einführung_in_die_Gruppenprozesse_(Einführung_in_SchILD-NRW)"
              },
              {
                "text": "Komplette Abiturberechnungen durchführen (Einführung in SchILD-NRW)",
                "link": "/Einführung_Grundlagen/Allgemein/Komplette_Abiturberechnungen_durchführen_(Einführung_in_SchILD-NRW)"
              },
              {
                "text": "Schuldaten bearbeiten (Einführung in SchILD-NRW)",
                "link": "/Einführung_Grundlagen/Allgemein/Schuldaten_bearbeiten_(Einführung_in_SchILD-NRW)"
              },
              {
                "text": "Tipps zur Bedienung (Einführung in SchILD-NRW))",
                "link": "/Einführung_Grundlagen/Allgemein/Tipps_zur_Bedienung_(Einführung_in_SchILD-NRW))"
              },
              {
                "text": "Übersicht  SchILD-NRW 3 (Einführung)",
                "link": "/Einführung_Grundlagen/Allgemein/Übersicht__SchILD-NRW_3_(Einführung)"
              },
              {
                "text": "Versetzung ins neue Schuljahr und Abschnittswechsel durchführen (Einführung in SchILD-NRW)",
                "link": "/Einführung_Grundlagen/Allgemein/Versetzung_ins_neue_Schuljahr_und_Abschnittswechsel_durchführen_(Einführung_in_SchILD-NRW)"
              },
              {
                "text": "Vom Katalog zum Eintrag (Einführung)",
                "link": "/Einführung_Grundlagen/Allgemein/Vom_Katalog_zum_Eintrag_(Einführung)"
              },
              {
                "text": "Was ist ein Report  (Einführung)",
                "link": "/Einführung_Grundlagen/Allgemein/Was_ist_ein_Report__(Einführung)"
              },
              {
                "text": "Zeugnisvorbereitungen und Zeugnisdruck (Einführung in SchILD-NRW)",
                "link": "/Einführung_Grundlagen/Allgemein/Zeugnisvorbereitungen_und_Zeugnisdruck_(Einführung_in_SchILD-NRW)"
              }
            ]
          },
          {
            "text": "Benutzeroberfläche",
            "collapsed": true,
            "items": [
              {
                "text": "Benutzeroberfläche von SchILD-NRW 3",
                "link": "/Einführung_Grundlagen/Benutzeroberfläche/Benutzeroberfläche_von_SchILD-NRW_3"
              }
            ]
          },
          {
            "text": "FAQ",
            "collapsed": true,
            "items": [
              {
                "text": "FAQ",
                "link": "/Einführung_Grundlagen/FAQ/FAQ"
              }
            ]
          }
        ]
      },
      {
        "text": "Export Import Schnittstellen",
        "collapsed": true,
        "items": [
          {
            "text": "Export",
            "collapsed": true,
            "items": [
              {
                "text": "Abschlussdatum neu berechnen (Gruppenprozesse Allgemein)",
                "link": "/Export_Import_Schnittstellen/Export/Abschlussdatum_neu_berechnen_(Gruppenprozesse_Allgemein)"
              },
              {
                "text": "Abschnittsdaten löschen (Gruppenprozesse Lernabschnitte, Versetzung)",
                "link": "/Export_Import_Schnittstellen/Export/Abschnittsdaten_löschen_(Gruppenprozesse_Lernabschnitte,_Versetzung)"
              },
              {
                "text": "Adress-Arten (Allgemeine Kataloge)",
                "link": "/Export_Import_Schnittstellen/Export/Adress-Arten_(Allgemeine_Kataloge)"
              },
              {
                "text": "AlleFaecherLaden",
                "link": "/Export_Import_Schnittstellen/Export/AlleFaecherLaden"
              },
              {
                "text": "Allgemeine Adressen (Allgemeine Kataloge)",
                "link": "/Export_Import_Schnittstellen/Export/Allgemeine_Adressen_(Allgemeine_Kataloge)"
              },
              {
                "text": "Allgemeine Kataloge (Kataloge)",
                "link": "/Export_Import_Schnittstellen/Export/Allgemeine_Kataloge_(Kataloge)"
              },
              {
                "text": "Andere Schulen und Schulnummern (Allgemeine Kataloge)",
                "link": "/Export_Import_Schnittstellen/Export/Andere_Schulen_und_Schulnummern_(Allgemeine_Kataloge)"
              },
              {
                "text": "Anrede",
                "link": "/Export_Import_Schnittstellen/Export/Anrede"
              },
              {
                "text": "AnzahlElemente",
                "link": "/Export_Import_Schnittstellen/Export/AnzahlElemente"
              },
              {
                "text": "AssignFont",
                "link": "/Export_Import_Schnittstellen/Export/AssignFont"
              },
              {
                "text": "AufzaehlungRTF",
                "link": "/Export_Import_Schnittstellen/Export/AufzaehlungRTF"
              },
              {
                "text": "Basisreports & Downloads Themenübersicht",
                "link": "/Export_Import_Schnittstellen/Export/Basisreports_&_Downloads_Themenübersicht"
              },
              {
                "text": "Basisreportsammlung  Aufnahmebögen",
                "link": "/Export_Import_Schnittstellen/Export/Basisreportsammlung__Aufnahmebögen"
              },
              {
                "text": "Basisreportsammlung  Bescheinigungen des Bilingualen Bildungsgangs",
                "link": "/Export_Import_Schnittstellen/Export/Basisreportsammlung__Bescheinigungen_des_Bilingualen_Bildungsgangs"
              },
              {
                "text": "Basisreportsammlung  Designrichtlinien",
                "link": "/Export_Import_Schnittstellen/Export/Basisreportsammlung__Designrichtlinien"
              },
              {
                "text": "Basisreportsammlung  Ein Überblick",
                "link": "/Export_Import_Schnittstellen/Export/Basisreportsammlung__Ein_Überblick"
              },
              {
                "text": "Basisreportsammlung  Einen Serienbrieftext erstellen - Schritt für Schritt",
                "link": "/Export_Import_Schnittstellen/Export/Basisreportsammlung__Einen_Serienbrieftext_erstellen_-_Schritt_für_Schritt"
              },
              {
                "text": "Basisreportsammlung  Herunterladen und aktualisieren",
                "link": "/Export_Import_Schnittstellen/Export/Basisreportsammlung__Herunterladen_und_aktualisieren"
              },
              {
                "text": "Basisreportsammlung  Leistungsübersicht Jg. 05 bis EF",
                "link": "/Export_Import_Schnittstellen/Export/Basisreportsammlung__Leistungsübersicht_Jg._05_bis_EF"
              },
              {
                "text": "Basisreportsammlung  Leistungsübersicht Jg. Q1 bis Q2",
                "link": "/Export_Import_Schnittstellen/Export/Basisreportsammlung__Leistungsübersicht_Jg._Q1_bis_Q2"
              },
              {
                "text": "Basisreportsammlung  Serienbrief Mahnung gefährdete Versetzung",
                "link": "/Export_Import_Schnittstellen/Export/Basisreportsammlung__Serienbrief_Mahnung_gefährdete_Versetzung"
              },
              {
                "text": "Basisreportsammlung  Serienbrief Nichtversetzung",
                "link": "/Export_Import_Schnittstellen/Export/Basisreportsammlung__Serienbrief_Nichtversetzung"
              },
              {
                "text": "Basisreportsammlung  Serienbriefe",
                "link": "/Export_Import_Schnittstellen/Export/Basisreportsammlung__Serienbriefe"
              },
              {
                "text": "Basisreportsammlung  Serienbriefe Platzhalter",
                "link": "/Export_Import_Schnittstellen/Export/Basisreportsammlung__Serienbriefe_Platzhalter"
              },
              {
                "text": "Basisreportsammlung  Versionsgeschichte",
                "link": "/Export_Import_Schnittstellen/Export/Basisreportsammlung__Versionsgeschichte"
              },
              {
                "text": "Beispiel zum Bildereinbinden",
                "link": "/Export_Import_Schnittstellen/Export/Beispiel_zum_Bildereinbinden"
              },
              {
                "text": "Beispiele für Tipps und Hinweise",
                "link": "/Export_Import_Schnittstellen/Export/Beispiele_für_Tipps_und_Hinweise"
              },
              {
                "text": "Bemerkungen (Aktuelles Halbjahr   Aktueller Abschnitt",
                "link": "/Export_Import_Schnittstellen/Export/Bemerkungen_(Aktuelles_Halbjahr___Aktueller_Abschnitt"
              },
              {
                "text": "Bestaetigung",
                "link": "/Export_Import_Schnittstellen/Export/Bestaetigung"
              },
              {
                "text": "Betrieb Adresse zuweisen (Gruppenprozesse Allgemein)",
                "link": "/Export_Import_Schnittstellen/Export/Betrieb_Adresse_zuweisen_(Gruppenprozesse_Allgemein)"
              },
              {
                "text": "Das JSON-Dateiformat (Tutorial)",
                "link": "/Export_Import_Schnittstellen/Export/Das_JSON-Dateiformat_(Tutorial)"
              },
              {
                "text": "DateinameFuerDVAuswaehlen",
                "link": "/Export_Import_Schnittstellen/Export/DateinameFuerDVAuswaehlen"
              },
              {
                "text": "Datenliste",
                "link": "/Export_Import_Schnittstellen/Export/Datenliste"
              },
              {
                "text": "DatenZeigerBewegen",
                "link": "/Export_Import_Schnittstellen/Export/DatenZeigerBewegen"
              },
              {
                "text": "DSGVO-Einwilligungen (Schulbezogene Kataloge)",
                "link": "/Export_Import_Schnittstellen/Export/DSGVO-Einwilligungen_(Schulbezogene_Kataloge)"
              },
              {
                "text": "EditRichText",
                "link": "/Export_Import_Schnittstellen/Export/EditRichText"
              },
              {
                "text": "EditRichTextEx",
                "link": "/Export_Import_Schnittstellen/Export/EditRichTextEx"
              },
              {
                "text": "EditText",
                "link": "/Export_Import_Schnittstellen/Export/EditText"
              },
              {
                "text": "Eigene Datenquellen definieren",
                "link": "/Export_Import_Schnittstellen/Export/Eigene_Datenquellen_definieren"
              },
              {
                "text": "Eigene Schule in Abgangsliste setzen (Gruppenprozesse Allgemein)",
                "link": "/Export_Import_Schnittstellen/Export/Eigene_Schule_in_Abgangsliste_setzen_(Gruppenprozesse_Allgemein)"
              },
              {
                "text": "Einen neuen Report erstellen",
                "link": "/Export_Import_Schnittstellen/Export/Einen_neuen_Report_erstellen"
              },
              {
                "text": "Einen neuen Report mit dem Berichtsassistenten erstellen",
                "link": "/Export_Import_Schnittstellen/Export/Einen_neuen_Report_mit_dem_Berichtsassistenten_erstellen"
              },
              {
                "text": "Einen Subreport dynamisch in einen Report einbinden",
                "link": "/Export_Import_Schnittstellen/Export/Einen_Subreport_dynamisch_in_einen_Report_einbinden"
              },
              {
                "text": "Einen vorhandenen Report anpassen",
                "link": "/Export_Import_Schnittstellen/Export/Einen_vorhandenen_Report_anpassen"
              },
              {
                "text": "Eingabe der GeR-Niveaus (Tutorial)",
                "link": "/Export_Import_Schnittstellen/Export/Eingabe_der_GeR-Niveaus_(Tutorial)"
              },
              {
                "text": "Eingabe von Flüchtlingskindern (Tutorial)",
                "link": "/Export_Import_Schnittstellen/Export/Eingabe_von_Flüchtlingskindern_(Tutorial)"
              },
              {
                "text": "Eintrag in die Wiedervorlage machen (Gruppenprozesse Allgemein)",
                "link": "/Export_Import_Schnittstellen/Export/Eintrag_in_die_Wiedervorlage_machen_(Gruppenprozesse_Allgemein)"
              },
              {
                "text": "EinzelElement",
                "link": "/Export_Import_Schnittstellen/Export/EinzelElement"
              },
              {
                "text": "Entlassungs-Bemerkungen (Allgemeine Kataloge)",
                "link": "/Export_Import_Schnittstellen/Export/Entlassungs-Bemerkungen_(Allgemeine_Kataloge)"
              },
              {
                "text": "Erklärung zur Barrierefreiheit",
                "link": "/Export_Import_Schnittstellen/Export/Erklärung_zur_Barrierefreiheit"
              },
              {
                "text": "Faechervorbelegen",
                "link": "/Export_Import_Schnittstellen/Export/Faechervorbelegen"
              },
              {
                "text": "Fehleranalyse zur Statistik (Tutorial)",
                "link": "/Export_Import_Schnittstellen/Export/Fehleranalyse_zur_Statistik_(Tutorial)"
              },
              {
                "text": "Fehlzeiten (Aktuelles Halbjahr   Aktueller Abschnitt",
                "link": "/Export_Import_Schnittstellen/Export/Fehlzeiten_(Aktuelles_Halbjahr___Aktueller_Abschnitt"
              },
              {
                "text": "FileAge",
                "link": "/Export_Import_Schnittstellen/Export/FileAge"
              },
              {
                "text": "FileExists",
                "link": "/Export_Import_Schnittstellen/Export/FileExists"
              },
              {
                "text": "FileOpenDlg",
                "link": "/Export_Import_Schnittstellen/Export/FileOpenDlg"
              },
              {
                "text": "FileSaveDlg",
                "link": "/Export_Import_Schnittstellen/Export/FileSaveDlg"
              },
              {
                "text": "Förderschwerpunkte (Allgemeine Kataloge)",
                "link": "/Export_Import_Schnittstellen/Export/Förderschwerpunkte_(Allgemeine_Kataloge)"
              },
              {
                "text": "FormatRTF",
                "link": "/Export_Import_Schnittstellen/Export/FormatRTF"
              },
              {
                "text": "GeRNiveauAusFachKrz",
                "link": "/Export_Import_Schnittstellen/Export/GeRNiveauAusFachKrz"
              },
              {
                "text": "GeschlechtToString",
                "link": "/Export_Import_Schnittstellen/Export/GeschlechtToString"
              },
              {
                "text": "GetFachgruppe",
                "link": "/Export_Import_Schnittstellen/Export/GetFachgruppe"
              },
              {
                "text": "GetSqlText",
                "link": "/Export_Import_Schnittstellen/Export/GetSqlText"
              },
              {
                "text": "Glossar zum Reportdesigner",
                "link": "/Export_Import_Schnittstellen/Export/Glossar_zum_Reportdesigner"
              },
              {
                "text": "GruppenDesBenutzers",
                "link": "/Export_Import_Schnittstellen/Export/GruppenDesBenutzers"
              },
              {
                "text": "Haltestellen (Allgemeine Kataloge)",
                "link": "/Export_Import_Schnittstellen/Export/Haltestellen_(Allgemeine_Kataloge)"
              },
              {
                "text": "Hauptseite",
                "link": "/Export_Import_Schnittstellen/Export/Hauptseite"
              },
              {
                "text": "Herkunftssprachlicher Unterricht (Tutorial)",
                "link": "/Export_Import_Schnittstellen/Export/Herkunftssprachlicher_Unterricht_(Tutorial)"
              },
              {
                "text": "Hinweise zur Recherche in diesem Wiki",
                "link": "/Export_Import_Schnittstellen/Export/Hinweise_zur_Recherche_in_diesem_Wiki"
              },
              {
                "text": "IncFontSize",
                "link": "/Export_Import_Schnittstellen/Export/IncFontSize"
              },
              {
                "text": "IstInDerGruppe",
                "link": "/Export_Import_Schnittstellen/Export/IstInDerGruppe"
              },
              {
                "text": "IstLeer",
                "link": "/Export_Import_Schnittstellen/Export/IstLeer"
              },
              {
                "text": "JahrgangsListe",
                "link": "/Export_Import_Schnittstellen/Export/JahrgangsListe"
              },
              {
                "text": "KAoA-Daten eingeben (Gruppenprozesse Allgemein)",
                "link": "/Export_Import_Schnittstellen/Export/KAoA-Daten_eingeben_(Gruppenprozesse_Allgemein)"
              },
              {
                "text": "Klassen-Versetzungstabelle (Schulbezogene Kataloge)",
                "link": "/Export_Import_Schnittstellen/Export/Klassen-Versetzungstabelle_(Schulbezogene_Kataloge)"
              },
              {
                "text": "Klassenunterrichte anlegen (Tutorial)",
                "link": "/Export_Import_Schnittstellen/Export/Klassenunterrichte_anlegen_(Tutorial)"
              },
              {
                "text": "Klausurplanung",
                "link": "/Export_Import_Schnittstellen/Export/Klausurplanung"
              },
              {
                "text": "Konfessionen (Allgemeine Kataloge)",
                "link": "/Export_Import_Schnittstellen/Export/Konfessionen_(Allgemeine_Kataloge)"
              },
              {
                "text": "KursBezIgnorieren",
                "link": "/Export_Import_Schnittstellen/Export/KursBezIgnorieren"
              },
              {
                "text": "Kurse (Schulbezogene Kataloge)",
                "link": "/Export_Import_Schnittstellen/Export/Kurse_(Schulbezogene_Kataloge)"
              },
              {
                "text": "Kursunterrichte anlegen (Tutorial)",
                "link": "/Export_Import_Schnittstellen/Export/Kursunterrichte_anlegen_(Tutorial)"
              },
              {
                "text": "LernfelderZuFachklasse",
                "link": "/Export_Import_Schnittstellen/Export/LernfelderZuFachklasse"
              },
              {
                "text": "Lernplattformen (Schulbezogene Kataloge)",
                "link": "/Export_Import_Schnittstellen/Export/Lernplattformen_(Schulbezogene_Kataloge)"
              },
              {
                "text": "LoadFromFile",
                "link": "/Export_Import_Schnittstellen/Export/LoadFromFile"
              },
              {
                "text": "LoadVermerke",
                "link": "/Export_Import_Schnittstellen/Export/LoadVermerke"
              },
              {
                "text": "LoadVermerkeEx",
                "link": "/Export_Import_Schnittstellen/Export/LoadVermerkeEx"
              },
              {
                "text": "LoadVermerkeVonBis",
                "link": "/Export_Import_Schnittstellen/Export/LoadVermerkeVonBis"
              },
              {
                "text": "LongDayNames",
                "link": "/Export_Import_Schnittstellen/Export/LongDayNames"
              },
              {
                "text": "LookupSprachenfolge",
                "link": "/Export_Import_Schnittstellen/Export/LookupSprachenfolge"
              },
              {
                "text": "Mahnbriefe drucken (Tutorial)",
                "link": "/Export_Import_Schnittstellen/Export/Mahnbriefe_drucken_(Tutorial)"
              },
              {
                "text": "Mehrfachauswahl",
                "link": "/Export_Import_Schnittstellen/Export/Mehrfachauswahl"
              },
              {
                "text": "MehrfachauswahlEx",
                "link": "/Export_Import_Schnittstellen/Export/MehrfachauswahlEx"
              },
              {
                "text": "Menüband (Auswahl)",
                "link": "/Export_Import_Schnittstellen/Export/Menüband_(Auswahl)"
              },
              {
                "text": "Migrationshintergrund automatisch setzen (Gruppenprozesse Allgemein)",
                "link": "/Export_Import_Schnittstellen/Export/Migrationshintergrund_automatisch_setzen_(Gruppenprozesse_Allgemein)"
              },
              {
                "text": "MitLernabschnitten",
                "link": "/Export_Import_Schnittstellen/Export/MitLernabschnitten"
              },
              {
                "text": "Musterseite für Wiki-Autoren",
                "link": "/Export_Import_Schnittstellen/Export/Musterseite_für_Wiki-Autoren"
              },
              {
                "text": "NurGewerteteAbschnitte",
                "link": "/Export_Import_Schnittstellen/Export/NurGewerteteAbschnitte"
              },
              {
                "text": "Orte (Allgemeine Kataloge)",
                "link": "/Export_Import_Schnittstellen/Export/Orte_(Allgemeine_Kataloge)"
              },
              {
                "text": "Ortsteile (Allgemeine Kataloge)",
                "link": "/Export_Import_Schnittstellen/Export/Ortsteile_(Allgemeine_Kataloge)"
              },
              {
                "text": "PickDatum",
                "link": "/Export_Import_Schnittstellen/Export/PickDatum"
              },
              {
                "text": "PipelineOeffnen",
                "link": "/Export_Import_Schnittstellen/Export/PipelineOeffnen"
              },
              {
                "text": "PluginVersion",
                "link": "/Export_Import_Schnittstellen/Export/PluginVersion"
              },
              {
                "text": "Praktikumstage",
                "link": "/Export_Import_Schnittstellen/Export/Praktikumstage"
              },
              {
                "text": "Programmierung & Sonderlogik Themenübersicht",
                "link": "/Export_Import_Schnittstellen/Export/Programmierung_&_Sonderlogik_Themenübersicht"
              },
              {
                "text": "Programmierung in Reports",
                "link": "/Export_Import_Schnittstellen/Export/Programmierung_in_Reports"
              },
              {
                "text": "QuotedStr",
                "link": "/Export_Import_Schnittstellen/Export/QuotedStr"
              },
              {
                "text": "RAP-Funktionen",
                "link": "/Export_Import_Schnittstellen/Export/RAP-Funktionen"
              },
              {
                "text": "ReadDateTime",
                "link": "/Export_Import_Schnittstellen/Export/ReadDateTime"
              },
              {
                "text": "ReplaceDefault",
                "link": "/Export_Import_Schnittstellen/Export/ReplaceDefault"
              },
              {
                "text": "ReplaceStandardVar",
                "link": "/Export_Import_Schnittstellen/Export/ReplaceStandardVar"
              },
              {
                "text": "ReplaceText",
                "link": "/Export_Import_Schnittstellen/Export/ReplaceText"
              },
              {
                "text": "ReplaceTextEx",
                "link": "/Export_Import_Schnittstellen/Export/ReplaceTextEx"
              },
              {
                "text": "Reportdesigner",
                "link": "/Export_Import_Schnittstellen/Export/Reportdesigner"
              },
              {
                "text": "Reportdesigner Hilfe & Wissen Themenübersicht",
                "link": "/Export_Import_Schnittstellen/Export/Reportdesigner_Hilfe_&_Wissen_Themenübersicht"
              },
              {
                "text": "Reports erstellen & anpassen Themenübersicht",
                "link": "/Export_Import_Schnittstellen/Export/Reports_erstellen_&_anpassen_Themenübersicht"
              },
              {
                "text": "ResetAdressArt",
                "link": "/Export_Import_Schnittstellen/Export/ResetAdressArt"
              },
              {
                "text": "ResetFaechervorbelegung",
                "link": "/Export_Import_Schnittstellen/Export/ResetFaechervorbelegung"
              },
              {
                "text": "RtfToPlaintext",
                "link": "/Export_Import_Schnittstellen/Export/RtfToPlaintext"
              },
              {
                "text": "SchILD-NRW 3",
                "link": "/Export_Import_Schnittstellen/Export/SchILD-NRW_3"
              },
              {
                "text": "SchILD-NRW 3 - Anwenderhandbuch",
                "link": "/Export_Import_Schnittstellen/Export/SchILD-NRW_3_-_Anwenderhandbuch"
              },
              {
                "text": "Schnittstelle SchILD - Vorbemerkungen",
                "link": "/Export_Import_Schnittstellen/Export/Schnittstelle_SchILD_-_Vorbemerkungen"
              },
              {
                "text": "Schnittstellenbeschreibung",
                "link": "/Export_Import_Schnittstellen/Export/Schnittstellenbeschreibung"
              },
              {
                "text": "Schulbesuchsjahre neu berechnen (Gruppenprozesse Allgemein)",
                "link": "/Export_Import_Schnittstellen/Export/Schulbesuchsjahre_neu_berechnen_(Gruppenprozesse_Allgemein)"
              },
              {
                "text": "Schulbezogene Kataloge (Kataloge)",
                "link": "/Export_Import_Schnittstellen/Export/Schulbezogene_Kataloge_(Kataloge)"
              },
              {
                "text": "Schulen in NRW (Allgemeine Kataloge)",
                "link": "/Export_Import_Schnittstellen/Export/Schulen_in_NRW_(Allgemeine_Kataloge)"
              },
              {
                "text": "SchuljahrToStr",
                "link": "/Export_Import_Schnittstellen/Export/SchuljahrToStr"
              },
              {
                "text": "SchuljahrToStrEx",
                "link": "/Export_Import_Schnittstellen/Export/SchuljahrToStrEx"
              },
              {
                "text": "SchulText",
                "link": "/Export_Import_Schnittstellen/Export/SchulText"
              },
              {
                "text": "SelectAdressArt",
                "link": "/Export_Import_Schnittstellen/Export/SelectAdressArt"
              },
              {
                "text": "SelectAdressName",
                "link": "/Export_Import_Schnittstellen/Export/SelectAdressName"
              },
              {
                "text": "SelectErzFunktion",
                "link": "/Export_Import_Schnittstellen/Export/SelectErzFunktion"
              },
              {
                "text": "Selectfont",
                "link": "/Export_Import_Schnittstellen/Export/Selectfont"
              },
              {
                "text": "SelectFromList",
                "link": "/Export_Import_Schnittstellen/Export/SelectFromList"
              },
              {
                "text": "SelectFromListEx",
                "link": "/Export_Import_Schnittstellen/Export/SelectFromListEx"
              },
              {
                "text": "SelectOption",
                "link": "/Export_Import_Schnittstellen/Export/SelectOption"
              },
              {
                "text": "SelectString",
                "link": "/Export_Import_Schnittstellen/Export/SelectString"
              },
              {
                "text": "SelectStringEx",
                "link": "/Export_Import_Schnittstellen/Export/SelectStringEx"
              },
              {
                "text": "SetAdressArt",
                "link": "/Export_Import_Schnittstellen/Export/SetAdressArt"
              },
              {
                "text": "SetFont",
                "link": "/Export_Import_Schnittstellen/Export/SetFont"
              },
              {
                "text": "SetJgIntervall",
                "link": "/Export_Import_Schnittstellen/Export/SetJgIntervall"
              },
              {
                "text": "SetJgIntervall ASD",
                "link": "/Export_Import_Schnittstellen/Export/SetJgIntervall_ASD"
              },
              {
                "text": "SetKursSchuelerFaecherListe",
                "link": "/Export_Import_Schnittstellen/Export/SetKursSchuelerFaecherListe"
              },
              {
                "text": "SetTextAttributes",
                "link": "/Export_Import_Schnittstellen/Export/SetTextAttributes"
              },
              {
                "text": "SetUebersicht",
                "link": "/Export_Import_Schnittstellen/Export/SetUebersicht"
              },
              {
                "text": "SetUebersichtEx",
                "link": "/Export_Import_Schnittstellen/Export/SetUebersichtEx"
              },
              {
                "text": "SetzeKlassenAdressArt",
                "link": "/Export_Import_Schnittstellen/Export/SetzeKlassenAdressArt"
              },
              {
                "text": "SetzeSortierung",
                "link": "/Export_Import_Schnittstellen/Export/SetzeSortierung"
              },
              {
                "text": "SetzeSortierungEx",
                "link": "/Export_Import_Schnittstellen/Export/SetzeSortierungEx"
              },
              {
                "text": "ShortDayNames",
                "link": "/Export_Import_Schnittstellen/Export/ShortDayNames"
              },
              {
                "text": "SortierungVon",
                "link": "/Export_Import_Schnittstellen/Export/SortierungVon"
              },
              {
                "text": "Sportbefreiungen (Allgemeine Kataloge)",
                "link": "/Export_Import_Schnittstellen/Export/Sportbefreiungen_(Allgemeine_Kataloge)"
              },
              {
                "text": "Sprach-Referenzniveaus ermitteln (Gruppenprozesse Allgemein)",
                "link": "/Export_Import_Schnittstellen/Export/Sprach-Referenzniveaus_ermitteln_(Gruppenprozesse_Allgemein)"
              },
              {
                "text": "Sprachenfolge zuweisen (Gruppenprozesse Allgemein)",
                "link": "/Export_Import_Schnittstellen/Export/Sprachenfolge_zuweisen_(Gruppenprozesse_Allgemein)"
              },
              {
                "text": "Sprachprüfung Feststellungsprüfung anstelle von Pflicht- oder Wahlpflichtfremdsprachen (Tutorial)",
                "link": "/Export_Import_Schnittstellen/Export/Sprachprüfung_Feststellungsprüfung_anstelle_von_Pflicht-_oder_Wahlpflichtfremdsprachen_(Tutorial)"
              },
              {
                "text": "Statistik-Jahrgänge (Schulbezogene Kataloge)",
                "link": "/Export_Import_Schnittstellen/Export/Statistik-Jahrgänge_(Schulbezogene_Kataloge)"
              },
              {
                "text": "StatistikKuerzelAusFachKuerzel",
                "link": "/Export_Import_Schnittstellen/Export/StatistikKuerzelAusFachKuerzel"
              },
              {
                "text": "StringInput",
                "link": "/Export_Import_Schnittstellen/Export/StringInput"
              },
              {
                "text": "Stundentafel (Schulbezogene Kataloge)",
                "link": "/Export_Import_Schnittstellen/Export/Stundentafel_(Schulbezogene_Kataloge)"
              },
              {
                "text": "SummeFehlstunden",
                "link": "/Export_Import_Schnittstellen/Export/SummeFehlstunden"
              },
              {
                "text": "Test (Tutorial)",
                "link": "/Export_Import_Schnittstellen/Export/Test_(Tutorial)"
              },
              {
                "text": "Textbreite",
                "link": "/Export_Import_Schnittstellen/Export/Textbreite"
              },
              {
                "text": "ThemaProjektKurs",
                "link": "/Export_Import_Schnittstellen/Export/ThemaProjektKurs"
              },
              {
                "text": "UebersichtsfachModus",
                "link": "/Export_Import_Schnittstellen/Export/UebersichtsfachModus"
              },
              {
                "text": "UeberspringeRecord",
                "link": "/Export_Import_Schnittstellen/Export/UeberspringeRecord"
              },
              {
                "text": "Umstellung der Gymnasien von G8 auf G9 (Tutorial)",
                "link": "/Export_Import_Schnittstellen/Export/Umstellung_der_Gymnasien_von_G8_auf_G9_(Tutorial)"
              },
              {
                "text": "Vermerk-Arten (Schulbezogene Kataloge)",
                "link": "/Export_Import_Schnittstellen/Export/Vermerk-Arten_(Schulbezogene_Kataloge)"
              },
              {
                "text": "Vermerke Merkmale löschen (Gruppenprozesse Allgemein)",
                "link": "/Export_Import_Schnittstellen/Export/Vermerke_Merkmale_löschen_(Gruppenprozesse_Allgemein)"
              },
              {
                "text": "Versionsgeschichte von SchILD-NRW",
                "link": "/Export_Import_Schnittstellen/Export/Versionsgeschichte_von_SchILD-NRW"
              },
              {
                "text": "Versionsgeschichte von SchILD-NRW 3",
                "link": "/Export_Import_Schnittstellen/Export/Versionsgeschichte_von_SchILD-NRW_3"
              },
              {
                "text": "VerzeichnisseErzeugen",
                "link": "/Export_Import_Schnittstellen/Export/VerzeichnisseErzeugen"
              },
              {
                "text": "Vorbereitende Maßnahmen zur Statistik in SchILD-NRW (Tutorial)",
                "link": "/Export_Import_Schnittstellen/Export/Vorbereitende_Maßnahmen_zur_Statistik_in_SchILD-NRW_(Tutorial)"
              },
              {
                "text": "Vorgaben für Wiki-Autoren",
                "link": "/Export_Import_Schnittstellen/Export/Vorgaben_für_Wiki-Autoren"
              },
              {
                "text": "Vorlagentest",
                "link": "/Export_Import_Schnittstellen/Export/Vorlagentest"
              },
              {
                "text": "WaehleDatumStr",
                "link": "/Export_Import_Schnittstellen/Export/WaehleDatumStr"
              },
              {
                "text": "WaehleDatumUndZeit",
                "link": "/Export_Import_Schnittstellen/Export/WaehleDatumUndZeit"
              },
              {
                "text": "Was leistet ein Report in SchILD-NRW 3",
                "link": "/Export_Import_Schnittstellen/Export/Was_leistet_ein_Report_in_SchILD-NRW_3_"
              },
              {
                "text": "Weitere Programme für Dateioperationen (Tipps)",
                "link": "/Export_Import_Schnittstellen/Export/Weitere_Programme_für_Dateioperationen_(Tipps)"
              },
              {
                "text": "WeNoM Handbuch",
                "link": "/Export_Import_Schnittstellen/Export/WeNoM_Handbuch"
              },
              {
                "text": "Wesentliche Unterschiede zu SchILD-NRW 2",
                "link": "/Export_Import_Schnittstellen/Export/Wesentliche_Unterschiede_zu_SchILD-NRW_2"
              },
              {
                "text": "Wiederholungen",
                "link": "/Export_Import_Schnittstellen/Export/Wiederholungen"
              },
              {
                "text": "Zahlwort",
                "link": "/Export_Import_Schnittstellen/Export/Zahlwort"
              },
              {
                "text": "ZensurToStr",
                "link": "/Export_Import_Schnittstellen/Export/ZensurToStr"
              }
            ]
          }
        ]
      },
      {
        "text": "Installation und System",
        "collapsed": true,
        "items": [
          {
            "text": "Datenbank",
            "collapsed": true,
            "items": [
              {
                "text": "Aktuelle Datenbankbenutzer zeigen (Verwaltung Schule)",
                "link": "/Installation_und_System/Datenbank/Aktuelle_Datenbankbenutzer_zeigen_(Verwaltung_Schule)"
              },
              {
                "text": "Datenbank anlegen (Verwaltung Datenbank)",
                "link": "/Installation_und_System/Datenbank/Datenbank_anlegen_(Verwaltung_Datenbank)"
              },
              {
                "text": "Datenbank importieren (aus SQLite) (Verwaltung Datenbank)",
                "link": "/Installation_und_System/Datenbank/Datenbank_importieren_(aus_SQLite)_(Verwaltung_Datenbank)"
              },
              {
                "text": "Datenbank migrieren (Verwaltung Datenbank)",
                "link": "/Installation_und_System/Datenbank/Datenbank_migrieren_(Verwaltung_Datenbank)"
              },
              {
                "text": "Datenbank sichern (Verwaltung Datenbank)",
                "link": "/Installation_und_System/Datenbank/Datenbank_sichern_(Verwaltung_Datenbank)"
              },
              {
                "text": "Datenbank wiederherstellen (Verwaltung Datenbank)",
                "link": "/Installation_und_System/Datenbank/Datenbank_wiederherstellen_(Verwaltung_Datenbank)"
              },
              {
                "text": "Datenbankverbindung durch automatische Pings am Leben erhalten (Tutorial)",
                "link": "/Installation_und_System/Datenbank/Datenbankverbindung_durch_automatische_Pings_am_Leben_erhalten_(Tutorial)"
              }
            ]
          },
          {
            "text": "SchILD",
            "collapsed": true,
            "items": [
              {
                "text": "Hinweise für IT-Dienstleister",
                "link": "/Installation_und_System/SchILD/Hinweise_für_IT-Dienstleister"
              },
              {
                "text": "Installation des Externen Notenmoduls (Tutorial)",
                "link": "/Installation_und_System/SchILD/Installation_des_Externen_Notenmoduls_(Tutorial)"
              },
              {
                "text": "Installation SchILD-NRW 3",
                "link": "/Installation_und_System/SchILD/Installation_SchILD-NRW_3"
              },
              {
                "text": "Installation SVWS-Server",
                "link": "/Installation_und_System/SchILD/Installation_SVWS-Server"
              },
              {
                "text": "Installation SVWS-Server und SchILD-NRW 3",
                "link": "/Installation_und_System/SchILD/Installation_SVWS-Server_und_SchILD-NRW_3"
              },
              {
                "text": "Installation SVWS-Server unter Linux (Installation)",
                "link": "/Installation_und_System/SchILD/Installation_SVWS-Server_unter_Linux_(Installation)"
              },
              {
                "text": "Installation von SchILD-NRW",
                "link": "/Installation_und_System/SchILD/Installation_von_SchILD-NRW"
              },
              {
                "text": "Schnellinstallation SchILD-NRW 3",
                "link": "/Installation_und_System/SchILD/Schnellinstallation_SchILD-NRW_3"
              },
              {
                "text": "Schnellinstallation SVWS-Server",
                "link": "/Installation_und_System/SchILD/Schnellinstallation_SVWS-Server"
              },
              {
                "text": "Schnellinstallation SVWS-Server und SchILD-NRW 3",
                "link": "/Installation_und_System/SchILD/Schnellinstallation_SVWS-Server_und_SchILD-NRW_3"
              },
              {
                "text": "Troubleshooting Installation",
                "link": "/Installation_und_System/SchILD/Troubleshooting_Installation"
              },
              {
                "text": "Troubleshooting Installation SchILD-NRW 3",
                "link": "/Installation_und_System/SchILD/Troubleshooting_Installation_SchILD-NRW_3"
              },
              {
                "text": "Troubleshooting Installation SVWS-Server",
                "link": "/Installation_und_System/SchILD/Troubleshooting_Installation_SVWS-Server"
              }
            ]
          },
          {
            "text": "SVWS-Server",
            "collapsed": true,
            "items": [
              {
                "text": "Backup des SVWS-Servers",
                "link": "/Installation_und_System/SVWS-Server/Backup_des_SVWS-Servers"
              },
              {
                "text": "Schild-NRW-Daten in eine andere Datenbank übertragen (migrieren) (Tutorial)",
                "link": "/Installation_und_System/SVWS-Server/Schild-NRW-Daten_in_eine_andere_Datenbank_übertragen_(migrieren)_(Tutorial)"
              },
              {
                "text": "SVWS-Client",
                "link": "/Installation_und_System/SVWS-Server/SVWS-Client"
              },
              {
                "text": "SVWS-Server",
                "link": "/Installation_und_System/SVWS-Server/SVWS-Server"
              }
            ]
          }
        ]
      },
      {
        "text": "Lehrkräfte",
        "collapsed": true,
        "items": [
          {
            "text": "Stammdaten",
            "collapsed": true,
            "items": [
              {
                "text": "Basisdaten (Lehrkräfte)",
                "link": "/Lehrkräfte/Stammdaten/Basisdaten_(Lehrkräfte)"
              },
              {
                "text": "Einwilligungen (Lehrkräfte)",
                "link": "/Lehrkräfte/Stammdaten/Einwilligungen_(Lehrkräfte)"
              },
              {
                "text": "Kontextmenü (Lehrkräfte)",
                "link": "/Lehrkräfte/Stammdaten/Kontextmenü_(Lehrkräfte)"
              },
              {
                "text": "LehrerAuswaehlen",
                "link": "/Lehrkräfte/Stammdaten/LehrerAuswaehlen"
              },
              {
                "text": "LehrerDatenLaden",
                "link": "/Lehrkräfte/Stammdaten/LehrerDatenLaden"
              },
              {
                "text": "LehrerKursartStatistikLaden",
                "link": "/Lehrkräfte/Stammdaten/LehrerKursartStatistikLaden"
              },
              {
                "text": "LehrerUnterrichtLaden",
                "link": "/Lehrkräfte/Stammdaten/LehrerUnterrichtLaden"
              },
              {
                "text": "Menüband (Lehrkräfte)",
                "link": "/Lehrkräfte/Stammdaten/Menüband_(Lehrkräfte)"
              },
              {
                "text": "Schulbezogene Daten (Lehrkräfte)",
                "link": "/Lehrkräfte/Stammdaten/Schulbezogene_Daten_(Lehrkräfte)"
              },
              {
                "text": "Unterricht zeigen (Lehrkräfte Zeitabhängige Daten)",
                "link": "/Lehrkräfte/Stammdaten/Unterricht_zeigen_(Lehrkräfte_Zeitabhängige_Daten)"
              },
              {
                "text": "Zeitabhängige Daten (Lehrkräfte)",
                "link": "/Lehrkräfte/Stammdaten/Zeitabhängige_Daten_(Lehrkräfte)"
              }
            ]
          }
        ]
      },
      {
        "text": "Schüler",
        "collapsed": true,
        "items": [
          {
            "text": "Aktueller Abschnitt",
            "collapsed": true,
            "items": [
              {
                "text": "Aktuelles Halbjahr   Aktueller Abschnitt (Schüler)",
                "link": "/Schüler/Aktueller_Abschnitt/Aktuelles_Halbjahr___Aktueller_Abschnitt_(Schüler)"
              },
              {
                "text": "Allgemeine Angaben (Schüler Aktuelles Halbjahr   Aktueller Abschnitt)",
                "link": "/Schüler/Aktueller_Abschnitt/Allgemeine_Angaben_(Schüler_Aktuelles_Halbjahr___Aktueller_Abschnitt)"
              },
              {
                "text": "Ergebnis Versetzungs- Abschluss-Berechnung (Aktuelles Halbjahr   Aktueller Abschnitt",
                "link": "/Schüler/Aktueller_Abschnitt/Ergebnis_Versetzungs-_Abschluss-Berechnung_(Aktuelles_Halbjahr___Aktueller_Abschnitt"
              },
              {
                "text": "Kompetenzen für Ankreuzzeugnisse ((Aktuelles Halbjahr   Aktueller Abschnitt)",
                "link": "/Schüler/Aktueller_Abschnitt/Kompetenzen_für_Ankreuzzeugnisse_((Aktuelles_Halbjahr___Aktueller_Abschnitt)"
              }
            ]
          },
          {
            "text": "Auswahl Filter",
            "collapsed": true,
            "items": [
              {
                "text": "AufFaecherFiltern",
                "link": "/Schüler/Auswahl_Filter/AufFaecherFiltern"
              },
              {
                "text": "Benutzung des Schülerfilters (Tutorial)",
                "link": "/Schüler/Auswahl_Filter/Benutzung_des_Schülerfilters_(Tutorial)"
              },
              {
                "text": "Filter I (Auswahl)",
                "link": "/Schüler/Auswahl_Filter/Filter_I_(Auswahl)"
              },
              {
                "text": "FilterAdressArt",
                "link": "/Schüler/Auswahl_Filter/FilterAdressArt"
              },
              {
                "text": "FilterAdresse",
                "link": "/Schüler/Auswahl_Filter/FilterAdresse"
              },
              {
                "text": "FilterErzieherfunktion",
                "link": "/Schüler/Auswahl_Filter/FilterErzieherfunktion"
              },
              {
                "text": "FilterFachUebersichtAufKlasse",
                "link": "/Schüler/Auswahl_Filter/FilterFachUebersichtAufKlasse"
              },
              {
                "text": "FilterLaufbahnJahr",
                "link": "/Schüler/Auswahl_Filter/FilterLaufbahnJahr"
              },
              {
                "text": "FilterLaufbahnJahrgangASD",
                "link": "/Schüler/Auswahl_Filter/FilterLaufbahnJahrgangASD"
              },
              {
                "text": "FilterLaufbahnStufen",
                "link": "/Schüler/Auswahl_Filter/FilterLaufbahnStufen"
              },
              {
                "text": "FilterSchuelerAdressArt",
                "link": "/Schüler/Auswahl_Filter/FilterSchuelerAdressArt"
              },
              {
                "text": "ResetAdressFilter",
                "link": "/Schüler/Auswahl_Filter/ResetAdressFilter"
              },
              {
                "text": "ResetFilterErzieherfunktion",
                "link": "/Schüler/Auswahl_Filter/ResetFilterErzieherfunktion"
              },
              {
                "text": "ResetFilterLaufbahnJahr",
                "link": "/Schüler/Auswahl_Filter/ResetFilterLaufbahnJahr"
              },
              {
                "text": "Schülerfilter (Auswahl)",
                "link": "/Schüler/Auswahl_Filter/Schülerfilter_(Auswahl)"
              },
              {
                "text": "SetUebersichtKursartFilter",
                "link": "/Schüler/Auswahl_Filter/SetUebersichtKursartFilter"
              },
              {
                "text": "Setzefilter",
                "link": "/Schüler/Auswahl_Filter/Setzefilter"
              }
            ]
          },
          {
            "text": "Erzieher",
            "collapsed": true,
            "items": [
              {
                "text": "Erz.-Berechtigte   Telefonnummern (Schüler)",
                "link": "/Schüler/Erzieher/Erz.-Berechtigte___Telefonnummern_(Schüler)"
              },
              {
                "text": "Erzieher mit Funktionen (Tutorial)",
                "link": "/Schüler/Erzieher/Erzieher_mit_Funktionen_(Tutorial)"
              },
              {
                "text": "Erzieher-Arten (Allgemeine Kataloge)",
                "link": "/Schüler/Erzieher/Erzieher-Arten_(Allgemeine_Kataloge)"
              },
              {
                "text": "NurErzieherMitAnschreiben",
                "link": "/Schüler/Erzieher/NurErzieherMitAnschreiben"
              }
            ]
          },
          {
            "text": "Fotos",
            "collapsed": true,
            "items": [
              {
                "text": "Fotos löschen (Gruppenprozesse Allgemein)",
                "link": "/Schüler/Fotos/Fotos_löschen_(Gruppenprozesse_Allgemein)"
              }
            ]
          },
          {
            "text": "Stammdaten",
            "collapsed": true,
            "items": [
              {
                "text": "Abitur (Schüler)",
                "link": "/Schüler/Stammdaten/Abitur_(Schüler)"
              },
              {
                "text": "Alle Fächer bei Schülern löschen (Gruppenprozesse Fächer)",
                "link": "/Schüler/Stammdaten/Alle_Fächer_bei_Schülern_löschen_(Gruppenprozesse_Fächer)"
              },
              {
                "text": "Alle Vornamen anpassen (Gruppenprozesse Allgemein)",
                "link": "/Schüler/Stammdaten/Alle_Vornamen_anpassen_(Gruppenprozesse_Allgemein)"
              },
              {
                "text": "Ausweisnummern automatisch generieren (Gruppenprozesse Allgemein)",
                "link": "/Schüler/Stammdaten/Ausweisnummern_automatisch_generieren_(Gruppenprozesse_Allgemein)"
              },
              {
                "text": "BK-Abschluss (Schüler)",
                "link": "/Schüler/Stammdaten/BK-Abschluss_(Schüler)"
              },
              {
                "text": "Details zu Fächern bei Schülern ändern (Gruppenprozesse Fächer)",
                "link": "/Schüler/Stammdaten/Details_zu_Fächern_bei_Schülern_ändern_(Gruppenprozesse_Fächer)"
              },
              {
                "text": "Doppelte Fächer löschen (Gruppenprozesse Fächer)",
                "link": "/Schüler/Stammdaten/Doppelte_Fächer_löschen_(Gruppenprozesse_Fächer)"
              },
              {
                "text": "Eintragung der Schüler im offenen Ganztag (Tutorial)",
                "link": "/Schüler/Stammdaten/Eintragung_der_Schüler_im_offenen_Ganztag_(Tutorial)"
              },
              {
                "text": "Einwilligung (Schüler)",
                "link": "/Schüler/Stammdaten/Einwilligung_(Schüler)"
              },
              {
                "text": "Einzelne Fächer bei Schülern hinzufügen (Gruppenprozesse Fächer)",
                "link": "/Schüler/Stammdaten/Einzelne_Fächer_bei_Schülern_hinzufügen_(Gruppenprozesse_Fächer)"
              },
              {
                "text": "Einzelne Fächer bei Schülern löschen (Gruppenprozesse Fächer)",
                "link": "/Schüler/Stammdaten/Einzelne_Fächer_bei_Schülern_löschen_(Gruppenprozesse_Fächer)"
              },
              {
                "text": "Fachhochschulreife prüfen (Gruppenprozesse Allgemein)",
                "link": "/Schüler/Stammdaten/Fachhochschulreife_prüfen_(Gruppenprozesse_Allgemein)"
              },
              {
                "text": "Fahrschüler-Arten (Allgemeine Kataloge)",
                "link": "/Schüler/Stammdaten/Fahrschüler-Arten_(Allgemeine_Kataloge)"
              },
              {
                "text": "Fehlstunden-Summen manuell eingeben (Gruppenprozesse Noten, Zeugnisvorbereitung)",
                "link": "/Schüler/Stammdaten/Fehlstunden-Summen_manuell_eingeben_(Gruppenprozesse_Noten,_Zeugnisvorbereitung)"
              },
              {
                "text": "FHR (Schüler)",
                "link": "/Schüler/Stammdaten/FHR_(Schüler)"
              },
              {
                "text": "Fördermaßnahmen (Schüler)",
                "link": "/Schüler/Stammdaten/Fördermaßnahmen_(Schüler)"
              },
              {
                "text": "Grundschuldaten eingeben (Schüler Schulbesuch)",
                "link": "/Schüler/Stammdaten/Grundschuldaten_eingeben_(Schüler_Schulbesuch)"
              },
              {
                "text": "Grundschuldaten löschen (Gruppenprozesse Allgemein)",
                "link": "/Schüler/Stammdaten/Grundschuldaten_löschen_(Gruppenprozesse_Allgemein)"
              },
              {
                "text": "Individualdaten ändern (Gruppenprozesse Allgemein)",
                "link": "/Schüler/Stammdaten/Individualdaten_ändern_(Gruppenprozesse_Allgemein)"
              },
              {
                "text": "Individualdaten I (Schüler)",
                "link": "/Schüler/Stammdaten/Individualdaten_I_(Schüler)"
              },
              {
                "text": "Individualdaten II (Schüler)",
                "link": "/Schüler/Stammdaten/Individualdaten_II_(Schüler)"
              },
              {
                "text": "Individuelle Schülergruppen bearbeiten und nutzen (Tutorial)",
                "link": "/Schüler/Stammdaten/Individuelle_Schülergruppen_bearbeiten_und_nutzen_(Tutorial)"
              },
              {
                "text": "KAoA (Schüler)",
                "link": "/Schüler/Stammdaten/KAoA_(Schüler)"
              },
              {
                "text": "Laufbahninfo (Schüler)",
                "link": "/Schüler/Stammdaten/Laufbahninfo_(Schüler)"
              },
              {
                "text": "Mahnungen automatisch setzen (Gruppenprozesse Noten, Zeugnisvorbereitung)",
                "link": "/Schüler/Stammdaten/Mahnungen_automatisch_setzen_(Gruppenprozesse_Noten,_Zeugnisvorbereitung)"
              },
              {
                "text": "Menüband (Schüler)",
                "link": "/Schüler/Stammdaten/Menüband_(Schüler)"
              },
              {
                "text": "Neuaufnahmen in Schild-NRW (Tutorial)",
                "link": "/Schüler/Stammdaten/Neuaufnahmen_in_Schild-NRW_(Tutorial)"
              },
              {
                "text": "Schulbesuch (Schüler)",
                "link": "/Schüler/Stammdaten/Schulbesuch_(Schüler)"
              },
              {
                "text": "Schüler löschen und wiederherstellen (Tutorial)",
                "link": "/Schüler/Stammdaten/Schüler_löschen_und_wiederherstellen_(Tutorial)"
              },
              {
                "text": "Schüler-Datensätze löschen (Gruppenprozesse Allgemein)",
                "link": "/Schüler/Stammdaten/Schüler-Datensätze_löschen_(Gruppenprozesse_Allgemein)"
              },
              {
                "text": "Schülercontainer (Schüler)",
                "link": "/Schüler/Stammdaten/Schülercontainer_(Schüler)"
              },
              {
                "text": "Schülergruppe bearbeiten (Schulbezogene Kataloge)",
                "link": "/Schüler/Stammdaten/Schülergruppe_bearbeiten_(Schulbezogene_Kataloge)"
              },
              {
                "text": "Schülerspezifische Kursarten (Schulbezogene Kataloge)",
                "link": "/Schüler/Stammdaten/Schülerspezifische_Kursarten_(Schulbezogene_Kataloge)"
              },
              {
                "text": "Schülersuche (Schüler)",
                "link": "/Schüler/Stammdaten/Schülersuche_(Schüler)"
              },
              {
                "text": "Sortierung des Schülercontainers ändern (Tutorial)",
                "link": "/Schüler/Stammdaten/Sortierung_des_Schülercontainers_ändern_(Tutorial)"
              },
              {
                "text": "Telef. Ansprechpartner (Allgemeine Kataloge)",
                "link": "/Schüler/Stammdaten/Telef._Ansprechpartner_(Allgemeine_Kataloge)"
              },
              {
                "text": "Übersicht (Schüler)",
                "link": "/Schüler/Stammdaten/Übersicht_(Schüler)"
              },
              {
                "text": "Vermerke (Schüler)",
                "link": "/Schüler/Stammdaten/Vermerke_(Schüler)"
              },
              {
                "text": "Weitere Adressen (Schüler)",
                "link": "/Schüler/Stammdaten/Weitere_Adressen_(Schüler)"
              },
              {
                "text": "Zeugnisse drucken und Schüler ausschulen (Gruppenprozesse Noten, Zeugnisvorbereitung)",
                "link": "/Schüler/Stammdaten/Zeugnisse_drucken_und_Schüler_ausschulen_(Gruppenprozesse_Noten,_Zeugnisvorbereitung)"
              },
              {
                "text": "ZP10 ZK (Schüler)",
                "link": "/Schüler/Stammdaten/ZP10_ZK_(Schüler)"
              }
            ]
          }
        ]
      },
      {
        "text": "Unterricht Leistungsdaten Noten",
        "collapsed": true,
        "items": [
          {
            "text": "Fächer",
            "collapsed": true,
            "items": [
              {
                "text": "Fächer",
                "link": "/Unterricht_Leistungsdaten_Noten/Fächer/Fächer"
              },
              {
                "text": "Fächer (Vorgaben und Bedingungen)",
                "link": "/Unterricht_Leistungsdaten_Noten/Fächer/Fächer_(Vorgaben_und_Bedingungen)"
              },
              {
                "text": "Fächer aus vorherigem Abschnitt holen (Gruppenprozesse Fächer)",
                "link": "/Unterricht_Leistungsdaten_Noten/Fächer/Fächer_aus_vorherigem_Abschnitt_holen_(Gruppenprozesse_Fächer)"
              },
              {
                "text": "Fächer der Oberstufe (Schulbezogene Kataloge)",
                "link": "/Unterricht_Leistungsdaten_Noten/Fächer/Fächer_der_Oberstufe_(Schulbezogene_Kataloge)"
              },
              {
                "text": "Fächer zuweisen (tabellarisch) (Gruppenprozesse Fächer)",
                "link": "/Unterricht_Leistungsdaten_Noten/Fächer/Fächer_zuweisen_(tabellarisch)_(Gruppenprozesse_Fächer)"
              },
              {
                "text": "Klassenunterrichte bearbeiten (Gruppenprozesse Fächer)",
                "link": "/Unterricht_Leistungsdaten_Noten/Fächer/Klassenunterrichte_bearbeiten_(Gruppenprozesse_Fächer)"
              },
              {
                "text": "Stundentafeln zuweisen (Gruppenprozesse Fächer)",
                "link": "/Unterricht_Leistungsdaten_Noten/Fächer/Stundentafeln_zuweisen_(Gruppenprozesse_Fächer)"
              },
              {
                "text": "Unterrichtsfächer (Schulbezogene Kataloge)",
                "link": "/Unterricht_Leistungsdaten_Noten/Fächer/Unterrichtsfächer_(Schulbezogene_Kataloge)"
              }
            ]
          },
          {
            "text": "Leistungsdaten",
            "collapsed": true,
            "items": [
              {
                "text": "Fächer in Leistungsdaten neu sortieren (Gruppenprozesse Fächer)",
                "link": "/Unterricht_Leistungsdaten_Noten/Leistungsdaten/Fächer_in_Leistungsdaten_neu_sortieren_(Gruppenprozesse_Fächer)"
              },
              {
                "text": "Leistungsdaten (Aktuelles Halbjahr   Aktueller Abschnitt",
                "link": "/Unterricht_Leistungsdaten_Noten/Leistungsdaten/Leistungsdaten_(Aktuelles_Halbjahr___Aktueller_Abschnitt"
              },
              {
                "text": "Leistungsdaten holen (Gruppenprozesse Abitur)",
                "link": "/Unterricht_Leistungsdaten_Noten/Leistungsdaten/Leistungsdaten_holen_(Gruppenprozesse_Abitur)"
              },
              {
                "text": "Leistungsdaten holen (Gruppenprozesse BK-Abschluss)",
                "link": "/Unterricht_Leistungsdaten_Noten/Leistungsdaten/Leistungsdaten_holen_(Gruppenprozesse_BK-Abschluss)"
              },
              {
                "text": "Sprachenfolge aus Leistungsdaten ermitteln (Gruppenprozesse Allgemein)",
                "link": "/Unterricht_Leistungsdaten_Noten/Leistungsdaten/Sprachenfolge_aus_Leistungsdaten_ermitteln_(Gruppenprozesse_Allgemein)"
              }
            ]
          },
          {
            "text": "Noten",
            "collapsed": true,
            "items": [
              {
                "text": "Abgeschlossene Fächer holen (Gruppenprozesse Noten, Zeugnisvorbereitung)",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/Abgeschlossene_Fächer_holen_(Gruppenprozesse_Noten,_Zeugnisvorbereitung)"
              },
              {
                "text": "Abgeschlossene Fächer löschen (Gruppenprozesse Noten, Zeugnisvorbereitung)",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/Abgeschlossene_Fächer_löschen_(Gruppenprozesse_Noten,_Zeugnisvorbereitung)"
              },
              {
                "text": "Abschluss berechnen (Gruppenprozesse Zentrale Klausuren)",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/Abschluss_berechnen_(Gruppenprozesse_Zentrale_Klausuren)"
              },
              {
                "text": "Abschlussnote in Leistungsdaten übertragen (Gruppenprozesse Zentrale Klausuren)",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/Abschlussnote_in_Leistungsdaten_übertragen_(Gruppenprozesse_Zentrale_Klausuren)"
              },
              {
                "text": "Abschlussnoten in Leistungsdaten übertragen(Gruppenprozesse BK-Abschluss)",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/Abschlussnoten_in_Leistungsdaten_übertragen(Gruppenprozesse_BK-Abschluss)"
              },
              {
                "text": "Ankreuzkompetenzen eintragen (Gruppenprozesse Noten, Zeugnisvorbereitung)",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/Ankreuzkompetenzen_eintragen_(Gruppenprozesse_Noten,_Zeugnisvorbereitung)"
              },
              {
                "text": "CreateNotenHeader",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/CreateNotenHeader"
              },
              {
                "text": "CreateNotenHeaderUS",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/CreateNotenHeaderUS"
              },
              {
                "text": "Externes Notenmodul 3 (Tutorial)",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/Externes_Notenmodul_3_(Tutorial)"
              },
              {
                "text": "Fächer ohne Lehrkraft suchen (Gruppenprozesse Noten, Zeugnisvorbereitung)",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/Fächer_ohne_Lehrkraft_suchen_(Gruppenprozesse_Noten,_Zeugnisvorbereitung)"
              },
              {
                "text": "Fächer ohne Noten suchen (Gruppenprozesse Noten, Zeugnisvorbereitung)",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/Fächer_ohne_Noten_suchen_(Gruppenprozesse_Noten,_Zeugnisvorbereitung)"
              },
              {
                "text": "Fehlstunden-Summen autom. berechnen (Gruppenprozesse Noten, Zeugnisvorbereitung)",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/Fehlstunden-Summen_autom._berechnen_(Gruppenprozesse_Noten,_Zeugnisvorbereitung)"
              },
              {
                "text": "Konferenz- Zeugnis-Datum setzen (Gruppenprozesse Noten, Zeugnisvorbereitung)",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/Konferenz-_Zeugnis-Datum_setzen_(Gruppenprozesse_Noten,_Zeugnisvorbereitung)"
              },
              {
                "text": "Leistungsdaten holen (Gruppenprozesse Zentrale Klausuren)",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/Leistungsdaten_holen_(Gruppenprozesse_Zentrale_Klausuren)"
              },
              {
                "text": "Lernbereichsnoten eingeben (Gruppenprozesse Noten, Zeugnisvorbereitung)",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/Lernbereichsnoten_eingeben_(Gruppenprozesse_Noten,_Zeugnisvorbereitung)"
              },
              {
                "text": "LoadNotenliste",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/LoadNotenliste"
              },
              {
                "text": "Mahnungsdruck einleiten (Gruppenprozesse Noten, Zeugnisvorbereitung)",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/Mahnungsdruck_einleiten_(Gruppenprozesse_Noten,_Zeugnisvorbereitung)"
              },
              {
                "text": "Mündliche Prüfungen festlegen (Gruppenprozesse Zentrale Klausuren)",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/Mündliche_Prüfungen_festlegen_(Gruppenprozesse_Zentrale_Klausuren)"
              },
              {
                "text": "Noten des akt. Abschnittes löschen (Gruppenprozesse Noten, Zeugnisvorbereitung)",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/Noten_des_akt._Abschnittes_löschen_(Gruppenprozesse_Noten,_Zeugnisvorbereitung)"
              },
              {
                "text": "Noten eingeben (Gruppenprozesse Zentrale Klausuren)",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/Noten_eingeben_(Gruppenprozesse_Zentrale_Klausuren)"
              },
              {
                "text": "Noten von Epochal-Fächern ergänzen (Gruppenprozesse Fächer)",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/Noten_von_Epochal-Fächern_ergänzen_(Gruppenprozesse_Fächer)"
              },
              {
                "text": "Noten, Mahnungen und Fehlstd. eingeben (Gruppenprozesse Noten, Zeugnisvorbereitung)",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/Noten,_Mahnungen_und_Fehlstd._eingeben_(Gruppenprozesse_Noten,_Zeugnisvorbereitung)"
              },
              {
                "text": "NotenDurchschnitt",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/NotenDurchschnitt"
              },
              {
                "text": "NurFaecherMitNoten",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/NurFaecherMitNoten"
              },
              {
                "text": "Platzhalter in Memo-Feldern ersetzen (Gruppenprozesse Noten, Zeugnisvorbereitung)",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/Platzhalter_in_Memo-Feldern_ersetzen_(Gruppenprozesse_Noten,_Zeugnisvorbereitung)"
              },
              {
                "text": "SelectNotenliste",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/SelectNotenliste"
              },
              {
                "text": "SetQuartalsnotenInUebersicht",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/SetQuartalsnotenInUebersicht"
              },
              {
                "text": "Verwendung des Externen Notenmoduls (Tutorial)",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/Verwendung_des_Externen_Notenmoduls_(Tutorial)"
              },
              {
                "text": "Verwendung des Externen Notenmoduls 3 (Tutorial)",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/Verwendung_des_Externen_Notenmoduls_3_(Tutorial)"
              },
              {
                "text": "Vorläufige Abschlussnoten berechnen (Gruppenprozesse BK-Abschluss)",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/Vorläufige_Abschlussnoten_berechnen_(Gruppenprozesse_BK-Abschluss)"
              },
              {
                "text": "Zentrale Prüfung Jahrgang 10 (Gruppenprozesse ZP 10 ZK)",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/Zentrale_Prüfung_Jahrgang_10_(Gruppenprozesse_ZP_10_ZK)"
              },
              {
                "text": "Zeugnisbemerkungen eintragen (Gruppenprozesse Noten, Zeugnisvorbereitung)",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/Zeugnisbemerkungen_eintragen_(Gruppenprozesse_Noten,_Zeugnisvorbereitung)"
              },
              {
                "text": "Zugeordnete Zeugnisformulare drucken (Gruppenprozesse Noten, Zeugnisvorbereitung)",
                "link": "/Unterricht_Leistungsdaten_Noten/Noten/Zugeordnete_Zeugnisformulare_drucken_(Gruppenprozesse_Noten,_Zeugnisvorbereitung)"
              }
            ]
          },
          {
            "text": "Teilleistungen",
            "collapsed": true,
            "items": [
              {
                "text": "Fächer und Teilleistungen für ZP 10 und ZK (Tutorial)",
                "link": "/Unterricht_Leistungsdaten_Noten/Teilleistungen/Fächer_und_Teilleistungen_für_ZP_10_und_ZK_(Tutorial)"
              },
              {
                "text": "Noteneingabe (nur vorbereitete TL) (Gruppenprozesse Teilleistungen)",
                "link": "/Unterricht_Leistungsdaten_Noten/Teilleistungen/Noteneingabe_(nur_vorbereitete_TL)_(Gruppenprozesse_Teilleistungen)"
              },
              {
                "text": "Personengruppen (Schulbezogene Kataloge)",
                "link": "/Unterricht_Leistungsdaten_Noten/Teilleistungen/Personengruppen_(Schulbezogene_Kataloge)"
              },
              {
                "text": "Prüfungsnoten aus Teilleistungen holen (Gruppenprozesse Zentrale Klausuren)",
                "link": "/Unterricht_Leistungsdaten_Noten/Teilleistungen/Prüfungsnoten_aus_Teilleistungen_holen_(Gruppenprozesse_Zentrale_Klausuren)"
              },
              {
                "text": "Teilleistungen einrichten und verwalten (Tutorial)",
                "link": "/Unterricht_Leistungsdaten_Noten/Teilleistungen/Teilleistungen_einrichten_und_verwalten_(Tutorial)"
              },
              {
                "text": "Teilleistungen für einen Abschnitt löschen (Gruppenprozesse Teilleistungen)",
                "link": "/Unterricht_Leistungsdaten_Noten/Teilleistungen/Teilleistungen_für_einen_Abschnitt_löschen_(Gruppenprozesse_Teilleistungen)"
              },
              {
                "text": "Teilleistungs-Arten (Schulbezogene Kataloge)",
                "link": "/Unterricht_Leistungsdaten_Noten/Teilleistungen/Teilleistungs-Arten_(Schulbezogene_Kataloge)"
              },
              {
                "text": "Teilleistungsarten aus Vorlage zuweisen (Gruppenprozesse Teilleistungen)",
                "link": "/Unterricht_Leistungsdaten_Noten/Teilleistungen/Teilleistungsarten_aus_Vorlage_zuweisen_(Gruppenprozesse_Teilleistungen)"
              },
              {
                "text": "Teilleistungsarten global zuweisen (Gruppenprozesse Teilleistungen)",
                "link": "/Unterricht_Leistungsdaten_Noten/Teilleistungen/Teilleistungsarten_global_zuweisen_(Gruppenprozesse_Teilleistungen)"
              },
              {
                "text": "Teilleistungsarten individuell zuweisen (Gruppenprozesse Teilleistungen)",
                "link": "/Unterricht_Leistungsdaten_Noten/Teilleistungen/Teilleistungsarten_individuell_zuweisen_(Gruppenprozesse_Teilleistungen)"
              }
            ]
          }
        ]
      },
      {
        "text": "Verwaltung Administration",
        "collapsed": true,
        "items": [
          {
            "text": "Abiturdaten (Verwaltung Export)",
            "link": "/Verwaltung_Administration/Abiturdaten_(Verwaltung_Export)"
          },
          {
            "text": "Allgemeine Angaben (Verwaltung Schule)",
            "link": "/Verwaltung_Administration/Allgemeine_Angaben_(Verwaltung_Schule)"
          },
          {
            "text": "Allgemeines (Verwaltung Globale Einstellungen)",
            "link": "/Verwaltung_Administration/Allgemeines_(Verwaltung_Globale_Einstellungen)"
          },
          {
            "text": "Als Excel- Text-Datei (Verwaltung Export)",
            "link": "/Verwaltung_Administration/Als_Excel-_Text-Datei_(Verwaltung_Export)"
          },
          {
            "text": "Aufnahmebestätigung (Verwaltung Import)",
            "link": "/Verwaltung_Administration/Aufnahmebestätigung_(Verwaltung_Import)"
          },
          {
            "text": "Aufräumen (Verwaltung Werkzeuge)",
            "link": "/Verwaltung_Administration/Aufräumen_(Verwaltung_Werkzeuge)"
          },
          {
            "text": "Ausweisnummern löschen (Verwaltung Werkzeuge)",
            "link": "/Verwaltung_Administration/Ausweisnummern_löschen_(Verwaltung_Werkzeuge)"
          },
          {
            "text": "Automatische Prozesse ausführen (Verwaltung Werkzeuge)",
            "link": "/Verwaltung_Administration/Automatische_Prozesse_ausführen_(Verwaltung_Werkzeuge)"
          },
          {
            "text": "Benutzer (Verwaltung Schule)",
            "link": "/Verwaltung_Administration/Benutzer_(Verwaltung_Schule)"
          },
          {
            "text": "Benutzerverwaltung (Verwaltung Schule)",
            "link": "/Verwaltung_Administration/Benutzerverwaltung_(Verwaltung_Schule)"
          },
          {
            "text": "Daten aus zurückliegenden Abschnitten drucken",
            "link": "/Verwaltung_Administration/Daten_aus_zurückliegenden_Abschnitten_drucken"
          },
          {
            "text": "Daten Exportieren (Verwaltung Statistik für IT-NRW)",
            "link": "/Verwaltung_Administration/Daten_Exportieren_(Verwaltung_Statistik_für_IT-NRW)"
          },
          {
            "text": "Daten gemäß löschfristen löschen (Verwaltung Werkzeuge)",
            "link": "/Verwaltung_Administration/Daten_gemäß_löschfristen_löschen_(Verwaltung_Werkzeuge)"
          },
          {
            "text": "Datenexport im xlsx- oder txt-Format (Tutorial)",
            "link": "/Verwaltung_Administration/Datenexport_im_xlsx-_oder_txt-Format_(Tutorial)"
          },
          {
            "text": "Datenschutzhinweise (Verwaltung Hilfe)",
            "link": "/Verwaltung_Administration/Datenschutzhinweise_(Verwaltung_Hilfe)"
          },
          {
            "text": "Die Ordnerstruktur der Reportverwaltung",
            "link": "/Verwaltung_Administration/Die_Ordnerstruktur_der_Reportverwaltung"
          },
          {
            "text": "Direkter Zugriff auf das Schülerstammblatt und die Schulbescheinigung",
            "link": "/Verwaltung_Administration/Direkter_Zugriff_auf_das_Schülerstammblatt_und_die_Schulbescheinigung"
          },
          {
            "text": "Dokumentenverwaltung (Schüler)",
            "link": "/Verwaltung_Administration/Dokumentenverwaltung_(Schüler)"
          },
          {
            "text": "Dokumentenverwaltung und Zeugnisarchivierung",
            "link": "/Verwaltung_Administration/Dokumentenverwaltung_und_Zeugnisarchivierung"
          },
          {
            "text": "E-Mail-Versand (Verwaltung Globale Einstellungen)",
            "link": "/Verwaltung_Administration/E-Mail-Versand_(Verwaltung_Globale_Einstellungen)"
          },
          {
            "text": "Einen Report per E-Mail versenden und teilen",
            "link": "/Verwaltung_Administration/Einen_Report_per_E-Mail_versenden_und_teilen"
          },
          {
            "text": "Einstellungen (Verwaltung)",
            "link": "/Verwaltung_Administration/Einstellungen_(Verwaltung)"
          },
          {
            "text": "Excel-Notendateien (Verwaltung Export)",
            "link": "/Verwaltung_Administration/Excel-Notendateien_(Verwaltung_Export)"
          },
          {
            "text": "Export (Verwaltung)",
            "link": "/Verwaltung_Administration/Export_(Verwaltung)"
          },
          {
            "text": "Export für BAN-Portal (Verwaltung Export)",
            "link": "/Verwaltung_Administration/Export_für_BAN-Portal_(Verwaltung_Export)"
          },
          {
            "text": "Export für iServ (Verwaltung Export)",
            "link": "/Verwaltung_Administration/Export_für_iServ_(Verwaltung_Export)"
          },
          {
            "text": "Export für Logineo LMS (CSV) (Verwaltung Export)",
            "link": "/Verwaltung_Administration/Export_für_Logineo_LMS_(CSV)_(Verwaltung_Export)"
          },
          {
            "text": "Export für Logineo NRW (XML) (Verwaltung Export)",
            "link": "/Verwaltung_Administration/Export_für_Logineo_NRW_(XML)_(Verwaltung_Export)"
          },
          {
            "text": "Export für SDS (MNS-Pro)(Verwaltung Export)",
            "link": "/Verwaltung_Administration/Export_für_SDS_(MNS-Pro)(Verwaltung_Export)"
          },
          {
            "text": "Externes Notenmodul (Verwaltung Export)",
            "link": "/Verwaltung_Administration/Externes_Notenmodul_(Verwaltung_Export)"
          },
          {
            "text": "Externes Notenmodul (Verwaltung Import)",
            "link": "/Verwaltung_Administration/Externes_Notenmodul_(Verwaltung_Import)"
          },
          {
            "text": "Fächer, Noten (Verwaltung Globale Einstellungen)",
            "link": "/Verwaltung_Administration/Fächer,_Noten_(Verwaltung_Globale_Einstellungen)"
          },
          {
            "text": "Fehlende Abschnittsdaten anlegen (Verwaltung Werkzeuge)",
            "link": "/Verwaltung_Administration/Fehlende_Abschnittsdaten_anlegen_(Verwaltung_Werkzeuge)"
          },
          {
            "text": "Fehlerprotokoll anzeigen (Verwaltung Statistik für IT-NRW)",
            "link": "/Verwaltung_Administration/Fehlerprotokoll_anzeigen_(Verwaltung_Statistik_für_IT-NRW)"
          },
          {
            "text": "Forum SchILD-NRW besuchen (Verwaltung Hilfe)",
            "link": "/Verwaltung_Administration/Forum_SchILD-NRW_besuchen_(Verwaltung_Hilfe)"
          },
          {
            "text": "Fotoliste (Verwaltung Export)",
            "link": "/Verwaltung_Administration/Fotoliste_(Verwaltung_Export)"
          },
          {
            "text": "Fotos (Verwaltung Export)",
            "link": "/Verwaltung_Administration/Fotos_(Verwaltung_Export)"
          },
          {
            "text": "Fotos neu skalieren (Verwaltung Werkzeuge)",
            "link": "/Verwaltung_Administration/Fotos_neu_skalieren_(Verwaltung_Werkzeuge)"
          },
          {
            "text": "Für Schulträger (Verwaltung Export)",
            "link": "/Verwaltung_Administration/Für_Schulträger_(Verwaltung_Export)"
          },
          {
            "text": "Gesamtprüfung der Daten (Verwaltung Statistik für IT-NRW)",
            "link": "/Verwaltung_Administration/Gesamtprüfung_der_Daten_(Verwaltung_Statistik_für_IT-NRW)"
          },
          {
            "text": "Globale Einstellungen (Verwaltung Einstellungen)",
            "link": "/Verwaltung_Administration/Globale_Einstellungen_(Verwaltung_Einstellungen)"
          },
          {
            "text": "Hilfe (Verwaltung)",
            "link": "/Verwaltung_Administration/Hilfe_(Verwaltung)"
          },
          {
            "text": "Hilfe bei Problemen (Verwaltung Statistik für IT-NRW)",
            "link": "/Verwaltung_Administration/Hilfe_bei_Problemen_(Verwaltung_Statistik_für_IT-NRW)"
          },
          {
            "text": "Im- und Export (Verwaltung)",
            "link": "/Verwaltung_Administration/Im-_und_Export_(Verwaltung)"
          },
          {
            "text": "Import (Verwaltung)",
            "link": "/Verwaltung_Administration/Import_(Verwaltung)"
          },
          {
            "text": "Individuelle Einstellungen (Verwaltung Einstellungen)",
            "link": "/Verwaltung_Administration/Individuelle_Einstellungen_(Verwaltung_Einstellungen)"
          },
          {
            "text": "Info (Verwaltung Hilfe)",
            "link": "/Verwaltung_Administration/Info_(Verwaltung_Hilfe)"
          },
          {
            "text": "Interne Texte (Verwaltung Einstellungen)",
            "link": "/Verwaltung_Administration/Interne_Texte_(Verwaltung_Einstellungen)"
          },
          {
            "text": "Jahrgang und Nationalität (Verwaltung Export)",
            "link": "/Verwaltung_Administration/Jahrgang_und_Nationalität_(Verwaltung_Export)"
          },
          {
            "text": "Kennwort ändern (Verwaltung Schule)",
            "link": "/Verwaltung_Administration/Kennwort_ändern_(Verwaltung_Schule)"
          },
          {
            "text": "Klassengruppen Abteilungen (Schulbezogene Kataloge)",
            "link": "/Verwaltung_Administration/Klassengruppen_Abteilungen_(Schulbezogene_Kataloge)"
          },
          {
            "text": "Kompatibilität der Reports in SchILD-NRW 2 und SchILD-NRW 3",
            "link": "/Verwaltung_Administration/Kompatibilität_der_Reports_in_SchILD-NRW_2_und_SchILD-NRW_3"
          },
          {
            "text": "Menüband (Reportverwaltung)",
            "link": "/Verwaltung_Administration/Menüband_(Reportverwaltung)"
          },
          {
            "text": "Notation",
            "link": "/Verwaltung_Administration/Notation"
          },
          {
            "text": "Notenliste zeigen (Verwaltung Hilfe)",
            "link": "/Verwaltung_Administration/Notenliste_zeigen_(Verwaltung_Hilfe)"
          },
          {
            "text": "Online-Supportprogramm starten (Verwaltung Hilfe)",
            "link": "/Verwaltung_Administration/Online-Supportprogramm_starten_(Verwaltung_Hilfe)"
          },
          {
            "text": "Problem bei der Verwendung von Grafiken (Tutorial)",
            "link": "/Verwaltung_Administration/Problem_bei_der_Verwendung_von_Grafiken_(Tutorial)"
          },
          {
            "text": "Probleme mit fehlenden Schriftarten im pdf-Dokument (Tutorial)",
            "link": "/Verwaltung_Administration/Probleme_mit_fehlenden_Schriftarten_im_pdf-Dokument_(Tutorial)"
          },
          {
            "text": "Programm beenden (Verwaltung)",
            "link": "/Verwaltung_Administration/Programm_beenden_(Verwaltung)"
          },
          {
            "text": "Reports in die Reportverwaltung einfügen",
            "link": "/Verwaltung_Administration/Reports_in_die_Reportverwaltung_einfügen"
          },
          {
            "text": "Reports über den Schnellzugriff aufrufen",
            "link": "/Verwaltung_Administration/Reports_über_den_Schnellzugriff_aufrufen"
          },
          {
            "text": "Reportverwaltung & Einstellungen Themenübersicht",
            "link": "/Verwaltung_Administration/Reportverwaltung_&_Einstellungen_Themenübersicht"
          },
          {
            "text": "Reportverwaltung, Reportverwendung & Einstellungen Themenübersicht",
            "link": "/Verwaltung_Administration/Reportverwaltung,_Reportverwendung_&_Einstellungen_Themenübersicht"
          },
          {
            "text": "Schnittstelle SchILD-NRW (Verwaltung Export)",
            "link": "/Verwaltung_Administration/Schnittstelle_SchILD-NRW_(Verwaltung_Export)"
          },
          {
            "text": "Schule (Verwaltung)",
            "link": "/Verwaltung_Administration/Schule_(Verwaltung)"
          },
          {
            "text": "Schuljahres- Abschnittswechsel (Verwaltung Schule)",
            "link": "/Verwaltung_Administration/Schuljahres-_Abschnittswechsel_(Verwaltung_Schule)"
          },
          {
            "text": "Serien-E-Mail-Versand",
            "link": "/Verwaltung_Administration/Serien-E-Mail-Versand"
          },
          {
            "text": "SQL-Befehle eingeben (Verwaltung Werkzeuge)",
            "link": "/Verwaltung_Administration/SQL-Befehle_eingeben_(Verwaltung_Werkzeuge)"
          },
          {
            "text": "Startklar (Verwaltung Export)",
            "link": "/Verwaltung_Administration/Startklar_(Verwaltung_Export)"
          },
          {
            "text": "Statistik für IT.NRW (Verwaltung)",
            "link": "/Verwaltung_Administration/Statistik_für_IT.NRW_(Verwaltung)"
          },
          {
            "text": "Transaktionsprotokoll verwenden (Verwaltung Werkzeuge)",
            "link": "/Verwaltung_Administration/Transaktionsprotokoll_verwenden_(Verwaltung_Werkzeuge)"
          },
          {
            "text": "Unterrichts-Daten (als Excel-Daten) (Verwaltung Import)",
            "link": "/Verwaltung_Administration/Unterrichts-Daten_(als_Excel-Daten)_(Verwaltung_Import)"
          },
          {
            "text": "Unterrichts-Daten als UVD-TXT (Verwaltung Import)",
            "link": "/Verwaltung_Administration/Unterrichts-Daten_als_UVD-TXT_(Verwaltung_Import)"
          },
          {
            "text": "Versionsgeschichte zeigen (Verwaltung Hilfe)",
            "link": "/Verwaltung_Administration/Versionsgeschichte_zeigen_(Verwaltung_Hilfe)"
          },
          {
            "text": "Verzeichnis der Dokumentenverwaltung ändern (Tutorial)",
            "link": "/Verwaltung_Administration/Verzeichnis_der_Dokumentenverwaltung_ändern_(Tutorial)"
          },
          {
            "text": "Vorschau (Verwaltung Schule)",
            "link": "/Verwaltung_Administration/Vorschau_(Verwaltung_Schule)"
          },
          {
            "text": "Weitere Angaben (Verwaltung Schule)",
            "link": "/Verwaltung_Administration/Weitere_Angaben_(Verwaltung_Schule)"
          },
          {
            "text": "Werkzeuge (Verwaltung)",
            "link": "/Verwaltung_Administration/Werkzeuge_(Verwaltung)"
          },
          {
            "text": "Zeichentabelle von Windows aufrufen (Verwaltung Werkzeuge)",
            "link": "/Verwaltung_Administration/Zeichentabelle_von_Windows_aufrufen_(Verwaltung_Werkzeuge)"
          },
          {
            "text": "ZK-Daten (Verwaltung Export)",
            "link": "/Verwaltung_Administration/ZK-Daten_(Verwaltung_Export)"
          },
          {
            "text": "ZP10-Daten (Verwaltung Import)",
            "link": "/Verwaltung_Administration/ZP10-Daten_(Verwaltung_Import)"
          }
        ]
      },
      {
        "text": "Zeugnisse Abschlüsse",
        "collapsed": true,
        "items": [
          {
            "text": "Abitur",
            "collapsed": true,
            "items": [
              {
                "text": "Abitur (Gruppenprozesse Abitur)",
                "link": "/Zeugnisse_Abschlüsse/Abitur/Abitur_(Gruppenprozesse_Abitur)"
              },
              {
                "text": "Abitur-Jahr setzen (für Statistik) (Gruppenprozesse Abitur)",
                "link": "/Zeugnisse_Abschlüsse/Abitur/Abitur-Jahr_setzen_(für_Statistik)_(Gruppenprozesse_Abitur)"
              },
              {
                "text": "Abitur-Zulassung berechnen (Gruppenprozesse Abitur)",
                "link": "/Zeugnisse_Abschlüsse/Abitur/Abitur-Zulassung_berechnen_(Gruppenprozesse_Abitur)"
              },
              {
                "text": "Abitur-Zulassung berechnen (Gruppenprozesse BK-Abschluss)",
                "link": "/Zeugnisse_Abschlüsse/Abitur/Abitur-Zulassung_berechnen_(Gruppenprozesse_BK-Abschluss)"
              },
              {
                "text": "Abiturjahrgänge einrichten",
                "link": "/Zeugnisse_Abschlüsse/Abitur/Abiturjahrgänge_einrichten"
              },
              {
                "text": "Gesamt-Fehlstunden berechnen (Gruppenprozesse Abitur)",
                "link": "/Zeugnisse_Abschlüsse/Abitur/Gesamt-Fehlstunden_berechnen_(Gruppenprozesse_Abitur)"
              },
              {
                "text": "Kurse algorithmisch markieren (Gruppenprozesse Abitur)",
                "link": "/Zeugnisse_Abschlüsse/Abitur/Kurse_algorithmisch_markieren_(Gruppenprozesse_Abitur)"
              },
              {
                "text": "Mdl. Prüfungen A1-A3 festlegen (Gruppenprozesse Abitur)",
                "link": "/Zeugnisse_Abschlüsse/Abitur/Mdl._Prüfungen_A1-A3_festlegen_(Gruppenprozesse_Abitur)"
              },
              {
                "text": "Prüfungsergebnisse eingeben (Gruppenprozesse Abitur)",
                "link": "/Zeugnisse_Abschlüsse/Abitur/Prüfungsergebnisse_eingeben_(Gruppenprozesse_Abitur)"
              },
              {
                "text": "SetAbitur",
                "link": "/Zeugnisse_Abschlüsse/Abitur/SetAbitur"
              },
              {
                "text": "Zusatzdaten (Latinum...) eingeben (Gruppenprozesse Abitur)",
                "link": "/Zeugnisse_Abschlüsse/Abitur/Zusatzdaten_(Latinum...)_eingeben_(Gruppenprozesse_Abitur)"
              }
            ]
          },
          {
            "text": "BK",
            "collapsed": true,
            "items": [
              {
                "text": "Eintragung Herkunft am BK WBK (Tutorial)",
                "link": "/Zeugnisse_Abschlüsse/BK/Eintragung_Herkunft_am_BK_WBK_(Tutorial)"
              },
              {
                "text": "Fachklassen (Schulbezogene Kataloge)",
                "link": "/Zeugnisse_Abschlüsse/BK/Fachklassen_(Schulbezogene_Kataloge)"
              },
              {
                "text": "Halbjahreswechsel am BK (Tutorial)",
                "link": "/Zeugnisse_Abschlüsse/BK/Halbjahreswechsel_am_BK_(Tutorial)"
              },
              {
                "text": "Schwerpunkte (Schulbezogene Kataloge)",
                "link": "/Zeugnisse_Abschlüsse/BK/Schwerpunkte_(Schulbezogene_Kataloge)"
              },
              {
                "text": "SetBKAbschluss",
                "link": "/Zeugnisse_Abschlüsse/BK/SetBKAbschluss"
              },
              {
                "text": "Sommer- und Wintersemester an WBKs (Tutorial)",
                "link": "/Zeugnisse_Abschlüsse/BK/Sommer-_und_Wintersemester_an_WBKs_(Tutorial)"
              },
              {
                "text": "Umgang mit Bildungsgangswechlsern am BK (Tutorial)",
                "link": "/Zeugnisse_Abschlüsse/BK/Umgang_mit_Bildungsgangswechlsern_am_BK_(Tutorial)"
              },
              {
                "text": "Zertifikate (Schulbezogene Kataloge)",
                "link": "/Zeugnisse_Abschlüsse/BK/Zertifikate_(Schulbezogene_Kataloge)"
              }
            ]
          },
          {
            "text": "Grundschule",
            "collapsed": true,
            "items": [
              {
                "text": "Eintragung der EP-Jahre (Tutorial)",
                "link": "/Zeugnisse_Abschlüsse/Grundschule/Eintragung_der_EP-Jahre_(Tutorial)"
              },
              {
                "text": "Übergangsempfehlungen in Klasse 04 setzen (Tutorial)",
                "link": "/Zeugnisse_Abschlüsse/Grundschule/Übergangsempfehlungen_in_Klasse_04_setzen_(Tutorial)"
              },
              {
                "text": "Versetzungstabelle bei jahrgangsgemischten Klassen (Tutorial)",
                "link": "/Zeugnisse_Abschlüsse/Grundschule/Versetzungstabelle_bei_jahrgangsgemischten_Klassen_(Tutorial)"
              }
            ]
          },
          {
            "text": "Zeugnisse",
            "collapsed": true,
            "items": [
              {
                "text": "Abschluss berechnen (Gruppenprozesse BK-Abschluss)",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Abschluss_berechnen_(Gruppenprozesse_BK-Abschluss)"
              },
              {
                "text": "Ankreuzkompetenzen (Schulbezogene Kataloge)",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Ankreuzkompetenzen_(Schulbezogene_Kataloge)"
              },
              {
                "text": "Beliebte Fehler beim Zeugnisdruck (Tutorial)",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Beliebte_Fehler_beim_Zeugnisdruck_(Tutorial)"
              },
              {
                "text": "Erstellen von Abschlusszeugnissen am BK (Tutorial)",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Erstellen_von_Abschlusszeugnissen_am_BK_(Tutorial)"
              },
              {
                "text": "Fachbezogene Bemerkungen (Tutorial)",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Fachbezogene_Bemerkungen_(Tutorial)"
              },
              {
                "text": "Floskeln bearbeiten (Schulbezogene Kataloge)",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Floskeln_bearbeiten_(Schulbezogene_Kataloge)"
              },
              {
                "text": "Grundschulzeugnisse Ankreuzzeugnis (Tutorial)",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Grundschulzeugnisse_Ankreuzzeugnis_(Tutorial)"
              },
              {
                "text": "Grundschulzeugnisse Hybridzeugnis (Tutorial)",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Grundschulzeugnisse_Hybridzeugnis_(Tutorial)"
              },
              {
                "text": "Grundschulzeugnisse Konfiguration des Erscheinungsbildes von Zeugnissen (Tutorial)",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Grundschulzeugnisse_Konfiguration_des_Erscheinungsbildes_von_Zeugnissen_(Tutorial)"
              },
              {
                "text": "Grundschulzeugnisse Lernstandsberichte (Tutorial)",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Grundschulzeugnisse_Lernstandsberichte_(Tutorial)"
              },
              {
                "text": "Grundschulzeugnisse Textzeugnis (Tutorial)",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Grundschulzeugnisse_Textzeugnis_(Tutorial)"
              },
              {
                "text": "Grundschulzeugnisse Versionsgeschichte (Tutorial)",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Grundschulzeugnisse_Versionsgeschichte_(Tutorial)"
              },
              {
                "text": "Grundschulzeugnisse Vorbereitung für Text- und Ankreuzzeugnisse (Tutorial)",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Grundschulzeugnisse_Vorbereitung_für_Text-_und_Ankreuzzeugnisse_(Tutorial)"
              },
              {
                "text": "Inhalt & Layout von Zeugnissen konfigurieren",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Inhalt_&_Layout_von_Zeugnissen_konfigurieren"
              },
              {
                "text": "Komplette Abiturberechnungen durchführen (Tutorial)",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Komplette_Abiturberechnungen_durchführen_(Tutorial)"
              },
              {
                "text": "Kurse algorithmisch markieren (Gruppenprozesse BK-Abschluss)",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Kurse_algorithmisch_markieren_(Gruppenprozesse_BK-Abschluss)"
              },
              {
                "text": "Mdl. Prüfungen festlegen (Gruppenprozesse BK-Abschluss)",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Mdl._Prüfungen_festlegen_(Gruppenprozesse_BK-Abschluss)"
              },
              {
                "text": "NurFaecherMitAufsZeugnisFlag",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/NurFaecherMitAufsZeugnisFlag"
              },
              {
                "text": "Prüfungsergebnisse eingeben (Gruppenprozesse BK-Abschluss)",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Prüfungsergebnisse_eingeben_(Gruppenprozesse_BK-Abschluss)"
              },
              {
                "text": "Reportdesigner - Schnelleinstieg",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Reportdesigner_-_Schnelleinstieg"
              },
              {
                "text": "Sprachenfolge bei Seiteneinsteigern des Gymnasiums in Zeugnissen korrekt ausgeben (Tutorial)",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Sprachenfolge_bei_Seiteneinsteigern_des_Gymnasiums_in_Zeugnissen_korrekt_ausgeben_(Tutorial)"
              },
              {
                "text": "Thema von Projektkurs und Facharbeit erfassen (Tutorial)",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Thema_von_Projektkurs_und_Facharbeit_erfassen_(Tutorial)"
              },
              {
                "text": "Versetzung Übertrag ins neue Halbjahr oder Abschluss (Gruppenprozesse Lernabschnitte, Versetzung)",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Versetzung_Übertrag_ins_neue_Halbjahr_oder_Abschluss_(Gruppenprozesse_Lernabschnitte,_Versetzung)"
              },
              {
                "text": "Versetzungs-Abschluss-berechnungen (Gruppenprozesse Lernabschnitte, Versetzung)",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Versetzungs-Abschluss-berechnungen_(Gruppenprozesse_Lernabschnitte,_Versetzung)"
              },
              {
                "text": "Zeugnis-Broschürendruck mit dem Foxit Reader (Tutorial)",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Zeugnis-Broschürendruck_mit_dem_Foxit_Reader_(Tutorial)"
              },
              {
                "text": "ZeugnisDatenquellenOeffnen",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/ZeugnisDatenquellenOeffnen"
              },
              {
                "text": "Zeugnisformulare herunterladen und aktualisieren",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Zeugnisformulare_herunterladen_und_aktualisieren"
              },
              {
                "text": "Zeugnispakete auf GitHub",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Zeugnispakete_auf_GitHub"
              },
              {
                "text": "ZeugnisParameter",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/ZeugnisParameter"
              },
              {
                "text": "Zeugnisse Themenübersicht",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Zeugnisse_Themenübersicht"
              },
              {
                "text": "Zeugnisvorlagen zuordnen (Schulbezogene Kataloge)",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Zeugnisvorlagen_zuordnen_(Schulbezogene_Kataloge)"
              },
              {
                "text": "Zulassung prüfen(Gruppenprozesse BK-Abschluss)",
                "link": "/Zeugnisse_Abschlüsse/Zeugnisse/Zulassung_prüfen(Gruppenprozesse_BK-Abschluss)"
              }
            ]
          }
        ]
      }
    ]
  }



      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
