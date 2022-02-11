const n = parseFloat(prompt('Quanti numeri vuoi inserire?'));
const array = [n];
let tmp=0;
for(let i =0; i<n; i++){
    const num = prompt('inserisci numero');
    tmp = num * num * num;
    array.push(tmp);
}
console.log(array);