// This file contains a list of "Would You Rather" questions and a function to return a random question from the list.
// The questions are structured as an array of objects, each containing a question and two possible answers.

const questions = [
    {
        'question': 'Live in a house shaped like a triangle or a house shaped like a circle?',
        'answer1': 'Triangle house',
        'answer2': 'Circle house'
    },
    {
        'question': 'Have a cat-sized elephant or an elephant-sized cat?',
        'answer1': 'Cat-sized elephant',
        'answer2': 'Elephant-sized cat'
    },
    {
        'question': 'Be able to fly or be able to breathe underwater?',
        'answer1': 'Fly',
        'answer2': 'Breath underwater'
    },
    {
        'question': 'Play any musical instrument or speak any language?',
        'answer1': 'Play any musical instrument',
        'answer2': 'Speak any language'
    },
    {
        'question': 'Be a famous movie star or a famous scientist?',
        'answer1': 'Famous movie star',
        'answer2': 'Famous scientist'
    },
    {
        'question': 'Have a pet dragon or a pet unicorn?',
        'answer1': 'Pet dragon',
        'answer2': 'Pet unicorn'
    },
]

function randomWyrQuestion () {
    const randomIndex = Math.floor(Math.random() * questions.length)
    const randomQuestion = questions[randomIndex]
    return randomQuestion
}

// Export data in node.js '
// It allows another file to import and use the randomWyrQuestion variable or function.
// This is likely a function or variable that generates "Would You Rather" questions (based on the context of your previous messages).
// Once exported, other files can access it by using require()
module.exports = randomWyrQuestion