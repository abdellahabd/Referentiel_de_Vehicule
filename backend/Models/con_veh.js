import sequelize from "../Connection/database.js";
import { DataTypes } from "sequelize";
const Con_veh = sequelize.define(
  "con_veh",
  {},
  { createdAt: false, updatedAt: false }
);

export default Con_veh;
