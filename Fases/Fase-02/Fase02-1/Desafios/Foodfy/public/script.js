const cards = document.querySelectorAll('.card')

for (let card of cards) {
  card.addEventListener("click", cardSelected => {

    const id = card.id
    window.location.href = `/receita/${id}`
  })
}


