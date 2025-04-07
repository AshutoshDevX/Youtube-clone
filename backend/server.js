import express from 'express';

const app = express();

app.get("/", (req, res) => {
    console.log("Server is running Successfully")
    res.send("First api")
})


app.listen(3000, () => {
    console.log("server listening on port 3000")
})