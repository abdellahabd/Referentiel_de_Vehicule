import express from "express";

import {
  Genre,
  Vehicule,
  Modele,
  Document_bord,
  Structer,
  Contrat,
  Con_veh,
} from "../Models/Models-index.js";
import Sequelize, { Op } from "sequelize";
import Relation_S_d from "../Models/Relation_Source_Distination.js";
import sequelize from "../Connection/database.js";

const route = express.Router();

route.get("/getparc", async (req, res, next) => {
  const car = await Vehicule.findAll({
    where: {
      state: {
        [Op.or]: ["immobilise", "en marche", "En attente d'affectation"],
      },
    },
    include: [Structer, { model: Modele, include: [Genre] }],
  });

  res.json({ cars: car });
});

route.get("/getReforme", async (req, res, next) => {
  const car = await Vehicule.findAll({
    where: {
      state: {
        [Op.or]: [
          "liquide",
          "en instance de reforme",
          "propose a la reforme",
          "reforme",
        ],
      },
    },
    include: [Structer, { model: Modele, include: [Genre] }],
  });

  res.json({ cars: car });
});

route.post("/updateDoc", async (req, res, next) => {
  const { Doc, name, id_car } = req.body;
  // console.log(Doc);
  // console.log(id_car);

  const target = new Date(Doc.date_Expiration);
  const currentDate = new Date();
  if (target > currentDate) {
    await Document_bord.update(
      { ...Doc, valid: true },
      {
        where: { [Op.and]: [{ nom: name }, { vehiculeId: id_car }] },
      }
    );
    const doc = await Document_bord.findAll({
      where: {
        [Op.and]: [
          { valid: { [Op.or]: [false, null] } },
          { vehiculeId: id_car },
        ],
      },
    });
    if (doc.length == 0) {
      await Vehicule.update({ validite_d: true }, { where: { id: id_car } });
    }
  } else {
    await Document_bord.update(
      { ...Doc, valid: false },
      {
        where: { [Op.and]: [{ nom: name }, { vehiculeId: id_car }] },
      }
    );
  }

  res.json("done");
});

route.get("/getone/:id", async (req, res, next) => {
  const { id } = req.params;
  const car = await Vehicule.findByPk(id, {
    include: [Document_bord, { model: Modele, include: [Genre] }],
  });

  res.json({ car: car });
});
////

route.post("/ajoute", async (req, res) => {
  console.log(req.body);
  Vehicule.create(req.body)
    .then((car) => {
      res.json("succes");
    })
    .catch((err) => {
      res.json({ error: err });
    });
});

route.get("/validate/:id", async (req, res) => {
  const id = req.params.id;

  await Vehicule.update({ validite: true }, { where: { id: id } });
  res.json("done");
});
route.get("/remove/:id", async (req, res) => {
  const id = req.params.id;
  await Vehicule.destroy({ where: { id: id } });
  res.json("done");
});
route.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  await Vehicule.update(req.body, { where: { id: id } });
});

route.get("/getgenres", async (req, res) => {
  const genres = await Genre.findAll();
  res.json(genres);
});

// route.get("/getgenre/:idv", async (req, res) => {
//   const id_v = req.params.idv;
//   const ve = await Vehicule.findOne({ where: { id: id_v }, include: [Genre] });

//   // const M = await Modele.getGenre();
//   // console.log(g);
//   res.json(ve.genre);
// });

route.get("/get_tiers", async (req, res) => {
  //dirha ???????????????????????????

  const vehicule = await Vehicule.findAll({
    where: {
      type: "tiers",
      validite: true,
      // id: {
      //   [Op.notIn]: sequelize.query("SELECT vehiculeId FROM con_veh", {
      //     type: Sequelize.QueryTypes.SELECT,
      //   }),
      // },
    },
    include: [{ model: Contrat }],
  });

  res.json(vehicule);
});
route.get("/countNotValidDoc", async (req, res) => {
  const Count = await Vehicule.count({ where: { validite_d: false } });
  res.json(Count);
});
export default route;
