

const idade = 18;

if (idade < 18){
    console.log("É menor de idade")
} else if(idade >= 18 && idade < 60){
    console.log("Adulto")
} else{
    console.log("Idoso")
}


//Outra fora 
const verificaIdade = () => {
    if(idade < 18){
        return "Menor de idade"
    }
    if(idade < 60){
        return "Adulto"
    } return "Idoso"
};


console.log(verificaIdade(idade));


const idadePessoas = [10, 30, 45, 15, 25];

for  (const idade of idadePessoas) {
    console.log(idade); //pega  o elemento do array
};

for (const idade in idadePessoas){
    console.log(idade); //pega a posicao do array
}


idadePessoas.forEach((pessoa) => {
    console.log(pessoa);
});