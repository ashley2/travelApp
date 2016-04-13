'use strict'

var express = require('express');
var router = express.Router();

var Dest = require('../models/dest');


router.get('/', (req, res) => {
  Dest.find({}, (err, data) => {
    if(err) {
      return res.status(400).send(err)
    }
    res.send(data);
  })
})

router.post('/', (req, res) => {
  Dest.create(req.body, (err, destination) =>{
    if(err) {
      return res.status(400).send(err)
    }
    res.send(destination);
  })
});

router.put('/', (req, res) => {
  Dest.findByIdAndUpdate(req.body._id, req.body, (err, destination) => {
    if(err) {
      return res.status(400).send(err)
    }
    res.end();
  })
})

router.delete('/:id', (req, res) => {
  Dest.findByIdAndRemove(req.params.id, (err) => {
    if(err) {
      return res.status(400).send(err)
    }
    res.end();
  })
})



module.exports = router;
