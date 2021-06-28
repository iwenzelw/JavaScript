'use strict'

class Rectangle {
  constructor(height, width) {
      this.height = height
      this.width = width
  }

  calcArea() {
    return this.height * this.width
  }

}

class ColoredRectahgeWhithText extends Rectangle {
  constructor(height, width, text, bgColor){
    super(height, width)
    this.text = text
    this.bgColor = bgColor
  }

  showMyProps(){
    console.log(`Техт: ${this.text}, цвет: ${this.bgColor}`)
  }
}

const div = new ColoredRectahgeWhithText(25, 10, 'Hello Word', 'red')

div.showMyProps()
console.log(div.calcArea())


// const square = new Rectangle(10, 10)
// const long = new Rectangle(20, 100)

// console.log(square.calcArea())
// console.log(long.calcArea())


// function showThis (a, b) {
//   console.log(this)
//   function sum() {
//     console.log(this)
//     return a + b
//   }
//   console.log(sum())
// }

// showThis(4, 5)

// 1) обычная функция : this = window,  но если стоит 'use strict' - undefined

// function User(name, id) {
//   this.name = name
//   this.id = id
//   this.human = true
//   this.hello = function() {
//     console.log(`Hello ${this.name}`)
//   }
// }

// User.prototype.exit = function(name) {
//   console.log(`Пользователь ${this.name} ушел`)
// }

// const ivan = new User('Ivan', 28)
// const alex= new User('Alex', 20)

// ivan.exit()


// console.log(ivan)
// console.log(alex)

// ivan.hello()
// alex.hello()

