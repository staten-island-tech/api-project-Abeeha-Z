import "/CSS/style.css";
async function fetchData() {
  const url =
    "https://tasty.p.rapidapi.com/recipes/list-similarities?recipe_id=8138";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "11bed04c27mshb6f8302c8454cabp10afc7jsnc701adc4abf2",
      "x-rapidapi-host": "tasty.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Fetch Error: ", error);
  }
}
fetchData();
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
