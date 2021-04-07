/**
 * Global constants
 */
const url_beverage = 'https://www.thecocktaildb.com/api/json/v1/1/';

/**
 * Fetch external endpoint
 * @param {String} url
 * @return {Object} json response
 */
const fetchData = (url) => {
    return fetch(url).then((response) => {
        if (response.ok) {
            return response.json();
        }
        else {
            console.error('Error:', response.statusText); // need a better way to handle rejects - please contact me if you know
        }
    }).catch((error) => {
        console.error('Error: no response');
    });
}


/**
 * Get beveragess based on ingredient, then individual beverage
 * @param {String} ingredient
 * @return {Object} beverage details
 */
const getBeverage = (ingredient) => {
    let url = ingredient ? `${url_beverage}filter.php?i=${ingredient}` : `${url_beverage}random.php`;
    return fetchData(url).then((data) => {
        const drinks = data.drinks;
        const drinkName = drinks[getRandom(drinks.length)].strDrink;
        url = `${url_beverage}search.php?s=${drinkName}`;
        return fetchData(url).then((data) => {
            const rawDrink = data.drinks[0];
            const drink = {ingredients: []};
            for (let i = 1; i < 16; i++) {
                const strIngredient = 'strIngredient' + i;
                const strMeasure = 'strMeasure' + i;
                if (rawDrink[strIngredient]) {
                    let merged = rawDrink[strMeasure] || '';
                    merged += rawDrink[strIngredient];
                    drink.ingredients.push(merged);
                }
            }
            drink.instructions = rawDrink.strInstructions;
            drink.name = rawDrink.strDrink;
            drink.image = rawDrink.strDrinkThumb;
            return drink;
        });
    });
}

/**
 * Get random integer between 0 - input
 * @param {Number} input - upper limit for random
 * @return {Number} random int
 */
const getRandom = (input) => {
    return Math.floor(Math.random() * input);
}

/**
 * Usage: getBeverage
 */
getBeverage('gin').then((drink) => console.log(drink));
