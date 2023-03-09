document.addEventListener('DOMContentLoaded', () => {
  // Управление menu

  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.nav')

  const closeMenu = () => {
    burger.classList.remove('active')
    menu.classList.remove('active')
  }
  const openMenu = () => {
    burger.classList.add('active')
    menu.classList.add('active')
  }

  burger.addEventListener('click', () => {
    if (burger.classList.contains('active')) {
      closeMenu()
    } else {
      openMenu()
    }
  })

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.burger')) {
      closeMenu()
    }
  })

  // Навигация

  const navLinks = document.querySelectorAll('.nav > ul > li > a')

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetBlock = link.href.split('#')[1].replace('#', '')
      document
        .querySelector(`.${targetBlock}`)
        .scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })

  // Аккордеоны программы

  const programmTitles = document.querySelectorAll('.programm-item-title')

  programmTitles.forEach((title) => {
    title.addEventListener('click', () => {
      title.closest('.programm-item').classList.toggle('active')
    })
  })

  // Слайдер локации

  const prevArrow = document.querySelector('.prev-arrow')
  const nextArrow = document.querySelector('.next-arrow')

  $('.location-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })

  // Управление блоками вариантов проживания

  const showDetailsLink = document.querySelectorAll(
    '.option-mobile-detailed-link'
  )
  const hideDetailsLink = document.querySelectorAll('.option-mobile-close-link')

  showDetailsLink.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      e.target.closest('.option-details').classList.add('show')
    })
  })
  hideDetailsLink.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      e.target.closest('.option-details').classList.remove('show')
    })
  })
})
