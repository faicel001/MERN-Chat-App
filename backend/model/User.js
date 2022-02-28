const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    email: {
        required: true,
        type: String,
        lowercase: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String
    },
    coverPic: {
        type: String
    },
    followers: {
        type: Array,
        default: []
    },
    followins: {
        type: Array,
        default: []
    },
    descreption: {
        type: String,
        max: 50

    },
    city: {
        type: String,
        max: 50
    },
    isAdmin: {
        type: Boolean,
        default: false
    }

},
    { timestamps: true }
)

module.exports = User = mongoose.model("User", UserSchema)