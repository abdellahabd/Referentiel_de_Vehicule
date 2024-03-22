import express from "express";
import {
  Structer,
  Contrat,
  Vehicule,
  Transporteur,
  Chauffeur,
  Relation_S_D,
} from "../Models/Models-index.js";
import { get_strcuters } from "../Controller/getSubStructers.js";
import { getTypeStr } from "../Controller/getTypeStr.js";
import { Op } from "sequelize";
import { getBranche } from "../Controller/get_branche.js";

const route = express.Router();

route.post("/addcontat", async (req, res) => {
  const str = req.session.user.StructerCodeS;

  const cars = req.body.infor.car;
  const contrat = await Contrat.create(req.body.Contrat);
  await contrat.createTransporteur(req.body.trons);
  cars.map(async (car) => {
    const data = await Vehicule.findOne({ Code_Viecule: car.id });
    await contrat.addVehicule(data);
  });

  const strcuter = await Structer.findByPk(str);

  await strcuter.addContrat(contrat);
});

route.get("/getContracts", async (req, res) => {
  if (req.session.user) {
    const str = req.session.user.StructerCodeS;
    const type = await getTypeStr(str);
    const Branche = await getBranche(str);
    const allstr = await get_strcuters(str, type);

    const currentdate = new Date();
    const after10 = new Date(currentdate.getTime() + 10 * 24 * 60 * 60 * 1000);
    const after45 = new Date(currentdate.getTime() + 45 * 24 * 60 * 60 * 1000);

    const exp = await Contrat.findAll({
      where: {
        [Op.and]: [
          {
            StructerCodeS: {
              [Op.in]: allstr,
            },
          },
          { Date_F: { [Op.lte]: currentdate } },
        ],
      },
    });
    const exp10 = await Contrat.findAll({
      where: {
        [Op.and]: [
          {
            StructerCodeS: {
              [Op.in]: allstr,
            },
          },
          { Date_F: { [Op.gt]: currentdate, [Op.lte]: after10 } },
        ],
      },
    });
    const exp45 = await Contrat.findAll({
      where: {
        [Op.and]: [
          {
            StructerCodeS: {
              [Op.in]: allstr,
            },
          },
          { Date_F: { [Op.gt]: after10, [Op.lte]: after45 } },
        ],
      },
    });

    const contracts = await Contrat.findAll({
      where: {
        StructerCodeS: {
          [Op.in]: allstr,
        },
      },
    });
    res.json({
      contracts: contracts,
      exp: exp,
      exp10: exp10,
      exp45,
      b: Branche,
    });
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

route.get("/counterWarning", async (req, res) => {
  if (req.session.user) {
    const str = req.session.user.StructerCodeS;
    const type = await getTypeStr(str);
    const Branche = await getBranche(str);
    const allstr = await get_strcuters(str, type);
    const currentdate = new Date();
    const after45 = new Date(currentdate.getTime() + 45 * 24 * 60 * 60 * 1000);

    const nmbr = await Contrat.count({
      where: {
        [Op.and]: [
          {
            StructerCodeS: {
              [Op.in]: allstr,
            },
          },
          { Date_F: { [Op.lte]: after45 } },
        ],
      },
    });
    res.json(nmbr);
  }
});
route.get("/getContract/:id", async (req, res) => {
  const id = req.params.id;
  const contrat = await Contrat.findOne({
    where: { Ref_Contrar: id },
    include: [Vehicule, Chauffeur, Relation_S_D, Transporteur, Structer],
  });
  res.json(contrat);
});

route.get("/validatecontract/:id", async (req, res) => {
  const id = req.params.id;

  await Contrat.update({ validite: true }, { where: { Ref_Contrar: id } });

  res.json("done");
});
route.get("/removecontract/:id", async (req, res) => {
  const id = req.params.id;
  await Contrat.destroy({ where: { Ref_Contrar: id } });
  res.json("done");
});

route.get("/getcar/:id_c", async (req, res) => {
  const id_c = req.params.id_c;
  const contrat = await Contrat.findByPk(id_c);
  const cars = await contrat.getVehicules();
  // console.log(cars);
  res.json(cars);
});
