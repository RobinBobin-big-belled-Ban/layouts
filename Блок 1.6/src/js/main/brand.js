import Swiper, { Navigation, Pagination } from 'swiper'

Swiper.use([Navigation, Pagination])

let swiper

const brand_button = document.querySelector(".brand__button")
const slider_wrapper = document.querySelector(".slider-wrapper")

const swiperInit = () => {
  swiper = new Swiper('.brand__init', {
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
  if (window.innerWidth <= 699) {
    if (!swiper) {
      swiperInit()
    }
  } else if (window.innerWidth > 699) {
    if (swiper) {
      swiper.destroy()
      swiper = null
    }

  }
}

window.addEventListener("load", eventsHandler)
window.addEventListener("resize", eventsHandler)

const showmore = () => {
  slider_wrapper.classList.toggle("slider-wrapper--large")
  if (brand_button.textContent === "Показать все") {
    return brand_button.textContent = "Скрыть"
  }
  brand_button.textContent = "Показать все"
}

brand_button.addEventListener("click", showmore)
