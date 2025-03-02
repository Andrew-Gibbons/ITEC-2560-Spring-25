// prerequisite for Android.  C# or Java

// Set 2 variables to test boolean logical test
let takenCSharp = true
let takenJava = false

// If takenCSharp or takenJava
if (takenCSharp || takenJava) {
    // Output requirements met
    console.log('You meet the prerequisites for Android.')
    // Else output requirements
} else {
    console.log('You need to take either C# or Java.')
}

// Senators must be 30 years old
// Must have been US citizen 9 years
// Must live in state to represent
// Set variables for testing equality operators
let age = 46
let usCitizenTime = 46
let stateOfResidence = 'Minnesota'
let stateToRepresent = 'Minnesota'

// If age is greater or equal to 30 and usCitizenTime is greater or equal to 30 and stateOfResidence
// equals stateToRepresent
if (age >= 30 && usCitizenTime >= 30 && stateOfResidence == stateToRepresent) {
    // Out put an eligible message
    console.log('You are eligible to be a senator of your state.')
    // Else output an ineligible message
} else {
    console.log('You are NOT eligible to be a representative of your state.')
}

// If an empty string is the same as the value zero
if ('' === 0) {
    // output The same
    console.log('The same.')
    // Else output NOT the same
} else {
    console.log('NOT the same.')
}