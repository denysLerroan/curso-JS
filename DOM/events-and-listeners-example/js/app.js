function somar() {
    //Selecionando o primeiro numero para o calculo
    var tn1 = window.document.getElementById('txtn1') // JS Puro

    //Selecionando o segundo numero para o calculo
    var tn2 = window.document.querySelector('input#txtn2') // Forma ES6

    // Variavel que recebe o resultado do calculo
    var res = window.document.getElementById('res') // Forma ES6

    // Converção de String para Number
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)

    var s = n1 + n2 //Soma

    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
}