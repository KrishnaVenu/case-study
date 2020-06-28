const express =require('express');
const Authordata = require('../model/Authordata');
const authorsRouter = express.Router();
function router(nav2){
// var authors = [
//     {
//         title: 'JANE AUSTEN',
//         description:'Jane Austen was an English novelist known primarily for her six major novels, which interpret, critique and comment upon the British landed gentry at the end of the 18th century. Austens plots often explore the dependence of women on marriage in the pursuit of favourable social standing and economic security.While Austen received some accolades for her works while still alive, with her first three novels garnering critical attention and increasing financial reward, it was not until after her death that her brother Henry revealed to the public that she was an author.',
//         img:'img13.jpg'
//     },
//     {
//         title: 'DAN BROWN',
//         description:'Daniel Gerhard Brown is an American author best known for his thriller novels, including the Robert Langdon novels Angels & Demons, The Da Vinci Code, The Lost Symbol, Inferno and Origin. His novels are treasure hunts that usually take place over a period of 24 hours.The author of numerous #1 bestselling novels, including The Da Vinci Code, which has become one of the best selling novels of all time as well as the subject of intellectual debate among readers and scholars. Browns novels are published in 52 languages around the world with 200 million copies in print.',
//     img:'img16.jpg'
//     },
//     {
//         title: 'J K ROWLING',
//         description:'Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL, better known by her pen name J. K. Rowling, is a British author, film producer, television producer, screenwriter, and philanthropist.In 2012, Forbes removed Rowling from their rich list, claiming that her US$160 million in charitable donations and the high tax rate in the UK meant she was no longer a billionaire. ... She also writes crime fiction under the name Robert Galbraith.In 1995, Rowling finished her manuscript for Harry Potter and the Philosophers Stone which was typed on an old manual typewriter.',
//     img:'img14.jpg'
//     },
//     {
//         title:'ANTON CHEKHOV',
//         description:'Russian writer Anton Chekhov is recognized as a master of the modern short story and a leading playwright of the late 19th and early 20th centuries.The majority of Chekhovs stories are written in the narrative, omniscient point of view. The advantage to the reader this style provides is knowing the thoughts, feelings and actions of all characters.The Steppe, Ward No. 6, Uncle Vanya, The Cherry Orchard, Three Sisters, On Trial, The Darling, The Bet, Vanka, After the Theatre and many more (Unabridged): Plays, Short Stories, Novel and A Biography are the popular works.',
//         img:'img18.jpg'
//     },
//     {
//         title:'MARGARET ATWOOD',
//         description:'Margaret Atwood is a Canadian writer best known for her prose fiction and for her feminist perspective. Role reversal and new beginnings are recurrent themes in her novels, all of them centred on women seeking their relationship to the world and the individuals around them. In her novels, short stories and even poetry uses a similar style of writing.Using parallelism and symbolism as springboards, Margaret Atwood writes to inform and perhaps warn her reader of the exploitation of women and sometimes even helpless men who exist within a society.',
//         img:'img19.jpg'
//     },
//     {
//         title:'STEPHEN KING',
//         description:'Stephen Edwin King is an American author of horror, supernatural fiction, suspense, and fantasy novels. His books have sold more than 350 million copies, many of which have been adapted into films, television series, miniseries, and comic books.Salems Lot is one of Kings best works to date. This book presents a disturbing tale of vampires and how a local outcast is a towns only hope for stopping them. This was Kings second novel. It proved to be a best-selling book for its time back in 1975.He was made to write stories and love to write stories.',
//         img:'img15.jpg'
//     } 
// ]
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

