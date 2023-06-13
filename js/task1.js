import { taskOne } from "./taskDescription.js";

const textDescription = document.querySelector('.task__description')
textDescription.innerHTML = taskOne.description
									.replace('icon_01', `<a href="${taskOne.urlIconOne}"
															class="task__description_link" target="_blank">icon_01</a>`)
									.replace('icon_02', `<a href="${taskOne.urlIconTwo}"
															class="task__description_link" target="_blank">icon_02</a>`)


//? Solution 1
const iconOnStatement = document.getElementById('iconOnState')
const buttonFirst = document.getElementById('buttonFirst')
let iconState = true;

buttonFirst.addEventListener('click', toggleIcon)
toggleIcon()

function toggleIcon() {
	if(!iconState) {
		iconOnStatement.innerHTML = taskOne.iconInvert;
		iconState = true;
		return
	}
	iconOnStatement.innerHTML = taskOne.icon;
	iconState = false;
}


//? Solution 2 with CSS
const iconOnCss = document.getElementById('iconOnCss')
const buttonSecond = document.getElementById('buttonSecond')

buttonSecond.addEventListener('click', () => iconOnCss.classList.toggle('button__icon_invert'))


//? Solution 3 with CSS + svg in HTML
const iconOnHtml = document.getElementById('iconOnHtml')
const buttonThird = document.getElementById('buttonThird')

buttonThird.addEventListener('click', () => iconOnHtml.classList.toggle('button__icon_reverse'))