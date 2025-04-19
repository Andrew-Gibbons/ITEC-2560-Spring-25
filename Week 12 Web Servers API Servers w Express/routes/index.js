// Create const express and router
const express = require('express')
const router = express.Router()

// This code defines a route in the Express app. Specifically, it handles GET requests to the root ('/') of the website.
// It renders the 'index' view with a title and author name.
router.get('/', function(req, res, next) {
    res.render('index', {title: 'Feedback app', author: 'Andrew'})
})

// This code defines a route in the Express app. Specifically, it handles GET requests to the '/feedback-form' endpoint.
// It renders the 'student_feedback_form' view.
router.get('/feedback-form', function(req, res, next){
    res.render('student_feedback_form')
})

// This code defines a route in the Express app. Specifically, it handles POST requests to the '/submit-feedback' endpoint.
router.post('/submit-feedback', function(req, res, next){
    // get the form data from the URL query 
    const formData = req.body
    
    // TODO - save this data to a database so someone can read and respond 

    res.render('thank_you', { 
        name: formData.name, 
        email: formData.email, 
        message: formData.comments,
        currentStudent: formData['current-student']
     })

})

// This is used in Node.js to export the router object so that other files can use it
module.exports = router