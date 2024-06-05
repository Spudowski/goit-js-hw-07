function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const text = document.querySelector('.color');
const colorBtn = document.querySelector('.change-color');

function changeColor() {
  text.textContent = document.body.style.backgroundColor = getRandomHexColor();
}

colorBtn.addEventListener("click", changeColor);
