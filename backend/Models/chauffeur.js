import sequelize from "../Connection/database.js";
import { DataTypes } from "sequelize";
const chauffeur = sequelize.define(
  "chauffeur",
  {
    id_chf: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
    nom: { type: DataTypes.STRING, allowNull: false },
    prenome: { type: DataTypes.STRING, allowNull: false },
    Matricule: { type: DataTypes.STRING, allowNull: false },
    age: { type: DataTypes.INTEGER, allowNull: false },
    validite: { type: DataTypes.BOOLEAN, defaultValue: false },
    // validite: { type: DataTypes.BOOLEAN, defaultValue: false },
    type: {
      type: DataTypes.STRING,
      values: ["Naftal", "tiers"],
      defaultValue: "Naftal",
    },
    etat: {
      type: DataTypes.STRING,
      allowNull: false,
      values: ["actif", "inactif", "en conge"],
    },
    numero: { type: DataTypes.STRING, allowNull: false },
    type_p: {
      type: DataTypes.STRING,
      allowNull: false,
      values: ["Vl", "Ca", "Cr"],
    },
  },
  { createdAt: false, updatedAt: false }
);

export default chauffeur;
