// Elaborar um programa que adicione números a um vetor. O programa deve impedir a inclusão de números repetidos. Exibir a lista de números a cada inclusão. Ao clicar no botão Verificar Ordem, o programa deve analisar o conteúdo do vetor e informar se os números estão ou não em ordem crescente.
const number = []

const inNumero= document.getElementById('inNumero')

const btnAdicionar = document.getElementById('btnAdicionar')
const btnVerificarOrdem = document.getElementById('btnVerificarOrdem')

const outNumero = document.getElementById('outNumero')
const outResposta = document.getElementById('outResposta')

btnAdicionar.addEventListener('click',()=> {
    adicionarNumero()
    limparInput()
})

const adicionarNumero = () => {
    const numero = Number(inNumero.value)
    
    if(numero == 0 || isNaN(numero)){
       alert('Numero invalido')
       return 
    }
    // const numeroIgual = numero.includes(numero)

    // if(numeroIgual){
    //     alert('Número repitido')
    //     return
    // }

    number.push(numero)
    outNumero.textContent = `${number}`
}



const VerificarOrdem = () => {
    if(number.length === 0 ){
        alert('Digite um numero')
        return
    }
    
    const verificarArray = number.every((numero, index) => {
        if(index === number.length - 1 ){
            return true
        }
        return numero < number[index + 1]
    })

    if(verificarArray){
        outResposta.textContent = `Ordem crescente`
    }else{
        outResposta.textContent = `Não ta em ordem crescente`
    }
}

btnVerificarOrdem.addEventListener('click', () => {
    VerificarOrdem()
    limparInput()
})




const limparInput  = () => {
    inNumero.value = ""
}
