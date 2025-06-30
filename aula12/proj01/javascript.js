var day = new Date()
var hora = day.getHours()
var contHours = document.getElementsByTagName('h3')[0]
var manha = document.getElementById('manha')
var tarde = document.getElementById('tarde')
var noite = document.getElementById('noite')
var madrugada = document.getElementById('madrugada')
var erro = document.getElementById('erro')
var fundo = document.getElementsByTagName('section')[0]

contHours.innerHTML = `Agora são ${hora} horas.`

if (hora == 1) {
    madrugada.classList.add('active')
    contHours.innerHTML = `Agora são ${hora} hora`
    fundo.style.background = 'rgb(0, 0, 255)'

} else if ((hora >=0) && (hora < 24)){
    if ((hora >= 6) && (hora < 12)) {
        manha.classList.add('active')
        fundo.style.background = 'rgb(195, 195, 58)'
        
    } else if ((hora >= 12) && (hora < 18)){
        tarde.classList.add('active')
        fundo.style.background = 'rgb(255, 170, 0)'

    } else if ((hora >= 18) && (hora < 24)) {
        noite.classList.add('active')
        fundo.style.background = 'rgb(0, 0, 90)'

    } else {
        madrugada.classList.add('active')
        fundo.style.background = 'rgb(0, 0, 255)'
    }
} else {
    erro.classList.add('active')
    contHours.innerHTML = `Este horário não existe no horário de brasília ou ocorreu um erro.`
}