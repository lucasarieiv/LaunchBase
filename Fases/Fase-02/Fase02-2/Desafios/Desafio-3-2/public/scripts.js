const modalOverlay = document.querySelector('.modalOverlay')
const iframe = modalOverlay.querySelector('iframe')
const modal = modalOverlay.querySelector('.modal')
const cards = document.querySelectorAll('.card');

const btnClose = document.querySelector('.close');
const btnsFullScreen = modalOverlay.querySelectorAll('.fullscreen')

for (let card of cards) {
  card.addEventListener("click", (cardSelect)=> {
    modalOverlay.classList.add('-active')
    const pathUrl = card.getAttribute('id')
    iframe.src = `https://rocketseat.com.br/${pathUrl}`
  })
}

for (let button of btnsFullScreen) {
  button.addEventListener("click", ()=> {
    btnsFullScreen.forEach(btn => {
      btn.classList.toggle('-active')
    })
    modal.classList.toggle('-max')
  })
}

btnClose.addEventListener("click", ()=> {
  modalOverlay.classList.remove('-active')
  modal.classList.remove('-max')
  iframe.src = ""
})
