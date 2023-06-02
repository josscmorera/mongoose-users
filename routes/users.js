const express = require('express');
const router = express.Router();
const { getAllUsers,
  createUser,
  getUserByEmail,
  getUsersByName,
  updateUserById,
  deleteUserById } = require('../controller/usersController');

const User = require('../model/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// POST /users

router.get('/all-users', getAllUsers);

router.post('/new-user', createUser);
router.get('/user/:email', getUserByEmail);
router.get('/users/:name', getUsersByName);
router.put('/update/:id', updateUserById);
router.delete('/delete/:id', deleteUserById);



module.exports = router;
