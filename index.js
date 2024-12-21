const express = require("express");
const app = express();
const port = 4000

app.set('view engine', 'ejs'); 

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express


app.get('/', (req, res) => {
    let siteName  = "Adidas"
    let searchText = "Search Now"
    let arr = [1 ,2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11]
    res.render('index', {siteName: siteName , searchText: searchText , arr})
})



app.get ('/blog/:slug' , (req, res) => {
    let blogTitle = "Adidas Why And When?"
    let blogContent = "Adidas has been a global sportswear brand for over 20 years, with a strong commitment to innovation and sustainability. It started as a small clothing company in the 1970s, and has since diversified into various brands, including footwear, clothing, and accessories."
    res.render('blogpost', {blogTitle: blogTitle , blogContent: blogContent})
})

app.listen(port , ()=>{
    console.log(`Port is running on ${port}`);
})