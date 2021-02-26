const express = require('express');
require('./models/users');
require('./services/passport');
const keys = require('./config/keys');

const app = express();
const mongoose = require('mongoose');

mongoose.connect(keys.mongoURI);

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);