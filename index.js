const express = require('express');
const app = express();

// Middleware below!
function isAuthenticated(req, res, next) {
  // Do any checks you want to in here

  // CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE
  // you can do this however youw ant with whatever variables you set up
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

app.get('/', (req, res, next) => {
  res.send('auth');
});

app.get('/img/cags_logo_primary.png', (req, res, next) => {
  res.send('./client/src/img/cags_logo_primary.png');
});

app.get('/vote', (req, res, next) => {
  res.send('vote');
});

if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	// like our main.js file, or main.css file!
	app.use(express.static('client/build'));

	// Express will serve up index.html file
	// if it doesn't recognize the route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
