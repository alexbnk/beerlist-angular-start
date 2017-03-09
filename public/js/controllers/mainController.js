app.controller('submitBeerCtrl', function($scope,beersFactory){

//$scope.beers=beersFactory.beersObj;

theBeers = beersFactory.theBeers;
theBeers();

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
$scope.doOrder = false;
$scope.sort  = function() {
  if ($scope.doOrder==true) {
    $scope.doOrder=false;
  } else {
    $scope.doOrder=true;
  }
};

$scope.rateThis =beersFactory.rateThis;
// $scope.rateThis = function (id,rate) {
//   console.log("Beer # " +id + " was rated : "+rate+" stars");
//   beersFactory.beers[id].ratings.push(rate);
//   $scope.rating(id);
//   console.log(beersFactory.beers);
//   };

$scope.removeBeer = function (id) {
  console.log("removeBeer called in controller!! with this id:"+ id);
  beersFactory.removeBeer(id);

};

// $scope.rating = function(id) {
//   var nRatings = beersFactory.beers[id].ratings.length;
//   var rValue =0;
//   var ratingValue =0;
//   console.log(nRatings + " ratings found for beer "+id+" :")
//    for (var i=0; i<nRatings ; i++) {
//     rValue= rValue+beersFactory.beers[id].ratings[i];
//     console.log(beersFactory.beers[id].ratings[i]);
//    //console.log(nRatings);
//  };
$scope.rating = beersFactory.rating;




   //  set rating in object

});
