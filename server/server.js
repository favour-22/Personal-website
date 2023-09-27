const express = require("express")
require("dotenv").config()
const PORT = process.env.PORT || 3001
const path = require("path")

const app = express();
app.use(express.json());


app.use(express.static('public'));
//set to use ejs
app.set('view engine','ejs');

app.get('/on', (req,res) => {
  res.render('index');
});

app.get('/', (req,res) => {
    res.render('main');
  });

app.get('/about', (req,res) => {
  res.render('about')

});
app.use((req,res,next) => {
  res.status(404);
  res.render('404')
})

app.listen(PORT, () => {
	console.log(`server listenting on ${PORT}`);
});
