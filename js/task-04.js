const addListenerBtn = document.querySelector('[data-action="increment"]');
const removeListenerBtn = document.querySelector('[data-action="decrement"]');
const counterClickBtn = document.querySelector('#value');
console.log('addListenerBtn:', addListenerBtn);
console.log('removeListenerBtn:', removeListenerBtn);
console.log('counterClickBtn:', counterClickBtn);

let counterValue = (counterClickBtn.textContent = 0);
console.log('counterValue:', counterValue);

addListenerBtn.addEventListener('click', event => {
  counterValue += Number(counterClickBtn.textContent);
  console.log('клик по кнопке +1:', event);
});

removeListenerBtn.addEventListener('click', () => {
  console.log('клик по кнопке -1:');
});

console.log((counterClickBtn.innerHTML = counterValue));
