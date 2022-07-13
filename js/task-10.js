function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberEl = document.querySelector('[data-create]');
console.log(numberEl);

const inputEl = document.querySelector('input');
console.dir(inputEl.value);

function createBoxes() {
  console.log(inputEl.value);
}
