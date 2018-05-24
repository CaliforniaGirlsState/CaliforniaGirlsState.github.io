const express = require('express');
const path = require('path');

const app = express();

// Middleware below!
function isAuthenticated(req, res, next) {
  // Do any checks you want to in here

  // CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE
  // you can do this however you want with whatever variables you set up
  // if (req.user.authenticated) {
  //   return next();
  // }
  //
  // // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
  // res.redirect('/');
  console.log(`${req.url}`);
  next();
}

app.use(isAuthenticated);


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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
