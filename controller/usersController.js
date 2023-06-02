const User = require('../model/User');

const getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch(err) {
      res.json({message: err});
    }
  };

  const createUser = async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone
    });
    try {
      const savedUser = await user.save();
      res.json(savedUser);
    } catch(err) {
      res.json({message: err});
    } 
  };
  
  const getUserByEmail = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.params.email });
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err });
    }
  };
  
  const getUsersByName = async (req, res) => {
    try {
      const users = await User.find({ name: req.params.name });
      if (users.length > 0) {
        res.json(users);
      } else {
        res.status(404).json({ message: 'No users found with this name' });
      }
    } catch (err) {
      res.status(500).json({ message: err });
    }
  };
  
  const updateUserById = async (req, res) => {
    const allowedFields = ['name', 'email', 'password', 'phone'];
    const updates = Object.keys(req.body);
    const isValidUpdate = updates.every((update) => allowedFields.includes(update));
  
    if (!isValidUpdate) {
      return res.status(400).json({ message: 'Invalid updates!' });
    }
  
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true, runValidators: true }
      );
      if (updatedUser) {
        res.json(updatedUser);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err });
    }
  };
  
  const deleteUserById = async (req, res) => {
    try {
      const deletedUser = await User.findOneAndDelete({ _id: req.params.id });
      if (deletedUser) {
        res.json(deletedUser);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err });
    }
  };
  
  module.exports = {
    getAllUsers,
    createUser,
    getUserByEmail,
    getUsersByName,
    updateUserById,
    deleteUserById
    };