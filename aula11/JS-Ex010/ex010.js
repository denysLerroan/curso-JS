var txtv = document.querySelector('input#txtvel')
var res = document.querySelector('div.res')

function calcular() {
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de ${vel}km/h</p>`
    res.innerHTML += '<p>Dirija sempre usando o cinto de segurança.</p>'

    if (vel > 60) {
        res.innerHTML += 'Você ultrapassou o limite máximo de velocidade permitida. MULTADO!'

    }
}