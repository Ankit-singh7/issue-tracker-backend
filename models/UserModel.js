const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let userSchema = new Schema({

  userId: {
    type: String,
    default: '',
    index: true,
    unique: true
  },

  firstName: {
    type: String,
    default: ''
  },

  lastName: {
    type: String,
    default: ''
  },

  password: {
    type: String,
    default: ''
  },

  email: {
    type: String,
    default: ''
  },

  mobileNumber: {
    type: String,
    default: ""
  },

  country:{
    type: String,
    default: ''
  },

  recoveryPassword: { 
    type: String,
    default: ''
  },
  

  createdOn :{
    type:Date,
    default: new Date()
  },

  modifiedOn :{
    type:Date,
    default: new Date()
  }


})


mongoose.model('UserModel', userSchema);

