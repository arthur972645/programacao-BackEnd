// const paciente = []
// //entrada de dados
// const inPaciente = document.getElementById('inPaciente')

// //saida de dados:
// const outAtendimento = document.getElementById('outAtendimento')
// const outList = document.getElementById('outList')

// //btns:
// const btnAdicionar = document.getElementById('btnAdicionar')
// const btnUrgencia = document.getElementById('btnUrgenciar')
// const btnAtender = document.getElementById('btnAtender')

// //função: 
// const adicionarPaciente = () => {
//     let nome = inPaciente.value
//     if(nome === ''){
//         alert('Informe o nome do paciente')
//         return
//     }
//     paciente.push(nome)
//     let lista = ''
//     paciente.map((paciente,index)=> {
//         return (lista += `${index+1} - ${paciente}\n`)
//     })
//     outList.textContent=lista
//     inPaciente.value=""
// }

// const adicionarUrgencia = () => {
//     let nome = inPaciente.value
//     if(nome === ''){
//         alert('Informe o nome do paciente')
//         return
//     }
//     paciente.unshift(nome)
//     let lista = ""
//     paciente.map((paciente,index)=> {
//         return (lista += `${index+1} - ${paciente}\n`)
//     })
//     outList.textContent=lista
//     inPaciente.value=""
// }

// const atenderPaciente = () => {
//     if (paciente.length === 0) {
//         alert("Não exite paciente na fila de espera")
//         return
//     }
//     let atender = paciente.shift()
//     outAtendimento.textContent = atender

//     let lista = ""
//     paciente.map((paciente, index)=> {
//         return (lista += `${index+1} - ${paciente}\n`)
//     })
// }
// //evento no btn
// btnAdicionar.addEventListener('click', adicionarPaciente)
// btnUrgencia.addEventListener('click', adicionarUrgencia)
// btnAtender.addEventListener('click', atenderPaciente)

const pacientes = []
// referência para entrada de dados 
const inPaciente = document.getElementById('inPaciente')

//Saída de dados
const outAtendimento = document.getElementById('outAtendimento')
const outLista = document.getElementById('outLista')

//Botões
const btnAdicionar = document.getElementById('btnAdicionar')
const btnUrgencia = document.getElementById('btnUrgencia')
const btnAtender = document.getElementById('btnAtender')

const adicionarPaciente = () =>{
    let nome = inPaciente.value
    if(nome === ''){
        alert('Informe o nome do paciente')
        return
    }
    pacientes.push(nome);

    let lista = "";
    pacientes.map((paciente, index) => {
        return (lista += `${index+1} - ${paciente}\n`);
    });

    outLista.textContent = lista;
    inPaciente.value = "";

};
btnAdicionar.addEventListener("click", adicionarPaciente);

const adicionarUrgencia = () =>{
    let nome = inPaciente.value
    if(nome === ''){
        alert('Informe o nome do paciente')
        return
    }
    pacientes.unshift(nome);

    let lista = "";
    pacientes.map((paciente, index) => {
        return (lista += `${index+1} - ${paciente}\n`);
    });

    outLista.textContent = lista;
    inPaciente.value = "";

};

btnAdicionar.addEventListener('click', adicionarUrgencia);

const atenderPaciente = () => {
    if (pacientes.length === 0) {
        alert("Não Existe paciente na fila de espera");
        return;
    }
    let atender = pacientes.shift()
    outAtendimento.textContent = atender

    let lista = "";
    pacientes.map((paciente, index) => {
        return (lista += `${index+1} - ${paciente}\n`);
    });
    
    outLista.textContent = lista;
};
btnAtender.addEventListener("click", atenderPaciente);
