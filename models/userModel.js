const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: {
            value: true,
            message: "Name is required"
        }
    },
    username: {
        type: String,
        required: {
            value: true,
            message: "Username is required"
        },
        unique: true
    },
    email: {
        type: String,
        required: {
            value: true,
            message: "Email is required"
        },
        unique: true
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;