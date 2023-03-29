const ratings = document.querySelectorAll<HTMLDivElement>('.rating')
const ratingsContainer = document.querySelector<HTMLDivElement>('.ratings-container')
const sendBtn = document.getElementById('send') as HTMLButtonElement
const panel = document.getElementById('panel') as HTMLDivElement

let selectedRating: string = 'Satisfied'

//we are using here Event bubbling: https://javascript.info/bubbling-and-capturing

ratingsContainer?.addEventListener('click', (e) => {
    const target = <HTMLElement>(<HTMLElement>e.target).parentNode
    const nextElemSibl = <HTMLElement>(<HTMLElement>e.target).nextElementSibling

    if(target.classList.contains('rating')) {
        removeActive()
        target.classList.add('active')
        selectedRating = nextElemSibl.innerHTML
    }
})

sendBtn?.addEventListener('click', () => {
    panel.innerHTML = `
        <i class="fa-solid fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
    `
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}