const express = require("express");
const path = require("path");

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '../public')));

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, '../public'));


app.get('/product', (req, res)=> {
    if(!req.query.search) 
    return res.send({
        abc : "one"
    })
    else {
        res.send("product ");
    }

    
})

app.get('', (req, res)=>{
    res.render('index.hbs', {
        title:"weather app",
        name : "GOD"
    })
})

app.get('/about', (req, res) => {
    //console.log(req.query);
    res.render('about')
})

app.get('', (req, res)=> {
    res.send("hello express ")
})

app.get("/help", (req, res)=> {
    res.send("help you ")
})

app.get("*", (req, res) => {
    res.send("hello 404 page")
})
app.listen(3000, ()=> {
    console.log("app running on port 3000");
})