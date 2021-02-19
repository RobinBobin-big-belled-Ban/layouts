const button_calls = document.querySelectorAll('.button-call')
const cb_wrapper = document.querySelector('.cb-wrapper')
const button_closes = document.querySelectorAll('.button-close')
const content_container = document.querySelector('.content-container')
const body = document.body;

for (let button_call of button_calls) {
  button_call.addEventListener('click', () => {
    content_container.prepend(cb_wrapper)
    cb_wrapper.classList.toggle('cb-wrapper-on')

    //Прокручивает страницу в самый верх 
    window.scrollTo(0, 0)

    //Удаляю прокрутку при нажатии на вызове всплывающего меню Burger
    body.style.overflow = 'hidden'
  })
}

for (let button_close of button_closes) {
  button_close.addEventListener('click', () => {
    content_container.prepend(cb_wrapper)
    cb_wrapper.classList.remove('cb-wrapper-on')

    //возвращаю прокрутку
    body.style.overflow = ''
  })
}

window.addEventListener('click', (event) => {
  const { className } = event.target

  if (className.match(/cb-wrapper/)) {
    cb_wrapper.classList.remove('cb-wrapper-on')

    //возвращаю прокрутку
    body.style.overflow = ''
  }
})
