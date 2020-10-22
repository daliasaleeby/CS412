const express = require('express');
const router = express.Router();

router.route('/ps3')
    .get((req, res, next) => {
        res.render('b',{title :'YOOOOOO ITS A WEB APP'})
    })

    .post((req, res, next) => {
        res.render('c',{'string': req.body.string, 'length': req.body.string.length})
    })

module.exports = router;