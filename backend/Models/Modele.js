import sequelize from "../Connection/database.js";
import { DataTypes } from "sequelize";
const Modele = sequelize.define(
  "modele",
  {
    id_M: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    moteur_Puossance: { type: DataTypes.STRING },
    moteur_type: { type: DataTypes.CHAR, values: ["V", "L"] },
    Cylindree: { type: DataTypes.STRING },
    BV_type: { type: DataTypes.STRING },
    BV_marque: { type: DataTypes.STRING },
    validite: { type: DataTypes.BOOLEAN, defaultValue: false },
  },

  { createdAt: false, updatedAt: false }
);

export default Modele;
