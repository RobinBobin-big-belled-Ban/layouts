import Swiper, { Navigation, Pagination } from 'swiper'

Swiper.use([Navigation, Pagination])

let swiper

const swiperInit = () => {
  swiper = new Swiper('.price__init', {
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
