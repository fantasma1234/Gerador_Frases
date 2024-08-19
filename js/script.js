let cod = document.querySelector(".cod")
let frase = document.querySelector(".frase.En")
let frasePt = document.querySelector(".frase.Pt")
let botao = document.querySelector(".btn")

const url = "https://api.adviceslip.com/advice"

async function getAdvice() {
    const res = await fetch(url)
    const {slip: {id, advice}} = await res.json()
    cod.innerText = id
    frase.innerText = advice
    frase.value = advice
    traduzir()
}

async function traduzir() {
    await fetch (
        `https://api.mymemory.translated.net/get?q=${frase.value}&langpair=en|pt-BR`
    ).then((res) => res.json())
    .then((data) => {frasePt.innerText = data.responseData.translatedText})
}

getAdvice()

botao.addEventListener("click", getAdvice)