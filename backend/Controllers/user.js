import User from "../Models/user.js";
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const signUpBody = z.object({
    channelName: z.string(),
    name: z.string(),
    userName: z.string().email(),
    password: z.string().min(6),
    profileUrl: z.string().url().optional()
})

const signInBody = z.object({
    userName: z.string().email(),
    password: z.string()
})

export const userSignUp = async (req, res) => {
    try {
        const { channelName, name, userName, password, profileUrl } = req.body;

        const { success } = signUpBody.safeParse(req.body);
        if (!success) {
            res.status(411).json({
                msg: "incorrect inputs"
            })
        }

        const existingUser = await User.findOne({ userName });

        if (existingUser) {
            res.status(411).json({
                msg: "email already taken"
            })
        }

        const hashPass = await bcrypt.hash(password, 10);
        const user = await User.create({
            channelName,
            name,
            userName,
            password: hashPass,
            profileUrl
        })


        const userId = user._id;

        const token = jwt.sign({
            userId
        }, "mySecret", { expiresIn: "1d" });


        res.status(200).json({
            msg: "User Created Successfully",
            token
        })
    }
    catch (error) {
        res.status(500).json({
            msg: "Internal Server Error"
        })
    }

}


export const userSignIn = async (req, res) => {
    try {
        const { success } = signInBody.safeParse(req.body);

        if (!success) {
            return res.status(411).json({
                msg: "Incorrect Inputs"
            })
        }

        const { userName, password } = req.body;

        const user = await User.findOne({
            userName
        })

        if (user && await bcrypt.compare(password, user.password)) {
            const userId = user._id;
            const token = jwt.sign({ userId }, "mySecret", { expiresIn: "1d" });
            res.json({
                token: token
            })
            return;
        }
        else {
            res.status(400).json({
                msg: "Invalid Credentials"
            })
        }
    }
    catch (error) {
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

