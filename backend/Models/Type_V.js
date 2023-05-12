import sequelize from "../Connection/database.js";
import { DataTypes } from "sequelize";
const Type_V = sequelize.define(
  "type_V",
  {},
  { createdAt: false, updatedAt: false }
);

export default Type_V;
