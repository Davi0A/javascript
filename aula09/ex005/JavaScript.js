var button = document.getElementsByClassName('botao')[0]
button.addEventListener('click', clicar)

var corpo = document.getElementsByTagName('body') [0]
var artigo = document.getElementsByClassName('artigo')[0]

function clicar() {
    button.classList.toggle('active')
    button.classList.contains('active') ? button.innerText = 'Não saiba mais' : button.innerText = 'Saiba Mais'

    corpo.classList.toggle('active')
    artigo.classList.toggle('active')
}