import Video from "../Models/video.js";
import { z } from 'zod';
const videoBody = z.object({
    title: z.string(),
    description: z.string(),
    videoUrl: z.string().url(),
    thumbnailUrl: z.string().url(),
    like: z.number(),
    dislike: z.number()
})
export const uploadVideo = async (req, res) => {
    try {
        const { title, description, videoUrl, thumbnailUrl, tags, like, dislike, views } = req.body;

        const { success } = videoBody.safeParse(req.body);

        if (!success) {
            return res.status(411).json({
                msg: "Incorrect Inputs"
            })
        }


        const video = await Video.create({
            userId: req.userId,
            title,
            description,
            videoUrl,
            thumbnailUrl,
            tags,
            like,
            dislike,
            views
        })


        res.status(201).json({
            success: "true",
        })

    }
    catch (error) {
        console.log(error)
        res.status(500).json({

            error: "Internal server error"
        })
    }
}




export const getAllVideo = async (req, res) => {

    try {
        const allVideos = await Video.find().populate('userId', "channelName profileUrl userName createdAt name")

        res.status(200).json({
            success: true,
            allVideos
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            msg: "Internal Server Error"
        })
    }

}


export const getVideo = async (req, res) => {
    try {
        const videoId = req.params.id;

        const video = await Video.findById(videoId).populate("userId", "channelName profileUrl userName createdAt name")
        res.json({
            success: true,
            video
        })

    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const getAllVideosByUserId = async (req, res) => {
    try {
        let userId = req.params.id;
        const video = await Video.find({ userId }).populate("userId", "channelName profileUrl createdAt name");
        res.json({
            success: "true",
            video
        })
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}