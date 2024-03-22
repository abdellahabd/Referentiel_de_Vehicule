import express from "express";
import bcrypt from "bcryptjs";
import { Op } from "sequelize";
import { getBranche } from "../Controller/get_branche.js";
import {
  Vehicule,
  Contrat,
  User,
  Access,
  Structer,
} from "../Models/Models-index.js";
const route = express.Router();

route.get("/getusers", async (req, res, next) => {
  if (req.session.user) {
    const str = req.session.user.StructerCodeS;

    const users = await User.findAll({
      // where: { name: { [Op.ne]: "admin" } },
      include: [Access, Structer],
    });

    const Branche = await getBranche(str);

    res.json({ users: users, b: Branche });
  }
});
route.get("/getone/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id, { include: [Access] });

  const k1 = await Access.findByPk(1);
  const ishave0 = await user.hasAccess(k1);
  const k2 = await Access.findByPk(2);
  const ishave1 = await user.hasAccess(k2);
  const k3 = await Access.findByPk(3);
  const ishave2 = await user.hasAccess(k3);
  const k4 = await Access.findByPk(4);
  const ishave3 = await user.hasAccess(k4);
  const k5 = await Access.findByPk(5);
  const ishave4 = await user.hasAccess(k5);
  const k6 = await Access.findByPk(6);
  const ishave5 = await user.hasAccess(k6);
  const k7 = await Access.findByPk(7);
  const ishave6 = await user.hasAccess(k7);
  const k8 = await Access.findByPk(8);
  const ishave7 = await user.hasAccess(k8);
  const k9 = await Access.findByPk(9);
  const ishave8 = await user.hasAccess(k9);
  const k10 = await Access.findByPk(10);
  const ishave9 = await user.hasAccess(k10);
  const k11 = await Access.findByPk(11);
  const ishave10 = await user.hasAccess(k11);
  const k12 = await Access.findByPk(12);
  const ishave11 = await user.hasAccess(k12);
  const k13 = await Access.findByPk(13);
  const ishave12 = await user.hasAccess(k13);
  const k14 = await Access.findByPk(14);
  const ishave13 = await user.hasAccess(k14);
  const k15 = await Access.findByPk(15);
  const ishave14 = await user.hasAccess(k15);
  const k16 = await Access.findByPk(16);
  const ishave15 = await user.hasAccess(k16);
  const k17 = await Access.findByPk(17);
  const ishave16 = await user.hasAccess(k17);
  const k18 = await Access.findByPk(18);
  const ishave17 = await user.hasAccess(k18);
  const k19 = await Access.findByPk(19);
  const ishave18 = await user.hasAccess(k19);
  const k20 = await Access.findByPk(20);
  const ishave19 = await user.hasAccess(k20);
  const k21 = await Access.findByPk(21);
  const ishave20 = await user.hasAccess(k21);
  const k22 = await Access.findByPk(22);
  const ishave21 = await user.hasAccess(k22);
  const k23 = await Access.findByPk(23);
  const ishave22 = await user.hasAccess(k23);
  const k24 = await Access.findByPk(24);
  const ishave23 = await user.hasAccess(k24);
  const k25 = await Access.findByPk(25);
  const ishave24 = await user.hasAccess(k25);
  const k26 = await Access.findByPk(26);
  const ishave25 = await user.hasAccess(k26);
  const k27 = await Access.findByPk(27);
  const ishave26 = await user.hasAccess(k27);
  const k28 = await Access.findByPk(28);
  const ishave27 = await user.hasAccess(k28);
  const k29 = await Access.findByPk(29);
  const ishave28 = await user.hasAccess(k29);
  const k30 = await Access.findByPk(30);
  const ishave29 = await user.hasAccess(k30);
  const k31 = await Access.findByPk(31);
  const ishave30 = await user.hasAccess(k31);
  const k32 = await Access.findByPk(32);
  const ishave31 = await user.hasAccess(k32);

  const Accesses = {
    car: [ishave0, ishave1, ishave2, ishave3, ishave4, ishave5],
    Contrat: [ishave6, ishave7, ishave8, ishave9, ishave10, ishave11],
    user: [ishave12, ishave13, ishave14, ishave15, ishave16],
    Modele: [ishave17, ishave18, ishave19, ishave20, ishave21],
    chf: [ishave22, ishave23, ishave24, ishave25, ishave26],
    relation: [ishave27, ishave28, ishave29, ishave30, ishave31],
  };
  res.json({ user: user, Accesses: Accesses });
});

route.post("/adduser", async (req, res) => {
  const userdata = req.body.user;
  const Accesses = req.body.rolles;
  const user = await User.create(userdata);

  console.log(userdata);
  console.log(Accesses);
  if (Accesses.car[0]) {
    const role = await Access.findByPk(1);
    await user.addAccess(role);
  }
  if (Accesses.car[1]) {
    const role = await Access.findByPk(2);
    await user.addAccess(role);
  }
  if (Accesses.car[2]) {
    const role = await Access.findByPk(3);
    await user.addAccess(role);
  }
  if (Accesses.car[3]) {
    const role = await Access.findByPk(4);
    await user.addAccess(role);
  }
  if (Accesses.car[4]) {
    const role = await Access.findByPk(5);
    await user.addAccess(role);
  }
  if (Accesses.car[5]) {
    const role = await Access.findByPk(6);
    await user.addAccess(role);
  }
  ///////////////////////////
  if (Accesses.Contrat[0]) {
    const role = await Access.findByPk(7);
    await user.addAccess(role);
  }
  if (Accesses.Contrat[1]) {
    const role = await Access.findByPk(8);
    await user.addAccess(role);
  }
  if (Accesses.Contrat[2]) {
    const role = await Access.findByPk(9);
    await user.addAccess(role);
  }
  if (Accesses.Contrat[3]) {
    const role = await Access.findByPk(10);
    await user.addAccess(role);
  }
  if (Accesses.Contrat[4]) {
    const role = await Access.findByPk(11);
    await user.addAccess(role);
  }
  if (Accesses.Contrat[5]) {
    const role = await Access.findByPk(12);
    await user.addAccess(role);
  }
  // ///////////////////////////
  if (Accesses.user[0]) {
    const role = await Access.findByPk(13);
    await user.addAccess(role);
  }
  if (Accesses.user[1]) {
    const role = await Access.findByPk(14);
    await user.addAccess(role);
  }
  if (Accesses.user[2]) {
    const role = await Access.findByPk(15);
    await user.addAccess(role);
  }
  if (Accesses.user[3]) {
    const role = await Access.findByPk(16);
    await user.addAccess(role);
  }
  if (Accesses.user[4]) {
    const role = await Access.findByPk(17);
    await user.addAccess(role);
  }
  // ///////////////////////////
  if (Accesses.Modele[0]) {
    const role = await Access.findByPk(18);
    await user.addAccess(role);
  }
  if (Accesses.Modele[1]) {
    const role = await Access.findByPk(19);
    await user.addAccess(role);
  }
  if (Accesses.Modele[2]) {
    const role = await Access.findByPk(20);
    await user.addAccess(role);
  }
  if (Accesses.Modele[3]) {
    const role = await Access.findByPk(21);
    await user.addAccess(role);
  }
  if (Accesses.Modele[4]) {
    const role = await Access.findByPk(22);
    await user.addAccess(role);
  }
  // ///////////////////////////
  if (Accesses.chf[0]) {
    const role = await Access.findByPk(23);
    await user.addAccess(role);
  }
  if (Accesses.chf[1]) {
    const role = await Access.findByPk(24);
    await user.addAccess(role);
  }
  if (Accesses.chf[2]) {
    const role = await Access.findByPk(25);
    await user.addAccess(role);
  }
  if (Accesses.chf[3]) {
    const role = await Access.findByPk(26);
    await user.addAccess(role);
  }
  if (Accesses.chf[4]) {
    const role = await Access.findByPk(27);
    await user.addAccess(role);
  }
  // ///////////////////////////
  if (Accesses.relation[0]) {
    const role = await Access.findByPk(28);
    await user.addAccess(role);
  }
  if (Accesses.relation[1]) {
    const role = await Access.findByPk(29);
    await user.addAccess(role);
  }
  if (Accesses.relation[2]) {
    const role = await Access.findByPk(30);
    await user.addAccess(role);
  }
  if (Accesses.relation[3]) {
    const role = await Access.findByPk(31);
    await user.addAccess(role);
  }
  if (Accesses.relation[4]) {
    const role = await Access.findByPk(32);
    await user.addAccess(role);
  }

  // const passhached = await bcrypt.hash(userdata.userinfo.password, 10);

  // const user = await User.create({
  //   ...userdata.userinfo,
  //   password: passhached,
  // });

  // const structer = await Structer.findByPk(userdata.str);

  // await structer.addUser(user);

  // Accesses.map(async (access) => {
  //   const droit = Object.keys(access)[0];
  //   if (access[droit]) {
  //     const A = await Access.findOne({ where: { name: [droit] } });

  //     await user.addAccess(A);
  //   }
  // });

  res.json("success");
});

route.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const userdata = req.body.user;
  const Accesses = req.body.rolles;
  const user = await User.findByPk(id);
  await User.update(userdata, { where: { id: id } });

  const k1 = await Access.findByPk(1);
  const k2 = await Access.findByPk(2);
  const k3 = await Access.findByPk(3);
  const k4 = await Access.findByPk(4);
  const k5 = await Access.findByPk(5);
  const k6 = await Access.findByPk(6);
  const k7 = await Access.findByPk(7);
  const k8 = await Access.findByPk(8);
  const k9 = await Access.findByPk(9);
  const k10 = await Access.findByPk(10);
  const k11 = await Access.findByPk(11);
  const k12 = await Access.findByPk(12);
  const k13 = await Access.findByPk(13);
  const k14 = await Access.findByPk(14);
  const k15 = await Access.findByPk(15);
  const k16 = await Access.findByPk(16);
  const k17 = await Access.findByPk(17);
  const k18 = await Access.findByPk(18);
  const k19 = await Access.findByPk(19);
  const k20 = await Access.findByPk(20);
  const k21 = await Access.findByPk(21);
  const k22 = await Access.findByPk(22);
  const k23 = await Access.findByPk(23);
  const k24 = await Access.findByPk(24);
  const k25 = await Access.findByPk(25);
  const k26 = await Access.findByPk(26);
  const k27 = await Access.findByPk(27);
  const k28 = await Access.findByPk(28);
  const k29 = await Access.findByPk(29);
  const k30 = await Access.findByPk(30);
  const k31 = await Access.findByPk(31);
  const k32 = await Access.findByPk(32);

  // const ishave0 = await user.hasAccess(k1);
  // const ishave1 = await user.hasAccess(k2);
  // const ishave2 = await user.hasAccess(k3);
  // const ishave3 = await user.hasAccess(k4);
  // const ishave4 = await user.hasAccess(k5);
  // const ishave5 = await user.hasAccess(k6);
  // const ishave6 = await user.hasAccess(k7);
  // const ishave7 = await user.hasAccess(k8);
  // const ishave8 = await user.hasAccess(k9);
  // const ishave9 = await user.hasAccess(k10);
  // const ishave10 = await user.hasAccess(k11);
  // const ishave11 = await user.hasAccess(k12);
  // const ishave12 = await user.hasAccess(k13);
  // const ishave13 = await user.hasAccess(k14);
  // const ishave14 = await user.hasAccess(k15);
  // const ishave15 = await user.hasAccess(k16);
  // const ishave16 = await user.hasAccess(k17);
  // const ishave17 = await user.hasAccess(k18);
  // const ishave18 = await user.hasAccess(k19);
  // const ishave19 = await user.hasAccess(k20);
  // const ishave20 = await user.hasAccess(k21);
  // const ishave21 = await user.hasAccess(k22);
  // const ishave22 = await user.hasAccess(k23);
  // const ishave23 = await user.hasAccess(k24);
  // const ishave24 = await user.hasAccess(k25);
  // const ishave25 = await user.hasAccess(k26);
  // const ishave26 = await user.hasAccess(k27);
  // const ishave27 = await user.hasAccess(k28);
  // const ishave28 = await user.hasAccess(k29);
  // const ishave29 = await user.hasAccess(k30);
  // const ishave30 = await user.hasAccess(k31);
  // const ishave31 = await user.hasAccess(k32);

  if (Accesses.car[0]) {
    await user.addAccess(k1);
  } else {
    await user.removeAccess(k1);
  }
  if (Accesses.car[1]) {
    await user.addAccess(k2);
  } else {
    await user.removeAccess(k2);
  }
  if (Accesses.car[2]) {
    await user.addAccess(k3);
  } else {
    await user.removeAccess(k3);
  }
  if (Accesses.car[3]) {
    await user.addAccess(k4);
  } else {
    await user.removeAccess(k4);
  }
  if (Accesses.car[4]) {
    await user.addAccess(k5);
  } else {
    await user.removeAccess(k5);
  }
  if (Accesses.car[5]) {
    await user.addAccess(k6);
  } else {
    await user.removeAccess(k6);
  }
  ///////////////////////////
  if (Accesses.Contrat[0]) {
    await user.addAccess(k7);
  } else {
    await user.removeAccess(k7);
  }
  if (Accesses.Contrat[1]) {
    await user.addAccess(k8);
  } else {
    await user.removeAccess(k8);
  }
  if (Accesses.Contrat[2]) {
    await user.addAccess(k9);
  } else {
    await user.removeAccess(k9);
  }
  if (Accesses.Contrat[3]) {
    await user.addAccess(k10);
  } else {
    await user.removeAccess(k10);
  }
  if (Accesses.Contrat[4]) {
    await user.addAccess(k11);
  } else {
    await user.removeAccess(k11);
  }
  if (Accesses.Contrat[5]) {
    await user.addAccess(k12);
  } else {
    await user.removeAccess(k12);
  }
  // ///////////////////////////
  if (Accesses.user[0]) {
    await user.addAccess(k13);
  } else {
    await user.removeAccess(k13);
  }
  if (Accesses.user[1]) {
    await user.addAccess(k14);
  } else {
    await user.removeAccess(k14);
  }
  if (Accesses.user[2]) {
    await user.addAccess(k15);
  } else {
    await user.removeAccess(k15);
  }
  if (Accesses.user[3]) {
    await user.addAccess(k16);
  } else {
    await user.removeAccess(k16);
  }
  if (Accesses.user[4]) {
    await user.addAccess(k17);
  } else {
    await user.removeAccess(k17);
  }
  // ///////////////////////////
  if (Accesses.Modele[0]) {
    await user.addAccess(k18);
  } else {
    await user.removeAccess(k18);
  }
  if (Accesses.Modele[1]) {
    await user.addAccess(k19);
  } else {
    await user.removeAccess(k19);
  }
  if (Accesses.Modele[2]) {
    await user.addAccess(k20);
  } else {
    await user.removeAccess(k20);
  }
  if (Accesses.Modele[3]) {
    await user.addAccess(k21);
  } else {
    await user.removeAccess(k21);
  }
  if (Accesses.Modele[4]) {
    await user.addAccess(k22);
  } else {
    await user.removeAccess(k22);
  }
  // ///////////////////////////
  if (Accesses.chf[0]) {
    await user.addAccess(k23);
  } else {
    await user.removeAccess(k23);
  }
  if (Accesses.chf[1]) {
    await user.addAccess(k24);
  } else {
    await user.removeAccess(k24);
  }
  if (Accesses.chf[2]) {
    await user.addAccess(k25);
  } else {
    await user.removeAccess(k25);
  }
  if (Accesses.chf[3]) {
    await user.addAccess(k26);
  } else {
    await user.removeAccess(k26);
  }
  if (Accesses.chf[4]) {
    await user.addAccess(k27);
  } else {
    await user.removeAccess(k27);
  }
  // ///////////////////////////
  if (Accesses.relation[0]) {
    await user.addAccess(k28);
  } else {
    await user.removeAccess(k28);
  }
  if (Accesses.relation[1]) {
    await user.addAccess(k29);
  } else {
    await user.removeAccess(k29);
  }
  if (Accesses.relation[2]) {
    await user.addAccess(k30);
  } else {
    await user.removeAccess(k30);
  }
  if (Accesses.relation[3]) {
    await user.addAccess(k31);
  } else {
    await user.removeAccess(k31);
  }
  if (Accesses.relation[4]) {
    await user.addAccess(k32);
  } else {
    await user.removeAccess(k32);
  }

  res.json("success");
});

route.get("/validate/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findByPk(id);
  const passhached = await bcrypt.hash(user.password, 10);
  user.password = passhached;
  user.validite = true;
  user.save();
  // await User.update({ validite: true ,pass }, { where: { id: id } });
  res.json("done");
});

route.get("/remove/:id", async (req, res) => {
  const id = req.params.id;
  await User.destroy({ where: { id: id } });
  res.json("done");
});

export default route;
