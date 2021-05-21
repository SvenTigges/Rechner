
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung :: 
2. Auswahl Rechenart :: 
3. Fkt. Grundrechenarten :: 
4. Ausgabe in Konsole :: check!
*/


// Modul: Addition a + b | Test:
ausgabe(adiieren(1,2)); //von innen nach ausen auflösen ->(1,1)= der Bezug -> (addieren(1,1)) = was soll gemacht werden-> wo soll es hin übertragen werden
function adiieren(a,b) 
{
    let c = a + b;
    return c;
}



// Modul Konsolenausgabe | Test: 
// ausgabe("Hallo Welt");
function ausgabe(outputStr) 
{
    console.log(outputStr);
}

