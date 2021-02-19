const button_burger = document.querySelector('.button-burger')
const aside = document.querySelector('.aside')
const content_container = document.querySelector('.content-container')
const button_close = document.querySelector('.button-close')
const aside_nav = document.querySelector('.aside__nav')
const body = document.body;


button_burger.addEventListener('click', () => {
  const wrap_aside = document.createElement('div')
  wrap_aside.classList.toggle('wrap-aside')

  content_container.prepend(wrap_aside)

  aside.classList.add('transform')

  // transform не работает, если его применять 
  //в том же классе или одновременно с темже классом.
  //Поэтому ты, Дмитрий, сделал задержку, чтобы создался эффект клика или вызова transform
  setTimeout(() => aside.classList.add('tratslate-to-left'), 200)


  button_close.style.display = 'block'

  const { innerWidth } = window
  if (innerWidth <= 320) {
    aside_nav.style.minHeight = '420px'
  }

  if (innerWidth > 360) {
    aside_nav.style.minHeight = ''
  }

  //Удаляю прокрутку при нажатии на вызове всплывающего меню Burger
  body.style.overflow = 'hidden'
})


window.addEventListener('click', (event) => {
  const { className } = event.target

  if (className === 'wrap-aside' || className === 'aside__burger button-close') {
    const wrap_aside = document.querySelector('.wrap-aside')
    wrap_aside.remove()
    get_back()
  }
})


function get_back() {

  aside.classList.remove('transform')
  aside.classList.remove('tratslate-to-left')

  //возвращаю прокрутку
  body.style.overflow = ''


  button_close.style.display = ''
}
