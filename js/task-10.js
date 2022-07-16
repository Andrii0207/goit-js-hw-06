function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const numberEl = document.querySelector('[data-create]');
// console.log(numberEl);

// const inputEl = document.querySelector('input');
// console.dir(inputEl.value);

// function createBoxes() {
//   console.log(inputEl.value);
// }

// const inputEl = document.querySelector('input');
// console.log(inputEl);
// const createBtn = document.querySelector('[data-create]');
// console.log(createBtn);
// const destroyBtn = document.querySelector('[data-destroy]');
// console.log(destroyBtn);

// createBtn.addEventListener('click', onCreateBoxes);

// function onCreateBoxes(event) {
//   for (let i = 1; (i = inputEl.value); i++) {
//     const newElement = document.createElement('div');
//     newElement =
//   }
//     console.log(inputEl.value);

//   //   console.log(event);
// }

const ref = {
  //   controlsDiv: document.querySelector('#controls'),
  input: document.querySelector('input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  divParent: document.querySelector('#boxes'),
};
ref.btnCreate.addEventListener('click', e => {
  createBoxes(ref.input.value);
  console.log(ref.input.value);
});

// ref.btnCreate.addEventListener('click', createBox);

// function createBox(e) {
//   createBoxes(ref.input.value);
//   ref.input.value;
// }

// ref.btnCreate.addEventListener('click', e => createBoxes(+ref.input.value));
ref.btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  for (let i = 0; i <= amount; i += 1) {
    const item = document.createElement('div');
    item.style.backgroundColor = getRandomHexColor();
    item.style.width = `${30 + i * 10}px`;
    item.style.height = `${30 + i * 10}px`;
    ref.divParent.append(item);
  }
  console.log(amount);
}

function destroyBoxes() {
  ref.divParent.innerHTML = '';
}
