

function soma (x, y){
    return x + y;
}

soma();

console.log(soma(10, 20));

const usuario = {
    nome: "Gabriel",
    sobrenome: "Vitoretti"
}

function nomeCompleto({nome, sobrenome}) {
    return `${nome} ${sobrenome}`
}

const usuarioCompleto = nomeCompleto(usuario)

console.log(usuarioCompleto)


const arrayUsuarios = [
    {
        id: 1, 
        nome: "Gabriel",
        sobrenome: "Vitoretti",
        email: "gabrielvitoretti@email.com",
        idade: 23
    },
    {
        id: 2, 
        nome: "Joao",
        sobrenome: "Vitoretti",
        email: "joaovitoretti@email.com",
        idade: 79
    }
]

const newArray = arrayUsuarios.map((user) => {
    return {...arrayUsuarios, usuarioCompleto: nomeCompleto(user)}
})

console.log(newArray)



