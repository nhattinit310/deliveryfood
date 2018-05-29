const express = require("express");
const jsonParser = require('body-parser').json();
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/',(req,res) => res.send({'id':1,'name':'Tin'}));
app.post('/login',jsonParser,(req,res) =>res.send(req.body));





app.listen(3000, () => console.log('Server is running!'));
