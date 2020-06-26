const express = require('express');
const authorAdminRouter = express.Router();
const Authordata = require('../model/Authordata');
function router(nav2){
    authorAdminRouter.get('/',function(req,res){
        res.render("addAuthor",{
            nav2,
            title:"V.K.Library-Add Author"
        })
    })
    authorAdminRouter.get('/add',function(req,res){
        var item = {
          title:  req.query.title,
    description: req.query.description,
          image:  req.query.image
        }
      var book = Authordata(item);
      author.save();
      res.redirect('/authors'); 
    });
    return authorAdminRouter;
}
module.exports = router;