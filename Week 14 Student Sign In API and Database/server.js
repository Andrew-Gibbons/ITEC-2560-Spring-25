const express = require('express')
const apiRoutes = require('./routes/api.js')
const path = require('path')

// Create web application server
const app = express()

app.use(express.json()) // Parse JSON request body

const staticFilePath = path.join(__dirname, 'client', 'dist') 
const staticFiles = express.static(staticFilePath)
app.use('/', staticFiles)

app.use('/api', apiRoutes) // Use API routes

app.use(function(req, res, next) {
  res.status(404).send('Sorry, that route does not exist!')
})

app.use(function(req, res, next, err) {
  console.error(err.stack)  // for server developer
  res.status(500).send('Server error!!')  // for client
})

// Start server running
const server = app.listen(process.env.PORT || 3000, function () {
  console.log('Server is running on port ' + server.address().port)
})