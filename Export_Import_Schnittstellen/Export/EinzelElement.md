# EinzelElement
| RAP-Funktion "EinzelElement" | Beschreibung | ```   function EinzelElement( const text, trennzeichen: string; const position: integer ):``` string ```  Liefert das Einzelelement an Position "position" aus dem durch das Trennzeichen``` ```  getrennten Text "text"``` |
| --- | --- | --- |
| Parameter | ```   text: der zu analysierende Text``` ```   trennzeichen: 

Das Trennzeichen``` ```   position: 

Die Position des Einzelelementes im Text (beginnend bei 1)``` |  |
| Rückgabewert | ```   ...``` |  |
| Beispiel | ```   txt := '1,2,3,4':``` ```   if einzelelement( txt, ',', 2 ) = '2' then``` |  |