const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;
const RegistrationSchema = new Schema({
      Email: String,
   Password: String,
    Address: String,
   Address2: String,
      Country: String,
      State: String
});
var Registrationdata = mongoose.model('registrationdata',RegistrationSchema);
module.exports =Registrationdata;