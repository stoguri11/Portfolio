const express = require('express');

const index = require('./routes/Index');


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "../../front/src/html"));
app.use(express.static(__dirname + "../../front/src/"));

// For parsing application/json 
app.use(express.json()); 
  
// For parsing application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true })); 

app.use("/", index);

app.listen(PORT, () => {
    console.log(`App successfully started on port ${PORT}`);
});