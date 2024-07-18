
document.querySelector('button[type="submit"]').addEventListener('click', (e) => {
	e.preventDefault();
	const username = document.querySelector('#username').value;
	const password = document.querySelector('#password').value;
});