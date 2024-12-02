const URL =
  "https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "11bed04c27mshb6f8302c8454cabp10afc7jsnc701adc4abf2",
    "x-rapidapi-host": "tasty.p.rapidapi.com",
  },
};

async function getData() {
  try {
    const response = await fetch(URL, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData();
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
