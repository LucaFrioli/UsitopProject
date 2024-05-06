// Obter formulário
const form = document.querySelector('form.contactForm');

// Função para lidar com o submit do formulário
exports.handleFormSubmit = (event) => {
	event.preventDefault(); // Evita o envio padrão do formulário

	const isValid = validateForm(form); // Valida o formulário
	console.log(isValid);

	if (isValid) {
		form.submit(); // Envia o formulário após validação bem-sucedida
		console.log('Formulário enviado com sucesso!'); // Feedback positivo
	} else {
		alert(
			'Erros encontrados no formulário. Por favor, corrija-os e tente novamente.'
		); // Feedback negativo
	}
};

// Função para validar formulário
const validateForm = (form) => {
	let flag = true;
	// Remove erros anteriores
	clearErrors(form);

	// Converte NodeList em array
	const fields = Array.from(form.querySelectorAll('.validation'));

	// Valida cada campo
	fields.forEach((field) => {
		if (!field.value) {
			const label = field.previousElementSibling.textContent;
			createError(field, `${label} não pode estar em branco`);
			flag = false;
		}

		if (field.id === 'telefone' && !validateCelphone(field.value)) {
			console.log('erro de validação de telefone');
			createError(field, 'Telefone inválido obs: não precisa do +55');
			flag = false;
		}

		if (field.id === 'email' && !validateEmail(field.value)) {
			console.log('Erro de validação de email');
			createError(field, 'Email inválido');
			flag = false;
		}
	});

	return flag;
};

// Função para remover erros anteriores
const clearErrors = (form) => {
	form.querySelectorAll('.formError').forEach((errorText) =>
		errorText.remove()
	);
};

// Função para validar email
const validateEmail = (email) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

// Função para validar telefone (celular brasileiro)
const validateCelphone = (phone) => {
	const phoneWithoutSpace = phone.replace(' ', '');
	const regex =
		/^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$/;
	return regex.test(phoneWithoutSpace);
};

// Função para criar mensagem de erro
const createError = (field, msg) => {
	const p = document.createElement('p');
	p.innerHTML = msg;
	p.classList.add('formError');
	field.insertAdjacentElement('afterend', p);
};
