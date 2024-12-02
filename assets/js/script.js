//Ejercicio 1
const img = document.querySelector('.img')

const cardBorderRedClass = 'card-border-red'

img.addEventListener('click', () => {
    if (img.classList.contains(cardBorderRedClass)) {
        img.classList.remove(cardBorderRedClass)
    } else {
        img.classList.add(cardBorderRedClass)
    }
})

//Ejercicio 2
const input1 = document.querySelector('#input-1')
const input2 = document.querySelector('#input-2')
const input3 = document.querySelector('#input-3')
const mensaje = document.querySelector('.mensaje')

input1.value = 0
input2.value = 0
input3.value = 0

input1.addEventListener('change', () => {
    let stickers = totalStickers()
    if(stickers <= 10) {
        mensaje.innerHTML = 'Llevas ' + stickers + ' stickers'
    } else {
        mensaje.innerHTML = 'Llevas demasiados stickers'
    }
})

input2.addEventListener('change', () => {
    let stickers = totalStickers()
    if(stickers <= 10) {
        mensaje.innerHTML = 'Llevas ' + stickers + ' stickers'
    } else {
        mensaje.innerHTML = 'Llevas demasiados stickers'
    }
})

input3.addEventListener('change', () => {
    let stickers = totalStickers()
    if(stickers <= 10) {
        mensaje.innerHTML = 'Llevas ' + stickers + ' stickers'
    } else {
        mensaje.innerHTML = 'Llevas demasiados stickers'
    }
})

function totalStickers() {
    let sticker1 = parseInt(input1.value) || 0
    let sticker2 = parseInt(input2.value) || 0
    let sticker3 = parseInt(input3.value) || 0

    return sticker1 + sticker2 + sticker3
}