const persone = {
  name: 'Alex',
  tel: '+79920001234',
  parents: {
    mom: 'Olga',
    dad: 'Make'
  }
}


const clone = JSON.parse(JSON.stringify(persone))
clone.parents.mom = 'Ann'
console.log(persone)
console.log(clone)

