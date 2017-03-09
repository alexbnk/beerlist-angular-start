app.factory('beersFactory', function () {




var beers = [
  {
    id:0,
    name:"Corona 1",
    style: "light",
    abv: 5.9,
    image_url:"/img/Corona-Beer.jpg",
    ratings:[5,4,3,2,1],
    rating:3
  },
  {
        id:1,
      name: "Molson's Canadian",
      style: "Lager",
      abv: "MOL",
      image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Molson_Canadian.svg/1042px-Molson_Canadian.svg.png",
      ratings:[5],
      rating: 5
    },
    {
        id:2,
      name: "Moosehead",
      style: "Moose piss",
      abv: "MH",
      image_url: "http://moosehead.ca/wp-content/uploads/2015/10/cropped-moosehead_logo-180x180.png",
      ratings:[5],
      rating: 5
    },
    {
        id:3,
      name: "Alexander Keith's",
      style: "IPA",
      abv: "AK",
      image_url: "https://c1.staticflickr.com/9/8466/8140544321_75da7d4171.jpg",
      ratings:[3],
      rating: 3

    },
    {
        id:4,
      name: "Coor's",
      style: "Light Lager",
      abv: "Coors",
      image_url: "http://vignette3.wikia.nocookie.net/itsalwayssunny/images/b/bd/Coors_Light_Logo.jpg/revision/latest?cb=20110903221221",
      ratings:[4],
      rating: 4

    }
  ];



var addBeer = function(name,style,abv,image) {

  console.log ("Beers list has "+beers.length+ " items");
  console.log("addBeer function called within beersFactory with theses paramaters:")
  console.log(name,style,abv,image);
  var tempBeer= {id:beers.length+1,name: name, style: style, abv: abv,image_url: image,ratings:[1],rating:1};
  beers.push(tempBeer);

  console.log ("Beers list after push has "+beers.length+ " items");
  console.log (beers);
};

var removeBeer = function(id) {

  console.log ("Beers list has "+beers.length+ " items");
  console.log("removeBeer function called within beersFactory with theses paramaters:")
  console.log(id);
  beers.splice(id,1);
  console.log("Beer ID: "+id+" was removed");
  console.log ("Beers list after push has "+beers.length+ " items");

};

var rating = function(id) {
  var nRatings = beers[id].ratings.length;
  var rValue =0;
  var ratingValue =0;
  console.log(nRatings + " ratings found for beer "+id+" :")
   for (var i=0; i<nRatings ; i++) {
    rValue= rValue+beers[id].ratings[i];
    console.log(beers[id].ratings[i]);
   //console.log(nRatings);
 };
};

var rateThis = function (id,rate) {
  console.log("Beer # " +id + " was rated : "+rate+" stars");
  beers[id].ratings.push(rate);
  rating(id);
  console.log(beers);
};




  var beersObj = {
    beers:beers,
    addBeer: addBeer,
    removeBeer:removeBeer,
    rateThis : rateThis,
    rating: rating

    };


return beersObj;

});
