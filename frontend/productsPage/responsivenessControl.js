// captar cards #eletro-erosao #usinagens

const cardEletro = document.querySelector('#eletro-erosao').classList;
const cardUsinagem = document.querySelector('#usinagens').classList;

exports.sentinelScreenSize = () => {
	if (window.innerWidth >= 1200) {
		forDesktop();
	} else {
		forMobile();
	}
};

function forDesktop() {
	// Caso seja desktop ou maior que 1200 trocará as classes para vizualização de cores em sentido bandeira
	console.log(cardEletro, cardUsinagem);
}

function forMobile() {
	// Caso s eja mobile trocará as classes para alternar as cores no mobile
}
