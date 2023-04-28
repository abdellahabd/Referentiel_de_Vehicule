import express from "express";
import {
  Vehicule,
  Contrat,
  User,
  Access,
  Structer,
} from "../Models/Models-index.js";
const route = express.Router();

route.get("/getusers", async (req, res, next) => {
  const users = await User.findAll({ where: {}, include: [Access, Structer] });
  res.json(users);
});

route.post("/adduser", async (req, res) => {
  const userdata = req.body.user;
  const Accesses = req.body.rolles;

  const user = await User.create(userdata.userinfo);
  const structer = await Structer.findByPk(userdata.str);

  await structer.addUser(user);
  Accesses.map(async (access) => {
    const droit = Object.keys(access)[0];
    if (access[droit]) {
      console.log(typeof droit);
      const A = await Access.findOne({ where: { name: [droit] } });
      console.log(A);
      await user.addAccess(A);
    }
  });
});
export default route;
