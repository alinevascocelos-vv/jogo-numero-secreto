function verificaSeChuteValido(chute){
    const numero = +chute  //transforma em um número inteiro

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if(numeroForaDoIntervaloPermitido(numero)){
        elementoChute.innerHTML += `
        <div>Valor inválido! Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2 class="text-acertou">Parabéns! Você acertou!</h2>
            <h3 class="numero-acertou">O número secreto é ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-square-down"></i></div>
        `
    } else{
        elementoChute.innerHTML +=
        `
        <div>O número secreto é maior <i class="fa-solid fa-square-up"></i></div>
        `
    }
}


function chuteInvalido(numero){
    return  Number.isNaN(numero)
}

function numeroForaDoIntervaloPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e=> {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})