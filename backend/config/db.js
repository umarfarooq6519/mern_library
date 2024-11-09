import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected:", conn.connection.host);
  } catch (e) {
    console.log("Error:", e.message);
    process.exit(1); // code 1 means failure, 0 means success
  }
};
