import sequelize from "../Connection/database.js";
import { DataTypes } from "sequelize";

const User = sequelize.define(
  "User",
  {
    id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    prenom: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    validite: { type: DataTypes.BOOLEAN, defaultValue: false },
    passwordLenght: { type: DataTypes.INTEGER },
  },
  { createdAt: false, updatedAt: false }
);
export default User;
