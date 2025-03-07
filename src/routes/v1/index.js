import infoRoutes from "./info-routes.js";
import { Router } from "express";

const router = Router();

router.use("/info", infoRoutes);

export default router;
