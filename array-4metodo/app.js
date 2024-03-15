//classificar os intens de um vetro
const nome = ['arthur','amorim', 'lucena']

//espalah os dados dos arrys
console.log(nome.sort())
console.log(nome.reverse())

const number = [12,3,5,8,20]

const ordemCrescente = (a,b) => a - b
console.log(number.sort(ordemCrescente))

const ordemDecrecente = (a,b) => b - a
console.log(number.sort(ordemDecrecente))