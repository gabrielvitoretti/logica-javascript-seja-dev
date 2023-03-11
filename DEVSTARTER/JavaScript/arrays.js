// let array = [0, 1, 2, 3, 4, 5, true, false, "absds", "erteed"];

// console.log(array[7]);


// array.push(100, 3, 5, 25); //adiciona valores no array
// console.log(array);

// array.pop(); //remove o ultimo elemento do array
// console.log(array);

// let array2 = [10, 20, 30];

// let i = 0;
// while (i < array2.length) {
//     console.log(i);
//     console.log(array2[i]);
//     i++;
// }

// for (let posi = 0; posi < array2.length; posi++){
//     console.log(posi);
//     console.log(array2[posi]);
// }

// //for in - Realiza a mesma função do for anterior, mudando apenas a quantidade de codigo;
// for (let posi in array2){
//     console.log(posi);
//     console.log(array2[posi]);
// }

// //for of - itera a posição dentro do for, mostrando apenas o conteudo existente no array. 
// for (let posi of array2){
//     console.log(posi);
// }

/*
    Exercicio 1: Dado um array com X numeros, encontre a media dos numeros existentes no array. 
*/

const numeros = [10, 20];

let soma = 0;

for (let num of numeros){
    soma += num;
}
const media = soma / numeros.length;

console.log(soma);

console.log(media);