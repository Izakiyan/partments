var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var formSchema = new Schema({
  name:  String,
  email: String,
  phone: Number
});

var Form = mongoose.model('Form', formSchema);

module.exports = Form;
