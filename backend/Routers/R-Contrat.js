import express from "express";
import { Vehicule, Contrat } from "../Models/Models-index.js";
const route = express.Router();

route.post("/addcontat", async (req, res) => {
  const contract = req.body.Contrat;
  const data_d = Date(contract.Date_D);
  const data_f = Date(contract.Date_f);
  const cars = req.body.cars;
  const contrat = await Contrat.create({
    Ref_Contrar: contract.numero,
    type: contract.type,
    validite: true,
    Date_Debut: data_d,
    Date_F: data_f,
  });
  cars.map((car) => {
    contrat.createVehicule(car);
  });
});

export default route;
