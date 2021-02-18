const button_chats = document.querySelectorAll('.button-chat')
const fb_wrapper = document.querySelector('.fb-wrapper')
const button_closes = document.querySelectorAll('.button-close')
const content_container = document.querySelector('.content-container')



for (let button_chat of button_chats) {
  button_chat.addEventListener('click', () => {
    content_container.prepend(fb_wrapper)
    fb_wrapper.classList.toggle('fb-wrapper-on')
  })
}

for (let button_close of button_closes) {
  button_close.addEventListener('click', () => {
    content_container.prepend(fb_wrapper)
    fb_wrapper.classList.remove('fb-wrapper-on')
  })
}

window.addEventListener('click', (event) => {
  const { className } = event.target

  if (className.match(/fb-wrapper/)) {
    fb_wrapper.classList.remove('fb-wrapper-on')
  }
})
