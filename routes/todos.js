const express = require('express');
const router = express.Router();
const { getAllTodos, createTodos, getTodosByPriority, updateTodo, deleteTodo } = require('../controller/todosController');

router.get("/all-todos", getAllTodos);
router.post("/create-todo", createTodos);
router.get("/priority/:priority", getTodosByPriority);
router.put('/update/:id', updateTodo);
router.delete('/delete/:id', deleteTodo);

module.exports = router;
