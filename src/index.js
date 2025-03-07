import express from "express";
import { StatusCodes } from "http-status-codes";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";

import { ServerConfig, DatabaseConfig } from "./config/index.js";
import { errorResponse } from "./utils/common/index.js";
import apiRoutes from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(cors({ origin: ServerConfig.FRONTEND_URL, credentials: true }));
app.use(morgan("dev"));

app.use("/api", apiRoutes);

app.all("*", (req, res) => {
  errorResponse.message = "404 OOPS!! Page not found";
  res.status(StatusCodes.NOT_FOUND).json(errorResponse);
});


DatabaseConfig.connectDB()
  .then((response) => {
    app.listen(ServerConfig.PORT, () => {
      console.log(`Database connected at host: ${response}`);
      console.log(`Server is runnig on port ${ServerConfig.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Database connection failed: `, error);
    process.exit(1);
  });
