// Create const express and router
const express = require('express');
const router = express.Router();

// This code defines a route in the Express app. Specifically, it handles GET requests to the root ('/') of the website.
router.get('/', (req, res) => {
    res.render('index', { title: 'BMI Calculator' });
});

// This code defines a route in the Express app. Specifically, it handles GET requests to the '/calculate' endpoint.
// It retrieves the height and weight from the query parameters, validates them, and calculates the BMI.
router.get('/calculate', (req, res) => {
    const height = parseFloat(req.query.height);
    const weight = parseFloat(req.query.weight);

    // Validate input
    if (!height || !weight || height <= 0 || weight <= 0) {
        return res.render('error', { message: 'Invalid input! Please provide valid height and weight values.' });
    }

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(2);

    res.render('result', { height, weight, bmi });
});

// This code exports the router object so it can be used in other parts of the application.
// This is useful for modularizing the code and keeping the routing logic separate from the main application logic.
module.exports = router;