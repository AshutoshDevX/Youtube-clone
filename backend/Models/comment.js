import mongoose from 'mongoose';


const comments = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    videoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
        required: true
    },
    comment: {
        type: String,
        default: null,
        maxLength: 100,
        required: true
    }
}, { timeStamps: true })

const Comments = mongoose.model("Comments", comments);

export default Comments;