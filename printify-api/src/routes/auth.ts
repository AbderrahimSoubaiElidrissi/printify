import { Router } from "express";
import AuthController from "../controllers/auth";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();
router.get("/me", [checkJwt], AuthController.me);

router.post("/login", AuthController.login);

router.post("/register", AuthController.register);

router.post("/change-password", [checkJwt], AuthController.changePassword);

export default router;