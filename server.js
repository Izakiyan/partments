var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Form = require('./formSchema');

mongoose.connect('mongodb://localhost/partments');



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
