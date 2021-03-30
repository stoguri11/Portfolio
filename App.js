const express = require('express');
const path = require('path');
const morgan = require('morgan');
var cors = require('cors')

const app = express();

/** MIDDLEWARES **/
//Cross origin resource sharing (CORS)
app.use(cors());
// access logging
app.use(morgan('combined'));
// For parsing application/json 
app.use(express.json());
// For parsing application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true }));


// Have Node serve the files for our built React app
app.use(express.static(path.join(__dirname, '/frontend/build/')));

// Serve index on any other route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'));
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App successfully started on port ${PORT}`);
});