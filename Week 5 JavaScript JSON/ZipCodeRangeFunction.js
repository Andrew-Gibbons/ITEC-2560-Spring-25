// Create function cityStateAddress with city and state as arguments
function cityStateAddress(city, state) {
    // let address = city + ', ' + state.toUpperCase()
    // Create variable address to output city and then state in uoercase
    let address = `${city}, ${state.toUpperCase()}`
    // Stop processing address
    return address
}

// Test input and output
console.log(cityStateAddress('Minneapolis', 'mn'))
// have the output be a new variable
let address = cityStateAddress('Seattle', 'wa')
console.log(address)


// Create function isMinnesotaZip with code as the argument
function isMinnesotaZip(code) {
    // All MN zip codes are between 55001 and 56763
    // Return true if in range or false if not
    if (code >= 55001 && code <= 56763) {
        return true
    } else
        return false
}

// Create function validGPA with gpa as argument
function validGPA(gpa) {
    // Stop processing if gpa is greater or equal to zero or less than or equal to 4
    return gpa >= 0 && gpa <= 4
}

//  Test input and output
console.log(validGPA(5))
console.log(validGPA(3))
console.log(isMinnesotaZip(55423))
console.log(isMinnesotaZip(55001))
console.log(isMinnesotaZip(56763))
console.log(isMinnesotaZip(57000))
console.log(isMinnesotaZip(54000))
