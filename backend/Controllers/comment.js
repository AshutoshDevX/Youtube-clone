import Comments from "../Models/comment.js";


export const addComment = async (req, res) => {
    try {
        const { videoId, comment } = req.body;

        const newComment = await Comments.create({ userId: req.userId, videoId, comment })
        res.json({
            newComment
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            msg: "Internal Server Error"
        })
    }
}


export const getComment = async (req, res) => {
    try {
        const id = req.params.id;
        const comments = await Comments.find({ videoId: id }).populate("userId", "profileUrl channelName userName name");
        res.json({
            comments
        })
    }
    catch (error) {
        console.log(err)
        res.status(500).json({
            msg: "Internal Server Error"
        })
    }
}