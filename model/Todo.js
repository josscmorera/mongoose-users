const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const TodoSchema = new mongoose.Schema({
    _id: {type: String, default: () => uuidv4()},
    title: {type: String, required: true,},
    description: {type: String, required: true,},
    priority: {type: String, enum: ['low', 'medium', 'high'], default: 'medium',},
    completed: {type: Boolean, default: false,},
    createdAt: {type: Date, default: Date.now,},
  });
  
const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;