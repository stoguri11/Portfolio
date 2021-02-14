var express = require('express');
var router = express.Router();

router.get('/webf1', (req, res) => {
    const resp = {root: __dirname + "../../../front/src/html/"} ;
    console.log(`Navigated to: portfolio/front/src/html/webf.html`);
    res.sendFile('webf.html', resp);
});

router.get('/netfun', (req, res) => {
    const resp = {root: __dirname + "../../../front/src/html/"} ;
    console.log(`Navigated to: portfolio/front/src/html/netfun.html`);
    res.sendFile('netfun.html', resp);
});

router.get('/intprog', (req, res) => {
    const resp = {root: __dirname + "../../../front/src/html/"} ;
    console.log(`Navigated to: portfolio/front/src/html/intprog.html`);
    res.sendFile('intprog.html', resp);
});

module.exports = router;