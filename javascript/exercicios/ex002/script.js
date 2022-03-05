var nome = prompt('Digite seu nome:')
var altura = prompt('Digite sua altura:')
var peso = prompt ('Digite seu peso')


altura = parseFloat(altura)
peso = parseFloat(peso)


altura = altura / 100
massa = peso / (altura * altura)
massa = massa.toFixed(2)



if (massa < 16) {
   alert(nome + ' possui índice de massa corporal igual a ' + (massa) + ' Baixo peso muito grave ')
}

if (massa >= 16 && massa < 16.99) {
    alert( nome + ' possui índice de massa corporal igual a ' + (massa) +  ' Baixo peso grave ')
 }

 if (massa >= 17 && massa < 18.49) {
    alert(nome + ' possui índice de massa corporal igual a ' + (massa) +  ' Baixo peso ')
 }

 if (massa >= 18.50 && massa < 24.99) {
    alert(nome + ' possui índice de massa corporal igual a ' + (massa) +  ' Peso normal ')
 }

 if (massa >= 25 && massa < 29.99) {
    alert(nome + ' possui índice de massa corporal igual a ' + (massa) +  ' Sobrepeso ')
 }

 if (massa >= 30 && massa < 34.99) {
    alert(nome + ' possui índice de massa corporal igual a ' + (massa) +  ' Obesidade Grau I ')
 }

 if (massa >= 35 && massa < 39.99) {
    alert(nome + ' possui índice de massa corporal igual a ' + (massa) +  ' Obesidade grau II ')
 }

 if (massa >= 40) {
    alert(nome + ' possui índice de massa corporal igual a ' + (massa) +  ' Obesidade grau III ')
 }