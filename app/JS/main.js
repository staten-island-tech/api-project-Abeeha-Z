import "../CSS/style.css";

const url = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=40";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "f622572513mshb02186feb035c8ep189d8djsn23dd7e3096c6",
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
  if (recipes.count === 0) {
    container.innerHTML = `
    <h1>No results. Please try again.</h1>`;
  } else {
    for (let i = 0; i < recipes.results.length; i++) {
      const recipe = recipes.results[i];
      let instruction_text = "";
      for (let j = 0; j < recipe.instructions.length; j++) {
        instruction_text += `<p>${recipe.instructions[j].display_text}</p>`;
      }
      if (recipe.description != "" && recipe.description != null) {
        container.innerHTML += `
      <div class="recipe-card">
      <h2>${recipe.name}<br></h2> 
      <div class="img_div">
      <img class="imgs" src="${recipe.thumbnail_url}"><br>
      </div>  
      <div class="basic_info"><p>Calories: ${recipe.nutrition.calories}, ${recipe.yields}<br></p>
      </div>
      <div class="info">
      <h2>Description: </h2> ${recipe.description} <br>
      <h2>Instructions: </h2>${instruction_text}<br></p>
      </div>
      </div>
      `;
      }
    }
  }
};

const search_button = document.getElementById("search_btn");
search_button.addEventListener("click", function (event) {
  event.preventDefault();
  container.innerHTML = "";
  const searchTerm = encodeURIComponent(
    document.getElementById("search-bar").value.toLowerCase()
  );
  const searchURL = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=40&&q=${searchTerm}`;
  console.log(searchURL);
  showRecipes(searchURL);
});

showRecipes(url);
