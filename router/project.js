import express from "express";
import multer from "../middlewares/multer-config.js";
import projectCtrl from "../controllers/project.js";

const router = express.Router();

router.get("/", projectCtrl.getAllProjects);
router.post("/", multer, projectCtrl.createProject);
router.get("/:id", projectCtrl.getOneProject);

export default router;
