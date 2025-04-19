const express = require('express');
const path = require('path');

const app = express();

// Serve static files (CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Set up Handlebars view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Import routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
