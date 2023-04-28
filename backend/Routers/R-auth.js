import express from "express";
import { validationResult, body } from "express-validator";
import { User, Access } from "../Models/Models-index.js";
import bcypt from "bcryptjs";

const route = express.Router();

route.get("/login", async (req, res) => {
  if (req.session.user) {
    const user = await User.findOne({
      where: { id: req.session.user.id },
      include: [Access],
    });

    res.json({ user, error: false });
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

route.post(
  "/singup",

  body("email").isEmail().withMessage("enter a valide email"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ errors: errors.array() });
    } else {
      const email = req.body.email;
      const password = req.body.password;
      const name = req.body.name;
      User.create({ name: name, password: password, email: email });
      res.json("ok");
    }
  }
);
export default route;
