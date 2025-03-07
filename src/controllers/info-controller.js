import { StatusCodes } from "http-status-codes";
import { successResponse, errorResponse } from "../utils/common/index.js";

async function info(req, res) {
  successResponse.message = "api is live";
  return res.status(StatusCodes.OK).json(successResponse);
}

const infoControllers = { info };
export default infoControllers;
