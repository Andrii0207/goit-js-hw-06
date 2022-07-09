// const parent = document.querySelector('#categories');
// const childrenArray = parent.children;
// console.log(childrenArray);
// console.log(`Number of categories:`, childrenArray.length);

const itemArray = document.querySelectorAll('.item');
console.log(`Number of categories:`, itemArray.length);
console.dir(itemArray);

const allInfoEl = itemArray.forEach(item => item.firstElementChild);
console.log(item);
