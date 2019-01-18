const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let CommentSchema = new Schema({

  commentId: {
    type: String,
    default: ''
  },
    
  issueId: {
    type: String,
    default: ''
  },

  userId: {
    type: String,
    default: ''
  },

  userName: {
    type: String,
    default: ''
  },


  comment: {
    type: String,
    default: ''
  },

  commentedOn :{
    type:Date,
    default: new Date()
  }

})


mongoose.model('CommentModel', CommentSchema);