const express =require('express');
const Authordata = require('../model/Authordata');
const authorsRouter = express.Router();
function router(nav2){
authorsRouter.get('/',function(req,res){
    Authordata.find()
    .then(function(authors){
        res.render("authors",{
            nav2,
            title:' V.K.Library-Authors',
            authors 
        });
    })
    
});
authorsRouter.get('/:id',function(req,res){
     const id = req.params.id;
     Authordata.findOne({_id:id})
     .then(function(author){
        res.render('author',{
            nav2,
           title:' V.K.Library-Authors',
           author
           
        });
     })
     
});
     return authorsRouter ;
}

module.exports = router;

