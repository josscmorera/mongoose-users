const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
    _id: {type: String, default: () => uuidv4()},
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true, maxlength: 320, trim: true, lowercase: true},
    password: {type : String, required: true, minlength: 8, maxlength: 50},
    phone: {type: Number, minlength: 10, maxlength: 10},
    createAt: {type: Date, default: Date.now}
});

const User = mongoose.model('User', userSchema);
module.exports = User;