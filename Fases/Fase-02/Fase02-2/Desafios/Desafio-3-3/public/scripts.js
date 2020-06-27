const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener("click", (cardSelect)=> {
    const pathUrl = card.getAttribute('id')
    window.location.href = `/courses/${pathUrl}`
  })
}