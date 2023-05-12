import express from "express";
import {
  Structer,
  Contrat,
  Vehicule,
  Transporteur,
} from "../Models/Models-index.js";
import { get_strcuters } from "../Controller/getSubStructers.js";
import { getTypeStr } from "../Controller/getTypeStr.js";
import { Op } from "sequelize";
import { getBranche } from "../Controller/get_branche.js";
const route = express.Router();

route.post("/addcontat", async (req, res) => {
  const str = req.session.user.Structerid;
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
    contrat.createVehicule({ car, type: "tiers" });
  });

  const strcuter = await Structer.findByPk(str);

  await strcuter.addContrat(contrat);
});

route.get("/getContracts", async (req, res) => {
  if (req.session.user) {
    const str = req.session.user.Structerid;

    const type = await getTypeStr(str);
    const Branche = await getBranche(str);

    const allstr = await get_strcuters(str, type);

    const contracts = await Contrat.findAll({
      where: {
        str: {
          [Op.in]: allstr,
        },
      },
    });
    res.json({ contracts: contracts, b: Branche });
  }
});

route.get("/getTransporteurs", async (req, res) => {
  const tr = await Transporteur.findAll();
  res.json(tr);
});

route.get("/getavenants/:id", async (req, res) => {
  const id_c = req.params.id;

  const contrat = await Contrat.findByPk(id_c);
  const avenants = await contrat.getAvenants();

  res.json(avenants);
});

route.post("/addavenant/:id", (req, res) => {});
export default route;

route.get("/getContract/:id", async (req, res) => {
  const id = req.params.id;
  const contrat = await Contrat.findByPk(id, { include: [Vehicule] });
  res.json(contrat);
});

route.get("/getcar/:id_c", async (req, res) => {
  const id_c = req.params.id_c;
  const contrat = await Contrat.findByPk(id_c);
  const cars = await contrat.getVehicules();
  // console.log(cars);
  res.json(cars);
});
