// const now = new Date('2021-06-27')

// new Date.parse('2021-06-27')

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset())

// console.log(now.setHours(18))
// console.log(now)

let start = new Date()

for (let i = 0; i < 100000000; i++) {
  let some = i ** 3
}

let end = new Date()


console.log(start, end)
console.log(`отработал за ${end - start} милисикунд`)
