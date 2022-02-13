let num

do{
    num = prompt("inserisci un numero di quattro cifre");
}while(num < 1000 || num > 9999)


let somma = 0;

for (let i = 0; i < 4; i++) {
    const cifra = parseInt(num.split("")[i]);
    somma += cifra;
}

 console.log(somma);