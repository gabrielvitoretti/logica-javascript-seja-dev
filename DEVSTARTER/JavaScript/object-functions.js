//object.keys(), obeject.values(), object.entries()

const person = {
    nome: "Gabriel",
    sobrenome: "Gonçalves"
};

//object.keys - Cria um array com todas as chaves do obejto 
console.log(Object.keys(person));

//object.values() - Cria um array com todos os valores do obejto
console.log(Object.values(person));

//object.entries() - Cria um array com um array de objetos e valores
console.log(Object.entries(person));