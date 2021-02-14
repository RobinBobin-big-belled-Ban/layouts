const text_array = [
  'Ремонт техники',
  'Услуги и сервисы',
  'Корпоративным клиентам',
  'Продавцам техники',
  'Партнерам',
  'Производителям',
  'Наши сервисные центры'
]

const langs = [
  'ru',
  'en',
  'ch'
]

const right_content = document.querySelector('.right-content')

/*const targetElement = (clas) => {
  let value = document.querySelector(clas)
  return value
}

const elementCreater = (elemName, type, className, target) => {
  elemName = document.createElement(type)
  elemName.classList.add(className)
  target.append(elemName)
}

*/

const burger_container = () => {

  //elementCreater('vvvv', 'div', 'cccccccc', targetElement('.right-content'))

  let b_container = document.createElement('div')
  b_container.classList.add('b-container')
  //console.log(right_content)
  right_content.append(b_container)

  //header start
  let b_header = document.createElement('div')
  b_header.classList.add('b-header')
  b_container.append(b_header)

  //burger-x start
  let b_header_burger_x_container = document.createElement('div')
  b_header_burger_x_container.classList.add('b-header__burger-x-container')
  b_header.append(b_header_burger_x_container)

  let b_button_burger_x = document.createElement('button')
  b_button_burger_x.classList.add('b-button-burger-x')
  b_header_burger_x_container.append(b_button_burger_x)
  //burger-x end

  //group start
  let b_header_group_container = document.createElement('div')
  b_header_group_container.classList.add('b-header__group-container')
  b_header.append(b_header_group_container)

  let b_link_group = document.createElement('a')
  b_link_group.classList.add('b-link-group')
  b_header_group_container.append(b_link_group)
  //group end

  //group start
  let b_header_search_container = document.createElement('div')
  b_header_search_container.classList.add('b-header__search-container')
  b_header.append(b_header_search_container)

  let b_button_search = document.createElement('button')
  b_button_search.classList.add('b-button-search')
  b_header_search_container.append(b_button_search)
  //group end

  //header end

  //NAV START
  //nav start
  let b_nav = document.createElement('nav')
  b_nav.classList.add('b-nav')
  b_container.append(b_nav)

  //ul start
  let b_nav_wrapper = document.createElement('ul')
  b_nav_wrapper.classList.add('b-nav__wrapper')
  b_nav.append(b_nav_wrapper)

  for (let i = 0; i < text_array.length; i++) {
    let b_nav_link = document.createElement('li')
    let b_nav_text = document.createElement('a')
    b_nav_link.classList.add('b-nav__link')
    b_nav_text.classList.add('b-nav__text')
    b_nav_text.href = '#'
    b_nav_text.textContent = text_array[i]
    b_nav_wrapper.append(b_nav_link)
    b_nav_link.append(b_nav_text)
  }
  //ul end

  //nav end

  //NAV END

  //FOOTER START
  //footer start
  let b_footer = document.createElement('footer')
  b_footer.classList.add('b-footer')
  b_container.append(b_footer)

  //b_footer_icons start
  let b_footer_icons = document.createElement('div')
  b_footer_icons.classList.add('b-footer__icons')
  b_footer.append(b_footer_icons)

  let b_button_call = document.createElement('button')
  b_button_call.classList.add('b-button-call')
  b_footer_icons.append(b_button_call)

  let b_button_chat = document.createElement('button')
  b_button_chat.classList.add('b-button-chat')
  b_footer_icons.append(b_button_chat)

  let b_button_profile = document.createElement('button')
  b_button_profile.classList.add('b-button-profile')
  b_footer_icons.append(b_button_profile)
  //b_footer_icons end

  //b-footer__mail start
  let b_footer_mail = document.createElement('a')
  b_footer_mail.classList.add('b-footer__mail')
  b_footer_mail.textContent = 'mail@cps.com'
  b_footer_mail.href = 'mailto:mail@cps.com'
  b_footer.append(b_footer_mail)
  //b-footer__mail end

  //b_footer_phone start
  let b_footer_phone = document.createElement('a')
  b_footer_phone.classList.add('b-footer__phone')
  b_footer_phone.textContent = '8 800 890 8900'
  b_footer_phone.href = 'tel:88008908900'
  b_footer.append(b_footer_phone)
  //b_footer_phone end


  //b-footer__lang-container start
  let b_footer_lang_container = document.createElement('div')
  b_footer_lang_container.classList.add('b-footer__lang-container')
  b_footer.append(b_footer_lang_container)

  for (let i = 0; i < langs.length; i++) {
    let b_footer_lang = document.createElement('a')
    b_footer_lang.classList.add('b-footer__lang')
    b_footer_lang.textContent = langs[i]
    b_footer_lang_container.append(b_footer_lang)
  }

  //b-footer__lang-container end
  //footer end

  //FOOTER END


}



let burger = document.querySelector('.button-burger')
burger.addEventListener('click', burger_container
  /*function() {
  alert("asda")
}*/

)
