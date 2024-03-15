//pesquisar e filtrar dados de um array
const number = [1,2,3,4,5]

//Encontrar o primeiro elemento que satifaz a condição:
const encontrado = number.find((num)=> num > 2)
console.log(encontrado)

//criar um novo aarray com todos elementos qie passaram no teste
const filter = number.filter((num)=> num%2 === 0)
console.log(filter)

//verificar se um array possui um determinado valor, retornando verdadeiro ou falso
const incluides = number.includes(4)
console.log(incluides)

//verificar se todos os elementos do array passam em um teste logico:
const everly = number.every((num) => num % 2 === 0)
console.log(everly)

//verificar de pelo menos um elemento no array satifaz a condição, se sim retorna true
const some = number.some((num) => num % 2 === 0)
console.log(some)