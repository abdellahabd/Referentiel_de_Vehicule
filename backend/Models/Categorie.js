import sequelize from "../Connection/database.js";
import { DataTypes } from "sequelize";
const Categorie = sequelize.define(
  "categorie",
  {},
  { createdAt: false, updatedAt: false }
);

export default Categorie;
