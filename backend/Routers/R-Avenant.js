import express from "express";
import { validationResult, body } from "express-validator";
import { User, Contrat } from "../Models/Models-index.js";

const route = express.Router();

route.post("/ajouteAvenant/:idContrac", async (req, res) => {
  const id_contract = req.params.idContrac;
  const contrat = await Contrat.findByPk(id_contract);

  console.log(contrat);
});
