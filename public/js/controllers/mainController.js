app.controller('submitBeerCtrl', function($scope,beersFactory){

//$scope.beers=beersFactory.beersObj;


$scope.addBeer = function() {

  console.log("hello i'm a controller");
  beersFactory.addBeer($scope.name, $scope.style, $scope.abv,$scope.image);
};


// This DOES NOT WORK !!!??????? WHY ?
// $scope.addBeer = beersFactory.beersObj.addBeer;



// $scope.addBeer = function() {
//
// console.log($scope.name, $scope.style,$scope.abv, $scope.image)
//
// };
//beersFactory.beersObj.addBeer;

//$scope.buyMovie = moviesFactory.buyMovie;
// $scope.change = todoFactory.change;
// $scope.delete = todoFactory.delete;
// $scope.add = todoFactory.add;
// $scope.done = todoFactory.done;

// closes controller

});

app.controller('beersListCtrl', function($scope,beersFactory){
$scope.beers = beersFactory.beers;
$scope.removeBeer = function (id) {
  console.log("removeBeer called in controller!! with this id:"+ id);
  beersFactory.removeBeer(id);
};
});
