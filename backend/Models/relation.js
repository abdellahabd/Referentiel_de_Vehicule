import sequelize from "../Connection/database.js";
import { DataTypes } from "sequelize";
const relation = sequelize.define(
  "relation",
  {},
  { createdAt: false, updatedAt: false }
);

export default relation;
