import mongoose from 'mongoose';
import 'dotenv/config'
const db = mongoose.connection

db.on("connected", () => {
    console.log("database connected successfully")
})
db.on('disconnected', () => {
    console.log("database connection disconnected")
})

try {
    await mongoose.connect(process.env.database);
}
catch (err) {
    console.log(err);
}

