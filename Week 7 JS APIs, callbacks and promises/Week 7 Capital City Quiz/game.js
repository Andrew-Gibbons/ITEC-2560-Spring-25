let randomCountryElement = document.querySelector('#random-country-display');     // The element to display the country's name in
let userAnswerElement = document.querySelector('#user-answer-entry');    // The input element the user enters their answer in  
let submitButton = document.querySelector('#submit-user-answer');    // The button the user clicks to submit their answer 
let resultTextElement = document.querySelector('#game-result');   // The element that displays if the user is correct or not
let playAgainButton = document.createElement('button');  // Creating a Play Again button

// Add the Play Again button to the HTML
// This sets the text content of the playAgainButton element to "Play Again".
playAgainButton.textContent = 'Play Again';
// playAgainButton.classList.add('btn', 'btn-outline-secondary', 'mt-3');
// This adds three CSS classes (btn, btn-outline-secondary, mt-3) to the playAgainButton element.
// These classes are typically from Bootstrap (a popular CSS framework) and style the button as follows:
// btn applies the basic button styling.
// btn-outline-secondary styles the button with an outline and a secondary color.
// mt-3 adds a margin-top of 3 units to space it out from other elements above it.
// append the playAgainButton element to the body of the HTML document.
// set the display style of the playAgainButton element to 'none', hiding it from view.
playAgainButton.classList.add('btn', 'btn-outline-secondary', 'mt-3');
document.body.appendChild(playAgainButton);
playAgainButton.style.display = 'none';  // Initially hide the button

// Function to select a random country and update the display
// Generate a random index between 0 and the length of the countriesAndCodes array.
// Index is used to select a random country from the array.
// Sets the text content of the randomCountryElement to the name of the randomly selected country.
// Sets the data-code attribute of the randomCountryElement to the two-letter code of the randomly selected country.
function selectRandomCountry() {
    let randomIndex = Math.floor(Math.random() * countriesAndCodes.length);
    let randomCountry = countriesAndCodes[randomIndex];
    randomCountryElement.textContent = randomCountry.name;
    randomCountryElement.dataset.code = randomCountry.twoLetterCode;  // Store the country's code for later use
}

// Function to handle user answer submission
function checkUserAnswer() {
    let userAnswer = userAnswerElement.value.trim().toLowerCase();
    let countryCode = randomCountryElement.dataset.code;
    let url = `https://api.worldbank.org/v2/country/${countryCode}?format=json`;

    fetch(url)
    .then(response => {
        // Check if the response is OK (status 200-299)
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Validate response structure
        if (!Array.isArray(data) || !data[1] || !data[1][0] || !data[1][0].capitalCity) {
            throw new Error('Unexpected API response structure');
        }

        // Fetch the capital city and prepare it for comparison
        let capitalCity = data[1][0].capitalCity.trim().toLowerCase();
        
        // Compare user input with the actual capital city
        if (userAnswer === capitalCity) {
            resultTextElement.textContent = `Correct! The capital of ${randomCountryElement.textContent} is ${capitalCity.charAt(0).toUpperCase() + capitalCity.slice(1)}.`;
        } else {
            resultTextElement.textContent = `Wrong - the capital of ${randomCountryElement.textContent} is not ${userAnswer}, it is ${capitalCity.charAt(0).toUpperCase() + capitalCity.slice(1)}.`;
        }

        // Show the Play Again button after checking the answer
        playAgainButton.style.display = 'block';
    })
    .catch(error => {
        // Handle and display any errors
        resultTextElement.textContent = 'An error occurred while fetching data. Please try again later.';
        console.error('Error:', error);
    });
}

// Function to reset the game
// Clears the user's answer from the userAnswerElement.
// Resets the resultTextElement to its initial state.
// Hides the Play Again button after the game is reset
// Selects a new random country to start a new game.
function resetGame() {
    userAnswerElement.value = '';
    resultTextElement.textContent = 'Replace with result';
    playAgainButton.style.display = 'none';  // Hide the Play Again butto
    selectRandomCountry();
}

// Add event listeners
// This adds an event listener to the submitButton element that calls the checkUserAnswer function when clicked.
// This adds an event listener to the playAgainButton element that calls the resetGame function when clicked.
submitButton.addEventListener('click', checkUserAnswer);
playAgainButton.addEventListener('click', resetGame);

// Initialize the game
selectRandomCountry();