window.addEventListener('DOMContentLoaded', () => {
  // Modal
  const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]')

  function modalOpen() {
    modal.classList.toggle('show')
    document.body.style.overflow = 'hidden'
    clearInterval(modalTimerId)
  }

  modalTrigger.forEach((btn) => {
    btn.addEventListener('click', () => {
      modalOpen()
    })
  })

// функция для закрытия окна
  function modalClose() {
    modal.classList.toggle('show')
    document.body.style.overflow = ''
  }
  modalCloseBtn.addEventListener('click', modalClose)

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modalClose()
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      modalClose()
    }
  })
// таймер появления окна
  // const modalTimerId = setTimeout(modalOpen, 5000)
  // окно появиться когда дойдет до конца страницы
  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      modalOpen()
      window.removeEventListener('scroll', showModalByScroll) // окно больше не появиться
    }
  }

  window.addEventListener('scroll', showModalByScroll)

})


  // modalTrigger.addEventListener('click', () => {
  //   // modal.classList.add('show')
  //   // modal.classList.remove('hide')
  //   modal.classList.toggle('show')
  //   document.body.style.overflow = 'hidden'
  // })

  // modalCloseBtn.addEventListener('click', () => {
  //   // modal.classList.add('hide')
  //   // modal.classList.remove('show')
  //   modal.classList.toggle('show')
  //   document.body.style.overflow = ''
  // })

  // modal.addEventListener('click', (e) => {
  //   if (e.target === modal) {
  //     modalClose()
  //     // modal.classList.toggle('show')
  //     // document.body.style.overflow = ''
  //   }
  // })

