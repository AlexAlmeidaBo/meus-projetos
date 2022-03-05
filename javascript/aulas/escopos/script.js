//escopo GLobal
var serie = 'Friends'

//scopo de bloco
if (true){
    var serie2 = "game of thrones"
    document.write(serie)
    document.write(serie2)
}

document.write('<br />')

//escopo de função
function x(){
    var serie3 = "the walking dead"
    document.write(serie)
    document.write(serie2)  
}

x()
