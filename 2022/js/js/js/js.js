// прототипы

// const person = {
//     name: "maksim",
//     age: "25",
//     greet: function () {
//         console.log('greet')
//     }
// }

const person = new Object({
    name: "maksim",
    age: "25",
    greet: function () {
        console.log('greet')
    }
})

Object.prototype.sayHello = function () {
    console.log('Hello')
}

const Lena = Object.create(person)
Lena.name = "Elena"

// Контекст

function hello() {
    console.log('Hello', this)
}

const person1 = {
    name: "Vlad",
    age: "24",
    sayHello1: hello,
    sayHello1Window: hello.bind(Window),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const Lena1 = {
    name: 'Lena',
    age: '23'
}

person1.logInfo.bind(Lena1, 'programmer', '89999999999')()
person1.logInfo.call(Lena1, 'programmer', '89999999999')
person1.logInfo.apply(Lena1, ['programmer', '89999999999'])

/// ==========

const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//     return arr.map(function (i) {
//         return i * n
//     })
// }

Array.prototype.multBy = function (n) {
     return this.map(function (i) {
         return i * n
     })
}

console.log(array.multBy(4))

// Замыкание

function createCalcFunction() {
    return function () {

    }    
}