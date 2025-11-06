 /* Esercizio 1
 Definire una serie di funzioni
 Poi, creare una funzione calculate che prenda tre argomenti: 
 due numeri e una funzione che manipoli i due numeri */

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;


function calculate(a, b, istruzioni) {
    const result = istruzioni(a, b);
    console.log(`Il risultato è ${result}`);
    return result;
}

calculate(10, 7, multiply);
calculate(10, 7, subtract);


/* Esercizio 2 
Creare una funzione creaConvertitoreValuta che accetti 
un tasso di cambio come argomento e restituisca una funzione interna. 
La funzione interna accetta un importo come parametro e deve convertire 
l'importo da una valuta all'altra ogni volta che viene chiamata. 
*/

const creaConvertitoreValuta = (tasso) => {
    return (importo) => {
        return tasso * importo
    }
}

const euroInDollari = creaConvertitoreValuta(1.15);
console.log(euroInDollari(20));

// bonus
const importo = parseFloat(prompt("Inserisci l'importo da convertire in dollari"));
console.log(`L'importo è: ${euroInDollari(importo).toFixed(2)} $`);