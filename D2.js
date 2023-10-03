/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let number1 = 10;
let number2 = 5;

if (number2 < number1) {
  console.log("the biggest number is", number1)
} else {
  console.log("the biggest number is", number2)
}

// In alternativa, si può utilizzare un operatore ternario
console.log("the biggest number is", (number2 < number1) ? number1 : number2);


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number3 = 8;
if (number3 !== 5) {
  console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let number4 = 20;
if (number4 % 5 === 0) {
  console.log("divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number5 = 9;
let number6 = 1;
if (number5 === 8 || number6 === 8 || number5 + number6 === 8 || number5 - number6 === 8) {
  console.log(true)
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let totalShoppingCart = 49
// let shippingCosts = 10 
// if (totalShoppingCart >= 50) {
//   shippingCosts = 0;
// }
// let totalcosts = totalShoppingCart + shippingCosts; 
// console.log("totalcosts = ", totalcosts, "€")

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 49;
let shippingCosts = 10;
totalShoppingCart = totalShoppingCart * 80 / 100;
if (totalShoppingCart >= 50) {
  shippingCosts = 0;
}
let totalcosts = totalShoppingCart + shippingCosts;
console.log("totalcosts = ", totalcosts, "€");



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let number7 = 20;
// let number8 = 40;
// let number9 = 30;
// let numbers = [ number7, number8, number9] 
// for (let index = 0; index < numbers.length; index++) {
//   if (numbers[index] < numbers[index + 1]) {}
//   else {
//     let t = numbers[index]; 
//     numbers[index] = numbers[index + 1]
//     numbers[index + 1] = t;
//   }
// } 


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number10 = "ciao"
if (typeof number10 === "number") {
  console.log(number10, "is a number")
} else { 
  console.log(number10, "is not a number")
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
number3 = 9
if (number3 % 2 === 0) {
  console.log(number3, "is even")
} else {
  console.log(number3, "is odd")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 3;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/



/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "Toronto"
console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop()
console.log(me)
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const myNumbers = []

for (let i = 1; i <= 10; i++) {
  myNumbers.push(i)
}
console.log(myNumbers)





/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myNumbers[myNumbers.length - 1] = 100
console.log(myNumbers)
