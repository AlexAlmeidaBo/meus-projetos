var num1 = prompt('Digite um número:')
var num2 = prompt('Digite outro número:')

num1 = parseInt(num1)
num2 = parseInt(num2)
/*
document.write('A soma dos valores ' + num1 + ' e '  + num2 + ' é: ' + (num1 + num2) + '<br />')
document.write('A subtração dos valores ' + num1 + ' e '  + num2 + ' é: ' + (num1 - num2) + '<br />')
document.write('A multiplicação dos valores ' + num1 + ' e '  + num2 + ' é: ' + (num1 * num2) + '<br />')
document.write('A divisão dos valores ' + num1 + ' e '  + num2 + ' é: ' + (num1 / num2) + '<br />')
document.write('O módulo dos valores ' + num1 + ' e '  + num2 + ' é: ' + (num1 % num2) + '<br />')
document.write('O incremento do valor ' + num1 + ' e: ' + (++num1) + '<br />')
document.write(num1 + '<br />') 
document.write('O decremento do valor ' + num1 + ' e: ' + (num1--) + '<br />')
document.write(num1 + '<br />') 
*/

var resultado = (num1 += num2) 
document.write('O resultado é:' +  resultado)

