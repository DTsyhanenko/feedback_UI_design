"use strict";
const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.getElementById('send');
const panel = document.getElementById('panel');
let selectedRating = 'Satisfied';
//we are using here Event bubbling: https://javascript.info/bubbling-and-capturing
ratingsContainer === null || ratingsContainer === void 0 ? void 0 : ratingsContainer.addEventListener('click', (e) => {
    const target = e.target.parentNode;
    const nextElemSibl = e.target.nextElementSibling;
    if (target.classList.contains('rating')) {
        removeActive();
        target.classList.add('active');
        selectedRating = nextElemSibl.innerHTML;
    }
});
sendBtn === null || sendBtn === void 0 ? void 0 : sendBtn.addEventListener('click', () => {
    panel.innerHTML = `
        <i class="fa-solid fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
    `;
});
function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active');
    }
}
//# sourceMappingURL=index.js.map