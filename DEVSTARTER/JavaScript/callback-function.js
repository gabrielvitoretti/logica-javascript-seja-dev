//Funcao de callback é parâmetro para outra funcao, portanto pode ser chamada por outra funcao

function upload (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("02 - Upload concluido");
            resolve();
        }, 2000);
    });
}; 

async function uploadFoto(){
    console.log("01 - Iniciando upload");
    await upload();
    console.log("03 - Uploado finalizado");
};

uploadFoto();