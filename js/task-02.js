const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
console.table(ingredients);

const listOfIngredients = ingredients.map(ingredient => {
  const newlist = document.createElement('li');

  newlist.textContent = ingredient;
  newlist.classList.add('item');

  return newlist;
});

const addEL = document.querySelector('#ingredients');
addEL.append(...listOfIngredients);

console.log(addEL);
