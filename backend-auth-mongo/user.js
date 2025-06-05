const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  passwordHash: String
})

const User = mongoose.model('User', userSchema);

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString() //transformar ObjectId a string
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash //nunca mostrar hash
  }
})

module.exports = User;