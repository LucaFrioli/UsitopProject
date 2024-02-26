exports.addingInfo = (el) => {
    const parentDivID = el.parentNode.id;
    switch (parentDivID) {
        case 'moldes':
            console.log('sou o conteúdo do botão de moldes');
            break;

        case 'matrizes':
            console.log('sou o conteúdo vindo do botão de matrizes ')
            break;

        case 'eletroErosao':
            console.log('sou o conteúdo do botão de eletroErosao');
            break;

        case 'usinagens':
            console.log('sou o conteúdo do botão de usinagens');
            break;
    }
}

function addingInfo() {

}