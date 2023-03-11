

async function getData(){
    const URL = 'https://jsonplaceholder.typicode.com/users';

    const response = await fetch(URL);
    const data = await response.json();

    console.log(data);
}; 

function changeUserName(userName){

}

function filterUserName()