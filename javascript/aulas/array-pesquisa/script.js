var listaFrutas = []
listaFrutas[0] = 'Banana'
listaFrutas[1] = 'Maça'
listaFrutas[2] = 'Morango'
listaFrutas[3] = 'Uva'
 
var frutas = listaFrutas.indexOf ('Morango')

if(frutas  === -1){
    console.log('Elemento não existe')
} else {
    console.log('Elemento existe é esta na posição: ' + 
    frutas)
}