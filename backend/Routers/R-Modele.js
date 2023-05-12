import express from "express";
import { Structer, Contrat, Modele } from "../Models/Models-index.js";
// import from "../Controller/"
import { Op } from "sequelize";
const route = express.Router();

route.get("/getmodeles", async (req, res) => {
  const modeles = await Modele.findAll();
  res.json(modeles);
});

route.post("/addmodele", async (req, res) => {
  await Modele.create(req.body);
});
export default route;
