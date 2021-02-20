const express = require('express');
const morgan = require('morgan');

const index = require('./routes/Index');


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "../../front/src/"));
app.use(express.static(__dirname + "../../front/src/html"));
app.use(express.static(__dirname + "../../front/src/html/y2"));
app.use(express.static(__dirname + "../../front/src/html/y3"));
app.use(express.static(__dirname + "../../front/src/html/y4"));

// For parsing application/json 
app.use(express.json()); 
  
// For parsing application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true })); 

// logging


// serve index page
app.use("/", index);

app.listen(PORT, () => {
    console.log(`App successfully started on port ${PORT}`);
});