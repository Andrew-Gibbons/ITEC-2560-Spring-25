// Classic way of creating objects
// Works with let and with const 

// let address = { 
//     number: '1501',
//     street: 'Hennepin Avenue',
//     city: 'Minneapolis'
// }

// console.log(address)
// or 

// const address = { 
//     number: '1501',
//     street: 'Hennepin Avenue',
//     city: 'Minneapolis',
// }

// console.log(address)

// Often create objects from data in variables, for example,

let number = '1501'
let street = 'Hennepin Avenue'
let city = 'Minneapolis'

// let address = {
//     number: number, 
//     street: street,
//     city: city
// }

console.log(address)

// JS offers us a shorthand - if you create an object with variables, you can optionally omit the property name 
// and JS will use the variable name as the property name,

// let address = {
//     number,   // assumes property name is number
//     street,
//     city
// }

// If needed, you can combine both sytaxes - if you want to use the same property and variable names for some properties,
// but you want to rename other properties,

let address = {
    houseNumber: number,   // create a property called houseNumber with the value from number variables
    street,  // create a property called street with value from street variable
    city
}

console.log(address)