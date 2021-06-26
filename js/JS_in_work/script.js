const btns = document.querySelectorAll('button'),
  wrapper = document.querySelector('.btn-block')

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[0].classList.remove('btn'));
// console.log(btns[1].classList.add('btn-danger', 'btn-sm'));
// console.log(btns[0].classList.toggle('btn'));

// if (btns[1].classList.contains('btn-sm')) {
//   console.log('btn-sm')
// }

btns[0].addEventListener('click', () => {
  if (!btns[1].classList.contains('btn-sm', 'btn-danger')) {
    btns[1].classList.add('btn-sm', 'btn-danger')
  } else {
    btns[1].classList.remove('btn-sm', 'btn-danger')
  }

  // btns[1].classList.toggle('btn-sm')
})

wrapper.addEventListener('click', (event) => {
  if (event.target && event.target.matches("button.btn-sm")) {
    console.log('hello button')
  }

  // if (event.target && event.target.tagName == 'BUTTON') {
  //   console.log('hello button')
  // }

  // if (event.target && event.target.classList.contains('btn-sm')) {
  //   console.log('hello button')
  // }
})

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//       console.log('hello button forEach')
//     })
// })

const btn = document.createElement('button')
btn.classList.add('btn-warning', 'btn')
wrapper.append(btn)
