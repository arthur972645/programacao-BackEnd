// const numerosDaAposta = []

// const inNumero = document.querySelector("#inNumero")
// const btnApostar = document.querySelector("#btnApostar")
// const btnReniciar = document.querySelector("#btnReniciar")
// const outErros = document.querySelector("#outErros")
// const outChance = document.querySelector("#outChance")
// const outDica = document.querySelector("#outDica")

// //eventos:
// btnApostar.addEventListener('click', apostaNumero)

// //função:
// const apostaNumero = () => {
//     const valueNumero = inNumero.value
//     const numeroAleatorio = Math.floor(Math.random() * 100) + 1

//     if(valueNumero !== numeroAleatorio){
//         numerosDaAposta.push(valueNumero)
//     }
// }

// Gerar um número aleatório entre 1 e 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let erros = 0;
let chances = 6;

document.getElementById('btnApostar').addEventListener('click', function() {
    const numeroDigitado = parseInt(document.getElementById('inNUmero').value);

    if (isNaN(numeroDigitado) || numeroDigitado < 1 || numeroDigitado > 100) {
        alert('Por favor, insira um número válido entre 1 e 100.');
        return;
    }

    if (numeroDigitado === numeroAleatorio) {
        alert(`Parabéns! Você acertou o número ${numeroAleatorio} em ${6 - chances + 1} tentativas.`);
        reiniciarJogo();
    } else {
        erros++;
        chances--;

        document.getElementById('outErros').textContent = erros;
        document.getElementById('outChances').textContent = chances;

        let dica = '';

        if (numeroDigitado < numeroAleatorio) {
            dica = `Dica: O número é maior que ${numeroDigitado}.`;
        } else {
            dica = `Dica: O número é menor que ${numeroDigitado}.`;
        }

        document.getElementById('outDica').textContent = dica;

        if (chances === 0) {
            alert(`Game over! O número era ${numeroAleatorio}.`);
            reiniciarJogo();
        }
    }

    document.getElementById('inNUmero').value = '';
});

function reiniciarJogo() {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    erros = 0;
    chances = 6;
    document.getElementById('outErros').textContent = erros;
    document.getElementById('outChances').textContent = chances;
    document.getElementById('outDica').textContent = 'Dica: É um número entre 1 e 100';
}