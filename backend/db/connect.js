import mongoose from 'mongoose';

const db = mongoose.connection

db.on("connected", () => {
    console.log("database connected successfully")
})
db.on('disconnected', () => {
    console.log("database connection disconnected")
})

try {
    await mongoose.connect("mongodb+srv://admin:Ashutosh123@cluster1.27bkq.mongodb.net/youtube-clone");
}
catch (err) {
    console.log(err);
}

