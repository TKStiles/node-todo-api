var mongoose = require ('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true, //required for entries
    minlength: 1, //minimum string length
    trim: true //removes beginning and ending white space
  },
  completed: {
    type: Boolean,
    default: false //creates a default value
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};
