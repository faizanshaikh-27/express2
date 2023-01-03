const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
    res.send("Hello World")
})

app.get("/hello/:name", (req, res) => {
    const name = req.params.name
    res.send(`Hello ${name}`)
})

app.listen(5000, () => {
    console.log("listening at port 5000")
})