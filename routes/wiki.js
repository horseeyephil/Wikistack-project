const express = require('express');
const router = express.Router();



router.get('/wiki/',function(req,res){
    res.redirect('/');
})


router.get('/wiki/add',function(req,res){
    res.render('addpage');
})


module.exports = router;