const userEl = document.querySelector('#user');
const btnEl = document.querySelector('#generate');
const spinnerEl = document.querySelector('.spinner');
function getNewUser() {
	spinnerEl.classList.remove('hidden');
	fetch('https://randomuser.me/api/')
		.then((response) => {
			if (!response.ok) {
				throw new Error('Request Failed');
			}
			return response.json();
		})
		.then((data) => {
			console.log(data.results[0]);
			const user = data.results[0];
			userEl.innerHTML = `

			<img class="object-cover rounded-full w-44 h-44" src="${user.picture.large}" alt="${user.name.first}">
			<div class="text-xl">

				<p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
				<p><strong>Email:</strong> ${user.email}</p>
				<p><strong>Phone:</strong> ${user.phone}</p>

        <p><strong>Address:</strong> ${user.location.street.number} ${user.location.street.name}</p>
				<p><strong>State:</strong> ${user.location.city}, ${user.location.state}</p>
				<p><strong>Age:</strong>${user.dob.age}</p>
			</div>

    `;
			spinnerEl.classList.add('hidden');
		})
		.catch((error) => {
			console.log(error);
			userEl.textContent = `${error}`;
		});
}
getNewUser();
btnEl.addEventListener('click', getNewUser);
