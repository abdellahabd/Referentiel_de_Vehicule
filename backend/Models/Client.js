import sequelize from "../Connection/database.js";
import { DataTypes } from "sequelize";
const Client = sequelize.define(
  "client",
  {},
  { createdAt: false, updatedAt: false }
);

export default Client;
