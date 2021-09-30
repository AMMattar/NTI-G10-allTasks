/*
const prom = (val) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof val == "number" ? resolve(val * 3) : reject("it's not a number")
    }, 2000)
})

const myCall = async () => {
    data = await prom(10)
    console.log(data)
}

myCall()
*/
// Part 2
const test = require('./test_for3')

test.data("ahmed", 28)