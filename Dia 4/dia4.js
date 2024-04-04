/*
let idade = 44

if(idade >= 18){
    console.log("Pode dirigir")
}else{
    console.log("Ainda não tem idade para dirigir")
}
*/
let estaComFome = prompt("Você está com fome? (sim/não)")
let temDinheiro = prompt("Você tem dinheiro? (sim/não)")
let resturanteAberto = prompt("O restaurante está aberto? (sim/não)")

if(estaComFome === "não" || temDinheiro === "não"){
    console.log("Hoje a janta será em casa")
}else if(estaComFome === "sim" && temDinheiro === "sim" && resturanteAberto === "não"){
    console.log("Peça um delivery!")
}else{
    console.log("Hoje o jantar será no seu restaurante preferido!")
}