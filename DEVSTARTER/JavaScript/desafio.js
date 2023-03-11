const API_URL = "https://jsonplaceholder.typicode.com/comments"



async function getComments(postId){
    const response = await fetch(API_URL);
    const data = await response.json();
    const filtered = data.filter((id) => {
        return id === postId;
    })
    console.log(filtered);
};

getComments(1);