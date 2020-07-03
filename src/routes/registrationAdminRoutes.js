const express = require('express');
const registrationAdminRouter = express.Router();
const Registrationdata = require('../model/Registrationdata');
function router(nav){
    registrationAdminRouter.post('/addSignUp',function(req,res){
        var item = {
          Email:  req.body.Email,
       Password: req.body.Password,
        Address:  req.body.Address,
       Address2: req.body.Address2,
        Country: req.body.Country,
          State: req.body.State
        }
      var registration = Registrationdata(item);
      registration.save();
      res.redirect('/login'); 
    });
    return registrationAdminRouter;
}
module.exports = router;
