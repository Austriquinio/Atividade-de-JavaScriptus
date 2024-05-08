const number = parseInt(prompt('Coloque o número de termos que desejas ver: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Séries de Finonacci: ');
console.log(n1);
console.log(n2);

for (let i = 1; i <= number; i++) {
    nextTerm = n1 + n2
    console.log(nextTerm);
    n1 = n2;
    n2 = nextTerm;
}

