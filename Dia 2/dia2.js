let nome = prompt("Digite seu nome: ")
let idade = parseInt(prompt("Digite sua idade"))
let altura = Number(prompt("Digite sua altura"))
let peso = Number(prompt("Digite seu peso"))
let anoAtual = parseInt(2023)
let anoNascimento = anoAtual - idade
let imc = peso / (altura * altura)

console.log("Olá " + nome + ", você tem " + idade + " anos. nasceu em " + anoNascimento + ", tem " + altura +
" de altura, pesa " + peso + "kg e seu IMC é " + imc + "kg/m2")
