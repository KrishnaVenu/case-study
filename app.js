const express =require('express');
const app = express();
const nav = [
    {
        link:'/login',name:'Login'
    },
    {
        link:'/registration',name:'Sign Up'
    }
];
const nav2 =[
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/books',name:'Books'
    },
    {
        link:'/admin',name:'Add Book'
    },
    {
        link:'/admin2',name:'Add Author' 
    }
];
const homeRouter = require("./src/routes/homeRoutes")(nav2);
const authorsRouter = require("./src/routes/authorRoutes")(nav2);
const booksRouter = require("./src/routes/bookRoutes")(nav2);
const adminRouter = require("./src/routes/adminRoutes")(nav2);
const authorAdminRouter = require("./src/routes/authorAdminRoutes")(nav2);
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set("view engine","ejs");
app.set("views","./src/views");
app.use("/home",homeRouter);
app.use("/authors",authorsRouter);
app.use('/books',booksRouter);
app.use('/admin',adminRouter);
app.use('/admin2',authorAdminRouter);
app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'V.K.Library'
    });
});
app.get('/login',function(req,res){
    res.render("login",
    {
        nav,
        title:'V.K.Library -Login'
    });
});
app.get('/registration',function(req,res){
    res.render("registration",
    {
        nav,
        title:'V.K.Library-Registration'
    });
});


app.listen(3222);
