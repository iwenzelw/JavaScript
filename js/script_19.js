let a = 5,
    b = a

b = b + 5

/*console.log(b)
console.log(a)*/

/*const obj = {
    a: 5,
    b: 1
}

const copy = obj

copy.a = 10

console.log(copy)
console.log(obj)*/

/*function copy(mainObj) {
    let objCopy = {}

    let key
    for (key in mainObj) {
        objCopy[key] = mainObj[key]
    }
    return objCopy
}

const number = {
    a: 2,
    b: 55,
    c: {
        x: 33,
        f: 2
    }
}

const newObj = copy(number)
console.log(newObj)
newObj.a = 100
console.log(newObj)
console.log(number)

const add = {
    d: 12,
    e: 20
}

const object = Object.assign({}, number)
object.c.x = 24
console.log(object)
console.log(add)

const oldArray = ['a', 's', 'd']
const newArray = oldArray.slice()

console.log(oldArray)
console.log(newArray)
newArray[1] = 'qwerty'
console.log(newArray)*/

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook']

console.log(internet)

function log(a, s, d) {
    console.log(a)
    console.log(s)
    console.log(d)
}

const num = [23, 31, 42]

log(...num)