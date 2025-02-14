
import mongoose from "mongoose";

async function connectDB() {
  try {
    // Check if the connection is already established
    if (mongoose.connections[0].readyState) return;
    mongoose.set("strictQuery", false);

    const dbUrl = process.env.MONGO_URI;
    if (!dbUrl) {
      throw new Error("MONGODB_URI is not defined in environment variables.");
    }

    // Try connecting to the MongoDB server
    await mongoose.connect(dbUrl, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("you're Connected to DB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

export default connectDB;
