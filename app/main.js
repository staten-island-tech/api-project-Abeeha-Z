import "./style.css";
const URL = https://openlibrary.org/search.json?q=the+lord+of+the+rings

async function getData(URL) {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}

getData();