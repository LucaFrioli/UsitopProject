import { isMobilePhone, isEmail } from 'validator';

const form = document.querySelector('form.contactForm');

function formSubmit(e) {
	e.preventDefault();
	const formInputs = form.querySelectorAll('input');
	const fields = getEmailAndCelphone(formInputs);
	const isValid = verifyInputs(fields, form);

	if (isValid) {
		form.submit();
	}
}

function getEmailAndCelphone(formInputs) {
	const inputsForValidate = [];

	// eslint-disable-next-line prefer-const
	for (let input of formInputs) {
		if (input.id === 'email' || input.id === 'telefone') {
			inputsForValidate.push(input);
		}
	}
	return inputsForValidate;
}

const verifyInputs = (fields, form) => {
	clearErrors(form);

	let flag = true;

	// eslint-disable-next-line prefer-const
	for (let e of fields) {
		if (e.id === 'email') {
			if (!isEmail(e.value)) {
				addError(e, 'Email Inválido');
				flag = false;
			}
		}
		if (e.id === 'telefone') {
			if (!isMobilePhone(e.value)) {
				addError(e, 'Telefone Inválido');
				flag = false;
			}
		}
	}

	return flag;
};

const addError = (currentInput, msg) => {
	const p = document.createElement('p');
	p.innerHTML = msg;
	p.classList.add('formError');
	currentInput.insertAdjacentElement('afterend', p);
};

// Função para remover erros anteriores
const clearErrors = (form) => {
	form.querySelectorAll('.formError').forEach((errorText) =>
		errorText.remove()
	);
};

export { formSubmit };

// // Função para lidar com o submit do formulário
// exports.handleFormSubmit = (event) => {
// 	event.preventDefault(); // Evita o envio padrão do formulário

// 	const isValid = validateForm(form); // Valida o formulário
// 	console.log(isValid);

// 	if (isValid) {
// 		// Feedback positivo
// 		alert('Formulário enviado com sucesso!');

// 		form.submit(); // Envia o formulário após validação bem-sucedida
// 	} else {
// 		// Feedback negativo
// 		alert.innerHTML =
// 			'Erros encontrados no formulário. Por favor, corrija-os e tente novamente.';
// 		alert.style.display = 'block';
// 		alert.className = 'alert alert-danger rounded-0 text-center';
// 	}
// };

// // Função para validar formulário
// const validateForm = (form) => {
// 	let flag = true;
// 	// Remove erros anteriores
// 	clearErrors(form);

// 	// Converte NodeList em array
// 	const fields = Array.from(form.querySelectorAll('.validation'));

// 	// Valida cada campo
// 	fields.forEach((field) => {
// 		if (!field.value) {
// 			const label = field.previousElementSibling.textContent;
// 			createError(field, `${label} não pode estar em branco`);
// 			flag = false;
// 		}

// 		if (field.id === 'telefone' && !validateCelphone(field.value)) {
// 			console.log('erro de validação de telefone');
// 			createError(field, 'Telefone inválido *obs: não precisa do +55');
// 			flag = false;
// 		}

// 		if (field.id === 'email' && !validateEmail(field.value)) {
// 			console.log('Erro de validação de email');
// 			createError(field, 'Email inválido');
// 			flag = false;
// 		}
// 	});

// 	return flag;
// };

// // Função para remover erros anteriores
// const clearErrors = (form) => {
// 	form.querySelectorAll('.formError').forEach((errorText) =>
// 		errorText.remove()
// 	);
// };

// // Função para validar email
// const validateEmail = (email) => {
// 	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 	return emailRegex.test(email);
// };

// // Função para validar telefone (celular brasileiro)
// const validateCelphone = (phone) => {
// 	if (phone.length < 14) return false;
// 	const phoneWithoutSpace = phone.replace(' ', '');
// 	const regex =
// 		/^\(((1[1-9])|([2-9][0-9]))\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{4}-[0-9]{4}))$/;
// 	return regex.test(phoneWithoutSpace);
// };

// // Função para criar mensagem de erro
// const createError = (field, msg) => {
// 	const p = document.createElement('p');
// 	p.innerHTML = msg;
// 	p.classList.add('formError');
// 	field.insertAdjacentElement('afterend', p);
// };
