// Exercício Prático 1
/* const verificarIdade = (idade) => {
    if (idade >= 13) {
        if (idade <= 17) {
            console.log("Seu dependente já pode ter um cartão de crédito vinculado ao seu!");
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
const possuiConta = () => {
    const conta = confirm("Você possui conta? \nClique 'OK' para sim e 'Cancelar' para não.")
    conta === true ? console.log("Seja bem-vindo!") : console.log("Faça o login!")
}

//possuiConta()

// Exercício Prático 3
function escolherCartao(op) {
    switch (op) {
        case 1:
            console.log(`Você escolheu a opção 1: "Cartão Fácil"`);
            break
        case 2:
            console.log(`Você escolheu a opção 2: "Cartão Black"`);
            break
        case 3:
            console.log(`Você escolheu a opção 3: "Cartão Platinum"`);
            break
        case 4:
            console.log(`Você escolheu a opção 3: "Cartão Master Gold"`);
            break
        default:
            console.log("Escolha umas das quatro opções disponíveis!");
    }
}

//escolherCartao(+prompt("Digite uma opção de cartão: \n1: Fácil 2: Black 3: Platinum 4: Master Gold"));

// Exercício Prática Extra
// IFs Aninhados
/* function divisivelDoisTres(num) {
    if (num % 2 === 0) {
        if (num % 3 === 0) {
            console.log("Número é divisível por 2 e por 3");
        }
    } else {
        console.log("Digite outro número")
    }
} */

// Operadores Lógicos
function divisivelDoisTres(num) {
    if (num % 2 === 0 && num % 3 === 0) {
        console.log("Número é divisível por 2 e por 3");
        num === 30 ? console.log("Ufa, acertei!") : console.log("Não foi dessa vez :(")
    } else {
        console.log("Digite outro número")
    }
}

//divisivelDoisTres(Number(prompt("Informe um número inteiro.")));

function divisivelDoisTres(num) {

    if (num % 2 === 0 && num % 3 === 0) {
        console.log("Número é divisível por 2 e por 3");

        switch (num) {
            case 6:
                console.log(`Acertou é ${num}!`)
                break

            case 12:
                console.log(`Acertou é ${num}!`)
                break

            case 18:
                console.log(`Acertou é ${num}!`)
                break

            case 24:
                console.log(`Acertou é ${num}!`)
                break

            case 30:
                console.log(`Acertou é ${num}!`)
                break

            default:
                console.log("O número é maior que 30 ou menor que 6!")
        }

    } else {
        console.log("Digite outro número")
    }
}

//divisivelDoisTres(Number(prompt("Informe um número inteiro.")));