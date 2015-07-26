var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/invite/:invite_token', function(req, res, next) {
  res.render('inviteFriends', { title: 'Invite friends' });
});

module.exports = router;
