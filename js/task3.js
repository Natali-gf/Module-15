import { taskThree } from "./taskDescription.js";

const textDescription = document.querySelector('.task__description')
textDescription.innerHTML = `
				<div>${taskThree.descriptionItemOne}</div>
					<ul class="task__description_detail">
						<li>${taskThree.detailOne}</li>
						<li>${taskThree.detailTwo}</li>
						<li>${taskThree.detailThree}</li>
					</ul><br>
				<div>${taskThree.descriptionItemTwo}</div>
				<span class="task__description_detail">${taskThree.detailFour.replace('https://www.openstreetmap.org/', `<a href="${taskThree.url}"
												class="task__description_link" target="_blank">
												https://www.openstreetmap.org/</a>`)}</span><hr>`


//? Solution

const buttonSend = document.getElementById('buttonSend');
const buttonGeo = document.getElementById('buttonGeo');
const windowMessages = document.querySelector('.chat__messages');
const inputChat = document.getElementById('inputChat');
const loading = document.querySelector('.loading');
const inputSettings = document.querySelectorAll('.settings__input')

buttonSend.addEventListener('click', sendMessage);
buttonGeo.addEventListener('click', getPosition);
inputChat.addEventListener('keydown', (e) => {
	if(e.code === 'Enter'){
		sendMessage(e);
	}
})

showMessage(taskThree.startMessage, getTime(), 'server')

let websocket;
setConnection()
function setConnection(){
	return new Promise(function(resolve){
		websocket = new WebSocket(taskThree.webSocketUri);
		websocket.onopen = function() {
			resolve();
		};
		websocket.onmessage = (e) => {
			let message = e.data;
				if(checkRadioInput() === 'inputUppercase'){
					message = message.toUpperCase();
				}else if(checkRadioInput() === 'inputLowercase'){
					message = message.toLowerCase();
				}
			loading.style.display = 'none';
			showMessage(message, getTime(), e);
		};
		websocket.onerror = (e) => {
			showMessage(`ERROR: ${e.data}`, getTime(), e);
		};
	})
}

async function sendMessage(e){
	showMessage(inputChat.value, getTime(), e);
	if (inputChat.value === ''){
		showMessage(taskThree.emptyInput, getTime(), 'server');
		return;
	}
	loading.style.display = 'flex';
	if(websocket.readyState === 3){
		try{
			await setConnection()
		} catch{
			console.log('Error: websocket.readyState', websocket.readyState);
			showMessage(taskThree.errorMessage, getTime(), 'server');
		}
	}
	websocket.send(inputChat.value);
	inputChat.value = '';
};

function showMessage(message, time, e){
	let messageBox = document.createElement("div");
	let messageTime = document.createElement("span");
		messageTime.classList.add('message__time');
		messageTime.innerHTML = time;
	messageBox.append(messageTime);
	let messageText = document.createElement("div");
		messageText.classList.add('message__text');
		messageText.innerHTML = message;
	messageBox.append(messageText);
	windowMessages.appendChild(messageBox);
		if(e.target === buttonSend || e.target === inputChat){
			messageBox.classList.add('chat__user-message', 'message');
		} else {
			messageBox.classList.add('chat__server-message', 'message');
		}
	messageBox.scrollIntoView();
}

function getPosition(){
	let message;
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position){
		  	const { coords } = position;
			message = `<a class=""
					href="https://www.openstreetmap.org/#map=18/${coords.latitude}/${coords.longitude}" target="_blank">
						Ваше местоположение
					</a>`;
			showMessage(message, getTime(), 'server');
		}, 	function(error){
				if(error.PERMISSION_DENIED){
					message = taskThree.locationDenied;
				} else if (error.POSITION_UNAVAILABLE) {
					message = taskThree.locationUnavailable;
				}
			showMessage(message, getTime(), 'server');
		});
	} else {
		message = taskThree.locationNotSupport;
		showMessage(message, getTime(), 'server');
	}
}

function checkRadioInput(){
	let checkedRadio;
	inputSettings.forEach(elem => {
		if(elem.checked){
			return checkedRadio = elem.id;
		}
	})
	return checkedRadio;
}

//* HELPERS

function getTime(){
	let time = new Date().toTimeString().substring(0, 5);
	return time;
}
