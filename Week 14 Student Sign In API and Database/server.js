const express = require('express')

// Create web application server
const app = express()

// Start server running
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port)
})