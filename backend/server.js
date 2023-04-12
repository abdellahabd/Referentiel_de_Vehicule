import express from "express";
import sequelize from "./Connection/database.js";
import bodyParser from "body-parser";
import cors from "cors";
import { validationResult, body } from "express-validator";

import Vroute from "./Routers/VRoute.js";

import { login } from "./Models/login.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post(
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
      login.create({ name: name, password: password, email: email });
      res.json("ok");
    }
  }
);

app.use(Vroute);

sequelize.sync({ force: false }).then(app.listen("2500"));
