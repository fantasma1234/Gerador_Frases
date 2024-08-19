let cod = document.querySelector(".cod")
let frase = document.querySelector(".frase")
let botao = document.querySelector(".btn")

const url = "https://api.adviceslip.com/advice"

async function getAdvice() {
    const res = await fetch(url)
    const {slip: {id, advice}} = await res.json()
    cod.innerText = id
    frase.innerText = advice

}

getAdvice()

botao.addEventListener("click", getAdvice)