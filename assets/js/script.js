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