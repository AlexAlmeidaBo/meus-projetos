/*
//true && true && false= false
if  (2 == 2 && 3 >= 1 && 'a' == 'b'){
    document.write('Verdadeiro')

}   else{
    document.write('Falso')
}
*/



var nota = prompt('Digite a nota do aluno')
var faltas = prompt ('Digite a quantidade de faltas:')
var media =  7
var faltasMaximas = 15

/*
if (nota >= media && faltas <= faltasMaximas){
    document.write('O aluno esta aprovado!')
} else {
    document.write('O aluno esta reprovado')
}
*/

var resultado = (nota >= media && faltas <= faltasMaximas) ? 'Aprovado' : 'Reprovado'
document.write(resultado)