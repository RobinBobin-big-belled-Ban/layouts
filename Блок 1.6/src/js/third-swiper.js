import Swiper, { Navigation, Pagination } from 'swiper'

Swiper.use([Navigation, Pagination])

let secondSwiper

/*const showMore = document.querySelector(".m-button-show-more")
const navPanel = document.querySelector(".m-nav__container")*/



const secondSwiperInit = () => {
  secondSwiper = new Swiper('.swiper-container-third', {
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

const events2Handler = () => {
  if (window.innerWidth < 530) {
    if (!secondSwiper) {
      secondSwiperInit()
    }
  } else if (window.innerWidth >= 530) {
    if (secondSwiper) {
      secondSwiper.destroy()
      secondSwiper = null
    }

  }
}

/*const showHiddenContent = (elem, className, button) => {
  elem.classList.toggle(className)
  elem.classList.contains(className) ?
    button.innerHTML = "Скрыть" :
    button.innerHTML = "Показать все"
}*/


window.addEventListener("load", events2Handler)
window.addEventListener("resize", events2Handler)
/*showMore.addEventListener("click", () => {
  showHiddenContent(navPanel, "m-nav__container--large", showMore)
})*/
