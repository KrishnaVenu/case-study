const express = require('express');
const updateBookRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav2){
updateBookRouter.get('/:id',function(req,res){
   const id =req.params.id;
   Bookdata.findOne({_id:id})
   .then(function(book){
    res.render('updateBook',
    {
       nav2,
       title:"V.K.Library-Books Updation",
       book
    });
   })
});
 updateBookRouter.post('/post',function(req,res){
    var id = req.body._id;
   // console.log(id);
   var item = {    
      title:  req.body.title,
description: req.body.description,
      image:  req.body.image
}
     //var book = Bookdata(item);
            Bookdata.findByIdAndUpdate(id,item,function(err,result){
               if(result){
                  res.redirect("/books");
               }
     })
               
  });
            return updateBookRouter;
}
        module.exports = router;
