const express = require('express');

const index = require('./routes/Index');
const nav = require('./routes/nav');


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "../../front/src/"));

// For parsing application/json 
app.use(express.json()); 
  
// For parsing application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true })); 

app.use("/", index);
app.use("/nav", nav);


app.listen(PORT, () => {
    console.log(`App successfully started on port ${PORT}`);
});