const featureShow = document.querySelectorAll('.feature-show');

for (let button of featureShow) {
  button.addEventListener("click", function() {
    const showButton = button.classList.contains('-active')
    const hide = document.querySelector(`.-${button.id}`)

    if (showButton) {
      button.classList.remove('-active')
      button.textContent = 'Mostrar'
      hide.style.display = 'none'
    } else {
      button.classList.add('-active')
      hide.style.display = 'block'
      button.textContent = 'Esconder'
    }
  })
}