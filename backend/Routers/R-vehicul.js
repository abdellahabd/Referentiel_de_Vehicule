import express from "express";
import { Genre, Vehicule, Modele } from "../Models/Models-index.js";
const route = express.Router();

route.get("/getall", async (req, res, next) => {
  const car = await Vehicule.findAll({ include: [Genre] });
  // console.log(Vehicule.prototype);

  res.json({ cars: car });
});

////

route.post("/ajoute", (req, res) => {
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

route.get("/validate/:id", async (req, res) => {
  const id = req.params.id;

  await Vehicule.update({ validite: true }, { where: { Code_Viecule: id } });
});
route.get("/remove/:id", async (req, res) => {
  const id = req.params.id;
  await Vehicule.destroy({ where: { Code_Viecule: id } });
});
route.get("/update/:id", async (req, res) => {
  const id = req.params.id;
  await Vehicule.destroy({ where: { Code_Viecule: id } });
});

route.get("/getgenres", async (req, res) => {
  const genres = await Genre.findAll();
  res.json(genres);
});
export default route;
