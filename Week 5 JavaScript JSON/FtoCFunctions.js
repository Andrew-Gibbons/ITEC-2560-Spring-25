// Create a function shout with the argument text
function shout(text) {
    // Create a variable shouty_text to be converted to all caps
    let shouty_text = text.toUpperCase() + '!!!'
    // Return variable shouty_text
    return shouty_text
}

// Output the function shout with the text Hello World
console.log(shout('Hello World'))
// Create variable message to be the function shout with a text of hello WEB programmers
let message = shout('hello WEB programmers')
// Output message
console.log(message)

// function fartocee with arguments far and decimalPlaces
function fartocee(far, decimalPlaces) {
    // Conversion equation
    let celsius = (far - 32) * 5 / 9
    if (decimalPlaces) { // undefined values are considered false
        // Output celsius to a fixed decimal place per argument decimalPlaces
        return celsius.toFixed(decimalPlaces)
        // Else output celsius
    } else {
        return celsius
    }
    // return celsius.toFixed(2)
}

// Create variable todayTemp to equal 75
let todayTemp = 75
// Create variable todayCelsius as fartocee function with todayTemp and 3 as the arguments (far, decimalPlaces)
todayCelsius = fartocee(todayTemp, 3)
// Output todayCelsius
console.log(todayCelsius)