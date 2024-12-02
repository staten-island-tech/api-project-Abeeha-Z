const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '11bed04c27mshb6f8302c8454cabp10afc7jsnc701adc4abf2',
		'x-rapidapi-host': 'tasty.p.rapidapi.com'
	}
};
async function getData() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
getData();
async function injectRecipes() {
  const container = document.getElementById("recipes");
  const recipes = await getData(url);
  container.innerHTML = `Recipes: ${recipes.name}`;
}

injectRecipes();


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
