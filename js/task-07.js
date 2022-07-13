const slider = document.querySelector('#font-size-control');
console.log(slider);

const textScreen = document.querySelector('#text');
console.log(textScreen);

slider.addEventListener('input', changeFont);

function changeFont(event) {
  textScreen.style.fontSize = `${slider.value}px`;
  console.log(textScreen.style.fontSize);
}
