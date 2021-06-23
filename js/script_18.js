const arr = [1, 222, 33, 4, 15, 8]
arr.sort(compareNum)
console.log(arr)

function compareNum(a, b) {
    return a - b
}

/*arr.forEach(function(item, idx, arr) {
    console.log(`${idx}: ${item} внутри массива ${arr}`)
})*/
/*arr.pop()
arr.push(10)
console.log(arr)*/

/*for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}*/

/*for (let value of arr) {
    console.log(arr[value])
}*/
/*

const str = prompt("", "")
const products = str.split(",")
products.sort()
console.log(products.join(";"))*/
