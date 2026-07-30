import { Router } from "express";
import todoRoutes from "./todo.routes.js";
import authRoutes from "./auth.routes.js";
import profileRoutes from "./profile.routes.js";
const router = Router();


router.use("/auth", authRoutes);

router.use("/", todoRoutes);

router.use("/profile", profileRoutes);
export default router;