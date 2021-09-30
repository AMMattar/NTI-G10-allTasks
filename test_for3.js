const fs = require('fs')

const hello = () => {
    console.log('hello')
}
const data = (name, age) => {
    const newData = {
        name: name,
        age: age
    }
    const oldData = [JSON.parse((fs.readFileSync('./user.json')).toString())]
    oldData.push(newData)
    console.log(oldData)
    fs.writeFileSync('user.json', JSON.stringify(oldData))
}

//const addUser = fs.writeFileSync('user.json', JSON.stringify(data))

module.exports = { data };

