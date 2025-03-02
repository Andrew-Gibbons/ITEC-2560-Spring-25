// Create birds array
let birds = ['BlueJay', 'Cardinal', 'Pheasant' ]
// Output birds array
console.log(birds)

// Loop through each element in birds array with a function with arguments of bird and index
birds.forEach(function (bird, index) {
    // Repeat once for each object in array
    // Function will be called for each object in the array
    // Output each index along with each bird in array in uppercase
    console.log(index, bird.toUpperCase())
})

// Traditional for loop
for (let x = 0; x < birds.length; x++) {
    let bird = birds[x]
    console.log(x, bird.toUpperCase())
}

