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
    const str = req.session.user.Structerid;
    const users = await User.findAll({
      where: { name: { [Op.ne]: "admin" } },
      include: [Access, Structer],
    });
    const Branche = await getBranche(str);
    // const branche = await getBranche();
    res.json({ users: users, b: Branche });
  }
});

route.post("/adduser", async (req, res) => {
  const userdata = req.body.user;
  const Accesses = req.body.rolles;
  const passhached = await bcrypt.hash(userdata.userinfo.password, 10);

  const user = await User.create({
    ...userdata.userinfo,
    password: passhached,
  });

  const structer = await Structer.findByPk(userdata.str);

  await structer.addUser(user);

  Accesses.map(async (access) => {
    const droit = Object.keys(access)[0];
    if (access[droit]) {
      const A = await Access.findOne({ where: { name: [droit] } });

      await user.addAccess(A);
    }
  });

  res.json("success");
});
export default route;
