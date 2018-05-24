const express = require("express");
const jsonParser = require('body-parser').json();
const app = express();

app.get('/',(req,res) => res.send('Hello'));
app.post('/login',jsonParser,(req,res) =>res.send(req.body));





app.listen(3000, () => console.log('Server is running!'));
