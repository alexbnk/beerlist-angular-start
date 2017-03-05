app.factory('beersFactory', function () {

var beers = [
  {
    "name":"Corona 1",
    "style": "light",
    "abv": 5.9,
    "image_url":"/img/Corona-Beer.jpg"
},
{
  "name":"Corona 2",
  "style": "light",
  "abv": 5.9,
  "image_url":"/img/Corona-Beer.jpg"
},
{
  "name":"Corona 3",
  "style": "light",
  "abv": 5.9,
  "image_url":"/img/Corona-Beer.jpg"
},
{
  "name":"Corona 4",
  "style": "light",
  "abv": 5.9,
  "image_url":"/img/Corona-Beer.jpg"
},
{
  "name":"Corona 5",
  "style": "light",
  "abv": 5.9,
  "image_url":"/img/Corona-Beer.jpg"
},
{
  "name":"Corona 6",
  "style": "light",
  "abv": 5.9,
  "image_url":"/img/Corona-Beer.jpg"
},
{
  "name":"Corona 7",
  "style": "light",
  "abv": 5.9,
  "image_url":"/img/Corona-Beer.jpg"
},
{
  "name":"Corona 8",
  "style": "light",
  "abv": 5.9,
  "image_url":"/img/Corona-Beer.jpg"
}
  ];

var addBeer = function(name,style,abv,image) {

  console.log ("Beers list has "+beers.length+ " items");
  console.log("addBeer function called within beersFactory with theses paramaters:")
  console.log(name,style,abv,image);
  var tempBeer= {name: name, style: style, abv: abv,image_url: image};
  beers.push(tempBeer);
  console.log ("Beers list after push has "+beers.length+ " items");

};

var removeBeer = function(id) {

  console.log ("Beers list has "+beers.length+ " items");
  console.log("removeBeer function called within beersFactory with theses paramaters:")
  console.log(id);
  beers.splice(id,1);
  console.log("Beer ID: "+id+" was removed");
  console.log ("Beers list after push has "+beers.length+ " items");

};




  var beersObj = {
    beers:beers,
    addBeer: addBeer,
    removeBeer:removeBeer
    };


return beersObj;

});
