// Create a variable text message with ITEC in lowers letters
let text = 'The classes are itec 1150, itec 1250, and itec 2560.'

// Create variable replaced to replace itec with ITEC
let replaced =text.replace('itec', 'ITEC')
// Output replaced
console.log(replaced)

// Other ways to replace
let replacedAll = text.replace(/itec/g, 'ITEC')
console.log(replacedAll)

// Other ways to replace
let message = 'The classes are 1150, 1250, and 2560.'
let replaceRegex = message.replace(/\d{4}/g, 'ITEC $&')
console.log(replaceRegex)
