const express = require('express');

const index = require('./routes/Index');
const page_change = require('./routes/page_change');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "../../front/src/"));

// For parsing application/json 
app.use(express.json()); 
  
// For parsing application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true })); 

app.use("/", index);

let current_page ;
app.post("/page_change", (req, res) => {
    current_page = req.body.data;
    res.status(200).send("success");
});

app.get("/page_change", (req, res) => {
    res.send(current_page);
});

app.listen(PORT, () => {
    console.log(`App successfully started on port ${PORT}`);
});