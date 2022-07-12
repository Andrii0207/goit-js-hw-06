const textInput = document.querySelector('#validation-input');
console.log(textInput);

console.log(textInput.hasAttribute('data-length'));
const inputLength = textInput.getAttribute('data-length');
console.log(inputLength);

textInput.addEventListener('blur', leftFocus);

function leftFocus(event) {
  textInput.value = '';
  if (event.currentTarget.value.length > Number.inputLength) {
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid');
  } else {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  }
}
