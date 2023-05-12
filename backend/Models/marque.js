import sequelize from "../Connection/database.js";
import { DataTypes } from "sequelize";
const Marque = sequelize.define(
  "marque",
  {},
  { createdAt: false, updatedAt: false }
);

export default Marque;
