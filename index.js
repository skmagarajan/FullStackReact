const express = require('express');
const passport = require('passport');
const keys = require('./config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();

passport.use(
		new GoogleStrategy({
				clientID: keys.googleClientID,
				clientSecret: keys.googleClientSecret,
				callbackURL: '/auth/google/callback'
		}, 
		accessToken => {
				console.log(accessToken);	
		})
);

app.get('/auth/google', 
		passport.authenticate('google', {
				scope: ['profie','email']
		})
);

app.get('/',(req,res)=> {
   res.send({hi: 'SK'}); 
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);