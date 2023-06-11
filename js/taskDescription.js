const tasks = {
	taskOne: {
		description: `Сверстайте кнопку, которая будет содержать в себе icon_01 (как в примере в последнем видео). При клике на кнопку иконка должна меняться на icon_02. Повторный клик меняет иконку обратно.`,
		urlIconOne: 'https://icons.getbootstrap.com/icons/arrow-down-left-circle/',
		urlIconTwo: 'https://icons.getbootstrap.com/icons/arrow-down-left-circle-fill/',
		icon: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-left-circle" viewBox="0 0 16 16">
		<path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904-2.854a.5.5 0 1 1 .707.708L6.707 9.95h2.768a.5.5 0 1 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.475a.5.5 0 1 1 1 0v2.768l4.096-4.097z"/>
		</svg>`,
		iconInvert: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-left-circle-fill" viewBox="0 0 16 16">
		<path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z"/>
	  	</svg>`,
	},
	taskTwo: {
		description: "Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert.",
		fakeText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nostrum pariatur doloribus nihil magni veniam eum! Quisquam unde error alias commodi distinctio. Debitis, nesciunt nihil autem quasi sequi quis. Sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ea doloribus molestias commodi. Blanditiis, vitae perspiciatis recusandae nemo temporibus illo ex distinctio adipisci, consectetur iusto doloremque maiores quibusdam esse aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minima dolorum ducimus nisi architecto corrupti obcaecati nam, impedit provident, quod temporibus minus consequuntur! Quas, illum cupiditate ullam quo voluptatum similique!"
	},
	taskThree: {
		descriptionItemOne: "Реализовать чат на основе эхо-сервера wss://echo-ws-service.herokuapp.com.",
		detailOne: "Интерфейс состоит из input, куда вводится текст сообщения, и кнопки «Отправить».",
		detailTwo: "При клике на кнопку «Отправить» сообщение должно появляться в окне переписки.",
		detailThree: "Эхо-сервер будет отвечать вам тем же сообщением, его также необходимо выводить в чат.",
		descriptionItemTwo: "Добавить в чат механизм отправки геолокации:",
		detailFour: "При клике на кнопку «Геолокация» необходимо отправить данные серверу и вывести в чат ссылку на https://www.openstreetmap.org/ с вашей геолокацией. Сообщение, которое отправит обратно эхо-сервер, выводить не нужно.",
		url: "https://www.openstreetmap.org/",
		webSocketUri: "wss://echo-ws-service.herokuapp.com/",
		emptyInput: "Ой, кажется вы ничего не ввели...",
		locationDenied: 'Для определения вашего местоположения включите геоданные в вашем устройстве/браузере',
		locationUnavailable: 'Невозможно определить ваше местоположение',
		locationNotSupport: 'Ваше устройство не поддерживает геолокацию',
		startMessage: 'Добро пожаловать в "Эхо-чат".<br>(полезные функции чата можно выбрать в правом верхнем углу)',
		errorMessage: 'Ошибка, обновите сраницу или попробуйте позже'
	}
}

export const taskOne = tasks.taskOne
export const taskTwo = tasks.taskTwo
export const taskThree = tasks.taskThree