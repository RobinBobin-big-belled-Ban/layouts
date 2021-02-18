const read_more = document.querySelector('.read-more')
const paragraph = document.querySelector('.paragraph-two')

read_more.addEventListener('click', show)

function show(event) {
  for (let item of paragraph.children) {
    item.style.display = "inline"
    read_more.textContent = 'Скрыть'
    read_more.removeEventListener('click', show)
    read_more.addEventListener('click', hide)
  }
}

function hide(event) {
  for (let item of paragraph.children) {
    item.style.display = ""
    read_more.textContent = "Читать далее"
    read_more.removeEventListener('click', hide)
    read_more.addEventListener('click', show)
  }
}
