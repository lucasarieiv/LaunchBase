const cards = document.querySelectorAll('.card')
const modalOverlay = document.querySelector('.modalOverlay');
const modal = modalOverlay.querySelector('.modal')
const close = modal.querySelector('.close')

for (let card of cards) {
  card.addEventListener("click", element => {
    const image = element.target.getAttribute('src')
    const title = card.children[1].innerText
    const author = card.children[2].innerText
    
    modalOverlay.classList.add('-active')
    modal.querySelector('.title').innerText = title
    modal.querySelector('.author').innerText = author

    modal.querySelector('.image').style.backgroundImage = `url(${image})`
  })
}

close.addEventListener("click", ()=> {
  modalOverlay.classList.remove('-active')
})


