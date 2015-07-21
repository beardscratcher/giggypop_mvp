var express = require('express');
var router = express.Router();

/* Results for search. */
router.get('/search/:search_for', function(req, res, next) {
  console.log('User searched for ' + req.search_for);
  res.json({
  	gig: 'GiggyPOP launch party',
  	date: 1440187200,
  	venue: 'Your fave place',
  	venue_loc: 'With your Giggy Buddies!',
  	img_url: ''
  });
});

module.exports = router;
