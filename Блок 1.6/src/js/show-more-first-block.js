const showMore = document.querySelector(".button-show-more")
const panel = document.querySelector(".content")

const showHiddenContent = (elem, className, button) => {
  elem.classList.toggle(className)
  elem.classList.contains(className) ?
    button.innerHTML = "Скрыть" :
    button.innerHTML = "Показать все"
}

showMore.addEventListener("click", () => {
  showHiddenContent(panel, "m-nav__container--large", showMore)
})
