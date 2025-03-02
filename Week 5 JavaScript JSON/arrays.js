// Create an array animals with three indexes
let animals = ['Dog', 'Cat', 'Turtle']

// Output animals array, the first item in the array, and a fictional 1000th item in array
console.log(animals)
console.log(animals[1])
console.log(animals[1000])

// Add to index 3 Giraffe
animals[3] = 'Giraffe'
// Output animals array
console.log(animals)
// Output fictional index 5
console.log(animals[5])

// Overwrite index 1 with Dove
animals[1] = 'Dove'
// Output animal index 1
console.log(animals[1])

// Add Tiger to the end of the array animals and returns new length of array
animals.push('Tiger')
// Output animals array
console.log(animals)

// Create variable lastAnimal as the last index in array and returns that removed element
let lastAnimal = animals.pop()
// Output lastAnimal variable
console.log(lastAnimal)
// Output animals array
console.log(animals)

// Add the element Badger to the beginning of the array
animals.unshift('Badger')
// Output animals array
console.log(animals)

// Remove first element of array and return that value
let firstAnimal = animals.shift()
// Outpu firstAnimal array
console.log(firstAnimal)
// Output animals array
console.log(animals)

// Flip the order of the animals array
animals.reverse()
// Output animals array
console.log(animals)

// Put animals array in alphabetical order
animals.sort()
// Output animals array
console.log(animals)

// Create variable numberOfAnimals to be the length of the array
let numberOfAnimals = animals.length
// Output numberOfAnimals
console.log(numberOfAnimals)

// Fetch the index number of Chimpanzee
console.log(animals.indexOf('Chimpanzee'))

// If Chimpanzee is not in the index then return a message saying so
if (animals.indexOf('Chimpanzee') == -1) {
    console.log('Chimpanzee is not in the array.')
}

// If Dog is in the index then return a message saying so
if (animals.includes('Dog')) {
    console.log('Dog is in the array.')
}

// Join the indexed items with an asterisk between them
console.log(animals.join(' * '))

// Loop through each element in array and convert it to uppercase
animals.forEach(function(animal) {
    console.log(animal.toUpperCase())
})

// Loop through each element in array and return the length of the element as a list
animals.forEach(function(animal) {
    console.log(animal.length)
})

// Create a variable animalNameLength to an empty array
let animalNameLength = []
// Loop through each element in array and return the length of the element as an array
animals.forEach(function(animal) {
    let length = animal.length
    animalNameLength.push(length)
})
// Output animalNameLength
console.log(animalNameLength)