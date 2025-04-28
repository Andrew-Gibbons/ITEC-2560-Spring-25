// Creeate consts for express and router and randomWyrQuestion
const express = require('express')
const router = express.Router()
const randomWyrQuestion = require('../model/wyr_questions')

// This code defines a route in the Express app. Specifically, it handles GET requests to the root ('/') of the website.
router.get('/wyr', function(req, res, next) {
    const wyrQuestion = randomWyrQuestion()
    res.json(wyrQuestion)

})

// Node.js export statement. It allows the router object to be used in other parts of your application.
module.exports = router