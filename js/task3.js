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