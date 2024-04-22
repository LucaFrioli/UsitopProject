exports.addingInfo = (el) => {
	const parentDivID = el.parentNode.id;
	const card = document.querySelector('#' + parentDivID);
	const title = document.querySelector('#title-' + parentDivID);
	const text = document.querySelector('#text-' + parentDivID);
	const btn = document.querySelector('#btn-' + parentDivID);
	const btnStyle = btn.style;

	const btnClassReducted = "btn btn-outline-light rounded-0 w-25 readMore";

	if (text.style.display == "block") { // Exibição do título do card
		// Organização do Card 
		title.classList.remove("mt-5")
		text.style.display = 'none';
		card.style.justifyContent = "center";

		// Estilização do botão
		btn.className = btnClassReducted;
		btn.innerHTML = "Leia Mais";
		
		btnStyle.alignSelf = "";
		btnStyle.background = "";
		btnStyle.border = "";

	} else { // Exibição do conteúdo do card
		// Organização do Card 
		title.classList.add("mt-5")
		text.style.display = 'block';
		card.style.justifyContent = "space-between";

		// Estilização do botão
		btn.className = "p-2 readMore";
		btn.innerHTML = "ver menos";

		btnStyle.alignSelf = "flex-start";
		btnStyle.background = "none";
		btnStyle.border = "none";
	}
};
