## Netflix and Chilled Cocktails

Project One | Team Three

<img src="https://zno.s3-us-west-1.amazonaws.com/gif.gif" alt="Pic of application"
title="Netflix and Chilled Cocktails" width="" />


## Description

This project demonstrates the use of event listeners, local storage, multiple external api requests, and direct DOM manipulation. A team project, everyone came together to bring disparate pieces together to generate this app.

## Deployed App
[Netflix and Chilled Cocktails](https://darrindevs.github.io/netflix-and-chilled-cocktails)


## Technologies used
🏗 JavaScript - JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.

＄ jQuery - jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.

🥬 Parsley - Parsley, the ultimate JavaScript form validation library · UX focused. Parsley strongly focuses on #UI and #UX .

🦴 HTML - Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.

👗 CSS - Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.

💀 Skeleton CSS - Skeleton is a dead simple, responsive boilerplate.

☑️ Git - Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.

 ⛅️ GitHub - GitHub, Inc. is a provider of Internet hosting for software development and version control using Git.


## External APIs
🎦 [The Moview Database API](https://developers.themoviedb.org/3/getting-started/introduction)
🍸 [The Cocktail Database API](https://www.thecocktaildb.com/api.php) 

## Code Snippet 

~~~
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
~~~

## API Endpoints

- https://www.thecocktaildb.com/api/json/v1/1/
- https://api.themoviedb.org/3/movie/550?api_key=xxx 


## Contributors

- [Darrin](https://github.com/darrindevs)
- [John](https://github.com/Jsbaxter560)
- [Erick](https://github.com/erickmeline)
