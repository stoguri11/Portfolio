const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 8080;

// Have Node serve the files for our built React app
app.use(express.static(path.join(__dirname, '/frontend/build/')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/build', 'index.html'));
  });

// access logging
app.use(morgan('combined'));

// For parsing application/json 
app.use(express.json()); 
  
// For parsing application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true })); 


app.listen(PORT, () => {
    console.log(`App successfully started on port ${PORT}`);
});