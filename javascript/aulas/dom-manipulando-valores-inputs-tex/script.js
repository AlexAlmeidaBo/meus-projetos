function distribuiCaracter(){
    //selecionar o valor digitado
    var caracter = document.getElementById('entrada').value
    //limpar campo de digitação
    document.getElementById('entrada').value = ''
    console.log(caracter)

    //limpar espaços em brancos nas extremidades das strings
    caracter.trim()

    switch(caracter){
       
        case '0':
        case '1': 
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':

        //adicionar o caracter no campo referente a numeros 
        document.getElementById('apenas-numeros').value += caracter
        break;
        
        default:
        //adicionar o carecter no campo referente a letras
        document.getElementById('apenas-letras').value += caracter
        
    }
}



