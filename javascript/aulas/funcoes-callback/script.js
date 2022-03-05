function exibirArtigo(id, callbackSucesso, callbackError) {
    //logica: recuperar  os id via requisição http

    if (false) {
        callbackSucesso('Função de callback em JS' , 'Funções de callback');
    } else {
        callbackError('erro ao recuperar dados')
    }
} 

var callbackSucesso = function(titulo,descricao){
    document.write('<h1>' + titulo + '</h1>')
    document.write('<hr />')
    document.write('<p>' + descricao + '</p>')
}

var callbackError = function (erro){
    document.write('<p> Erro: ' + erro + '</p>')
}

exibirArtigo(1, callbackSucesso, callbackError)