// captar cards #eletro-erosao #usinagens

const cardEletro = document.querySelector('#eletro-erosao');
const cardUsinagem = document.querySelector('#usinagens');

const classListEltro = cardEletro.classList;
const classListUsinagens = cardUsinagem.classList;

exports.sentinelScreenSize = () => {
	if (window.innerWidth >= 1200) {
		forDesktop();
	} else {
		forMobile();
	}
};

function forDesktop() {
	// Caso seja desktop ou maior que 1200 trocará as classes para vizualização de cores em sentido bandeira
	console.log(classListEltro, classListUsinagens);
}

function forMobile() {
	// Caso s eja mobile trocará as classes para alternar as cores no mobile
}
