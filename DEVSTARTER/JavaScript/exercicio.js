// const limitePeixes = 50;
// const pesoPeixes = 90;
// let excesso = pesoPeixes - limitePeixes;
// let multa = excesso * 4;

// if (pesoPeixes > limitePeixes){
//     console.log("Você pagará", multa, "Reais de multa, pois excedeu o limite")
// } else{
//     console.log("Você está dentro do limite", pesoPeixes, "Kg, de peixes")
// } uma forma de fazer 

const limite = 50;
const valorMulta = 4;
const pesoPeixes = 60
let excesso = pesoPeixes > limite ? pesoPeixes - limite : 0
multa = excesso * valorMulta;
console.log("Excesso: Kg", excesso);
console.log("Multa: R$", multa);


