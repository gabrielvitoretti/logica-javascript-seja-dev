const API_URL = 'https://jsonplaceholder.typicode.com/users';

async function getUser() {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
};

getUser();