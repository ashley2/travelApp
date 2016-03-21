'use strict';

var mongoose = require('mongoose');

var DestSchema = mongoose.Schema({
  city: {type: String, required:true},
  country: {type: String, required:true},
  saved: {type: Number, default:0},
  price: {type: Number},
  photo: {type: String, required:true}
});

module.exports = mongoose.model("Dest", DestSchema)