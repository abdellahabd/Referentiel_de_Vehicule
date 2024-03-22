import express from "express";
import { Structer, Contrat, Modele, Genre } from "../Models/Models-index.js";
// import from "../Controller/"
import { Op } from "sequelize";
const route = express.Router();

route.get("/getalls", async (req, res) => {
  const modeles = await Modele.findAll({ include: [Genre] });
  res.json(modeles);
});

route.post("/add", async (req, res) => {
  await Modele.create(req.body);
  res.json("done");
});

route.get("/getgenres", async (req, res) => {
  const genres = await Genre.findAll();
  res.json(genres);
});
export default route;

route.get("/validate/:id", async (req, res) => {
  const id = req.params.id;
  await Modele.update({ validite: true }, { where: { id_M: id } });
  res.json("done");
});

route.post("/update/:id", async (req, res) => {
  const id = req.params.id;
  await Modele.update(req.body, { where: { id_M: id } });

  res.json("done");
});

route.get("/remove/:id", async (req, res) => {
  const id = req.params.id;
  await Modele.destroy({ where: { id_M: id } });
  res.json("done");
});
