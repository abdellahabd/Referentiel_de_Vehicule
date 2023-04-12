import sequelize from "../Connection/database.js";
import { DataTypes } from "sequelize";
export const login = sequelize.define("Login", {
  id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
  name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
});
