import express from "express";
import { Genre, Chauffeur, Modele, Structer } from "../Models/Models-index.js";
import { Op } from "sequelize";
import Relation_S_d from "../Models/Relation_Source_Distination.js";
import { get_strcuters } from "../Controller/getSubStructers.js";
import { getBranche } from "../Controller/get_branche.js";
import { getTypeStr } from "../Controller/getTypeStr.js";
const route = express.Router();

route.get("/getall", async (req, res, next) => {
  if (req.session.user) {
    const str = req.session.user.StructerCodeS;
    const type = await getTypeStr(str);
    const allstr = await get_strcuters(str, type);
    const chauffeur = await Chauffeur.findAll({
      include: [Structer],
      where: {
        StructerCodeS: {
          [Op.in]: allstr,
        },
      },
    });
    res.json(chauffeur);
  }
});

////

route.post("/ajoute", (req, res) => {
  Chauffeur.create(req.body)
    .then((car) => {
      res.json("done");
    })
    .catch((err) => {
      res.json({ error: err });
    });
});

route.get("/validate/:id", async (req, res) => {
  const id = req.params.id;

  await Chauffeur.update({ validite: true }, { where: { id_chf: id } });
  res.json("done");
});
route.get("/remove/:id", async (req, res) => {
  const id = req.params.id;
  await Chauffeur.destroy({ where: { id_chf: id } });
  res.json("done");
});
route.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  await Chauffeur.update(req.body, { where: { id_chf: id } });
  res.json("done");
});
route.post("/affictation/:id", async (req, res) => {
  const id = req.params.id;
  // console.log(req.body.str);
  await Chauffeur.update(
    { StructerCodeS: req.body.str },
    { where: { id_chf: id } }
  );
  res.json("done");
});

route.get("/get_tiers", async (req, res) => {
  //dirha ???????????????????????????

  const chf = await Chauffeur.findAll({
    where: { type: "tiers", validite: true },
  });
  // const f = await Relation_S_d.findAll({include:[Vehicule]});
  // console.log(f);
  res.json(chf);
});
export default route;
