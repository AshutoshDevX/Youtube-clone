import express from 'express';
import './db/connect.js'
const app = express();

app.get("/", (req, res) => {
    res.send("First api")
})


app.listen(3000, () => {
    console.log("server listening on port 3000")
})