import "/CSS/style.css";
const url = 'https://tasty.p.rapidapi.com/recipes/list';
container = document.querySelector("#recipe_container");
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '11bed04c27mshb6f8302c8454cabp10afc7jsnc701adc4abf2',
		'x-rapidapi-host': 'tasty.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

container.insertAdjacentHTML (
	"beforeend",
    `
      <div class="recipe">
      <img src="${recipe.thumbnail_url}" class="images">
      <h2>${recipe.name}</h2>
      <div class="item-properties">
      <p>${recipe.description}</p>
      </div>
  </div>
`
)