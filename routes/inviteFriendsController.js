var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/invite/:invite_token', function(req, res, next) {
  var invite_token = req.params.invite_token
  var gig_url = req.session.searches[invite_token];
  console.log('found gig! for token ' + invite_token + ': ' + gig_url);
  res.render('inviteFriends', {
    title: 'Invite friends',
    gig: gig_url
  });
});

module.exports = router;
