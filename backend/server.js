import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import './db/connect.js'
import userRouter from './Routes/user.js'
import 'dotenv/config'
import videoRouter from './Routes/video.js'
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api/user', userRouter);

app.use("/api/video", videoRouter)

app.listen(process.env.PORT, () => {
    console.log("server listening on port 3000")
})