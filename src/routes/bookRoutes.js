const express =require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav2){

         booksRouter.get('/',function(req,res){
                 Bookdata.find()
                 .then(function(books){
                        res.render("books",{
                            nav2,
                            title:' V.K.Library-Books',
                            books 
                        });
         })
        });
           
        booksRouter.get('/:id',function(req,res){
             const id = req.params.id;
             Bookdata.findOne({_id:id})
             .then(function(book){
                res.render('book',{
                   nav2,
                   title:' V.K.Library-Books',
                   book
                   
                });
             })
            
        });
             return booksRouter ;
}

module.exports = router;







