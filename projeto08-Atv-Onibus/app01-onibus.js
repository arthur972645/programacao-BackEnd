// 20240325074152
// https://file.notion.so/f/f/e933af52-5a04-49f0-851c-0879757a3bd5/3ec7c5bb-d9d9-4399-bf41-6506ab282b19/onibus.json?id=0df371e0-6eb3-475f-a077-ea676d0d8975&table=block&spaceId=e933af52-5a04-49f0-851c-0879757a3bd5&expirationTimestamp=1711454400000&signature=pISjMNNj0xICZ7Blns1WYjWQNeRqPw8gpu2Z1Cg4Dv0&downloadName=onibus.json


// - **Consultar horários de partida e chegada por linha:**
//     - Crie uma função que aceite o ID da linha como entrada e retorne os horários de partida e chegada para essa linha.
// - **Verificar disponibilidade de ônibus por linha:**
//     - Implemente uma função que mostre quantos ônibus estão disponíveis para uma determinada linha.
// - **Listar todas as paradas de uma linha:**
//     - Escreva uma função que aceite o ID da linha como entrada e retorne todas as paradas associadas a essa linha, ordenadas pela ordem de parada.
// - **Filtrar ônibus por status:**
//     - Implemente uma função que aceite um status como entrada (por exemplo, "em operação" ou "em manutenção") e retorne uma lista de ônibus com esse status.
// - **Encontrar informações do ônibus por ID:**
//     - Crie uma função que aceite o ID de um ônibus como entrada e retorne todas as informações sobre esse ônibus.
// - **Verificar se há motorista atribuído:**
//     - Escreva uma função que aceite o ID de um ônibus como entrada e verifique se há um motorista atribuído a esse ônibus.
// - **Listar todas as linhas disponíveis:**
//     - Implemente uma função que retorne uma lista de todas as linhas disponíveis, juntamente com os horários de partida e chegada.
// - **Atualizar informações do ônibus:**
//     - Crie uma função que aceite o ID de um ônibus e novas informações (como status, motorista, etc.) e atualize essas informações na base de dados.
// - **Calcular tempo de viagem por linha:**
//     - Crie uma função que calcule o tempo médio de viagem para uma linha específica com base nos horários de partida e chegada.


//Estudar mais sobre arrays!!! sobre as funções nativaaass
const data = require ('./onibus.json')

const horariosPorLinha = (idLinha) => {

  const linha = data.linhas.find((linha) =>  linha.id == idLinha)
  console.log(linha)
  if(linha){
    const horarios = linha.horarios.map((horario) => {
      return `Saída : ${horario.saida}, Chegada: ${horario.chegada}`
    })
    return horarios.join('\n')
  }else{
    return {message : "Não foi encontrada uma linha"}
  }
}
//todo dado do back pro front  é dado em formato de objeto
//O idLinha abaixo é o mesmo do idLinha la encima
const idLinha = 1
const horariosLinhas = horariosPorLinha(idLinha) 
console.log(horariosLinhas)




















































// console.log(data)
// const inLinha = document.getElementById('inLinha')
// const btnHorario = document.getElementById('btnHorario')
// const statusOnubus = document.getElementById('statusOnubus')


// const horarios1 = document.getElementById('horarios1')
// const horarios2 = document.getElementById('horarios2')
// const horarios3 = document.getElementById('horarios3')
// const horarios4 = document.getElementById('horarios4')
// const quantidade = document.getElementById('quantidade')
// const btnMostarParadas = document.getElementById('btnMostarParadas')
// const btnPesquisarStatusOnibus = document.getElementById('btnPesquisarStatusOnibus')
// const outOnibus = document.getElementById('outOnibus')
 


// const horarioDePartidaChagada = () => {
//     const  valueLinha = Number(inLinha.value)
//     if(valueLinha === 1){
        
//         horarios1.textContent = `Saída:${data.linhas[0].horarios[0].saida} -- chegada : ${data.linhas[0].horarios[0].chegada}`
//         horarios2.textContent = `Saída:${data.linhas[0].horarios[1].saida} -- chegada : ${data.linhas[0].horarios[1].chegada}`
//         quantidade.textContent = `Dois onius disponiveis`
//     }else if(valueLinha === 2 ){
//         horarios1.textContent = `Saída:${data.linhas[1].horarios[0].saida} -- chegada: ${data.linhas[1].horarios[0].chegada}`
//         horarios2.textContent = `Saída:${data.linhas[1].horarios[1].saida} -- chegada do onibus 2: ${data.linhas[1].horarios[1].chegada}`
//         quantidade.textContent = `Nenhum onibus disponiveis`
//     }
// }
// btnHorario.addEventListener('click', () => {
//     horarioDePartidaChagada()
// })

// const paradasPorLinha = () => {
//     const  valueLinha = Number(inLinha.value)
//     if(valueLinha === 1 ){
//         horarios1.textContent = `Parada 1: ${data.linhas[0].paradas[0].nome}`
//         horarios2.textContent = `Parada 2: ${data.linhas[0].paradas[1].nome}`
//         horarios3.textContent = `Parada 3: ${data.linhas[0].paradas[2].nome}`
//         horarios4.textContent = `Parada 4: ${data.linhas[0].paradas[3].nome}`
//     }else if(valueLinha === 2){
//         horarios1.textContent = `Parada 1: ${data.linhas[1].paradas[0].nome}`
//         horarios2.textContent = `Parada 2: ${data.linhas[1].paradas[1].nome}`
//         horarios3.textContent = `Parada 3: ${data.linhas[1].paradas[2].nome}`
//         horarios4.textContent = `Parada 4: ${data.linhas[1].paradas[3].nome}`
//     }
// }
// btnMostarParadas.addEventListener('click', () => {
//     paradasPorLinha()
// })

// const statusOnibus = () => {

// }
//   // **Filtrar ônibus por status:**
// //     - Implemente uma função que aceite um status como entrada (por exemplo, "em operação" ou "em manutenção") e retorne uma lista de ônibus com esse status.
// btnPesquisarStatusOnibus.addEventListener('click',() => {
//   statusOnibus()
// })
