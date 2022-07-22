function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  input: document.querySelector('input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  divElement: document.querySelector('#boxes'),
};

ref.btnCreate.addEventListener('click', inputValue);
ref.btnDestroy.addEventListener('click', destroyBoxes);

function inputValue(evt) {
  createBoxes(ref.input.value);
  console.log(ref.input.value);
}

function createBoxes(amount) {
  const arrayBoxes = [];

  for (let i = 1; i <= amount; i += 1) {
    const item = document.createElement('div');
    item.style.backgroundColor = getRandomHexColor();
    item.style.width = `${20 + i * 10}px`;
    item.style.height = `${20 + i * 10}px`;
    console.log(item);

    arrayBoxes.push(item);
    console.log(arrayBoxes);
  }
  ref.divElement.append(...arrayBoxes);
}

function destroyBoxes() {
  ref.divElement.innerHTML = '';
}
