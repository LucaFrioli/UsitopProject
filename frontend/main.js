import 'core-js/stable'; // linha para otimização de código e inclusão de navegadores antigos
import 'regenerator-runtime/runtime'; // linha para otimização de código e inclusão de navegadores antigos

// chamada para arquivos js
import { addingInfo } from './productsPage/readMore';
import { sentinelScreenSize } from './productsPage/responsivenessControl';
import { handleFormSubmit } from './contactPage/validators';

// chamadas para css
import './assets/css/card-carousel.css';
import './assets/css/font_Controller.css';
import './assets/css/hero2.css';
import './assets/css/navbar.css';
import './assets/css/footer.css';
import './assets/css/hero-message.css';
import './assets/css/sobre.css';
import './assets/css/produtos.css';
import { handleTelmask } from './contactPage/telMask';

if (window.location.href === 'http://localhost:3000/produtos') {
	// função para ficar de sentinela em relação ao tamnaho da tela, ela averigurá o tamnho, e em determinada condição trocará a lista de clsses dos cards de apresentação de produto da página
	sentinelScreenSize();

	// controla a vizualização das informações de cada card
	const section = document.querySelector('#productsInformationsSection');
	const buttons = section.querySelectorAll('button.readMore');
	buttons.forEach((el) => {
		el.addEventListener('click', () => {
			addingInfo(el);
		});
	});
}

if (window.location.href === 'http://localhost:3000/contato') {
	// EVENTO ATIVADA AO TOCAR EM "ENVIAR" NA PÁGINA "CONTATO"
	const contactForm = document.querySelector('form.contactForm');
	contactForm.addEventListener('submit', handleFormSubmit);

	// EVENTO ACIONADO AO INSERIR CARACTERES NO INPUT "TELEFONE" PARA FORMATAÇÃO
	const telInput = document.querySelector('input#telefone');
	telInput.addEventListener('keypress', () => {
		handleTelmask(telInput);
	});
}
