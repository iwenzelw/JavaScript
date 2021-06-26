'use strict'

/* const box = document.getElementById('box')
console.log(box)

const btns = document.getElementsByTagName('button')
console.log(btns[2])

const circles = document.getElementsByClassName('circle')
console.log(circles)

const hearts = document.querySelectorAll('.heart')
const hea= document.querySelectorAll('#hea')


hearts.forEach((item) => {
  console.log(item)
})

hea.forEach((item) => {
  console.log(item)
}) */

const box = document.getElementById('box'),
  btns = document.getElementsByTagName('button'),
  circles = document.getElementsByClassName('circle'),
  wrapper = document.querySelector('.wrapper'),
  hearts = wrapper.querySelectorAll('.heart'),
  hea = wrapper.querySelectorAll('#hea')
  

/* box.style.backgroundColor = 'blue'
box.style.width = '500px' */

box.style.cssText = 'background-color: blue; width: 500px'

btns[2].style.backgroundColor = 'blue'
btns[2].style.borderRadius = '30px'
btns[2].style.borderColor = 'red'


/* circles[0].style.backgroundColor = 'red' */

/* for (let i =0; i< hearts.length; i++) {
  hearts[i].style.backgroundColor = 'grey'
} */

/* hearts.forEach((item) => item.style.backgroundColor = 'green') */

const div = document.createElement('div')
/* const text = document.createTextNode('тут был я ...')  */

div.classList.add('black')

wrapper.append(div) // вставляет элемент в конец
// wrapper.prepend(div)
/* document.body.append(div) */

// wrapper.appendChild(div)
// 
/* hearts[1].before(div)
hearts[1].after(div) */

/* circles[2].remove()/*  */

/* hearts[0].replaceWith(circles[0]) */
div.innerHTML = "<h1>Hello</h1>"
// div.textContent = 'You, in'

div.insertAdjacentHTML("afterend", '<h2>Привет</h2>')