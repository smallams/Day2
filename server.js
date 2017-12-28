const express = require('express');
const hbs = require('hbs');
const os = require('os');

var app = express();
var port=5000;

const myCPU = os.cpus();

// app.use(()=>{
//   console.log('hello');
//   next();
// });
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname +'/public'));

app.get('/', function (req, res) {
  // res.send('Home')
  res.render('home.hbs',{
    message: 'Home'
  });
})
app.get('/events', function (req, res) {
  // res.send('Home')
  res.render('events.hbs',{
    message: 'Events'
  });
})
app.get('/announcements', function (req, res) {
  // res.send('Home')
  res.render('announcements.hbs',{
    message: 'Announcements'
  });
})


app.listen(5000,()=>{
  console.log('Server is listening to port',port);
});
