// - **Encontrar informações do ônibus por ID:**
// - Crie uma função que aceite o ID de um ônibus como entrada e retorne todas as informações sobre esse ônibus.

const data = require('./onibus.json')

const idDoOnibus = (idOnibus) => {
    const onibus = data.onibus.find((onibus) => onibus.id === idOnibus)
    return onibus ? {onibus} : {message: 'Não tem onibus para essa linha'}
}

const idOnibus= "A1001"
const infoOnibus = idDoOnibus(idOnibus)
console.log(infoOnibus)