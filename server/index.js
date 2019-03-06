const express = require('express');
const path = require('path');
const app = express();

// MongoDB stuff
require('dotenv').config()
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')

var db
app.use(bodyParser.urlencoded({extended: true}))
// app.use(express.static('public'))
app.use(bodyParser.json())

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up index.html file
  // if it doesn't recognize the route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.get('/test', (req, res) => {
  let data = { name: 'test' };
  res.json(data);
});

MongoClient.connect(`mongodb://${process.env.MDB_USER}:${process.env.MDB_PW}@ds117701.mlab.com:17701/test-some-quotes`, { useNewUrlParser: true }, (err, client) => {
  // ... start the server

  if (err) return console.log(err)

  db = client.db('test-some-quotes')

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
})
