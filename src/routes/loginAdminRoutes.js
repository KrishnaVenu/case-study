const express = require('express');
const loginAdminRouter = express.Router();
const Logindata = require('../model/Logindata');
function router(nav){
    //adminRouter.get('/',function(req,res){
        // res.render("addBook",{
        //     nav2,
        //     title:"V.K.Library-Add Book"
        // })
    //})
    loginAdminRouter.post('/addLogin',function(req,res){
        var item = {
          Email:  req.body.Email,
       Password: req.body.Password   
        }
         var login = Logindata(item);
       res.redirect('/home'); 
    });
    return loginAdminRouter;
}
module.exports = router;