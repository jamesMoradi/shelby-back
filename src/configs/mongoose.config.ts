import mongoose from "mongoose";

export const connectMongoose = () => {
    mongoose.connect(process.env.DB_URI!)
    .then(() => console.log('connected to db'))
    .catch(() => console.log('failed to connect to db'))
}