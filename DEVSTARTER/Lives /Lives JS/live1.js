const carrinhoCompras = [10, 20];

const multiplicadorDesconto = 0.8;

// const newNumber = numero.map((numero) => {
//     return numero * multiplicadorDesconto;
// })

// console.log(newNumber);

let soma = 0;

for(const produto of carrinhoCompras){
    soma = soma + produto;
}

console.log(soma * multiplicadorDesconto);

//outra forma

let total = carrinhoCompras.reduce((valor, valorAtual) => {
    return valor + valorAtual;
}, 0);

console.log(total * multiplicadorDesconto);

