const vett = [];

for(let i=0; i<6 ; i++){
    const num = prompt('Inserisci numero')
    if((num % 2) !==0){
        vett.push(num);
    }
}

console.log(vett);
