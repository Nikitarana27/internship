import express from "express";
import {getProjects,createProject,getProject,deleteProject,updateProject} from '../controllers/project.js';

const router = express.Router();

router.get("/projects",getProjects);
router.post("/project",createProject);
router.get("/project/:id",getProject);
router.delete("/deleteProject/:id",deleteProject);
router.put("/updateProject/:id",updateProject);


export default router;