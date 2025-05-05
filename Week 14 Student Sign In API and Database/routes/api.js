// Create constant express and import the express module
// Create a constant database and import the models from the database
// Create a constant Student and import the Student model from the database
const express = require('express')
const database = require('../models')
const Student = database.Student

// Create a constant router and import the express router module
const router = express.Router()

// Create a GET route for the /students endpoint
// This route retrieves all students from the database and returns them as a JSON response
router.get('/students', function(req, res, next) {
    Student.findAll({order: ['name']} ).then( students => {
        return res.json(students)
    })
})

// Create a POST route for the /students endpoint
// This route creates a new student in the database using the data provided in the request body
router.post('/students', function(req, res, next) {
    const newStudent = req.body
    Student.create(newStudent).then( result => {
        return res.status(201).send('New student created')
    })
})


module.exports = router