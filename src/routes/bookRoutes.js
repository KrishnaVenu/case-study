const express =require('express');
const booksRouter = express.Router();
function router(nav2){
    var books = [
        {
                title: 'LOLITHA',
          description: ' Narrated by a middle-aged man named Humbert Humbert, the book tells the story of his obsession with a 12-year-old girl named Dolores Haze (Lolita) and the sexual relationship he forces her into. In the novel, Dolores eventually escapes Humbert, who has an emotional breakdown. In time, when they next see each other, Dolores is pregnant but suffering financially. Despite her difficult circumstances, she has overcome her past and made a life for herself. There’s a glimpse of a better future.',
                  img: 'image1.jpg'
        },
        {
                title: 'MADAME BOVARY',
          description: 'Flaubert transformed a commonplace story of adultery into an enduring work of profound humanity. Madame Bovary is considered Flauberts masterpiece, and, according to some, it ushered in a new age of realism in literature. A seminal work of literary realism, the novel is now considered Flauberts masterpiece, and one of the most influential literary works in history. Emma Bovary is beautiful and bored, trapped in her marriage to a mediocre doctor and stifled by the banality of provincial life. ',
                  img: 'image2.jpeg'
        },
        {
                title: 'ANNA KARENINA',
          description: 'Anna Karenina” is, obviously, a tragedy. A woman risks everything she has, including her own life, in pursuit of true love, and the pursuit is ultimately fatal.No one can set a scene and then let the characters loose to interact as well as Tolstoy. Anna Karenina is great because it shows you Tolstoys greatness, but is MUCH less intimidating than War & Peace.Her desperation ends with her suicide. Having gone to the train station to meet Vronsky, Anna instead throws herself under a train.',  
                  img:   'image3.jpg'
        },
        {
                title: 'THE BLUE UMBRELLA',
          description: 'The Blue Umbrella is a 2013 computer-animated short film produced by Pixar Animation Studios that was released alongside Monsters University. The short is directed by Saschka Unseld of Pixars technical department. The short features techniques such as photorealistic lighting, shading, and compositing.I personally felt that the main theme of the story is to keep others happy by doling out the things that you love most. It is tough to renounce the things that we love.',
                  img:   'img20.jpg'
        }, 
        {
                title: 'EVERYTHING EVERYTHING',
          description: 'Everything, Everything, the upcoming teen romance starring Amandla Stenberg and Nick Robinson, is gearing up to take the box office by storm. ... Everything, Everything isnt based on a true story, but on a book of the same name by Nicola Yoon.The thing I loved most though about Everything, Everything, was the deeper message of the novel. The idea that love and life and adventure are risky, but everything is risky, even doing absolutely nothing at all. “Everythings a risk. Not doing anything is a risk.',
                  img:   'img21.jpg'
        },
        {
                title: 'THE STORY OF MY LIFE',
          description:'The Story of My Life is an autobiography by activist Helen Keller in which she recounts her early experiences and education.The main themes in The Story of My Life are education in special circumstances, perseverance against the odds, and human kindness.The Story of My Life is worth reading primarily because it is a compelling account of one womans triumph against the odds. ... Such an inspiring story of hope, especially one as well-written as this one, is always well worth reading.',
                  img: 'img22.jpg'
        }  
]
         booksRouter.get('/',function(req,res){
            res.render("books",{
                    nav2,
                title:' V.K.Library-Books',
                books 
            });
        });
        booksRouter.get('/:id',function(req,res){
             const id = req.params.id
             res.render('book',{
                     nav2,
                title:' V.K.Library-Books',
                book:books[id]
                
             })
        })
             return booksRouter ;
}

module.exports = router;






