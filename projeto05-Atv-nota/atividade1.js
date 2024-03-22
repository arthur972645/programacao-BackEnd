// 1)- Elaborar um programa para gerar uma tabela com os jogos de uma fase eliminatória de um campeonato. O programa deve conter três funções (a serem executadas no evento click de cada botão) para: 1) validar o preenchimento, adicionar um clube ao vetor e listar os clubes; 2) listar os clubes (se houver); 3) montar a tabela de jogos, no formato primeiro x último, segundo x penúltimo e assim por diante. Exibir mensagem e não listar a tabela de jogos, caso o número de clubes informados seja ímpar.

const clubes = []

// entrada de dados
const inNome = document.querySelector("#inNome")

// botões
const btnAdicionar = document.querySelector("#btnAdicionar")
const btnListar = document.querySelector("#btnListar")
const btntabela = document.querySelector("#btntabela")

// saida de dados
const outLista = document.querySelector("#outLista")
const tabelaDejogos = document.querySelector("#tabelaDejogos")

btnAdicionar.addEventListener('click', () => {
    adicionarClubes()
    limparInput()
})
const adicionarClubes = () => {
     const time = inNome.value
     
     if(time === '') {
        alert('Insira um clube')
        inNome.focus()
        return
     }

     clubes.push({clube: time})
     console.log(clubes)
}



btnListar.addEventListener('click', () => {
    listarClubes()
    limparInput()
})
const listarClubes = () => {
    // debugger
    if(clubes.length === 0){
        alert('Não tem clubes cadastrados')
        inNome.focus()
        return
    }
    let listarTimes = ''
    clubes.forEach((clubes)=>
        listarTimes += `-${clubes.clube}\n`
        
    )
    outLista.textContent = listarTimes
}


btntabela.addEventListener('click',()=>{
    mostrarTabela()
    limparInput()
})

const mostrarTabela = () => {
    const numeroDados = clubes.length
    if(clubes.length%2 != 0 ){
        alert('a quantidade de clubes não é o bastante')
        return
    }
    
    for(let i = 0; i < numeroDados /2; i++){
        //aqui estamos crianco um novo elemento no html, uma div, mas pode ser qualque outra coisa, e estamos atribuindo essa criação a uma variavel
        const jogo = document.createElement('div'); 
        //Vamos pegar essa div que ta sendo criada e colocar um texto dentro dela que vai ser uma lógica
        jogo.textContent = `${clubes[i].clube} -X- ${clubes[(numeroDados - i - 1)].clube}`; 
        //Colocando essa 'div' que foi criada dentro de uma outra parte do HTML
        tabelaDejogos.appendChild(jogo); 
    }   
}   
const limparInput  = () => {
    inNome.value = ""
}
