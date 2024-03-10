let alugados = 1;
function alterarStatus (id) {
    let jogo = document.getElementById(`game-${id}`);
    let imagem = jogo.querySelector('.dashboard__item__img')
    let botao = jogo.querySelector('.dashboard__item__button')
    let nomeJogo = jogo.querySelector('.dashboard__item__name');
    
    
    
        if (imagem.classList.contains('dashboard__item__img--rented')) {
            // Adiciona uma confirmação antes de devolver o jogo
            if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
                imagem.classList.remove('dashboard__item__img--rented');
                botao.classList.remove('dashboard__item__button--return');
                botao.textContent = 'Alugar';
                alugados--;
                

            }
        } else {
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.add('dashboard__item__button--return');
            botao.textContent = 'Devolver';
            alugados++;
         
           
            
        }
        console.log('jogos alugados : ' + alugados);  
    }


    function mostrarJogosAlugados (){
        console.log('jogos alugados : ' + alugados);
    }
    // Inicializa a contagem considerando que os jogos já começam alugados
    document.addEventListener('DOMContentLoaded', function() {
        jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
        mostrarJogosAlugados();
    });



    
  
    
    
    





