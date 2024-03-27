// - **Verificar disponibilidade de ônibus por linha:**
// - Implemente uma função que mostre quantos ônibus estão disponíveis para uma determinada linha.

const data = require('./onibus.json')

const contrarOnibusDisponiveisPorLinha = (idLinha) => {
    const onibusDaLinha = data.onibus.filter((onibus) => onibus.linha === idLinha)
    return onibusDaLinha.length != 0 ? {onibusDaLinha} : {message: 'Não tem onibus para essa linha'}
}

const idLinha = 2
const onibusDisponivel = contrarOnibusDisponiveisPorLinha(idLinha)
console.log(onibusDisponivel)