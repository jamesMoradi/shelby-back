import mongoose from "mongoose";

export async function connectMongoose() {
    try {
    await mongoose.connect(process.env.DB_URI!)
    console.log("connected to db");
  } catch(err) {

    console.log('failed to connect to db');
  }
}