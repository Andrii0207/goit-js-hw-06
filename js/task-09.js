function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
console.log(body);
const ChangeColorBtn = document.querySelector('.change-color');
console.log(ChangeColorBtn);
const color = document.querySelector('.color');
console.log(color);

function changeColor() {
  let newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  color.textContent = `${newColor}`;
  console.log(newColor);
  console.log('это клик по кнопке');
}

ChangeColorBtn.addEventListener('click', changeColor);
