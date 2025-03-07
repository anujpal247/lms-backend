import { config } from "dotenv";
config();

const ServerConfig = {
  PORT: process.env.PORT,
  FRONTEND_URL: process.env.FRONTEND_URL,
  MONGO_URI: process.env.MONGO_URI,
};

export default ServerConfig;
