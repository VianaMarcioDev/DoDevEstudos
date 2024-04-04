let primeiroNumero = parseInt(prompt("Digite o primeiro número: "))
let segundoNumero = parseInt(prompt("Digite o segundo número:"))
let operacao = prompt("Digite a operação que deseja fazer com esses números (soma, subtração, multiplicação ou divisão")
console.log(operacao)
switch(operacao){
    case "soma": 
        console.log("A operação escolhida foi " + operacao + ", e o resultado é " + (primeiroNumero + segundoNumero))
        break;
    case "subtração": 
        console.log("A operação escolhida foi " + operacao + ", e o resultado é " + (primeiroNumero - segundoNumero))
        break;
    case "multiplicação": 
        console.log("A operação escolhida foi " + operacao + ", e o resultado é " + (primeiroNumero * segundoNumero))
        break;
    case "divisão": 
        console.log("A operação escolhida foi " + operacao + ", e o resultado é " + (primeiroNumero / segundoNumero))
        break;
    default: 
    console.log("Entrada inválida")
}