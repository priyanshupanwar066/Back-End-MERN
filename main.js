const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))

//app.get , or app.post , or app.put , or app.delete (path , handler)
app.get('/', (req, res) => {
  res.send('Hello World 22!')
})


app.get('/about' , (req, res) => {
    res.send('About Page')
})

app.get('/contact', (req, res) => {
    res.send('Contact Page')
})

app.get('/products', (req, res) => {
    res.send('Products Page')
})

app.get('/admin', (req, res) => {
    res.send('Priyanshu Panwar ')
})


app.get('/blog' , (req, res) => {
    res.send('Blog Page')
})


app.get("/blog/:slug" , (req , res )=>{
    //logic to fetch {slug} from the db

    console.log(req.params); //will output { slug: 'priya' }
    console.log(req.query); //will output { mode: 'dark', 'region-in': ''}

    
    res.send(`hello ${req.params.slug}`)

    // res.send(`hello ${req.params.slug}  and ${req.params.second}`)
})



// app.get("/blog/intro-to-js" , (req , res )=>{
//     //logic to fetch intro to js from the db
//     res.send("Intro to the Express Js in JavaScript")
// })

// app.get("/blog/intro-to-py" , (req , res )=>{
//     //logic to fetch intro to py from the db
//     res.send("Intro to the python")
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})