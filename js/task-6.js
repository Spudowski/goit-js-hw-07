const inputNum = document.querySelector('#controls>input')
const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector('button[data-destroy]')
const boxes = document.getElementById('boxes')


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const createBoxes = amount => {
	const boxesArr = []
	if (amount > 100 || amount < 1) {
		return null
	} else {
	for (let i = 0; i < amount; i++) {
		const div = document.createElement('div')
		div.style.height = `${30 + 10 * i}px`
		div.style.width = `${30 + 10 * i}px`
		div.style.background = getRandomHexColor()
		boxesArr.push(div)
	}
	return boxesArr
	}
}



const destroyBoxes = () => {
	boxes.innerHTML = ''

}

btnCreate.addEventListener('click', () => {
	destroyBoxes();
	let boxesToAdd = createBoxes(inputNum.value)
	boxes.append(...boxesToAdd)
})


btnDestroy.addEventListener('click', () => {
	destroyBoxes.call()
	inputNum.value = null;
})