var express = require('express');
var router = express.Router();
var idexmodel=require('../models/idexmodel')

/* GET home page. */
router.get('/', (req, res, next)=> {
  res.render('index');
});
router.get('/login',(req, res, next) =>{
  res.render('login');
});
router.get('/register',(req, res, next) =>{
  res.render('register');
});
router.post('/Register', (req, res, next)=> {
  idexmodel.registerUser(req.body).then((result)=>{
    if(result==0)
       res.render('Register',{'output':'register succesfuly.........'});
    else
       res.render('Register',{'output':'User alredy exits,please try again'});
  }).catch((err)=>{
    console.log(err)
  })
 
});

module.exports = router;
