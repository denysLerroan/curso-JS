function verificar() {
    var txtv = window.document.querySelector('input#txtpais').value // .value para converter a String
    var res = window.document.querySelector('div#res')
    res.innerHTML = `<p>Você está em <strong>${txtv}</strong><p>`

    if (txtv == 'Brasil') {
        res.innerHTML += '<p>Você é <strong>Brasileiro!</strong><p>'
    } else {
        res.innerHTML += '<p>Você é <strong>Estrangeiro!</strong><p>'
    }
}