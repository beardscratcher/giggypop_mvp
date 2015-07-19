var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/payment', function(req, res, next) {
  res.render('payment', {
    title: 'Invite to',
    exp_months: [
      { "month": "January" },
      { "month": "Febuary" },
      { "month": "March" },
      { "month": "April" },
      { "month": "May" },
      { "month": "June" },
      { "month": "July" },
      { "month": "August" },
      { "month": "September" },
      { "month": "October" },
      { "month": "November" },
      { "month": "December" },
    ],
    exp_years: [
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025,
      2026,
      2027,
      2028,
      2029,
      2030,
      2031,
      2032,
      2033,
      2034,
    ]
  });
});

module.exports = router;
