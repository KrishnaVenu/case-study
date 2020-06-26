const express = require('express');
const adminRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav2){
    adminRouter.get('/',function(req,res){
        res.render("addBook",{
            nav2,
            title:"V.K.Library-Add Book"
        })
    })
    adminRouter.get('/add',function(req,res){
        var item = {
          title:  req.query.title,
    description: req.query.description,
          image:  req.query.image
        }
      var book = Bookdata(item);
      book.save();
      res.redirect('/books'); 
    });
    return adminRouter;
}
module.exports = router;