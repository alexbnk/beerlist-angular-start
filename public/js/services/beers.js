app.factory('beersFactory', function () {

var beers = [
  {
    "name":"Corona",
    "style": "light",
    "abv": 5.9,
    "image_url":"/img/Corona-Beer.jpg"
}
  ];

return { beers:beers
  };

});
