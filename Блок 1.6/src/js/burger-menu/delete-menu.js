const deleteButton = document.querySelector('.b-button-burger-x')


window.addEventListener('click', (event) => {
  let { className } = event.target
  const burgerCont = document.querySelector('.b-container')
  if (className === 'b-button-burger-x') {
    deleter('.b-container')
  } else if (className === 'b-cont') {
    deleter('.b-container')
  } else if (burgerCont) {
    if (className !== 'button-burger') {
      if (!className.match(/b-/)) {
        deleter('.b-container')
      }
    }
  }
})

function deleter(name) {
  let container = document.querySelector(name)
  container.remove()
}
