'use strict';

var app = angular.module('destApp');

app.service('DestService', function($http){

  this.getAll = () => $http.get('/destinations')

  this.create = (newDest) => $http.post('/destinations', newDest);

  this.delete = (dest)  => $http.delete(`/destinations/${dest._id}`)

  this.update = (editDest) => $http.put('/destinations', editDest);
})



