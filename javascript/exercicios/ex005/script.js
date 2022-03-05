var objetos = Array('Cadeira','impressora','Garfo')
console.log(objetos)


function adicionar(){
    var objeto = document.getElementById('texto').value
    

    if(objeto != ''){

    if(objetos.indexOf(objeto) !== -1){
        alert('Objeto já foi adicionado')

    } else {
        objetos.push(objeto)
        console.log(objetos)

        document.getElementById('texto').value = ''
    } 
        
    } else {
        alert('Informe um valor valido! ')
    }  
}

function ordenar(){
    objetos.sort()
    
    console.log(objetos)
}






    

   



