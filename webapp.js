const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))


app.get('/andrew', function (req, res)  {
  res.send('Hello Andrew!');
});

app.get('/jenn', function(req, res) {
  res.send('Hello Jenn!');
});

app.get('/ayana', function(req, res) {
  res.send('Hello Ayana!');
});

app.get('/melissa', function(req, res) {
  res.send('Hello Melissa!');
});