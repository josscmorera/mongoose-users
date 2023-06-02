const Todo = require('../model/todo');

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({success: true, data: todos});
  } catch(err) {
    res.status(500).json({success: false, message: err});
  }
};

const createTodos = async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);
    const saveTodo = await newTodo.save();
    res.status(200).json({success: true, data: saveTodo});
  } catch(error) {
    res.status(500).json({success: false, message: error.message});
  }
};

// getalltodos based on priority

const getTodosByPriority = async (req, res) => {
  try {
    const todos = await Todo.find({priority: req.params.priority});
    res.status(200).json({success: true, data: todos});
  } catch(err) {
    res.status(500).json({success: false, message: err});
  }
};

// create a update todo function

const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ success: false, message: 'Todo not found' });
    }

    res.status(200).json({ success: true, data: updatedTodo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// delete function

const deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);

    if (!deletedTodo) {
      return res.status(404).json({ success: false, message: 'Todo not found' });
    }

    res.status(200).json({ success: true, data: deletedTodo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { 
  getAllTodos,
  createTodos,
  getTodosByPriority,
  updateTodo,
  deleteTodo
};