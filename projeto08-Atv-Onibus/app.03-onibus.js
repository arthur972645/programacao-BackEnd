// - **Listar todas as paradas de uma linha:**
// - Escreva uma função que aceite o ID da linha como entrada e retorne todas as paradas associadas a essa linha, ordenadas pela ordem de parada.

const data = require('./onibus.json')

const listarParadasPorLimha = (idLinha) => {
    const linha = data.linhas.find((linha) => linha.id === idLinha)
    // console.log(linha)

    if(linha){
        const paradasOrdenadas = linha.paradas.sort((a,b) => a.ordem - b.ordem)
        return (paradasOrdenadas)
    }else{
        return {menssage : 'Paradas não enontradas'}
    }
}
const idLinha = 1
const paradasPorLinha = listarParadasPorLimha(idLinha)
console.log(paradasPorLinha)