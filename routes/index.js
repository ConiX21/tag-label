var express = require('express');
var homeController = require('../controllers/homeController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  homeController.Index(req, res);
  //res.render('home/index', { title: 'Express' });
});

router.get('/result', function(req, res, next) {
  homeController.Result(req, res);
  //res.render('home/index', { title: 'Express' });
});

module.exports = router;
