"use strict";

const db = firebase.firestore();
const form = document.querySelector("#contactForm");

form.addEventListener('submit', (e) => {
	e.preventDefault();

	db.collection("messages").add({
		name: document.getElementById('name').value,
		organization: document.getElementById('organization').value,
		phone: document.getElementById('phone').value,
		email: document.getElementById('email').value,
		preferred: document.getElementById('radioEmail').checked?'email':'phone',
		message: document.getElementById('message').value
	});
})