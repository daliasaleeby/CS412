var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CS412' });
});
router.route('/')
    .get((req, res, next) => {
      res.render('b',{title :'YOOOOOO ITS A WEB APP'})
    })

    .post((req, res, next) => {
      res.render('c',{'string': req.body.string, 'len': req.body.string.length})
    })

module.exports = router;
