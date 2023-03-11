//forma de ler dados dentro dos objetos e arrays. 


const pessoa = {
    nome : "Gabriel",
    sobrenome : "Gonçalves",
    idade : 27
};


const { nome, sobrenome, idade} = pessoa;
//Mesma coisa que pessoa.nome, pessoa.sobrenome, pessoa.idade
console.log(nome, sobrenome, idade);


const array = [1, 2, 3, 4];
const [a, b] = array;

console.log(a, b);


const pessoaComMaisDados = {
    ...pessoa //pega o array inteiro. 
    //Tambem é possivel atualizar, passando os atributos que estao dentro do objeto inicial no novo objeto,
    //com outros valores  
    
};

console.log(pessoaComMaisDados);