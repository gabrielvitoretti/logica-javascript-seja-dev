const lista = [15, 18, 45, 60, 70, 81, 99, 22, 16, 30, 50, 68, 10, 25, 39, 19];

let obrigatorio = 0;
let facultativo = 0;
let naoEleitor = 0;


for (let idade of lista){
    if (idade >= 18 && idade <= 69){
        obrigatorio++;
    } else if(idade <= 16){
        naoEleitor++;
    } else {
        facultativo++;
    }
}

console.log("Obrigatório:", obrigatorio);
console.log("Não eleitor:", naoEleitor);
console.log("Facultativo:", facultativo);