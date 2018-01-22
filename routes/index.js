const express = require('express');
const router = express.Router();
const wiki = require('./wiki.js');
const user = require('./user.js');


router.use('/wiki', wiki);
//router.get('/wiki/add',wiki);
router.use('/user', user);

router.get('/', function(req, res, next) {
    res.render('index');
  });
  
  router.post('/', function(req, res, next) {
    res.send('got to POST /wiki/');
  });
  
  router.get('/add', function(req, res, next) {
    res.send('got to GET /wiki/add');
  });

module.exports = router;