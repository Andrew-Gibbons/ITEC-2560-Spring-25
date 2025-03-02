// Output hello world
console.log('hello world')

// Various ways of declaring variables
let color = 'blue'
var size = 'medium' // not recommended
const language = 'JavaScript' // can change this value
// language = 'C#' this is an error

// Create variables quantity and distance
let quantity = 5
let distance = 4.5

// Create variables text and message
let text = 'Hello world!'
let message = "Hi programmers!"

// Output the quantity in a string
console.log('There are ' + quantity + ' programmers.')

// Create variable todayTemp as 75
let todayTemp = 75
// Outpu todayTemp in a string
console.log("Today's temperature is " + todayTemp + "F.")

// Create variable TempC as the temperature conversion
let tempC = (todayTemp - 32) * 5 / 9
// Output string messages with today's temperature and a comparison message both fixed to 2 decmal places
console.log("Today's temperature is " + tempC.toFixed(2) + "C.")
console.log(`Today's temperature is ${tempC.toFixed(2)}C  Which is equivalent to ${todayTemp}F`)

// Create variables className, classCode, and department
let className = 'Web Programming'
let classCode = 2560
let department = 'ITEC'

// Output a string for department, classCode, and className
console.log(`This class is ${department} ${classCode} ${className}`)
