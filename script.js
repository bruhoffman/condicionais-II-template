// Exercício Prático 1
/* const verificarIdade = (idade) => {
    if (idade >= 13) {
        if (idade <= 17) {
            console.log("Seu dependente já pode ter um cartão de crédito vinculado ao seu!");
        } else {
            console.log("Consule outras possibilidades do Labank!");
        }
    } else {
        console.log("Consule outras possibilidades do Labank!");
    }
} */

const verificarIdade = function (idade) {
    if (idade >= 13 && idade <= 17) {
        console.log("Seu dependente já pode ter um cartão de crédito vinculado ao seu!");
    } else {
        console.log("Consule outras possibilidades do Labank!");
    }
}

//verificarIdade(17);

// Exercício Prático 2
const logarSistema = () => {
    const usuario = confirm("Você possui conta? \nClique 'OK' para sim e 'Cancelar' para não.")
    usuario === true ? console.log("Seja bem-vinda!") : console.log("Faça o login!")
}

//logarSistema()

// Exercício Prático 3
function escolherCartao(op) {
    switch (op) {
        case 1:
            console.log(`Você escolheu a opção ${op}: "Fácil"`);
            break
        case 2:
            console.log(`Você escolheu a opção ${op}: "Black"`);
            break
        case 3:
            console.log(`Você escolheu a opção ${op}: "Platinum"`);
            break
        case 4:
            console.log(`Você escolheu a opção ${op}: "Master Gold"`);
            break
        default:
            console.log("Escolha umas das quatro opções disponíveis!");
    }
}

//escolherCartao(+prompt("Digite uma opção de cartão: \n1: Fácil 2: Black 3: Platinum 4: Master Gold"));