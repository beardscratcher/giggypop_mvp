var express = require('express');
var router = express.Router();

/* Results for search. */
router.get('/search/:search_for', function(req, res, next) {
  var search_for = req.params.search_for;

  var search_result = {
    gig: search_for,
    date: 1440187200,
    venue: 'Your fave place',
    venue_loc: 'With your Giggy Buddies!',
    img_url: ''
  };
  var index = 0;

  if (req.session.searches) {
    index = req.session['searches'].push(search_for) - 1;
  } else {
    req.session.searches = [search_for];
  }

  search_result['result_token'] = index;

  res.json(search_result);
});

module.exports = router;
