import express from "express";
import { validationResult, body } from "express-validator";
import { User, Access } from "../Models/Models-index.js";

import bcypt from "bcryptjs";

const route = express.Router();

route.get("/login", async (req, res) => {
  if (req.session.user) {
    const user = await User.findOne({
      where: { id: req.session.user.id },
    });
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

    res.json({ user, Accesses: Accesses, error: false });
  } else {
    res.json("erroe");
  }
});

route.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email: email },
      include: [Access],
    });
    if (user) {
      const ismatch = await bcypt.compare(password, user.password);

      if (ismatch) {
        req.session.user = user;

        res.json({ user, error: false });
      } else {
        res.json({
          error: {
            msg: "password not currect",
            type: "passsword",
          },
        });
      }
    } else {
      res.json({ error: { msg: "user not Found", type: "email" } });
    }
  } catch (error) {
    console.log(error);
  }
});

route.get("/logout", (req, res) => {
  req.session.destroy();
  console.log("session delete");
  res.json();
});
// route.post(
//   "/singup",

//   body("email").isEmail().withMessage("enter a valide email"),
//   (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       res.json({ errors: errors.array() });
//     } else {
//       const email = req.body.email;
//       const password = req.body.password;
//       const name = req.body.name;
//       User.create({ name: name, password: password, email: email });
//       res.json("ok");
//     }
//   }
// );
export default route;
