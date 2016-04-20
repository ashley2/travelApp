'use strict';

var app = angular.module('destApp');

app.service('DestService', function($http){

  this.getAll = function() {
    return $http.get('/destinations')
  }

  this.create = function(newDest) {
    return $http.post('/destinations', newDest);
  }

  this.delete = function(dest) {
    return $http.delete(`/destinations/${dest._id}`)
  }

  this.update = function(editDest) {
    return $http.put('/destinations', editDest);
  }
})



