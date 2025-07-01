let img = ['espermatozoide', 'bebe.m', 'bebe.f', 'crianca.m', 'crianca.f', 'adolescente.m', 'adolescente,f', 'adulto.m', 'adulto.f', 'velho.m', 'velho.f', 'morto']
let texto = document.getElementById("texto")
let day = new Date()
let year = day.getFullYear()
let valueNasc = document.getElementById('nascimento').value
let button = document.getElementById("button")
button.addEventListener('click', clicar)


function clicar() {
    texto.innerHTML = `${valueNasc}`
}