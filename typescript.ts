// ("Hello typescripconsole.logt")

let firstName: string = "Emily"
let age: number = 19
let good: boolean = true

let fruits: string[] = [
    "apples",
    "bananas"
]

// debug(`
// First Name: ${firstName}
// Your Age: ${age}
// you have many ${fruits}
// `)

enum taxForm {
    standard = "1040",
    childCredit = "1065",
    SCorp = "1120S",
    CCorp = "1120",
}

// debug(`
// You need form ${taxForm.childCredit}
// `)

// let fruits: string[] = [
//     "apples",
//     "bananas"
// ]

// function getFruit(index: number): string {
//     // return fruits[index]
// }

// debug(`You chose an ${getFruit(0)}`)

function debug(message: any): void {
    // console.log((new Date()) + (message))
    //no return
}

// debug('No return')

// debug(222)

interface teacher{
    name: string,
    years: number,
    subject: string[],
    age: number,
}

let damian: teacher = {
    name: "damian",
    years: 20,
    subject: ["javascript", "typescript"],
    age: 49
}

console.log(damian)