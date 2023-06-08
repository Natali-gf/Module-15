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

const buttonSend = document.getElementById('buttonSend')
const buttonGeo = document.getElementById('buttonGeo')
const windowMessages = document.querySelector('.chat__messages')

buttonSend.addEventListener('click', sendMessage);
buttonGeo.addEventListener('click', getPosition);
document.addEventListener('keydown', (e) => {
	if(e.code === 'Enter'){
		sendMessage();
	}
})

let websocket;
setConnection()
function setConnection(){
	websocket = new WebSocket(taskThree.webSocketUri);
	websocket.onopen = function(e) {
		// showServerMessage('mess', new Date().toTimeString().substring(0, 5));
	};
	websocket.onmessage = (e) => {
		showServerMessage(e.data, new Date().toTimeString().substring(0, 5))
	};
	websocket.onerror = (e) => {
		showServerMessage(`ERROR: ${e.data}`, new Date().toTimeString().substring(0, 5))
	};
}

function showUserMessage(message, time, e){
	let messageBox = document.createElement("div");
		messageBox.classList.add('chat__user-message', 'user-message')
	let messageTime = document.createElement("span");
		messageTime.classList.add('user-message__time')
		messageTime.innerHTML = time;
	messageBox.append(messageTime)
	let messageText = document.createElement("div");
		messageText.classList.add('user-message__text')
		messageText.innerHTML = message;
	messageBox.append(messageText)
	windowMessages.appendChild(messageBox);
	// if(e.target === buttonSend){}
}

function showServerMessage(message, time){
	let messageBox = document.createElement("div");
		messageBox.classList.add('chat__server-message', 'server-message')
	let messageTime = document.createElement("span");
		messageTime.classList.add('server-message__time')
		messageTime.innerHTML = time;
	messageBox.append(messageTime)
	let messageText = document.createElement("div");
		messageText.classList.add('server-message__text')
		messageText.innerHTML = message;
	messageBox.append(messageText)
	windowMessages.appendChild(messageBox);
	messageBox.scrollIntoView()
}

function sendMessage(){
	if(websocket.readyState === 3){
		setConnection()
	}
	let inputValue = document.getElementById('inputChat');
	showUserMessage(inputValue.value, new Date().toTimeString().substring(0, 5));
	if (inputValue.value === ''){
		websocket.send(taskThree.emptyInput);
		return;
	}
	websocket.send(inputValue.value);
	inputValue.value = ''
};

function getPosition(){
	let message;
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position){
		  	const { coords } = position;
			message = `<a class=""
					href="https://www.openstreetmap.org/#map=18/${coords.latitude}/${coords.longitude}" target="_blank">
						Ваше местоположение
					</a>`
			showServerMessage(message, new Date().toTimeString().substring(0, 5))
		}, 	function(error){
				if(error.PERMISSION_DENIED){
					message = taskThree.locationDenied;
				} else if (error.POSITION_UNAVAILABLE) {
					message = taskThree.locationUnavailable;
				}
			showServerMessage(message, new Date().toTimeString().substring(0, 5))
		});
	} else {
		message = taskThree.locationNotSupport;
		showServerMessage(message, new Date().toTimeString().substring(0, 5))
	}

}