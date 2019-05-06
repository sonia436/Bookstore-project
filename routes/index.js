var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
router.get('/subpage', function(req, res) {
  res.render('subpage');
});

router.get('/addbook', function(req, res) {
  res.render('addbook');
});
router.get('/Books', function(req, res) {
  res.render('Books');
});

router.get('/Home', function(req, res) {
  res.render('Home');
});

router.get('/search', function(req, res) {
  res.render('search');
});
router.get('/order', function(req, res) {
  res.render('order');
});

router.get('/Feedback', function(req, res) {
  res.render('Feedback');
});


module.exports = router;
