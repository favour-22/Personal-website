const express = require("express");
const PORT = process.env.PORT || 4000;
const app = express();
const homeRouter = require('../routes/homeRoute');
const notfoundRouter = require('../routes/notfoundRoute')


app.use(express.static('public'));
app.use(express.json());
app.set('view engine','ejs');
require("dotenv").config({ path: ".env" });


app.use('/',homeRouter)
app.use('/',notfoundRouter)


module.exports = {app,PORT}