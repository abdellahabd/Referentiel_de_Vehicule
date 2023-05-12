import sequelize from "../Connection/database.js";
import { DataTypes } from "sequelize";
const Vehicule = sequelize.define(
  "vehicule",
  {
    Code_Viecule: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
    Matricule: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    validite: { type: DataTypes.BOOLEAN, defaultValue: false },
    type: {
      type: DataTypes.STRING,
      values: ["propre", "tiers"],
      defaultValue: "propre",
    },
    state: {
      type: DataTypes.STRING,
      defaultValue: "En attente d'affectation",
      values: [
        "En attente d'affectation",
        "immobilise",
        "en marche",
        "en instance de reforme",
        "reforme",
        "liquide",
      ],
    },
  },
  { createdAt: false, updatedAt: false }
);

export default Vehicule;
