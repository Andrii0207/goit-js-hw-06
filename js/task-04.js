const addListenerBtn = document.querySelector('[data-action="increment"]');
const removeListenerBtn = document.querySelector('[data-action="decrement"]');
const counterClickBtn = document.querySelector('#value');
console.log('addListenerBtn:', addListenerBtn);
console.log('removeListenerBtn:', removeListenerBtn);
console.log('counterClickBtn:', counterClickBtn);

let counterValue = 0;
console.log('counterValue:', counterValue);

addListenerBtn.addEventListener('click', () => {
  counterValue += Number(addListenerBtn.textContent);
  console.log('клик по кнопке +1:', Number(removeListenerBtn.textContent));
});

removeListenerBtn.addEventListener('click', () => {
  counterValue += Number(removeListenerBtn.textContent);
  console.log('клик по кнопке -1:', Number(removeListenerBtn.textContent));
});

// console.log((counterClickBtn.innerHTML = counterValue));
