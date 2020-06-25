const modalOverlay = document.querySelector('.modalOverlay')
const iframe = modalOverlay.querySelector('iframe')
const modal = modalOverlay.querySelector('.modal')
const cards = document.querySelectorAll('.card');

const btnClose = document.querySelector('.close');
const btnMax = document.querySelector('.fullscreen.max')
const btnMin = document.querySelector('.fullscreen.min')

for (let card of cards) {
  card.addEventListener("click", (cardSelect)=> {
    modalOverlay.classList.add('-active')
    const pathUrl = card.getAttribute('id')
    iframe.src = `https://rocketseat.com.br/${pathUrl}`
  })
}

btnMin.addEventListener("click", ()=> {
  btnMax.classList.add('-active')
  btnMin.classList.remove('-active')
  modal.classList.add('-max')
})

btnMax.addEventListener("click", ()=> {
  btnMax.classList.remove('-active')
  btnMin.classList.add('-active')
  modal.classList.remove('-max')
})


btnClose.addEventListener("click", ()=> {
  modalOverlay.classList.remove('-active')
  modal.classList.remove('-max')
  btnMax.classList.remove('-active')
  btnMin.classList.add('-active')
  iframe.src = ""
})
