const log = function(a, s, ...rest){
  console.log(a, s, rest)
}

log('basic' , 'rest', 'operator', 'usage')

function calcOr(number, basic) {
  console.log(number * basic)
}

calcOr(3, 5)