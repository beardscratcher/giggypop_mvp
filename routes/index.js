var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET example.txt */
router.get('/example.txt', function(req, res, next) {
  res.sendfile('example.txt');
});

module.exports = router;
