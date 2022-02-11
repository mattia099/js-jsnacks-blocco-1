

const listaNomi = ['Franco', 'Pippo', 'Ernesto' ,'Giovanni'];
console.log(listaNomi);

const nome = prompt('Inserisci il tuo nome');
let find = false;
for(let i=0; i<listaNomi.length; i++){
    if(nome == listaNomi[i]){
        find=true;
    }
}

if(find==true){
    console.log('puoi entrare');
}else{
    console.log('non puoi entrare');
}