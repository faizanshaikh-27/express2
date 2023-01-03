const express = require("express");
const app = express()
const port = 8000;

const middleware = (req, res, next) => {
    res.send(middleware)
    next()
}


app.get("/", (req, res)=> {
    res.send("This is a home page")
})

app.get("/about", (req, res) => {
    res.send("This is about page")
})

app.get("/contact", (req, res) => {
    res.send("This is contact page")
})

app.get("/object", (req, res) => {
    res.json([
        {
            id: 200,
            name: "Faizan",
            age: 23,
            city: "Mumbai"
        }
    ])
})

app.listen(port, ()=> {
    console.log(`Listening to port ${port}`)
})