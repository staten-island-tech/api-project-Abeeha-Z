import "../CSS/style.css";

const url = "https://tasty.p.rapidapi.com/recipes/list?from=0";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "11bed04c27mshb6f8302c8454cabp10afc7jsnc701adc4abf2",
    "x-rapidapi-host": "tasty.p.rapidapi.com",
  },
};

async function getData(url) {
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
const showRecipes = async (url) => {
  container.innerHTML = "";
  const recipes = await getData(url);
  console.log("Data Found");
  for (let i = 0; i < recipes.results.length; i++) {
    if (recipes.results[i].description != "")
      //if it has a description {
      container.innerHTML += `
      <div class="recipe-card">
      <h2>${recipes.results[i].name}<br></h2> 
      <div class="img_div">
      <img class="imgs" src="${recipes.results[i].thumbnail_url}"><br>
      </div>  
      <div>${recipes.results[i].description}<br></div>
      </div>
      `;
  }
};

const search_button = document.getElementById("search_btn");
search_button.addEventListener("click", function (event) {
  event.preventDefault();
  container.innerHTML = "";
  const searchTerm = document.getElementById("search-bar").value.toLowerCase();
  const searchURL = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=${searchTerm}&q=${searchTerm}`;
  showRecipes(searchURL);
});

showRecipes(url);
