const textInput = document.querySelector('#name-input');
console.log(textInput);

const output = document.querySelector('#name-output');
console.log(output);

textInput.addEventListener('input', onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);

  if (textInput.value !== '') {
    output.textContent = event.currentTarget.value;
  } else {
    output.textContent = 'Anonymous';
  }
}
