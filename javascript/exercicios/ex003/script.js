var num1 = prompt('Digite um número:')
var operacao = prompt('Qual a operação:')
var num2 = prompt('Digite outro número:')

function calc(num1, num2, operacao){
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    var resultado = 0 

    if(operacao == 'soma'){
        resultado = num1 + num2
    }

    if(operacao == 'subtração'){
        resultado = num1 - num2
    }

    if(operacao == 'multiplicação'){
        resultado = num1 * num2
    }

    if(operacao == 'divisão'){
        resultado = num1 / num2 
    }

    return resultado
}
 document.getElementById('calc').innerHTML = calc(num1, num2, operacao)
//document.write('O resultado da operação é: ' + calc(num1, num2, operacao))
