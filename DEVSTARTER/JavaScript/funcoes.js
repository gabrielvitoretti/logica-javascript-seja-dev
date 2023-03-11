
function soma (A, B){
    return A + B;
};


function subtracao(A, B){
    return A - B;
};

function multiplicacao(A, B){
    return A * B;
};

function divisao(A, B){

    return A / B;
};

function calculadora(){

    const R = soma(10, 20);
    return R;
};


/* Funcao que verifica se o numero é par ou nao*/

// function par(numero){
//     if(numero % 2 == 0){
//         return "É par";
//     } else{
//         return "É impar";
//     };
// };

// const numero = 25;

// console.log(par()); Uma forma de fazer

function par(numero){

    return numero % 2 == 0;
};

const ehPar = par(3);
console.log(ehPar);


/* mostrar os numeros pares de 0 a 100*/

for (let i = 0; i <= 100; i++){
    if (par(i)){
        console.log(i);
    };
};