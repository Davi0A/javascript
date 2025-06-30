var day = new Date()
var hora = day.getHours()
var horas = hora.toString()
var contHours = document.getElementsByTagName('h3')[0]
var manha = document.getElementById('manha')
var tarde = document.getElementById('tarde')
var noite = document.getElementById('noite')
var madrugada = document.getElementById('madrugada')
console.log(horas)

contHours.innerHTML = `Agora são ${horas} horas`

if ((horas >= "6") && (horas < "12")) {
    document.manha.classList.Add('active')
} 