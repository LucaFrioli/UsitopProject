// captar cards #eletro-erosao #usinagens
const cardEletro = document.querySelector('#eletro-erosao');
const cardUsinagem = document.querySelector('#usinagens');

exports.sentinelScreenSize = () => {
	if (window.innerWidth >= 1200) {
		forDesktop();
	} else {
		forMobile();
	}
};

function forDesktop(classListEltro, classListUsinagens) {
	// Caso seja desktop ou maior que 1200 trocará as classes para vizualização de cores em sentido bandeira
	cardEletro.classList.remove('card-bold');
	cardUsinagem.classList.remove('card-light');

	cardEletro.classList.add('card-light');
	cardUsinagem.classList.add('card-bold');
}

function forMobile(classListEltro, classListUsinagens) {
	// Caso s eja mobile trocará as classes para alternar as cores no mobile
	cardEletro.classList.remove('card-light');
	cardUsinagem.classList.remove('card-bold');

	cardEletro.classList.add('card-bold');
	cardUsinagem.classList.add('card-light');
}
