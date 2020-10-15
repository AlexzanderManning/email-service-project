const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require('cookie-session');
const passport = require("passport");
const keys = require('./config/keys');
//Requiring a file a not assigning anything to it. Allows the file to run as if it were placed inlin here.
require('./models/user');
require('./services/passport');

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true },
);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

//Reqiured for passport to use cookies
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
