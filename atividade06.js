// Faça um programa que leia o nome de um aluno e suas três notas, calcule a média e informe se ele está aprovado (média maior ou igual a 7) ou reprovado.

var nomeAluno = "rafael" 
var nota1 = 10
var nota2 = 5
var nota3 = 7

media (( nota1 + nota2 + nota3) / 3)

if ( media >= 7){
    console.log ( nomeAluno + " esta aprovado")
}else {
    console.log ( nomeAluno + " esta reprovado")
}