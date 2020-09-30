import express from "express";
import Project from "../models/project.js";

const router = express.Router();

router.createProject = ("/", (req, res, next) => {  
    const projectObject = req.body;
  delete projectObject._id;
    const project = new Project(
      req.files[1] !== undefined
        ? {
            ...projectObject,
            imageUrl: req.files[0].location,
            imageUrl1: req.files[1].location,
            imageUrl2: req.files[2].location,
          }
        : {
            ...projectObject,
            imageUrl: req.files[0].location,
          }
    );
    project
      .save()
      .then(() => res.status(201).json({ message: "Objet enregistré !" }))
      .catch((error) => res.status(400).json({ error }));
  });

router.getOneProject =
  ("/:id",
  (req, res, next) => {
        Project.findOne({ slug: req.params.id })
          .then((project) => res.status(200).json(project))
          .catch((error) => res.status(404).json({ error }));
  });

router.getAllProjects =
  ("/",
  (req, res) => {
    Project.find()
      .then((projects) => res.status(200).json(projects))
      .catch((error) => res.status(400).json({ error }));
  });


export default router;
