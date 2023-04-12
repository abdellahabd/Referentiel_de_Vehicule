import express from "express";
import { Vehicule } from "../Models/Vehicule.js";
const route = express.Router();

route.get("/vehicule", async (req, res, next) => {
  // const c = await Vehicule.create({
  //   Cod_Viecule: 3476,
  //   Matricule: 34567,
  //   state: "asdfg",
  // });
  const car = await Vehicule.findAll();
  res.json({ cars: car });
});

export default route;
