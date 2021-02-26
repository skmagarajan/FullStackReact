const passport = require('passport');
const keys = require('../config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.use(
	new GoogleStrategy({
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: 'http://localhost:5000/auth/google/callback'
	}, 
	(accessToken,refreshToken,profile,done) => {
			console.log(accessToken);	
			console.log(profile);
			
			User.findOne({googleID:profile.id})
			.then( (present_user) => {
				if(present_user){
					console.log("Already Joined");
					done(null,present_user);
				}
				else{
					console.log("New User");
					new User({googleID:profile.id}).save().then(user => done(null,user));
				}
			});
			
	})
);
