let num = 20

function showFirstMessage (text) {
  console.log(text)
  
  console.log(num)
}

showFirstMessage('привет друг')
console.log(num)

/* function calc(a, b) {
  return (a+b)
} */
const calc = (a, b) => a + b

console.log(calc(4, 6))
console.log(calc(14, 16))
console.log(calc(24, 26))

function ret() {
  let num = 50
  return num
}

const anotheNum = ret()
console.log(anotheNum)

const logger = function() {
  console.log("hello")
}

logger()