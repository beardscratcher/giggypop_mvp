var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/invite', function(req, res, next) {
  res.render('invite', { title: 'Invite to' });
});

module.exports = router;
