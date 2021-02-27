import express from "express";

import * as DocController from "../controllers/document";

export let docRouter = () => {
  const router = express.Router();

  router.get("/", DocController.getAll);

  router.get("/:id", DocController.get);

  router.post("/", DocController.create);

  router.put("/:id", DocController.update);

  router.delete("/:id", DocController.remove);

  return router;
};
