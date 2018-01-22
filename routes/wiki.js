const express = require('express');
const router = express.Router();
const models = require('../models');
const page = models.page;
const user = models.user;


router.get('/',function(req,res){
    res.redirect('/');
})


router.get('/add',function(req,res){
    res.render('addpage');
})



function generateUrlTitle (title) {
    if (title) {
      // Removes all non-alphanumeric characters from title
      // And make whitespace underscore
      return title.replace(/\s+/g, '_').replace(/\W/g, '');
    } else {
      // Generates random 5 letter string
      return Math.random().toString(36).substring(2, 7);
    }
  }


router.post('/',function(req,res){

    // const newpage = page.build({
    //     title: 'Apples',
    //     content: 'are red',
    //     urlTitle: 'apples',
    //     status: 'open'
    // });

    // res.send('Hello');

    const newpage = page.build({
        title: req.body.title,
        content: req.body.content,
        urlTitle: generateUrlTitle(req.body.title),
        status: req.body.status
    });
    newpage.save().then(function(result){
        res.json(result);
    });


    //res.redirect('/');
})



module.exports = router;