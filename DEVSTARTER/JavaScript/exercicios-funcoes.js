/* Criar um algoritmo para calcular o fatorial de um numero n!*/

function fatorial (n){
    let i = n; 
    let fatorial = 1;
    while (i >= 2){
        fatorial = fatorial * i;
        i--;
    };
    return fatorial;
};


const number  = 2
const resposta = fatorial(number);
console.log(resposta);