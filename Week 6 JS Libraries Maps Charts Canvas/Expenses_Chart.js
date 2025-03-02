/* Input elements */
let expenseNameInput = document.querySelector('#expense-name')
let expenseAmountInput = document.querySelector('#expense-amount')
let addExpenseButton = document.querySelector('#add-expense')

/* Get chart canvas and contex  */
let chartCanvas = document.querySelector('#expenses-doughnut-chart')
let ctx = chartCanvas.getContext('2d')


// TODO create chart object
// Create variable expenseChart and set it to a new Chart object.
// The Chart object takes two arguments: the first is the context of the canvas element, 
// and the second is an object with the following properties:
let expenseChart = new Chart(ctx, {
    // Set the type property to 'doughnut'.
    type: 'doughnut',
    // Set the data property to an object with the following properties
    data: {
        // Set the datasets property to an array with one object.
        datasets: [
            {
                // Set the data property to an empty array.
                data: [],
                // Set the backgroundColor property to an empty array.
                backgroundColor: []
            }
        ],
        // Set the labels property to an empty array.
        labels: []
    },
    // Set the options property to an empty object.
    options: {}
})

// TODO (optional) replace with colors of your choice. The array can have as many or as few colors as you like 
let chartColors = [ 'red', 'orange', 'teal', 'lightgreen', 'darkblue', 'grey' ]

    
    // TODO add expense to chart 
    // Create a function called addExpenseToChart that takes two arguments: name and amount.
    // The function should push the name to the labels array of the expenseChart object,
    // push the amount to the data array of the first dataset in the expenseChart object,
    // and push a color from the chartColors array to the backgroundColor array of the first dataset in the expenseChart object.
    // Finally, call the update method on the expenseChart object.
    function addExpenseToChart(name, amount) {
        expenseChart.data.labels.push(name)
        expenseChart.data.datasets[0].data.push(amount)
        // Add a color from the chartColors array to the backgroundColor array
        // expenseChart is presumably an object representing a chart.
        // data.datasets[0] accesses the first dataset in the chart.
        // backgroundColor is an array of background colors for the data points in the dataset.
        // .length returns the number of items in the backgroundColor array.
        let colorCount = expenseChart.data.datasets[0].backgroundColor.length
        // This JavaScript code snippet is calculating an index and using it to select a color from the chartColors array
        // colorCount is the number of colors, which we determined earlier.
        // chartColors is an array that contains colors.
        // colorCount % chartColors.length calculates the remainder when colorCount is divided by the length of the chartColors array.
        let color = chartColors[colorCount % chartColors.length]

        // console.log(color, colorCount)

        // This JavaScript code snippet is adding a new background color to the array of background colors for the first
        // dataset in the expenseChart object.
        // expenseChart.data.datasets[0] accesses the first dataset in the chart.
        // backgroundColor is an array of background colors for the data points in the dataset.
        // .push(color) adds the value of color (which we determined previously) to the end of the backgroundColor array.
        expenseChart.data.datasets[0].backgroundColor.push(color)
        // Update the expenseChart object to reflect the new data.
        expenseChart.update()

}

// TODO add event listener to Add Expense button
// Add an event listener to the addExpenseButton that listens for a click event.
// The event listener should call a function that does the following:
// - Add the event listener to the addExpenseButton element.
addExpenseButton.addEventListener('click', function() {
    // - Create an empty array called errors.
    let errors = []
    // - Get the value of the expenseNameInput and expenseAmountInput elements.
    let expenseName = expenseNameInput.value 
    let expenseAmount = expenseAmountInput.value 
    // Validate both fields are filled in, and the amount is a positive number
    // - Check if the expenseNameInput is empty. If it is, push an error message to the errors array.
    if (expenseName.length == 0) {
        errors.push('Enter a type of expense')
    }
    // - Check if the expenseAmountInput is empty or less than 0. If it is, push an error message to the errors array.
    if (expenseAmount.length == 0 || expenseAmountInput < 0) {
        errors.push('Enter a positive amount for the expense')
    }

    // If any errors, alert and return to the function - do not procede to add to chart 
    if (errors.length > 0) {
        alert( errors.join('\n') )
        return
    }
    // TODO call function to update chart
    // - Call the addExpenseToChart function with the expenseName and expenseAmount as arguments.
    addExpenseToChart(expenseName, expenseAmount)
    // Clear inputs, ready for next expense name and amount.
    // - Clear the value of the expenseNameInput and expenseAmountInput elements.
    expenseNameInput.value = ''
    expenseAmountInput.value = ''

});
// TODO add event listener to click the Add Expense button when the enter key is pressed
// Add an event listener to the window object that listens for a keyup event.
// If the active element is one of these elements, the event listener should click the addExpenseButton and focus the expenseNameInput element.
// This will allow the user to press the enter key to add an expense without having to click the Add Expense button.
window.addEventListener('keyup', function(event) {
    // The event listener should check if the key code of the event is 13 (the enter key).
    if (event.keyCode == '13') {
        // If the key code is 13, the event listener should check if the active element is the expenseNameInput, expenseAmountInput, or addExpenseButton.
        let inputElements = [expenseNameInput, expenseAmountInput, addExpenseButton]
        // If the active element is one of these elements, the event listener should click the addExpenseButton and focus the expenseNameInput element.
        if (inputElements.includes(document.activeElement)) {
            addExpenseButton.click()
            expenseNameInput.focus()
        }
    }
})
