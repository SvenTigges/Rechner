
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung :: 
2. Auswahl Rechenart :: check!
3. Fkt. Grundrechenarten :: Check!
4. Ausgabe in Konsole :: check!
*/

//ausgabe(rechner(getOp(),10,4));

// Modul: operand eingabe | Test:
ausgabe(getOp());
function getOp() 
{
    let op = prompt("Bitte + | - | * | / eingeben.");
   if (isOpValid(op)) 
   {
   return op ; 
   } else
    {
      return "Bitte noch einmal!" 
   }
}



function isOpValid(checkStr) 
{
    // ....
    return true;
}

// Modul: Rechenart auswählen | Test:
// ausgabe(rechner("+",10,4)); //<-- Test
// ausgabe(rechner("-",10,4)); //<-- Test
// ausgabe(rechner("*",10,4)); //<-- Test
// ausgabe(rechner("/",10,4)); //<-- Test
// ausgabe(rechner("/",10,0)); //<-- Test
// ausgabe(rechner("#",10,0)); //<-- Test
function rechner(op,a,b)
{
    switch (op) {
        case "+":
            return adiieren(a,b);
        case "-":
            return subtrahieren(a,b);  
        case "*":
            return multipizieren(a,b);    
        case "/":
            return dividieren(a,b);          
        default:
            return("Irgendwas ging schief");
            
    }
    
}


// Modul: Multiplikation a * b | Test
//ausgabe(multipizieren(4,2)); //<--Test
function multipizieren(a,b) {
    return a * b;
}
// Modul: Division a / b | Test
// ausgabe(dividieren(5,0));
// ausgabe(dividieren(4,2)); //<--Test
function dividieren(a,b) 
{
    //wenn b = 0 // dann Fehlermeldung
    if (b!=0)
    {
        return a / b;
    }
    {
            return("Dividiren durch 0 nicht möäglich");
    }    
   
}

// Modul: Subraktioin a - b | Test
//ausgabe(subtrahieren(2,1)); //<--Test
function subtrahieren(a,b) {
    return a - b;
}

// Modul: Addition a + b | Test:
//ausgabe(adiieren(1,2)); //von innen nach ausen auflösen ->(1,1)= der Bezug -> (addieren(1,1)) = was soll gemacht werden-> wo soll es hin übertragen werden
function adiieren(a,b) 
{
    return a + b;
}

// Modul Konsolenausgabe | Test: 
// ausgabe("Hallo Welt"); 
function ausgabe(outputStr) 
{
    console.log(outputStr);
}

