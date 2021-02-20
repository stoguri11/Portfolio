const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 8080;

// Directories to serve static files from
app.use(express.static(path.join(__dirname, "/client/public")));

// access logging
app.use(morgan('combined'));

// For parsing application/json 
app.use(express.json()); 
  
// For parsing application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true })); 



app.listen(PORT, () => {
    console.log(`App successfully started on port ${PORT}`);
});