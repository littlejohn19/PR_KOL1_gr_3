const form = document.querySelector('.contact-form');
const result = document.querySelector('.result');

form.addEventListener('submit', evt => {
	evt.preventDefault();
	const email = document.querySelector('input[name="email"]').value;
	const topic = document.querySelector('input[name="topic"]').value;
	const message = document.querySelector('textarea[name="message"]').value;

	result.innerHTML = `Email: ${email}<br>Temat: ${topic}<br>Treść: ${message}`;
});