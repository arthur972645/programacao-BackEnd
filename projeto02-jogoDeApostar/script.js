const numeros = []

const inNumero = document.querySelector("#inNumero")
const btnApostar = document.querySelector("#btnApostar")
const btnReniciar = document.querySelector("#btnReniciar")
const mostrarAcertou = document.querySelector("#acertou span")
const mostrarNovaDica = document.querySelector("#outDica span")
const mostrarOutErros = document.querySelector("#outErros span")



const verificarNUmero = () => {
    const gerarNumeroAleatorio = Math.floor(Math.random() * 100)
    const valueMostrarOutErro = 0
    const teste = 10
    const valueInNumero = inNumero.value
    

    if(valueInNumero === ''){
        alert('Coloque  um numero')
        return
    }
    numeros.push(valueInNumero)
    debugger
    for(let i = 0; i<6;i++){
        if(numeros[i] == teste){
            mostrarAcertou.innerHTML =  'PARABENS VC ACERTOU O NUMERO'
        }
        else if(numeros[i] > teste){
            mostrarNovaDica.innerHTML = `O número é menor que ${numeros[i]}`
            const acrementar = valueMostrarOutErro + 1
            mostrarOutErros.innerHTML = acrementar
        }
    }
}

btnApostar.addEventListener("click",verificarNUmero)


