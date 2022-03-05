var listaFrutas = Array()

listaFrutas[0] = 'Maça'
listaFrutas[1] = 'Uva'
listaFrutas[2] = 'Banana'
listaFrutas[3] = 'Morango'
listaFrutas.sort()
console.log(listaFrutas)



listaNumeros = parseFloat(listaNumeros)
var listaNumeros = []

listaNumeros[0] = 1
listaNumeros[1] = 10
listaNumeros[2] = 2
listaNumeros[3] = 4
listaNumeros[4] = 3
listaNumeros[5] = 20
listaNumeros[6] = 5
listaNumeros[7] = 3.5

console.log(listaNumeros.sort(ordenarNumeros))

function ordenarNumeros(a, b){
    return a - b
}