import { Router } from "express";
import { infoControllers } from "../../controllers/index.js";

const router = Router();

router.get("/", infoControllers.info);

export default router;
