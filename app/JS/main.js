import "../CSS/style.css";

const url = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=100";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "11bed04c27mshb6f8302c8454cabp10afc7jsnc701adc4abf2",
    "x-rapidapi-host": "tasty.p.rapidapi.com",
  },
};

async function getData() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

const container = document.getElementById("recipe-list");
const showRecipes = async () => {
  // defining an async arrow function
  const recipes = await getData(url);
  console.log("Data Found");
  for (let i = 0; i < recipes.results.length; i++) {
    //if recipe has a thumbnail, url and description
    container.innerHTML += `
    <div class="recipe-card">
    Name: ${recipes.results[i].name}<br>
    Description: ${recipes.results[i].description}<br>
    <div class="imgs">    
    <img src="${recipes.results[i].thumbnail_url}">
    </div>
    </div>
    `;
  }
};

showRecipes();
