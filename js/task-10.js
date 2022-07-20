function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  input: document.querySelector('input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  divElement: document.querySelector('#boxes'),
};

ref.btnCreate.addEventListener('click', createBox);

function createBox(evt) {
  createBoxes(ref.input.value);
  ref.input.value;
}

ref.btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  for (let i = 0; i <= amount; i += 1) {
    const item = document.createElement('div');
    item.style.backgroundColor = getRandomHexColor();
    item.style.width = `${30 + i * 10}px`;
    item.style.height = `${30 + i * 10}px`;
    ref.divElement.append(item);
  }
  console.log(amount);
}

function destroyBoxes() {
  ref.divElement.innerHTML = '';
}
