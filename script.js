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