const numero = 2 
const condicional = numero % 2 == 0

// comparação entre duas variáveis.


// if (condicional){
//     console.log("É par")
// } else {
//     console.log("É ímpar");
// }

numero % 2 === 0 ? console.log("É par") : console.log("É impar")
//Operador condicional ternario, realiza a verificacao do if e else em apenas uma linha de codigo. 

// const numero1 = 10;
// const numero2 = "10";

// if (numero1 === numero2){
//     console.log("É igual");
//     console.log(numero1 + numero2);
// } else {
//     console.log("É diferente")
// }

/* === Compara o valor e tipo da variavel, já == apenas compara o valor. Caso uma variavel seja numeric 
e a outra seja uma string, o JavaScript apenas concatena uma variavel com a outra. */