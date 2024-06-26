import express from "express";
import sequelize from "./Connection/database.js";
import bodyParser from "body-parser";
import cors from "cors";
import session from "express-session";
import cookie_parser from "cookie-parser";
import { craete } from "./Controller/create_Branch.js";
import { create_data } from "./Controller/create-data.js";
import {
  vehiculeRoute,
  authRoute,
  ContratRoute,
  AdminRoute,
  StructerRoute,
  ModeleRoute,
  ChauffeurRoute,
  RelationsRoute,
  ClientRoute,
} from "./Routers/Route_Index.js";

import { Vehicule, User, Structer, Access } from "./Models/Models-index.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookie_parser()); //to parse cockies from front-end
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

///configeration
app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: Date.now() + 60 * 60 * 24 * 3,
    },
  })
);

app.use(authRoute);

app.use("/admin", AdminRoute);

app.use(ContratRoute);

app.use("/modele", ModeleRoute);

app.use("/structer", StructerRoute);

app.use("/client", ClientRoute);

app.use("/relation", RelationsRoute);

app.use("/chauffeur", ChauffeurRoute);

app.use("/vehicule", vehiculeRoute);

sequelize.sync({ force: true }).then(async () => {
  await craete();
  await create_data();

  app.listen("2500");
});
