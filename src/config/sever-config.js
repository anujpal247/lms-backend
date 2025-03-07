import { config } from "dotenv";
config();

const ServerConfig = {
  PORT: process.env.PORT,
  FRONTEND_URL: process.env.FRONTEND_URL,
};

export default ServerConfig;
