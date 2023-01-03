const express = require("express");
const app = express();

app.all('/user', (req, res, next) => {
    console.log('Accessing the user section');
    next();
  });

app.listen(2000, (err) => {
    if (err)console.log(err);
    console.log("Listening at port 2000");

}) 