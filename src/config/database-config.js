import mongoose from "mongoose";
import { ServerConfig } from "./index.js";

async function connectDB() {
  try {
    const response = await mongoose.connect(ServerConfig.MONGO_URI);
    return response.connection.host;
  } catch (error) {
    throw error;
  }
}

const DatabaseConfig = {
  connectDB,
};

export default DatabaseConfig;
