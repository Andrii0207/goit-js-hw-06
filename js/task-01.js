////////////////////////////////////

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

/////////////////////////////////////

const itemArray = document.querySelectorAll('.item');
console.log(`Number of categories:`, itemArray.length);

const allInfoEl = itemArray.forEach(item => {
  const nameCateg = item.firstElementChild.textContent;
  const countChild = item.querySelectorAll('li').length;
  console.log(`Category:`, nameCateg);
  console.log(`Elements:`, countChild);
});
