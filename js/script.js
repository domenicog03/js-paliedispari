// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const utentepod = prompt('Scegli pari o dispari');


const nuser = parseInt(prompt('Dammi un numero tra 1 e 5'));


const ncpu = casualn(1, 5);


const sum = nuser + ncpu;

const final = pariodispari(sum);


if(utentepod === final) {
    alert('hai vinto');
} else {
    alert('hai perso');
}







function casualn(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}




function pariodispari(number) {
    let risultato;

    if(number % 2 === 0) {
        risultato = 'pari';
    } else {
        risultato = 'dispari';
    }

    return risultato;
}