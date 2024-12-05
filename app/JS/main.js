const url = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=40";
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

getData();

const container = document.getElementById("recipes");
const showRecipes = async () => {
  // defining an async arrow function
  const recipes = await getData(url);
  console.log("Data Found");
  for (let i = 0; i < recipes.results.length; i++) {
    console.log("works");
    container.innerHTML += `
    <div>
    Name: ${recipes.results[i].name}<br>
    Description: ${recipes.results[i].description}<br>
    <img src='${recipes.results[i].thumbnail_url}'>
    </div>
    `;
  }
};

showRecipes();

// container.insertAdjacentHTML(
//   "beforeend",
//   `
//       <div class="recipe">
//       <img src="${recipe.thumbnail_url}" class="images">
//       <h2>${recipe.name}</h2>
//       <div class="item-properties">
//       <p>${recipe.description}</p>
//       </div>
//   </div>
// `
// );
