import { taskTwo } from "./taskDescription.js";

const textDescription = document.querySelector('.task__description')
textDescription.innerHTML = taskTwo.description

//? Solution
const buttonFirst = document.getElementById('buttonFirst')
buttonFirst.addEventListener('click', getScreenSize)
function getScreenSize(){
	alert(`Высота окна - ${document.documentElement.clientHeight}px, а ширина окна - ${document.documentElement.clientWidth}px`)
}

//? Solution 2
const buttonSecond = document.getElementById('buttonSecond')
buttonSecond.addEventListener('click', getScreenSizeWithScroll)
function getScreenSizeWithScroll(){
	alert(`Высота окна - ${window.innerHeight}px, а ширина окна - ${window.innerWidth}px`)
}

//? Solution 3
const buttonThird = document.getElementById('buttonThird')
buttonThird.addEventListener('click', getDocumentSize)
function getDocumentSize(){
	let documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight,
				document.body.offsetHeight, document.documentElement.offsetHeight,
	 			document.body.clientHeight, document.documentElement.clientHeight);

	alert(`Высота окна - ${documentHeight}px, а ширина окна - ${document.documentElement.clientWidth}px`)
}

//* additional buttons for create fake text
const fakeText = document.querySelector('.task__fake-text')
const buttonAddText = document.getElementById('buttonAddText')
const buttonRemoveText = document.getElementById('buttonRemoveText')

buttonAddText.addEventListener('click', () => fakeText.innerHTML += taskTwo.fakeText)
buttonRemoveText.addEventListener('click', () => fakeText.innerHTML = '')
