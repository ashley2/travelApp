var app = angular.module('destApp');

app.controller('destCtrl', function($scope, DestService){


  DestService.getAll()
  .then(function(res){

    var destinations = res.data;
    $scope.destinations = destinations;
    

  }, function(err){
    console.log(err);
  });


  $scope.addDest = function(){
    DestService.create($scope.newDest)
    .then(function(res){
      $scope.destinations.push(res.data)
      $scope.newDest = {}
    }, function(err){
      console.log(err)
    }); 
  };

  $scope.viewDest = null;

  $scope.seeMore = function(dest){
    $scope.viewDest = dest;
  }

  $scope.seeLess = function(){
    $scope.viewDest = null;
  }

  $scope.update = function(viewDest){
    DestService.update(viewDest)
    .then(function(){
      swal("Great!", "Your adventure has been saved!", "success")
    }, function(err){
      console.log(err);
    })
  }

  $scope.deleteDest = function(dest){
    swal({   title: "Are you sure?",   
      text: "You will not be able to recover this adventures info!",
      type: "warning",
      showCancelButton: true, 
      confirmButtonColor: "#DD6B55", 
      confirmButtonText: "Yes, delete it!",
      closeOnConfirm: false },
      function(){   
        DestService.delete(dest)
        .then(function(){
          var index = $scope.destinations.indexOf(dest);
          $scope.destinations.splice(index, 1);
          $scope.viewDest = null;
          swal("Deleted!",
           "Your adventure has been deleted.",
           "success"); 
        })
      }, function(err){
        console.log('err ' , err);
      })
  }
  
})

