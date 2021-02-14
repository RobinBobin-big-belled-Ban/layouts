import Swiper, { Navigation, Pagination } from 'swiper'

Swiper.use([Navigation, Pagination])

let swiper

const showMore = document.querySelector(".m-button-show-more")
const navPanel = document.querySelector(".m-nav__container")

const swiperInit = () => {
  swiper = new Swiper('.swiper-container-brands', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: "auto",
    spaceBetween: 16,
    setWrapperSize: true,
    /*loop: true,*/
  });
}

const eventsHandler = () => {
  if (window.innerWidth <= 530) {
    if (!swiper) {
      swiperInit()
    }
  } else if (window.innerWidth > 530) {
    if (swiper) {
      swiper.destroy()
      swiper = null
    }

  }
}

const showHiddenContent = (elem, className, button) => {
  elem.classList.toggle(className)
  elem.classList.contains(className) ?
    button.innerHTML = "Скрыть" :
    button.innerHTML = "Показать все"
}


window.addEventListener("load", eventsHandler)
window.addEventListener("resize", eventsHandler)
showMore.addEventListener("click", () => {
  showHiddenContent(navPanel, "m-nav__container--large", showMore)
})
