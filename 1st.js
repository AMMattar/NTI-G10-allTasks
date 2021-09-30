/*
function getUserInput(message) {
    return prompt(message)
}

function highSalary(salary) {
    return salary - (salary * 0.1)
}

function lowSalary(salary) {
    return salary - (salary * 0.05)
}
function convertToMe() {
    let name = getUserInput("what is your name? to exit enter 0")
    let salary = parseInt(getUserInput('what is your salary?'))
    console.log(typeof (salary))
    if (salary > 5000 && salary < 10000) {
        alert(`your name is ${name} and your salary = ${lowSalary(salary)}`)
    } else if (salary > 10000) {
        alert(`your name is ${name} and your salary = ${highSalary(salary)}`)
    } else {
        alert(`your name is ${name} and your salary = ${salary}`)
    }
}

convertToMe()
*/
//*******************************//
const posts = [{
    '1': 1, '2': 2, '3': 3
},
{
    "4": 4, "5": 5, "6": 6
}]

posts.forEach((Element, i) => {
    console.log(Element)
})