import express from 'express';
import cors from 'cors'
import './db/connect.js'
import userRouter from './Routes/user.js'
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/user', userRouter);



app.listen(3000, () => {
    console.log("server listening on port 3000")
})