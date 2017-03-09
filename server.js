var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/beersDB', function(err){
if (err) throw err;
});

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var Beer = require("./public/BeerModel");


app.get('/', function(req, res) {
  res.send('Beers Server is UP')
})



app.get('/beers', function (req, res, next) {
  Beer.find({},{}, function (error, beers) {
    if (error) {
      console.error(error)
      return next(error);
    } else {

      res.send(beers);
      console.log("beers list provided");
    }
  });
});

app.post('/beers', function(req, res, next) {
  console.log(req.body);
  Beer.create(req.body, function(err, beer) {
    if (err) {
      console.error(err)
      return next(err);
    } else {
      res.json(beer);
    }
  });
});

app.delete('/beers/:id', function(req, res, next) {
  console.log(req.params.id);
Beer.findByIdAndRemove(req.params.id, function (err,beer) {

    res.send( "Beer " + req.params.id + " deleted");
});
});

app.put('/beers/:id', function(req, res, next) {
//  console.log(req.params.id);
//  console.log(req.body);
Beer.findOneAndUpdate({_id:req.params.id} , req.body, req.body ,function (err,beer) {

  // modifying the beer here:
//res.json(beer);



 });







});





app.listen(8000, function() {
  console.log("Fullstack beers project. Listening on 8000.")

});
