// Create variable canvas and set it to the canvas element with the id soda-chart.
let canvas = document.querySelector('#soda-chart')
// Create variable ctx and set it to the context of the canvas element.
let ctx = canvas.getContext('2d')

// The above JavaScript code snippet selects a canvas element from the DOM and gets its 2D rendering context.
// let canvas = document.querySelector('#soda-chart')
    // document.querySelector('#soda-chart') selects the first HTML element with the ID soda-chart.
    // let canvas stores a reference to this canvas element.
// let ctx = canvas.getContext('2d')
    // canvas.getContext('2d') obtains the 2D drawing context for the selected canvas element.
    // let ctx stores this 2D context in the variable ctx.

// Create a new Chart object and set it to a variable called chart.
// The Chart object takes two arguments: the first is the context of the canvas element, and the second is an object with the following properties
chart = new Chart(ctx, {
    // Set the type property to 'bar'.
    type: 'bar',
    // Set the data property to an object with the following properties
    data: {
        // labels is an array of strings that represent the labels on the x-axis of the chart
        labels: ["Coke", "Pepsi", "Mountain Dew", "Any", "None"],
        // datasets is an array of objects that represent the data to be displayed on the chart  
        datasets: [{
            // label is a string that represents the label of the dataset
            // This ends up being a red bar that has no meaning, and when that label is clicked that bars in the chart will disappear
            label: 'Number of votes',
            // data is an array of numbers that represent the data points of the chart
            data: [18, 14, 12, 7, 10],   // this is the chart data
            // backgroundColor is an array of strings that represent the background color of the bars in the chart
            backgroundColor: ['red', 'blue', ' purple', 'yellow', 'green']
        }]
    // Set the options property to an object with the following properties
    }, options: {
        // scales is an object that represents the scales of the chart
        scales: {
            // xAxes is an array of objects that represent the x-axis of the chart
            yAxes: [{
                // ticks is an object that represents the ticks of the y-axis
                ticks: {
                    // beginAtZero is a boolean that specifies whether the y-axis should start at zero
                    beginAtZero: true
                }
            }]
        }
    }
})