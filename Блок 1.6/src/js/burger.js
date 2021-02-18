const button_burger = document.querySelector('.button-burger')
const aside = document.querySelector('.aside')
const content_container = document.querySelector('.content-container')
const button_close = document.querySelector('.button-close')
const aside_nav = document.querySelector('.aside__nav')


button_burger.addEventListener('click', () => {
  const wrap_aside = document.createElement('div')
  wrap_aside.classList.toggle('wrap-aside')
  //wrap_aside.setAttribute('style', styles)
  //content_container.prepend(wrap_aside)
  content_container.prepend(wrap_aside)
  /*wrap_aside.prepend(aside)*/
  aside.style.display = "block"
  //aside.style.flexDirection = "column"
  aside.style.position = 'absolute'
  aside.style.zIndex = 50
  aside.style.left = 0
  aside.style.top = 0
  aside.style.width = '100%'
  aside.style.minWidth = '320px'
  aside.style.maxWidth = '360px'
  aside.style.boxShadow = '16px 0px 52px rgba(14, 24, 80, 0.2)'
  aside.style.backgroundColor = '#fff'


  button_close.style.display = 'block'

  const { innerWidth } = window
  if (innerWidth <= 320) {
    aside_nav.style.minHeight = '420px'
  }

  if (innerWidth > 360) {
    aside_nav.style.minHeight = ''
  }
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
  aside.style.display = ''
  aside.style.position = ''
  aside.style.zIndex = ''
  aside.style.left = ''
  aside.style.top = ''
  aside.style.width = ''
  aside.style.minWidth = ''
  aside.style.maxWidth = ''
  aside.style.boxShadow = ''
  aside.style.backgroundColor = ''


  button_close.style.display = ''
}
