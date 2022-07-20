const addListenerBtn = document.querySelector('[data-action="increment"]');
const removeListenerBtn = document.querySelector('[data-action="decrement"]');
const counterClickBtn = document.querySelector('#value');

let counterValue = 0;

addListenerBtn.addEventListener('click', () => {
  counterValue += 1;
  counterClickBtn.textContent = counterValue;
});

removeListenerBtn.addEventListener('click', () => {
  counterValue -= 1;
  counterClickBtn.textContent = counterValue;
});
