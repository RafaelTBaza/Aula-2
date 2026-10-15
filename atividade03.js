// Escreva um programa que leia o salário de um funcionário e aplique um aumento de acordo com a seguinte regra: salários menores que R$1000 recebem 20% de aumento
//entre R$1000 e R$2000 recebem 15%,
//e acima de R$2000 recebem 10%.

var salario = 2100
var aumento1 = 0.20
var aumento2 = 0.15
var aumento3 = 0.10

if (salario <= 1000){
    console.log(
        "seu salario novo é " + (salario + (salario * aumento1) )
    )
}

if (salario > 1000){
    if (salario <= 2000)
    console.log(
        "seu salario novo é " + (salario + (salario * aumento2) )
    )
}

if (salario > 2000){
    console.log(
        "seu salario novo é " + (salario + (salario * aumento3) )
    )
}