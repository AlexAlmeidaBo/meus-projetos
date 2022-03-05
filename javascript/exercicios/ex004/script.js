
function modificarBackground(){
    document.getElementById('texto').className = 'cor'
}
 
function voltarBackground(){
    var valorCampo = document.getElementById('texto').value
    
    if(valorCampo.length < 6){
        document.getElementById('texto').style.background = 'red'

    } else {
        document.getElementById('texto').style.background = 'green'
    }


}

