/**
 * Global constants
 */
const url_beverage = 'https://www.thecocktaildb.com/api/json/v1/1/';
const drinkButtonsEl = document.querySelectorAll('.six.columns')[1];

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
            console.error('Error:', response.statusText);
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
        const drinkName = drinks[getRand(drinks.length)].strDrink;
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
const getRand = (input) => {
    return Math.floor(Math.random() * input);
}

/**
 * Check input choice, get drink, build html, inject
 */
const checkIt = (e) => {
    e.stopPropagation();
    const regExp = /[^a-z]/;
    let input = e.target.innerText.toLowerCase();
    input = input.replace(/[^A-Za-z]/g, '');
    getBeverage(input).then((drink) => {
        const sectionEl = document.createElement('div');
        const figureEl = document.createElement('figure');
        const figcaptionEl = document.createElement('figcaption');
        const imgEl = document.createElement('img');
        const pEl = document.createElement('p');
        const olEl = document.createElement('ol');
        sectionEl.id = 'drink-result';
        imgEl.src = drink.image;
        figcaptionEl.textContent = drink.name;
        pEl.textContent = drink.instructions;
        for (let i = 0; i < drink.ingredients.length; i++) {
            const liEl = document.createElement('li');
            liEl.textContent = drink.ingredients[i];
            olEl.append(liEl);
        }
        figureEl.append(imgEl);
        figureEl.append(figcaptionEl);
        sectionEl.append(figureEl);
        sectionEl.append(pEl);
        sectionEl.append(olEl);
        drinkButtonsEl.prepend(sectionEl);
    });
}

/**
 *  Add listeners
 */
drinkButtonsEl.addEventListener('click', checkIt);

/**
 * Usage: getBeverage
 */
// getBeverage('gin').then((drink) => console.log(drink));
