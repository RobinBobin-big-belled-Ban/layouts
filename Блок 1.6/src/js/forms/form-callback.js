const call = document.querySelector('.button-call')
const cb_wrapper = document.querySelector('.cb-wrapper')
const close_button = document.querySelector('.cb-form__button-container')


call.addEventListener('click', (event) => {
  cb_wrapper.classList.add('cb-wrapper-on')
})

close_button.addEventListener('click', (event) => {
  cb_wrapper.classList.remove('cb-wrapper-on')
})



window.addEventListener('click', (event) => {
  const { className } = event.target

  if (className.match(/cb-wrapper/)) {
    cb_wrapper.classList.remove('cb-wrapper-on')
  }

  if (className === 'b-button-call') {
    cb_wrapper.classList.add('cb-wrapper-on')
  }
})
