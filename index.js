const express = require('express');
require('./models/users');
require('./models/surveys');
require('./services/passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');

const app = express();
const mongoose = require('mongoose');

const cookieSession = require('cookie-session');
const passport = require('passport');


mongoose.connect(keys.mongoURI);

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
	
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/surveyRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);