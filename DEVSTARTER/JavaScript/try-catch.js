const api_url = "https://jsonplaceholder.typicode.com/users"

// async function getUser(){

// };

const getUser = async () => {
    try {
        const response = fetch(api_url);
        if (response.status === 404) throw new Error("Não encontrado")
        const data = await response.json();
        const emails = data.map(({email}) => ({email}));
        console.log(emails);

    } catch (error){
        console.log(error);
    }
    

};

getUser()