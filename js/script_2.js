if (4 == 9) {
  console.log('ok')
} else {
  console.log('Error')
}

const num = 51

if (num < 49) {
  console.log('Error')
} else if (num > 100)  {
  console.log('Много')
} else {
  console.log("OK!")
}
 
const primer = (num === 50) ? console.log('ok!') : console.log('error')



switch (num) {
  case 49:
    console.log('неверно')
    break;
  case 100:
    console.log('неверно')
    break
  case 50:
    console.log('верно')
    break
  default:
    console.log('в другой раз')
    break
}