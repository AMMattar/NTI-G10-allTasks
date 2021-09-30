/* part 1 */
let form = document.querySelector('form')

let readData = () => JSON.parse(localStorage.getItem('info')) || []
let setData = (data) => localStorage.setItem('info', JSON.stringify(data))

/*
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        let info = readData()
        let data = {
            userName: this.elements.name.value,
            userAge: this.elements.age.value,
            userSalary: this.elements.salary.value
        }
        console.log(data)
        info.push(data)
        setData(info)
        this.reset()
    })
}
*/
/* part 2 */
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        let info = readData()
        let data = {
            userName: this.elements.name.value,
            subjects: [
                this.elements.s1.value,
                this.elements.s2.value,
                this.elements.s3.value,
            ]
        }
        console.log(data)
        info.push(data)
        setData(info)
        this.reset()
    })
}

const showData = function () {
    let data = readData()
    let tr = document.querySelector('tr')
    data.forEach(element => {
        console.log(element)
        let td = document.createElement('td')
        tr.appendChild(td)
        td.innerText = element.userName
        //td.innerText = element.subjects[1]
        //td.innerText = element.subjects[2]
    });
    data.forEach(element => {
        console.log(element)
        let td = document.createElement('td')
        tr.appendChild(td)
        td.innerText = element.subjects[0]
        //td.innerText = element.subjects[1]
        //td.innerText = element.subjects[2]
    });
    data.forEach(element => {
        console.log(element)
        let td = document.createElement('td')
        tr.appendChild(td)
        //td.innerText = element.subjects[0]
        td.innerText = element.subjects[1]
        //td.innerText = element.subjects[2]
    });
    data.forEach(element => {
        console.log(element)
        let td = document.createElement('td')
        tr.appendChild(td)
        //td.innerText = element.subjects[0]
        //td.innerText = element.subjects[1]
        td.innerText = element.subjects[2]
    });
}
showData()