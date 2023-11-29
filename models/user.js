const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.set("timestamps", false);
userSchema.plugin(passportLocalMongoose);

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;