import express from "express";
import { Vehicule } from "../Models/Models-index.js";
const route = express.Router();

route.get("/vehicules", async (req, res, next) => {
  // console.log(req.session);
  const car = await Vehicule.findAll();
  res.json({ cars: car });
});

////

route.post("/ajoutVehicule", (req, res) => {
  console.log(req.body);
  Vehicule.create({
    Code_Viecule: req.body.Code_Viecule,
    Matricule: req.body.Matricule,
    state: req.body.state,
  })
    .then((car) => {
      res.json("succes");
    })
    .catch((err) => {
      res.json({ error: err });
    });
});

export default route;
