var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('index.js', {root: __dirname + "../../../front/src/"});
});

module.exports = router;