const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    color: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log('test, text')
    }
}

/*options.makeTest()*/
const {border, bg} = options.color;
console.log(border)
/*console.log(Object.keys(options).length)*/
/*
let counter = 0

for (let key in options ) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
            counter++
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`)
        counter++
    }
}
console.log(counter)*/
