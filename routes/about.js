const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.render('about/index', {
        title: 'about Page',
        layout :'secondary'
    })
});

router.get('/us', function(req, res){
    res.render('about/us')
})

router.get('/product', function(req, res){
    res.render('about/product')
})


module.exports = router;
