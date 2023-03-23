/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */

const bikes = ['giant','faNTIC','BIANCHI','BMC','galetti'];
let Bikes =[];
bikes.forEach(bike => {
   // console.log((bike.toLowerCase()));

    const wordCapitalized = bike.toLowerCase()

    const firstLetter = wordCapitalized.charAt(0)

    const firstLetterCap = firstLetter.toUpperCase()

    const remainingLetters = wordCapitalized.slice(1)

    const word = firstLetterCap + remainingLetters

    Bikes.push(word);

    //console.log(word);
});

console.log(Bikes);