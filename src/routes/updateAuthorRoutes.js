const express = require('express');
const Authordata = require('../model/Authordata');
const updateAuthorRouter = express.Router();
function router(nav2){
updateAuthorRouter.get('/:id',function(req,res){
   const id = req.params.id;
     Authordata.findOne({_id:id})
     .then(function(author){
    res.render('updateAuthor',
    {
       nav2,
       title:"V.K.Library-Authors Updation",
       author
    });
   })
});
 updateAuthorRouter.post('/post2',function(req,res){
    var id = req.body._id;
    var item = {    
      title:  req.body.title,
description: req.body.description,
      image:  req.body.image
}
 // var author = Authordata(item);
            Authordata.findByIdAndUpdate(id,item,function(err,result){
               if(result){
                  res.redirect('/authors');
               }
               
     })
               
  });

  updateAuthorRouter.get('/deleteAuthor/:id',(req,res)=>{
   var id =req.params.id;
  // console.log(req.params);
   Authordata.findByIdAndDelete(id,(err,result)=>{
      if(result){
         res.redirect("/authors");
      }
   })
});
            return updateAuthorRouter;
}
        module.exports = router;