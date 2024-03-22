import express, { Router } from "express";
import { Structer, Contrat } from "../Models/Models-index.js";
// import from "../Controller/"
import { Op } from "sequelize";
import { get_strcuters } from "../Controller/getSubStructers.js";
import { getTypeStr } from "../Controller/getTypeStr.js";
import Relation_S_D from "../Models/Relation_Source_Distination.js";
import sequelize from "../Connection/database.js";

const route = express.Router();

route.get("/getall", async (req, res) => {
  if (req.session.user) {
    try {
      const str = req.session.user.StructerCodeS;
      const type = await getTypeStr(str);
      const allstr = await get_strcuters(str, type);
      const relation = await Relation_S_D.findAll({
        having: {
          StructerCodeS: {
            [Op.in]: allstr,
          },
        },
      });
      res.json(relation);
    } catch (error) {
      console.log(error);
    }

    // const relation = await Relation.findAll({
    //   where: {
    //     StructerCodeS: {
    //       [Op.in]: allstr,
    //     },
    //   },
    // });
  }
});

route.post("/addone", async (req, res) => {
  if (req.session.user) {
    const str = req.session.user.StructerCodeS;
    const s = req.body.source;
    const d = req.body.distination;
    const Km = req.body.Km;
    const Pu = req.body.Pu;
    const strcuter = await Structer.findByPk(str);
    const relation = await strcuter.createRelation_S_D({
      Pu: Pu,
      km: Km,
    });
    const source = await Structer.findOne({ where: { CodeS: s } });
    const distination = await Structer.findOne({ where: { Designation: d } });

    // relation_s_d.setRelation(relation);
    relation.setDisnitaionStr(distination);
    relation.setSource(source);
    res.json("done");
  }
});
route.get("/getSourcs", async (req, res) => {
  if (req.session.user) {
    const str = req.session.user.StructerCodeS;
    console.log(str);
    const Sourc = await Relation_S_D.findAll({
      // attributes: [[sequelize.fn("DISTINCT", ""), "sourcid"]],
      attributes: ["sourcid"],
      where: { StructerCodeS: str },
      group: ["sourcid"],
    });
    // console.log(Sourc);
    // const sourc = await Relation_S_D.aggregate("sourcid", "DISTINCT", {
    //   plain: false,
    // });
    // console.log(sourc);
    res.json(Sourc);
  }
});
// route.post("/addSourc", async (req, res) => {
//   if (req.session.user) {
//     const str = req.session.user.StructerCodeS;
//     const s = req.body;
//     // const d = req.body.distination;
//     // const Km = req.body.Km;
//     // const Pu = req.body.Pu;
//     // const strcuter = await Structer.findByPk(str);
//     // const relation = await strcuter.createRelation();
//     // const source = await Structer.findOne({ where: { Designation: s } });
//     // console.log(source);
//     // const distination = await Structer.findOne({ where: { Designation: d } });
//     // // console.log(distination);
//     // const relation_s_d = await Relation_Source_Distination.create({
//     //   Pu: Pu,
//     //   km: Km,
//     // });
//     // relation_s_d.setRelation(relation);
//     // relation_s_d.setDisnitaionStr(distination);
//     // relation_s_d.setSource(source);
//     // res.json(relation);
//   }
// });

export default route;
