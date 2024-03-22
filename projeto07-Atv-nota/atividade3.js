// 3)- Elaborar um programa que leia nome e número de acertos de candidatos inscritos em um concurso. Listar os dados a cada inclusão. Ao clicar no botão Aprovados 2a Fase, ler o número de acertos para aprovação dos candidatos para a 2a fase do concurso. O programa deve, então, exibir os candidatos aprovados, ou seja, apenas os que obtiveram nota maior ou igual à nota informada. Exibir os candidatos aprovados em ordem decrescente de número de acertos. Caso nenhum candidato tenha sido aprovado, exibir mensagem.

const candidatos = []

const inCandidato = document.getElementById('inCandidato')
const inAcertos = document.getElementById('inAcertos')

const btnAdicionar = document.getElementById('btnAdicionar')
const btnAprovados = document.getElementById('btnAprovados')

const outLista = document.getElementById('outLista')    


const adicionarCandidato = () => {
    const nomeCandidato = inCandidato.value
    const acertos = Number(inAcertos.value)

    if(nomeCandidato === '' || acertos === 0 || isNaN(acertos)){
        alert('Digite valorez validos')
        return
    }

    candidatos.push({nome: nomeCandidato, nota: acertos})
    // console.log(candidatos)
    
    let listarCandidato = ''
    candidatos.forEach((candidato)=> 
         listarCandidato += `${candidato.nome} -- ${candidato.nota}\n`
        
    )
    // console.log(listarCandidato)
    outLista.textContent = listarCandidato
}
   
btnAdicionar.addEventListener('click',() => {
    adicionarCandidato()
    limparInput()
})

const aprovadosSegudaEtapa = () => {
    const notaMinima = Number(prompt("Digite a nota para 2º aprovação"))
    if(notaMinima === 0 || isNaN(notaMinima)){
        alert("Nota invalida")
        return
    }

    const filtrarCandidatos = candidatos.filter((candidato) => {
        return candidato.nota >= notaMinima
    })
    const caditatosEmOrdem = filtrarCandidatos.sort((a,b) => {
        return b.nota - a.nota
    })

    let lista = ''
    caditatosEmOrdem.forEach((candidato) => 
        lista += `${candidato.nome} -- ${candidato.nota}\n`
    )
    outLista.textContent = lista
}

btnAprovados.addEventListener('click',() => {
    aprovadosSegudaEtapa()
    limparInput()
})










const limparInput  = () => {
    inCandidato.value = ""
    inAcertos.value = ""
}