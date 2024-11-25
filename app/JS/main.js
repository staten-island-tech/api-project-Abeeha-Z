import "/CSS/style.css";

const recipes_url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '11bed04c27mshb6f8302c8454cabp10afc7jsnc701adc4abf2',
		'x-rapidapi-host': 'tasty.p.rapidapi.com'
	}
};

try {
	const response = await fetch(recipes_url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

const tags_url = 'https://tasty.p.rapidapi.com/tags/list';
const choices = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '11bed04c27mshb6f8302c8454cabp10afc7jsnc701adc4abf2',
		'x-rapidapi-host': 'tasty.p.rapidapi.com'
	}
};

try {
	const response = await fetch(tags_url, choices);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
