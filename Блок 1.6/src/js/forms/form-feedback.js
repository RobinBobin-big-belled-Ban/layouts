const chat = document.querySelector('.button-chat')
const fb_wrapper = document.querySelector('.fb-wrapper')
const close_button = document.querySelector('.fb-form__button-container')


chat.addEventListener('click', (event) => {
  fb_wrapper.classList.add('fb-wrapper-on')
})

close_button.addEventListener('click', (event) => {
  fb_wrapper.classList.remove('fb-wrapper-on')
})



window.addEventListener('click', (event) => {
  const { className } = event.target

  if (className.match(/fb-wrapper/)) {
    fb_wrapper.classList.remove('fb-wrapper-on')
  }

  if (className === 'b-button-chat') {
    fb_wrapper.classList.add('fb-wrapper-on')
  }
})
