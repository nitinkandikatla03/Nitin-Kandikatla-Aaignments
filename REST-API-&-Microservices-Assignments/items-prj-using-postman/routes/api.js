const express = require('express');
const router = express.Router();
const Item = require('../models/items');

router.get('/items',(req,res) => {
    Item.find({}).then( (items) => {
        res.send(items)
    })
    
})

router.post('/items',(req,res,next) => {
    console.log(req.body);
    Item.create(req.body)
    .then( (item) =>{   
        res.send(item);
    })
    .catch(next)
    
})

router.put('/items/:id',(req,res,next) => {
    Item.findByIdAndUpdate({_id:req.params.id}, req.body)
    .then( () => {
        Item.findOne({_id: req.params.id}).then( (item) => {
            res.send(item);
        })
    })
    
})

router.delete('/items/:id',(req,res,next) => {
    Item.findByIdAndRemove({_id: req.params.id})
    .then( (item) => {
        res.send(item)
    })
    .catch(next)
    // res.send({type: 'delete'});
})

module.exports = router;