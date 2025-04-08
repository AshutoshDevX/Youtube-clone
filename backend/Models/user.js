import mongoose from 'mongoose'


const user = new mongoose.Schema({
    channelName: {
        type: String,
        required: true,
        maxLength: 30,
        trim: true
    },
    name: {
        type: String,
        required: true,
        maxLength: 50,
        trim: true
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30,
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    profileUrl: {
        type: String,
    }

}, { timestamps: true })

const User = mongoose.model("User", user);

export default User;