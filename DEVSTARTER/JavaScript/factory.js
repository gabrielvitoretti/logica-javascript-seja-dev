function Pessoa (nome, sobrenome){
    let pessoa = {
        nome,
        sobrenome
    };
    pessoa.nomeCompleto = `${nome} ${sobrenome}`;
    return pessoa;
};

const pessoaA = Pessoa("Gabriel", "Gonçalves");
const pessoaB = Pessoa("Joao", "Gonçalves");

console.log(pessoaA.nomeCompleto,`,`,pessoaB.nomeCompleto);