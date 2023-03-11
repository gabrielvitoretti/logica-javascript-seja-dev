

const URL = 'https://jsonplaceholder.typicode.com';

async function main(){
    try{
        const response = await fetch(URL);
        const data = await response.json();
        
        
        // data.forEach((users) =>{
        //     console.log(users);
        //     if(users.email === 'test@typicode.com'){
        //         user = users; 
        //     }
        //     console.log(user);
        // });
        
        const user = data.find((users) => {
            if(users.email === 'test@typicode.com'){
                return true;
            }
        });
        console.log(user);

        //Map retorna o dado modificado. 
        const phones = usuarios.map((usuario) => {
            return {
                email: usuario.email,
                phone: usuario.phone
            };
        })
        console.log(phones);
        
    } catch(error){

    }
};

const numeros = [1, 2, 3, 4, 5];

let soma = 0;

numeros.forEach((index) => {
   
    
    soma = soma + index;
    
});

// main()

numeros.reduce()