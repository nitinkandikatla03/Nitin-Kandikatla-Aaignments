const express = require('express');
const router = express.Router();
const Item = require('../models/items');
const bodyParser = require('body-parser');
// const ulr = require('../app')


// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// router.get('/items',(req,res) => {
//     Item.find({})
//     .then( (items) => {
//         res.render('home', {items});
//     })
    
// })

// router.post('/items',url, function(req,res){
//     var str1=req.body.str;
//     var str2 =  req.body.number;
//     console.log(str1)
//     console.log(str2)
//     // items.push({item: str1});
//     // console.log(items);
//     // console.log(req.body);
//     // Item.create(req.body)
//     // .then( (item) =>{
//     //     res.send(item);
//     // })
//     // .catch(next)
//     // res.render('home',{items})
//     res.send("succ");
// })


module.exports = router;