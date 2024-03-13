//Estrutura de dados -> ARRAY

//Criar um array
const array = []
const vetor  = new Array()

console.log(typeof array)
console.log(typeof vetor)

//Referência aos elementos de um array
const produtos = ["Arroz", "Feijão", "Iorgute"]
console.log(produtos[1])

//Inclusão e exclusão de elementos/itens
const estados = ["Alagoas"]

estados.push('Recife') //Adiciona no final do array
console.log(estados)
//[0, 1, 2 ]
estados.unshift('Bahia')//Adiciona no ínicio do array
console.log(estados)

estados.pop() //Excluir no final do array
console.log(estados)

estados.shift() //Final no início do array
console.log(estados)

//Verificar o tamanho/quantidade de intens do array 
const numeros = [1,2,3,4,5,6]
console.log(`Tamanho do array: ${numeros.length}`)

//Apresentação dados de um array
const cidades = ['Maceió', 'Rio Largo', 'Marechal']
console.log(`${cidades} \t ${cidades.toString()}
\t ${cidades.join('::::')}`)
