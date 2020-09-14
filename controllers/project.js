import express from "express";
import Project from "../models/project.js";

const router = express.Router();

router.createProject = ("/", (req, res, next) => {
    const projectObject = req.body;
    delete projectObject._id;
    const project = new Project({
      ...projectObject,
      imageUrl: `${req.protocol}://${req.get("host")}/images/${
        req.files[0].filename
      }`,
      imageUrl1: `${req.protocol}://${req.get("host")}/images/${
        req.files[1].filename
      }`,
      imageUrl2: `${req.protocol}://${req.get("host")}/images/${
        req.files[2].filename
      }`,
      imageUrl3: `${req.protocol}://${req.get("host")}/images/${
        req.files[3].filename
      }`,
    });
    project
      .save()
      .then(() => res.status(201).json({ message: "Objet enregistré !" }))
      .catch((error) => res.status(400).json({ error }));
  });

router.getOneProject =
  ("/:id",
  (req, res, next) => {
    Proejct.findOne({ _id: req.params.id })
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
