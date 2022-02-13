

let somma = 0;
let media = 0;
for(let i=0; i<10; i++){
    const num = parseFloat(prompt('inserisci numero'));
    somma += num;
    media = somma/num;
}

console.log(somma,media);
