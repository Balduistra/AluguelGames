function alterarStatus (inidice) {
    let tagA = document.getElementsByTagName('a')
    let botao = tagA[inidice];

     if (botao.classList.contains('dashboard__item__button--return')) {
        botao.classList.remove('dashboard__item__button--return');
        botao.innerHTML = 'Alugar';
    }else {
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = 'Devolver';
    }
}

