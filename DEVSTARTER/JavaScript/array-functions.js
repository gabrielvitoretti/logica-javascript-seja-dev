const array = [10, 30, 45, 1, 2, 3, 4, 26];

//laço de repeticao especifico para array 
//forEach: Passa por todos os elementos do array 
array.forEach((elemento, posicao) => {
    console.log(`${elemento} - posicao ${posicao}`);
});

//find: Retorna o elemento
const valor = array.find((elemento) => {
    if (elemento === 10){
        return true;
    } else{
        return false;
    };
});

console.log(`Valor = ${valor}`);



//find Index retorna a posicao do elemento
// const index = array.find((elemento) => {
//     if (elemento === 10){
//         return true;
//     } else{
//         return false;
//     };
// });
//outra forma 
const index = array.find(elemento => elemento === 10);
console.log(`Index = ${index}`);

//some: retorna true se pelo menos um numero satisfazer a condição
// const some = array.some((elemento) => {
//     if (elemento >= 10) return true

//     return false;
// });
//outra forma
const some = array.find(elemento => elemento >= 10);
console.log(`Some = ${some}`);

//Every: retorna true se todos os numeros satisfazerem a condicao
const every = array.every((elemento) => {
    if (elemento >= 10) return true;

    return false;
});

console.log(`Every = ${every}`);

//Parte 2

//splice: Corta o array em um intervalo. O primeiro parametro é o inicio e o segundo é o final do intervalo
const newArray = [1, 2, 3, 4, 5];
// console.log(newArray.splice(1, 4));

//map: altera os valores dentro do array, seguindo uma regra
console.log(newArray.map((elemento) => {
    return elemento * 2;
}));

//filter: filtra os elementos dentro do array. 

console.log(newArray.filter((elemento) =>{
    return elemento % 2 === 0;
}));


//reduce: Reduz o array para algum outro elemento.
console.log(newArray.reduce((acumulado, elemento) => {
    return acumulado + elemento;
}, 0));

//O numero apos a chave, é o inicio, no caso o acumulado. O elemento é o segundo parametro que são os elementos
//do array. 

