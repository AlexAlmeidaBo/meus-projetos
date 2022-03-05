function calcular(tipo, valor){

    if(tipo  === 'acao'){
        if(valor === 'c'){
        document.getElementById('resultado').value = ''
        }

        if(valor === '='){
            var resul = eval(document.getElementById('resultado').value) 
            console.log(document.getElementById('resultado').value = resul)
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('resultado').value += valor
        }

    } else if(tipo === 'valor'){
        console.log(document.getElementById('resultado').value += valor)
    }
    
}

