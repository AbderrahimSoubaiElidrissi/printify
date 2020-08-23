import { Router } from "express";

import { userRouter } from "./user";
import auth from "./auth";

export let apiRouter = () => {
  const router = Router();


  router.use("/auth", auth);
  router.use("/users", userRouter());

  return router;
};
