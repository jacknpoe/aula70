const tNumericas = [...window.document.getElementsByClassName("num")]
const tOperacoes = [...window.document.getElementsByClassName("op")]
const tResultado = window.document.querySelector(".res");
const display = window.document.querySelector(".odisplay")
const tCopiar = window.document.getElementById("tCopiar")
const tLimpar = window.document.getElementById("tLimpar")
const calcAba = window.document.getElementById("calcAba")
const calc = window.document.getElementById("calc")
const tPotencia = window.document.getElementById("tPotencia")
const tRaiz = window.document.getElementById("tRaiz")
const tBackSpace = window.document.getElementById("tBackSpace")

let sinal = false
let ponto = false
let resultado = false

tNumericas.forEach((el) => {
    el.addEventListener("click", (evt) => {
        if(resultado) display.innerHTML = ""
        if(evt.target.innerHTML == ","){
            if(!ponto){
                display.innerHTML += "."
                ponto = true
                resultado = false
            }
        } else {
            if(display.innerHTML=="0") display.innerHTML = ""
            display.innerHTML += evt.target.innerHTML
            ponto = false
            resultado = false
        }
        sinal = false
    })
})

tOperacoes.forEach((el) => {
    el.addEventListener("click", (evt) => {
        if(!sinal){
            if(display.innerHTML=="0" || resultado) display.innerHTML = ""
            if(evt.target.innerHTML == "×"){
                display.innerHTML += "*"    
            } else if(evt.target.innerHTML == "÷"){
                display.innerHTML += "/"
            } else {
                display.innerHTML += evt.target.innerHTML
            }
            sinal = true
            ponto = false
            resultado = false
        }
    })
})

tLimpar.addEventListener("click", (evt) => {
    display.innerHTML = "0"
    sinal = false
    ponto = false
})

tCopiar.addEventListener("click", (evt => {
    navigator.clipboard.writeText(display.innerHTML)
}))

tResultado.addEventListener("click", (evt) => {
    try{
        display.innerHTML = eval(display.innerHTML)
        sinal = false
        ponto = false
        resultado = true
    } catch(error){
        alert("Erro!")
        // display.innerHTML = "0"
    }
})

calcAba.addEventListener("click", (evt) => {
    calc.classList.toggle("calcExibir")
    calcAba.innerHTML= calc.classList.contains("calcExibir")?"<":">"
})

// EXTRAS
tPotencia.addEventListener("click", (evt) => {
    if(!resultado && display.innerHTML != "0" && !sinal){
        display.innerHTML += "**"
        sinal = true
        ponto = false
    }
})

tRaiz.addEventListener("click", (evt) => {
    if(!resultado && display.innerHTML != "0" && !sinal){
        display.innerHTML += "**0.5"
        ponto = false
    }
})

tBackSpace.addEventListener("click", (evt) => {
    if(resultado){
        display.innerHTML = ""
        resultado = false
    } else{
        sinal = false
        ponto = false
        let tamanho = display.innerHTML.length
        display.innerHTML = display.innerHTML.substring(0, tamanho - 1)
    }
})