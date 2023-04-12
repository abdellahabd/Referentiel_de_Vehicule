import sequelize from "../Connection/database.js";
import { DataTypes } from "sequelize";
export const Vehicule = sequelize.define("Vehicule", {
  Cod_Viecule: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    primaryKey: true,
  },
  Matricule: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    values: [
      "immobilise",
      "en marche",
      "en instance de reforme",
      "reforme",
      "liquide",
    ],
  },
});
