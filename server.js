var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Form = require('./formSchema');

var MONGODB_URI = 'mongodb://heroku_ln4xsgzs:6hb7nbg9hcpfr92s8dboto8bbo@ds129320-a0.mlab.com:29320,ds129320-a1.mlab.com:29320/heroku_ln4xsgzs?replicaSet=rs-ds129320'

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/partments');

// mongoose.Promise = Promise


var app = express();

app.use(express.static('public'))
app.use(express.static('node_modules'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/form', function(req,res){
  var contact = new Form(req.body);
  contact.save(function(err, contact){
    if (err) return console.error(err);
    console.log(contact);
  })
  res.send('ok');
})



var port = process.env.PORT || '3000';

app.listen(port);

// app.set('port', (process.env.PORT || 3000));
// app.listen(app.get('port'),function(){
//   console.log('partments' server running at', app.get('port'));
// });