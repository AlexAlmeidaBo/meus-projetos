//var data = new Date()

//document.write (data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear())

var data1 = new Date(2022, 1, 4)
var data2 = new Date(2022, 2, 30)

document.write(data1.toString())
document.write('<br><hr/>')
document.write(data2.toString())
document.write('<br><hr/>')


//converter datas para algo que possamos calcular
document.write(data1.getTime())
document.write('<hr/>')
document.write(data2.getTime())
document.write('<br><hr/>')


//encontrar a quantidade de milissegundos entre data1 e data2
var milissegundosEntreDatas = Math.abs(data1.getTime() - data2.getTime())
var milissegundosDia = (1*24*60*60*1000)
document.write(milissegundosEntreDatas)
document.write('<br><hr/>')


//1 dia tem 24 hora,
//cada hora tem 60 minutos
//cada minuto tem 60 segundos,
//cada segundo tem 1000 milissegundos
//quantos milissegundos tem um dia 

document.write('1 dia tem: ' + milissegundosDia + ' Milissegundos!')
document.write('<br><hr/>')
document.write('A diferença entre data 1 e data 2 é: ' + milissegundosEntreDatas / milissegundosDia + ' dias')
