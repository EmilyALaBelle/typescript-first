//console.log("Hello typescript")

let firstName: string = "Emily"
let age: number = 19
let good: boolean = true

let fruits: string[] = [
    "apples",
    "bananas"
]

console.log(`
First Name: ${firstName}
Your Age: ${age}
you have many ${fruits}
`)

enum taxForm {
    standard = "1040",
    childCredit = "1065",
    SCorp = "1120S",
    CCorp = "1120",
}

console.log(`
You need form ${taxForm.childCredit}
`)

// let fruits: string[] = [
//     "apples",
//     "bananas"
// ]

function getFruit(index: number): string{
return fruits[index]
}

console.log(`You chose an ${getFruit(0)}`)