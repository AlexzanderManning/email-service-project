const mongoose = require('mongoose');

const { Schema } = mongoose;

//Schema is mutable can be changed freely.
const userSchema = new Schema({
  googleId: String
});

//Creating a new collection called users.
//Does not create a new collection if it already exists.
mongoose.model('users', userSchema);