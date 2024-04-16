import 'core-js/stable' //linha para otimização de código e inclusão de navegadores antigos
import 'regenerator-runtime/runtime' //linha para otimização de código e inclusão de navegadores antigos

// chamada para arquivos js
import {addingInfo} from './productsPage/readMore';

//chamadas para css
import './assets/css/card-carousel.css'
import './assets/css/font_Controller.css'
import './assets/css/hero2.css'
import './assets/css/navbar.css'
import './assets/css/footer.css'
import './assets/css/hero-message.css'
import './assets/css/sobre.css'


if (window.location.href === "http://localhost:3000/produtos.html") {
    const section = document.querySelector('#productsInformationsSection');
    const buttons = section.querySelectorAll('button.readMore');
    buttons.forEach((el) => {
        el.addEventListener('click', () => {
            addingInfo(el);
        });
    })
}