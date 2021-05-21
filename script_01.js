
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung :: 
2. Auswahl Rechenart :: check!
3. Fkt. Grundrechenarten :: Check!
4. Ausgabe in Konsole :: check!
*/

//ausgabe(rechner(getOp(),getZahl(),getZahl()));
start();
function start() 
{
    ausgabe(rechner(getOp(),getZahl("1"),getZahl("2")))    
}

// Modul: Zahl 1 eingeben | Test:
//ausgabe(getZahl("1"));
//ausgabe(getZahl("2"));
function getZahl(numStr) 
{
    let zahl = parseInt(prompt("Bitte Zahl " + numStr + "eingeben:"));

    while (isNaN(zahl)) 
    {
        zahl = parseInt(prompt("Das ist keine Zahl. Bitte erneut eingeben:"));
    }    
    return zahl; 
}


// Modul: operand eingabe | Test:
//ausgabe(getOp());
function getOp() 
{
    let op = prompt("Bitte + | - | * | / eingeben.");
    
    while (!isOpValid(op)) {  // falsche eingabe // schleife = while 
        op = prompt("Bitte einen korrekten Operator eingebe!")
    }
        return op; 
}

// Modul: Operand überprüfen | Test: 
// ausgabe(isOpValid("+")); //<--Test
// ausgabe(isOpValid("-"));
// ausgabe(isOpValid("*"));
// ausgabe(isOpValid("/"));
// ausgabe(isOpValid("#"));
// ausgabe(isOpValid(""));
// ausgabe(isOpValid());
function isOpValid(op) 
{
  
    return (op == "+") || (op == "-") || (op == "*") || (op == "/");
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

