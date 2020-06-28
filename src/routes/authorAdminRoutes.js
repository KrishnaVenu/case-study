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
    authorAdminRouter.post('/addAuthor',function(req,res){
        var item = {
          title:  req.body.title,
    description: req.body.description,
          image:  req.body.image
        }
      var author = Authordata(item);
      author.save();
      res.redirect('/authors'); 
    });
    return authorAdminRouter;
}
module.exports = router;
