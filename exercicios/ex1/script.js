//var dataAtual = new Date();
//var hora = dataAtual.getHours();

function carregar() {

    var hora = 00

    var imagem = document.getElementById('img')

    if (hora > 12 && hora < 19) {
        imagem.src = "imagens/tarde.jpg"
    } else if (hora > 18 && hora < 24) {
        imagem.src = "imagens/noite.jpeg"
    }
   }
