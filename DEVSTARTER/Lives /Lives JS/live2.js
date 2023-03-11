//Promise 

function temporizador() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Teste 2");
            resolve();
        }, 2000);
    });
};

async function main(){
    
    try{
        console.log("Hello world!");
        const tempo = await temporizador();
        console.log("Teste 3");
    } catch(e) {
        console.log("Erro")
    };
};

main();

async function consulta() {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data = await response.json();
    console.log(data);

};