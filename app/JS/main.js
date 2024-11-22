import "/CSS/style.css";
const URL = "https://api.edamam.com/doc/open-api/recipe-search-v2.json"

async function getData(URL) {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}

function pushdata() {
    const container = document.querySelector("api-data");
    }
pushdata();
